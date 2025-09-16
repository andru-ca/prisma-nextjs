"use client";

import { FC, useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

export type FaqAccordionProps = SliceComponentProps<Content.FaqAccordionSlice>;

const FaqAccordion: FC<FaqAccordionProps> = ({ slice }) => {
  // 👉 al iniciar, el primer item (index 0) estará abierto
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="bg-black mx-auto w-full h-screen p-8"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.primary.title && (
        <div className="mb-6 text-3xl font-bold text-left text-white">
          <PrismicRichText field={slice.primary.title} />
        </div>
      )}

      <div className="space-y-4">
        {slice.primary.items?.map((item, index) => (
          <div
            key={index}
            className="border border-t-1 border-t-white overflow-hidden"
          >
            {/* Botón del acordeón */}
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex gap-[120px] items-center justify-between p-5 text-left font-medium text-white transition"
            >
              <span className="flex items-center justify-center border p-2 rounded-full w-[50] h-[40]">{item.label}</span>
              <div className="flex-1">
                <PrismicRichText field={item.question} />
              </div>
              <svg
                className={`w-5 h-5 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Contenido expandible */}
            <div
              className={`px-4 overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-96 py-3" : "max-h-0"
              }`}
            >
              <div className="text-gray-600 w-3xl ml-[150px] px-3">
                <PrismicRichText field={item.answer} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqAccordion;
