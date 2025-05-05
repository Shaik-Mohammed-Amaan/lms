"use client";
import { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, idx) => (
        <div key={idx} className="mb-2 border-b border-gray-200">
          <button
            className="w-full flex justify-between items-center py-3 text-left font-medium focus:outline-none"
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
          >
            <span>{item.title}</span>
            <span className="text-xl">{openIdx === idx ? "−" : "+"}</span>
          </button>
          {openIdx === idx && (
            <div className="py-2 text-sm text-gray-700">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}
