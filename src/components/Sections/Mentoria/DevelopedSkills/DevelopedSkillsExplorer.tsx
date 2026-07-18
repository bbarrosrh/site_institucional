import { useState } from "react";
import { SegmentedControl } from "@/components/SegmentedControl";
import { Icon } from "@/components/Icon";
import { Checklist } from "@/components/Checklist";
import { developedSkills, type DevelopedSkill } from "@/data/Mentoring/developedSkills";
import { cn } from "@/utils/className";

interface SkillTransition {
  skill: DevelopedSkill;
  direction: 1 | -1;
}

const iconClassName = cn(
  "relative text-white translate-y-12",
  "[mask-image:linear-gradient(to_bottom,black_0%,rgba(0,0,0,0.15)_100%)]",
  "[-webkit-mask-image:linear-gradient(to_bottom,black_0%,rgba(0,0,0,0.15)_100%)]"
);

export function DevelopedSkillsExplorer() {
  const [value, setValue] = useState(developedSkills[0].value);
  const [outgoing, setOutgoing] = useState<SkillTransition | null>(null);

  const handleSkillChange = (newValue: string) => {
    if (newValue === value) return;

    const oldIndex = developedSkills.findIndex((item) => item.value === value);
    const newIndex = developedSkills.findIndex((item) => item.value === newValue);
    const oldSkill = developedSkills[oldIndex];

    setOutgoing({ skill: oldSkill, direction: newIndex > oldIndex ? 1 : -1 });
    setValue(newValue);
  };

  const immediateSkill = developedSkills.find((item) => item.value === value) ?? developedSkills[0];

  return (
    <div className="flex w-full flex-col gap-4">
      <SegmentedControl
        className="w-auto md:w-full"
        secondary
        options={developedSkills.map((item) => ({
          label: item.label,
          value: item.value,
          badge: item.badge,
        }))}
        value={value}
        onChange={handleSkillChange}
      />

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="flex flex-col gap-6 rounded-2xl bg-tertiary p-6 lg:col-span-2 lg:p-8">
          <p className="leading-relaxed text-white">{immediateSkill.description}</p>
          <Checklist items={immediateSkill.items} />
        </div>

        <div className="max-lg:hidden relative h-full min-h-64 overflow-hidden rounded-2xl">
          {outgoing && (
            <div
              key={`${outgoing.skill.value}-out`}
              className={cn(
                "absolute inset-0 flex items-center justify-center",
                outgoing.skill.color,
                outgoing.direction === 1
                  ? "animate-slide-out-to-left"
                  : "animate-slide-out-to-right"
              )}
            >
              <div className="absolute inset-0 bg-black/50" />
              <Icon name={outgoing.skill.icon} size={300} className={iconClassName} />
            </div>
          )}

          <div
            key={immediateSkill.value}
            className={cn(
              "absolute inset-0 flex items-center justify-center",
              immediateSkill.color,
              outgoing &&
                (outgoing.direction === 1
                  ? "animate-slide-in-from-right"
                  : "animate-slide-in-from-left")
            )}
            onAnimationEnd={() => setOutgoing(null)}
          >
            <div className="absolute inset-0 bg-black/50" />
            <Icon name={immediateSkill.icon} size={300} className={iconClassName} />
          </div>
        </div>
      </div>
    </div>
  );
}
