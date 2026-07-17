import { Html, Section, Container, Text, Tailwind, Img, Head } from "@react-email/components";

interface Props {
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  hasResume: boolean;
}

export default function ContactEmail({ name, email, subject, message, date, hasResume }: Props) {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              primary: "#e2cb9c",
              secondary: "#a1162d",
              tertiary: "#1c1c1f",
            },
          },
        },
      }}
    >
      <Html>
        <Head />
        <Section className="bg-slate-50 py-8 px-4 font-sans">
          <Container className="bg-white rounded-xl w-full max-w-140 mx-auto overflow-hidden">
            <Section className="bg-secondary w-full p-4 ps-8">
              <Img
                src="https://i.ibb.co/VYqht1c2/Frame.png"
                width={150}
                alt="Logo"
                style={{ height: "auto" }}
              />
            </Section>

            <Section className="p-8">
              <Text className="text-secondary text-xl font-bold m-0 -mt-2 mb-4">
                Nova mensagem de contato
              </Text>

              <Text className="m-0 mb-1 text-sm text-slate-400 uppercase tracking-[0.04em]">
                Data
              </Text>

              <Text className="m-0 mb-5 text-base text-slate-700">{date}</Text>

              <Text className="m-0 mb-1 text-sm text-slate-400 uppercase tracking-[0.04em]">
                Nome
              </Text>
              <Text className="m-0 mb-5 text-base text-slate-700">{name}</Text>

              <Text className="m-0 mb-1 text-sm text-slate-400 uppercase tracking-[0.04em]">
                Email
              </Text>
              <Text className="m-0 mb-5 text-base text-slate-700">{email}</Text>

              <Text className="m-0 mb-1 text-sm text-slate-400 uppercase tracking-[0.04em]">
                Assunto
              </Text>
              <Text className="m-0 mb-5 text-base text-slate-700">{subject}</Text>

              <Text className="m-0 mb-2 text-sm text-slate-400 uppercase tracking-[0.04em]">
                {hasResume ? "Tipo de vaga desejada" : "Mensagem"}
              </Text>
              <div className="bg-slate-100 rounded-lg p-3 text-sm text-slate-700 leading-[1.4] whitespace-pre-wrap">
                {message}
              </div>

              {hasResume && (
                <div className="mt-5 p-3 rounded-lg border border-slate-200">
                  <Text className="m-0 text-[14px] font-bold text-slate-700">
                    📜 Currículo em anexo
                  </Text>
                  <Text className="mt-1 mb-0 text-[13px] text-slate-400">
                    Esta pessoa deseja entrar no banco de talentos.
                  </Text>
                </div>
              )}
            </Section>

            <Section className="bg-slate-100 p-4 border-slate-500">
              <Text className="m-0 text-[12px] text-slate-400 leading-relaxed">
                Enviado automaticamente pelo formulário de contato de bbarros.com.br.
              </Text>
            </Section>
          </Container>
        </Section>
      </Html>
    </Tailwind>
  );
}

ContactEmail.PreviewProps = {
  name: "João da Silva",
  email: "joao.silva@exemplo.com",
  subject: "Orçamento para novo projeto",
  message:
    "Olá, B. Barros! Tudo bem?\n\nAcompanho seu trabalho há um tempo e gostaria de solicitar um orçamento para o redesenho do site da minha empresa.\n\nFico no aguardo!",
  date: "15/07/2026 • 20:08",
  hasResume: true,
} as Props;
