"use client";

import React from "react";
import ProductPreview from "./ProductPreview";
// import { Button } from "@/components/ui/button";
import { ISupplierProducts } from "@/types/supplier";
import EmptyState from "@/components/EmptyState";
import { motion } from "motion/react";

export default function ProductList({
  products,
}: {
  products: ISupplierProducts[];
}) {
  if (!products || products.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 rounded-3xl"></div>
        <div className="relative p-8">
          <EmptyState
            title="لا يوجد منتجات"
            description="لا يوجد منتجات لهذا المورد حالياً"
          />
        </div>
      </motion.div>
    );
  }

  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        المنتجات المتاحة{" "}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-20">
        {products && products.length > 0 ? (
          products.map((product, index) => (
            <ProductPreview key={index} product={product} />
          ))
        ) : (
          <div className="col-span-3">
            <EmptyState
              title="لا يوجد منتجات"
              description="لا يوجد منتجات لهذا الشركة"
            />
          </div>
        )}
      </div>

      {/* <Button className="w-fit  md:w-auto text-center md:flex items-center justify-center mx-auto font-semibold py-4 px-6 rounded-full shadow-lg transition-all hover:shadow-xl">
        استعرض جميع المنتجات
        <span className="font-extrabold text-lg ml-2 ">
          ({products.length}+)
        </span>
      </Button> */}
    </>
  );
}
