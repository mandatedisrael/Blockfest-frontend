"use client";
import type React from 'react';
import { useCallback } from 'react';
import type { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { NextButton, PrevButton, usePrevNextButtons } from './carouselbuttons';

type PropType = {
  slides: string[]; // Array of image URLs
  options?: EmblaOptionsType;
};

const Speakers: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className="embla w-full flex items-end  justify-center flex-col">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom -ml-[1.5rem]">
          {slides.map((src, index) => (
            <div
              className="transform-gpu flex-[0_0_70%]  md:min-w-0 xl:min-w-0 min-w-full pl-[1.5rem] flex justify-center items-center"
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
            >
              <Image
                src={src}
                alt={`Brand ${index + 1}`}
                width={550}
                height={400}
                priority
                className="w-auto h-auto aspect-[550/400] rounded-md"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[auto_1fr] justify-between gap-[1.2rem] mt-[1.8rem]">
        <div className="grid grid-cols-2 gap-[0.6rem] items-center">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default Speakers;
