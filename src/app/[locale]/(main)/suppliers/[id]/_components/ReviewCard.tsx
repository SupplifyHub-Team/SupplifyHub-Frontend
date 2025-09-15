"use client";

import { ISupplierReviews } from "@/types/supplier";
import { motion } from "motion/react";
import { useState } from "react";

interface ReviewCardProps {
  review: ISupplierReviews;
  index?: number;
}

export default function ReviewCard({ review, index = 0 }: ReviewCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getRandomGradient = (index: number) => {
    const gradients = [
      "from-blue-400 to-purple-500",
      "from-green-400 to-blue-500",
      "from-purple-400 to-pink-500",
      "from-yellow-400 to-orange-500",
      "from-indigo-400 to-cyan-500",
      "from-pink-400 to-red-500",
    ];
    return gradients[index % gradients.length];
  };

  const isLongComment = review.comment && review.comment.length > 150;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="relative group"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-200/30 to-purple-200/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

      {/* Main Card */}
      <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 hover:border-indigo-200 p-6 transition-all duration-500 overflow-hidden">
        {/* Floating Quote Icon */}
        <div className="absolute top-4 right-4 text-6xl text-indigo-100 font-serif"></div>

        {/* Header */}
        <div className="flex items-start gap-4 mb-4 relative z-10">
          {/* Avatar */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`relative w-12 h-12 rounded-full bg-gradient-to-br ${getRandomGradient(
              index
            )} flex items-center justify-center shadow-lg`}
          >
            <span className="text-white font-bold text-lg">
              {review.reviewerName.charAt(0).toUpperCase()}
            </span>
          </motion.div>

          {/* User Info */}
          <div className="flex-1">
            <h4 className="font-bold text-gray-900 text-lg mb-1">
              {review.reviewerName}
            </h4>

            {/* Rating Stars */}
            <div className="flex items-center gap-2 mb-2">
              <div className="flex text-yellow-400">
                {Array.from({ length: 5 }, (_, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className={`text-lg ${
                      i < review.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </motion.span>
                ))}
              </div>
              <span className="text-sm text-gray-500 font-medium">
                ({review.rating}/5)
              </span>
            </div>
          </div>
        </div>

        {/* Review Content */}
        <div className="relative z-10 mb-4">
          <motion.p layout className="text-gray-700 leading-relaxed">
            {isLongComment && !isExpanded
              ? `${review.comment.substring(0, 150)}...`
              : review.comment}
          </motion.p>

          {isLongComment && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-indigo-600 hover:text-indigo-700 text-sm font-medium mt-2 transition-colors"
            >
              {isExpanded ? "عرض أقل" : "عرض المزيد"}
            </motion.button>
          )}
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>
    </motion.div>
  );
}
