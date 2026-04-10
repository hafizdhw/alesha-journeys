import { Guide } from "@/types";
import { Icon } from "@/components/atoms/Icon";

interface GuideCardProps {
  guide: Guide;
}

export function GuideCard({ guide }: GuideCardProps) {
  return (
    <div className="bg-surface-container-lowest rounded-lg md:rounded-xl p-6 flex flex-col sm:flex-row gap-6 shadow-sm border border-outline-variant/10">
      <div className="w-full sm:w-48 h-64 sm:h-auto rounded md:rounded-lg overflow-hidden shrink-0">
        <img
          alt={guide.name}
          className="w-full h-full object-cover"
          src={guide.image}
        />
      </div>
      <div className="flex flex-col justify-between py-2">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-bold">{guide.name}</h3>
            <span className="bg-primary-container text-primary text-xs px-2 py-1 rounded-full font-bold">
              {guide.experience}
            </span>
          </div>
          <p className="text-on-surface-variant text-sm mb-4 italic">
            &ldquo;{guide.quote}&rdquo;
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Icon name="language" className="text-primary text-lg" />
              <span className="font-medium">{guide.languages}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Icon name={guide.specialtyIcon} className="text-primary text-lg" />
              <span className="font-medium">Specialty: {guide.specialty}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
