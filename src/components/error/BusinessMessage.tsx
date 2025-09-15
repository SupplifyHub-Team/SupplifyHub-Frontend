import React from 'react'
import { Card, CardContent } from '../ui/card';
import { Building2, Clock, TrendingDown } from 'lucide-react';

export default function BusinessMessage() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardContent className="p-8">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                نتفهم أهمية وقتك التجاري
              </h3>
              <p className="text-blue-700 leading-relaxed mb-4">
                نعلم أن كل دقيقة مهمة في عملك التجاري. فريقنا التقني يعمل على
                مدار الساعة لضمان استمرارية الخدمة وحل أي مشاكل تقنية بأسرع وقت
                ممكن.
              </p>
              <div className="flex items-center gap-4 text-sm text-blue-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>متوسط وقت الحل: 15 دقيقة</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingDown className="w-4 h-4" />
                  <span>معدل الأخطاء: أقل من 0.1%</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
