import { useState } from "react";
import { SegmentedControl } from "@/components/SegmentedControl";
import { Icon } from "@/components/Icon";
import { Checklist } from "@/components/Checklist";
import { developedSkills } from "@/data/Mentoring/developedSkills";
import { cn } from "@/utils/className";

export function DevelopedSkillsExplorer() {
  const [value, setValue] = useState(developedSkills[0].value);
  const [displayedValue, setDisplayedValue] = useState(developedSkills[0].value);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSkillChange = (newValue: string) => {
    if (newValue === value) return;

    setValue(newValue);
    setIsAnimating(true);

    setTimeout(() => {
      setDisplayedValue(newValue);
      setIsAnimating(false);
    }, 300);
  };

  const immediateSkill = developedSkills.find((item) => item.value === value) ?? developedSkills[0];
  const animatedSkill =
    developedSkills.find((item) => item.value === displayedValue) ?? developedSkills[0];

  return (
    <div className="flex w-full flex-col gap-4">
      <SegmentedControl
        className="w-auto md:w-full"
        secondary
        options={developedSkills.map((item) => ({ label: item.label, value: item.value }))}
        value={value}
        onChange={handleSkillChange}
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="flex flex-col gap-6 rounded-2xl bg-tertiary p-6 lg:p-8">
          <p className="leading-relaxed text-white">{immediateSkill.description}</p>
          <Checklist items={immediateSkill.items} />
        </div>

        <div className="max-lg:hidden relative flex h-full min-h-64 items-end overflow-hidden rounded-2xl bg-neutral-600 p-6">
          <div
            className={cn(
              "flex items-center gap-3 transition-all duration-300 ease-in-out",
              isAnimating ? "translate-y-16" : "translate-y-0"
            )}
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white text-black">
              <Icon name={animatedSkill.icon} size={20} />
            </span>
            <span className="font-heading text-2xl font-semibold text-white">
              {animatedSkill.label}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
