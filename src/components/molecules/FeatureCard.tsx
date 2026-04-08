import { Icon } from "@/components/atoms/Icon";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  iconBgClass?: string;
  iconTextClass?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  iconBgClass = "bg-primary-container",
  iconTextClass = "text-primary",
}: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className={`w-20 h-20 ${iconBgClass} rounded-xl flex items-center justify-center mb-6`}
      >
        <Icon name={icon} className={`${iconTextClass} text-4xl`} />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-on-surface-variant px-4">{description}</p>
    </div>
  );
}
