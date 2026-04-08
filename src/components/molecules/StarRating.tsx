import { Icon } from "@/components/atoms/Icon";

interface StarRatingProps {
  rating: number;
  className?: string;
}

export function StarRating({ rating, className = "text-primary" }: StarRatingProps) {
  return (
    <div className={`flex gap-1 ${className}`}>
      {Array.from({ length: rating }).map((_, i) => (
        <Icon key={i} name="star" filled />
      ))}
    </div>
  );
}
