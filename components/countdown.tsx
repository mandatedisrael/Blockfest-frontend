/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect, useRef } from 'react';

interface CountdownProps {
  targetDate: string | Date;
  onExpire?: () => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown ({ targetDate, onExpire }: CountdownProps)  {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  useEffect(() => {
    const updateCountdown = () => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      // Check if expired
      if (Object.values(newTimeLeft).every(value => value === 0)) {
        onExpire?.();
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }
    };

    // Initial calculation
    updateCountdown();

    // Set up interval
    intervalRef.current = setInterval(updateCountdown, 1000);

    // Cleanup
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [targetDate, onExpire]);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className="flex items-start justify-center border-4 border-[#3870D3] w-fit space-x-5 rounded-[24px] py-[30px] px-[50px]">
      <div className="flex items-center flex-col">
        <p className="text-[#3870D3] font-normal text-[104.95px] leading-[110px] tabular-nums">
          {formatNumber(timeLeft.days)}
        </p>
        <p className="font-light text-[31.98px] leading-[120%] uppercase">
          days
        </p>
      </div>

      <span className="text-[#3870D3] font-normal text-[104.95px] leading-[110px]">:</span>

      <div className="flex items-center flex-col">
        <p className="text-[#3870D3] font-normal text-[104.95px] leading-[110px] tabular-nums">
          {formatNumber(timeLeft.hours)}
        </p>
        <p className="font-light text-[31.98px] leading-[120%] uppercase">
          hours
        </p>
      </div>

      <span className="text-[#3870D3] font-normal text-[104.95px] leading-[110px]">:</span>

      <div className="flex items-center flex-col">
        <p className="text-[#3870D3] font-normal text-[104.95px] leading-[110px] tabular-nums">
          {formatNumber(timeLeft.minutes)}
        </p>
        <p className="font-light text-[31.98px] leading-[120%] uppercase">
          minutes
        </p>
      </div>

      <span className="text-[#3870D3] font-normal text-[104.95px] leading-[110px]">:</span>

      <div className="flex items-center flex-col">
        <p className="text-[#3870D3] font-normal text-[104.95px] leading-[110px] tabular-nums">
          {formatNumber(timeLeft.seconds)}
        </p>
        <p className="font-light text-[31.98px] leading-[120%] uppercase">
          seconds
        </p>
      </div>
    </div>
  );
};

