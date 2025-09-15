import { Star } from "lucide-react";
import { ISupplierReviews } from "@/types/supplier";
import ReviewCard from "./ReviewCard";

export default function SupplierReviews({
  allReviews,
}: {
  allReviews: ISupplierReviews[];
}) {
  return (
    <>
      <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 md:p-8">
        <div className="text-center mb-8">
          <Star className="text-yellow-500 mx-auto mb-4 text-2xl" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            ماذا يقول العملاء؟
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            تجارب حقيقية من عملاء استفادوا من هذه الشركة
          </p>
        </div>
        <div className="grid md:grid-cols-2 text-center lg:grid-cols-3 gap-6">
          {allReviews && allReviews.length > 0 ? (
            allReviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))
          ) : (
            <p className=" font-bold text-xl text-gray-600 text-center   ">
              لا توجد تقييمات !
            </p>
          )}
        </div>
      </div>
    </>
  );
}
