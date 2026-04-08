"use client";

import { useState } from "react";
import { Icon } from "@/components/atoms/Icon";
import { FAQItem as FAQItemType } from "@/types";

interface FAQItemProps {
  faq: FAQItemType;
}

export function FAQItem({ faq }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-outline-variant/10 pb-4">
      <button
        className="w-full flex justify-between items-center text-left py-2 hover:text-primary transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-on-surface">{faq.question}</span>
        <Icon
          name="expand_more"
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="pt-2 text-sm text-on-surface-variant leading-relaxed">
          {faq.answer}
        </div>
      )}
    </div>
  );
}
