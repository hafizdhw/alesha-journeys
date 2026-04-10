import { Testimonial } from "@/types";
import { StarRating } from "./StarRating";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className = "" }: TestimonialCardProps) {
  return (
    <div className={`bg-surface-container-low p-10 rounded-lg md:rounded-xl ${className}`}>
      <StarRating rating={testimonial.rating} className="mb-6" />
      <blockquote className="text-xl font-medium text-on-surface leading-relaxed mb-8 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${testimonial.colorClass}`}
        >
          {testimonial.initials}
        </div>
        <div>
          <p className="font-bold">{testimonial.author}</p>
          <p className="text-sm text-on-surface-variant">{testimonial.country}</p>
        </div>
      </div>
    </div>
  );
}
