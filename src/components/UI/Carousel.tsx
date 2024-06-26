import { useState } from "react";

type CarouselProps = {
  data: string[];
};

export default function Carousel({ data }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative space-y-10">
      <div className="overflow-hidden">
        <ul
          className="flex transition-transform ease-in-out duration-300"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {data.map((item, index) => (
            <li key={index} className="flex-shrink-0 w-full">
              <p className="max-w-[360px] text-4xl font-bold text-start">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex ">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full mx-1 ${
              index === activeIndex
                ? "bg-[#2DA950]"
                : "bg-[#E4E3E3] hover:bg-[#CAD0CB]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
