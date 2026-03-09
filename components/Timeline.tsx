'use client';

import Image from 'next/image';
import { ReactNode } from 'react';

interface TimelineItem {
  date: string;
  title: string;
  description: string | ReactNode;
  image: {
    src: string;
    alt: string;
  };
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical dashed line - hidden on mobile, visible on lg */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-none border-l-2 border-dashed border-loyal-blue/30 transform -translate-x-1/2"></div>

      {/* Mobile visible dashed line - on the left */}
      <div className="lg:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-none border-l-2 border-dashed border-loyal-blue/30"></div>

      <div className="space-y-12 lg:space-y-16">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;
          const isMobile = true; // Timeline always stacks on mobile

          return (
            <div
              key={index}
              className="relative"
              aria-label={`Timeline item ${index + 1}: ${item.title}`}
            >
              {/* Desktop centered dot */}
              <div className="hidden lg:block absolute left-1/2 top-12 w-4 h-4 bg-blissful-blue border-4 border-white rounded-full transform -translate-x-1/2 shadow-md"></div>

              {/* Mobile left dot */}
              <div className="lg:hidden absolute left-[25px] top-6 w-4 h-4 bg-blissful-blue border-4 border-white rounded-full shadow-md z-10"></div>

              {/* Content Grid */}
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center pl-20 lg:pl-0 ${
                  isEven ? 'lg:grid-flow-row' : 'lg:grid-flow-row-dense'
                }`}
              >
                {/* Image Column */}
                <div
                  className={`order-1 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Text Column */}
                <div
                  className={`order-2 lg:pl-0 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="bg-white p-6 lg:p-8 border border-slate-200">
                    <p className="text-sm font-semibold text-blissful-blue uppercase tracking-wide mb-2">
                      {item.date}
                    </p>
                    <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    <div className="text-gray-600 leading-relaxed">
                      {typeof item.description === 'string' ? (
                        <p>{item.description}</p>
                      ) : (
                        item.description
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
