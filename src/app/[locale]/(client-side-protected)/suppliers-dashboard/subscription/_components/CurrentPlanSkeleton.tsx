import { Card, CardContent } from '@/components/ui/card'

export default function CurrentPlanSkeleton() {
  return ( <Card className="relative overflow-hidden border-0 shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse"></div>
        <CardContent className="relative p-8">
          <div className="space-y-6">
            <div className="h-8 bg-gray-300 rounded-lg w-1/2 animate-pulse"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse"></div>
            </div>
          </div>
        </CardContent>
      </Card>  
      )
}
