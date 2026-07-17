import { useState } from "react";
import { SegmentedControl } from "@/components/SegmentedControl";
import { Card } from "@/components/Card";
import { momentsByAudience, type Audience } from "@/data/Home/moments";

export function MomentsExplorer() {
  const [audience, setAudience] = useState<Audience>("pf");
  const moments = momentsByAudience[audience];

  return (
    <div className="flex w-full flex-col items-center gap-2 lg:gap-8">
      <div className="sticky top-16 z-30 w-full bg-tertiary max-lg:py-3 lg:static lg:z-auto lg:bg-transparent lg:py-0">
        <SegmentedControl
          className="w-full"
          options={[
            { label: "Pessoa Física", value: "pf" },
            { label: "Pessoa Jurídica", value: "pj" },
          ]}
          value={audience}
          onChange={(value) => setAudience(value as Audience)}
        />
      </div>

      <div className="grid w-full gap-4 lg:grid-cols-2">
        {moments.map((moment, index) => (
          <Card
            key={moment.title}
            badge={String(index + 1).padStart(2, "0")}
            title={moment.title}
            description={moment.description}
            linkLabel={moment.linkLabel}
            href={moment.href}
          />
        ))}
      </div>
    </div>
  );
}
