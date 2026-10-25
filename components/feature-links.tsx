import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Feature = {
  label: string;
  href: string;
};

export default function FeatureLinks({ features }: { features: Feature[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {features.map((feature) => (
        <a
          key={feature.label}
          href={feature.href}
          className={cn(buttonVariants({ variant: "outline", size: "sm" }), "rounded-full")}
        >
          {feature.label}
        </a>
      ))}
    </div>
  );
}
