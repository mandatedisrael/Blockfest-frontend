import React from "react";

const stats = [
  { value: "4,000+", label: "Attendees" },
  { value: "20+", label: "Exhibitors" },
  { value: "20+", label: "Speakers" },
  { value: "54+", label: "Countries" },
];

export function StatsSection() {
  return (
    <section className="flex items-center justify-between xl:justify-evenly px-5 text-center py-[35px] bg-gradient-to-r from-[#1B64E4] to-[#031940] text-white">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center xl:space-y-2">
          <p className="font-medium text-xl xl:text-[30px] xl:leading-[17.61px] tracking-[-5%]">
            {stat.value}
          </p>
          <p className="font-normal text-base xl:text-[19.5px] xl:leading-[17.61px]">
            {stat.label}
          </p>
        </div>
      ))}
    </section>
  );
}
