"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

interface AdvertisementCarouselProps {
  advertisements: IAdvertisement[];
  autoplayDelay?: number;
  className?: string;
}

const AdvertisementCarousel: React.FC<AdvertisementCarouselProps> = ({
  advertisements,
  autoplayDelay = 1000,
  className = "",
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      direction: "rtl",
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

  if (!advertisements || advertisements.length === 0) {
    return null;
  }

  const renderSlide = (advertisement: IAdvertisement) => {
    const slideContent = (
      <div className="relative aspect-[8/3.5]">
        <Image
          src={advertisement.imageUrl}
          alt={`إعلان ${advertisement.id}`}
          fill
          className="object-cover rounded-2xl"
          priority
        />
      </div>
    );

    if (advertisement.targetUrl && advertisement.targetUrl !== "") {
      return (
        <Link
          href={advertisement.targetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block cursor-pointer hover:opacity-95 transition-opacity duration-300">
          {slideContent}
        </Link>
      );
    }

    return slideContent;
  };

  return (
    <section className={`relative w-full ${className}`}>
      {/* Full width carousel container */}
      <div className="w-full overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {advertisements.map((advertisement) => (
            <div key={advertisement.id} className="flex-[0_0_100%] min-w-0">
              {renderSlide(advertisement)}
            </div>
          ))}
        </div>
      </div>

      {advertisements.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex justify-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full">
            {advertisements.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === selectedIndex
                    ? "bg-white scale-125 shadow-lg"
                    : "bg-white/60 hover:bg-white/80"
                }`}
                aria-label={`انتقل إلى الإعلان ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default AdvertisementCarousel;
