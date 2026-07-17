import type { APIRoute } from "astro";
import { Resend } from "resend";
import { render } from "@react-email/render";
import { z } from "zod";
import ContactEmail from "@/emails/template";
import { talentBankSubject } from "@/data/contact";

export const prerender = false;

const MAX_RESUME_SIZE = 2 * 1024 * 1024;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const contactSchema = z
  .object({
    name: z.string().trim().min(1, "Informe seu nome."),
    email: z
      .string()
      .trim()
      .min(1)
      .pipe(z.email({ message: "Informe um email válido." })),
    subject: z.string().trim().min(1, "Selecione um assunto."),
    message: z.string().trim().min(1, "Preencha a mensagem."),
    resumeFile: z
      .instanceof(File)
      .refine((file) => file.size <= MAX_RESUME_SIZE, "O currículo deve ter no máximo 2MB.")
      .nullable(),
  })
  .refine((data) => data.subject !== talentBankSubject || data.resumeFile !== null, {
    message: "Anexe seu currículo para participar do banco de talentos.",
    path: ["resumeFile"],
  });

async function isRecaptchaValid(token: FormDataEntryValue | null): Promise<boolean> {
  if (!token) return false;

  const params = new URLSearchParams({
    secret: import.meta.env.RECAPTCHA_SECRET_KEY,
    response: token.toString(),
  });

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });

  const result = await response.json();
  return result.success === true;
}

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();

  const resume = formData.get("resume");
  const recaptchaToken = formData.get("g-recaptcha-response");

  const parsed = contactSchema.safeParse({
    name: formData.get("name")?.toString(),
    email: formData.get("email")?.toString(),
    subject: formData.get("subject")?.toString(),
    message: formData.get("message")?.toString(),
    resumeFile: resume instanceof File && resume.size > 0 ? resume : null,
  });

  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? "Dados inválidos.";
    return new Response(JSON.stringify({ error: message }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { name, email, subject, message, resumeFile } = parsed.data;
  const messageLabel = resumeFile ? "Tipo de vaga desejada" : "Mensagem";

  if (!(await isRecaptchaValid(recaptchaToken))) {
    return new Response(JSON.stringify({ error: "Falha na verificação reCAPTCHA." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const attachments = resumeFile
      ? [
          {
            filename: resumeFile.name,
            content: Buffer.from(await resumeFile.arrayBuffer()),
          },
        ]
      : undefined;

    const date = new Date().toLocaleString("pt-BR", {
      dateStyle: "short",
      timeStyle: "short",
    });

    const html = await render(
      ContactEmail({ name, email, subject, message, date, hasResume: !!resumeFile })
    );

    const { error } = await resend.emails.send({
      from: import.meta.env.RESEND_FROM_EMAIL ?? "Site B.Barros <contato@bbarros.com.br>",
      to: import.meta.env.CONTACT_RECIPIENT_EMAIL,
      replyTo: email,
      subject: `SITE | Novo Contato: ${subject}`,
      text: `Nome: ${name}\nEmail: ${email}\nAssunto: ${subject}\n\n${messageLabel}:\n${message}`,
      html,
      attachments,
    });

    if (error) {
      console.error("Erro ao enviar email via Resend:", error);
      return new Response(JSON.stringify({ error: "Falha ao enviar mensagem." }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Erro inesperado ao enviar email:", error);
    return new Response(JSON.stringify({ error: "Falha ao enviar mensagem." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
