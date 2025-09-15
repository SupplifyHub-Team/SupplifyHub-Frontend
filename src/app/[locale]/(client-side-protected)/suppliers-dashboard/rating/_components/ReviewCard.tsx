import { Card, CardContent } from "@/components/ui/card";
import { Star, MessageSquare } from "lucide-react";

export default function ReviewCard({ review }: { review: IReview }) {
  return (
    <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
      <CardContent className="p-6 flex flex-col gap-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-gray-900">{review.reviewerName}</span>
          </div>
          <div className="flex items-center gap-1">
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
            ))}
            <span className="text-xs text-gray-500 ml-1">{review.rating}.0</span>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">{review.comment}</p>
      </CardContent>
    </Card>
  );
}
