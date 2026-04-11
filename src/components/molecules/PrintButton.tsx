"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@/components/atoms/Icon";

interface PrintButtonProps {
  href: string;
}

export function PrintButton({ href }: PrintButtonProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      setShow(localStorage.getItem("alesha_print") === "true");
    } catch {
      // noop — localStorage unavailable
    }
  }, []);

  if (!show) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors mt-4 pt-4 border-t border-outline-variant/10"
    >
      <Icon name="print" className="text-base" />
      Download Itinerary (PDF)
    </a>
  );
}
