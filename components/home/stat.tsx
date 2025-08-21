import React from 'react';
export function StatsSection() {
  return (
    <section className="flex items-center justify-evenly  text-center py-[35px] bg-gradient-to-r from-[#1B64E4] to-[#031940] text-white">
      <div className="flex flex-col items-center space-y-2">
        <p className="font-medium text-[30px] leading-[17.61px] tracking-[-5%]">
          4,000+
        </p>
        <p className="font-normal text-[19.5px] leading-[17.61px]">
          Attendees
        </p>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <p className="font-medium text-[30px] leading-[17.61px] tracking-[-5%]">
          20+
        </p>
        <p className="font-normal text-[19.5px] leading-[17.61px]">
          Exhibitors
        </p>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <p className="font-medium text-[30px] leading-[17.61px] tracking-[-5%]">
          20+
        </p>
        <p className="font-normal text-[19.5px] leading-[17.61px]">
          Speakers
        </p>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <p className="font-medium text-[30px] leading-[17.61px] tracking-[-5%]">
          54+
        </p>
        <p className="font-normal text-[19.5px] leading-[17.61px]">
          Countries
        </p>
      </div>
    </section>
  );
}