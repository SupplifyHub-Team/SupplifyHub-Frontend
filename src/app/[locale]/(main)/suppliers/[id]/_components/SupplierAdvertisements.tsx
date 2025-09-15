"use client";

import AdvertisementCarousel from "@/components/AdvertisementCarousel";

export default function SupplierAdvertisements({
  advertisements,
}: {
  advertisements: IAdvertisement[];
}) {
  if (!advertisements || advertisements.length === 0) return null;

  return (
    <div className="rounded-md ">
      <AdvertisementCarousel
        advertisements={advertisements}
        autoplayDelay={3000}
      />
    </div>
  );
}
