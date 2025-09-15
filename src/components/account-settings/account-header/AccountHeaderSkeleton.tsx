import { Card, CardContent } from "@/components/ui/card";
import SkeletonItem from "../SkeletonItem";

export default function AccountHeaderSkeleton() {
  return (
    <Card className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50">
      <CardContent className="p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <SkeletonItem className="w-32 h-32 rounded-3xl" />
          <div className="flex-1 space-y-4">
            <SkeletonItem className="h-8 w-64" />
            <SkeletonItem className="h-6 w-48" />
            <SkeletonItem className="h-20 w-full" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
