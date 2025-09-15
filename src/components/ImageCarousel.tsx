"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

interface CarouselItem {
  id: string;
  image: string;
  alt: string;
  title?: string;
  description?: string;
}

interface ImageCarouselProps {
  slides: CarouselItem[];
  autoplayDelay?: number;
  className?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  slides,
  autoplayDelay = 4000,
  className = "",
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      direction: "rtl", // For Arabic layout
    },
    [Autoplay({ delay: autoplayDelay })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className={`relative w-full ${className}`}>
      <div className="overflow-hidden rounded-xl shadow-2xl" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority
                />
                {(slide.title || slide.description) && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      {slide.title && (
                        <h3 className="text-2xl md:text-4xl font-bold mb-4">
                          {slide.title}
                        </h3>
                      )}
                      {slide.description && (
                        <p className="text-lg md:text-xl opacity-90 max-w-2xl">
                          {slide.description}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "bg-indigo-600 scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`انتقل إلى الشريحة ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageCarousel;
