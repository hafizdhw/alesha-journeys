import { TeamMember } from "@/types";

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="bg-surface-container-low rounded-lg md:rounded-xl overflow-hidden group">
      <div className="h-80 overflow-hidden">
        <img
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={member.image}
        />
      </div>
      <div className="p-8">
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-primary font-semibold text-sm mb-4">{member.role}</p>
        <p className="text-on-surface-variant text-sm leading-relaxed">
          {member.description}
        </p>
      </div>
    </div>
  );
}
