"use client";
import { Icon } from "@/components/atoms/Icon";

export function PrintTriggerButton() {
  return (
    <button
      onClick={() => window.print()}
      className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-full text-sm font-bold hover:bg-primary-dim transition-colors"
    >
      <Icon name="print" className="text-sm" />
      Print / Save as PDF
    </button>
  );
}
