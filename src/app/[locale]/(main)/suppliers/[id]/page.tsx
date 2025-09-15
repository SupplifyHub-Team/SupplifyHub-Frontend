import React from "react";
import SupplierHero from "./_components/SupplierHero";
import SupplierSidebar from "./_components/SupplierSidebar";
import { getSupplierInfo } from "@/services/accountSettingServices";
import { getSupplierProductsAndReviews } from "@/services/suppliersServices";

import { notFound } from "next/navigation";
import ProductList from "./_components/ProductList";
import SupplierReviews from "./_components/SupplierReviews";
import SupplierAdvertisements from "./_components/SupplierAdvertisements";
import { fetchAdvertisements } from "@/services/advertisementsServices";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const supplier = await getSupplierInfo(Number(id));
  if (!supplier) {
    notFound();
  }

  const supplierProductsAndReviews = await getSupplierProductsAndReviews(
    Number(id)
  );

  const advertisements = await fetchAdvertisements({ userId: Number(id) });

  return (
    <div className="relative min-h-screen pt-10 bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-60 h-60 bg-indigo-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-40 rounded-xl">
        <SupplierAdvertisements advertisements={advertisements} />
      </div>
      <section className="relative z-10  lg:px-30">
        <SupplierHero supplier={supplier} />
      </section>

      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-16 mt-10 flex flex-col md:flex-row gap-8">
        <div className="flex-1 space-y-12">
          <ProductList products={supplierProductsAndReviews.products} />
          <SupplierReviews allReviews={supplierProductsAndReviews.allReviews} />
          <div className="block md:hidden">
            <SupplierSidebar supplier={supplier} />
          </div>
        </div>

        <aside className="hidden md:block w-full md:w-80 flex-shrink-0 self-start sticky top-24">
          <SupplierSidebar supplier={supplier} />
        </aside>
      </section>
    </div>
  );
}
