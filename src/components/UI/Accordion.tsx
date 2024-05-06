import { useState } from "react";

type AccordionProps = {
  question: string;
  answer: string;
};

export default function Accordion({ question, answer }: AccordionProps) {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div className="py-3 border-b border-gray-300 space-y-2">
      <button
        onClick={() => setAccordionOpen((prev) => !prev)}
        className="flex justify-between w-full text-[#1C1C1C]"
      >
        <span className="text-2xl font-medium text-left max-w-[430px]">
          {question}
        </span>
        <span className="font-semibold text-2xl">
          {accordionOpen ? "-" : "+"}
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 py-5"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-[#617275] ">{answer}</div>
      </div>
    </div>
  );
}
