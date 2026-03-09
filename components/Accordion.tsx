'use client';

import { useState, ReactNode } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

interface AccordionItem {
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  columns?: 1 | 2;
  bgColor?: string;
}

export function Accordion({ items, columns = 1, bgColor = 'bg-slate-50' }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerClasses = 'grid grid-cols-1 gap-4 items-start';
  const itemClasses = `self-start ${bgColor} overflow-visible border border-slate-200`;

  return (
    <div className={containerClasses} role="region" aria-label="Frequently asked questions">
      {items.map((item, index) => (
        <div
          key={index}
          className={itemClasses}
        >
          <button
            onClick={() => toggleItem(index)}
            aria-expanded={openIndex === index}
            aria-controls={`accordion-content-${index}`}
            className="w-full flex items-center justify-between p-4 md:p-5 text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-loyal-blue transition-all cursor-pointer"
          >
            <h3 className="text-base md:text-lg font-semibold text-gray-900 pr-8">
              {item.title}
            </h3>
            <ChevronDownIcon
              className={`w-6 h-6 text-loyal-blue flex-shrink-0 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              aria-hidden="true"
            />
          </button>
          <div
            id={`accordion-content-${index}`}
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
            role="region"
            aria-labelledby={`accordion-button-${index}`}
            onFocus={(e) => {
              // If a focusable element inside this accordion receives focus and accordion is closed, open it
              if (openIndex !== index && e.target !== e.currentTarget) {
                setOpenIndex(index);
              }
            }}
          >
            <p className="text-gray-600 px-5 pt-2 pb-4 md:pb-5">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}