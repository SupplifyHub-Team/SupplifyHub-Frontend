"use client";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import SkeletonItem from "./SkeletonItem";
import { Mail, Phone, Globe, Copy } from "lucide-react";

interface AccountContactInfoProps {
  supplier: ISupplierProfile;
  isPending: boolean;
}

export default function AccountContactInfo({
  supplier,
  isPending,
}: AccountContactInfoProps) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  if (isPending) {
    return (
      <Card className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50">
        <CardHeader>
          <SkeletonItem className="h-6 w-48" />
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <SkeletonItem key={i} className="h-16 w-full" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div>
      <Card className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 overflow-hidden group hover:shadow-2xl transition-all duration-500">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50/30 border-b border-gray-100/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  معلومات التواصل
                </CardTitle>
                <p className="text-gray-600 mt-1">بيانات الاتصال والتواصل</p>
              </div>
            </div>
            <Badge className="bg-green-100 text-green-800 border-green-200 px-3 py-1">
              محقق
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Email */}
            <div className="group/item">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 hover:border-blue-200 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        البريد الإلكتروني
                      </h3>
                      <p className="text-sm text-gray-600">للتواصل الرسمي</p>
                    </div>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(supplier?.email || "")}>
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
                <div className="bg-white/80 rounded-xl p-3 border border-blue-200/50">
                  <p className="font-medium text-gray-900" dir="ltr">
                    {supplier?.email || "غير محدد"}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="group/item">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100 hover:border-green-200 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        رقم الهاتف
                      </h3>
                      <p className="text-sm text-gray-600">للتواصل المباشر</p>
                    </div>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      copyToClipboard(supplier?.phoneNumber || "")
                    }>
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
                <div className="bg-white/80 rounded-xl p-3 border border-green-200/50">
                  <p className="font-medium text-gray-900" dir="ltr">
                    {supplier?.phoneNumber || "غير محدد"}
                  </p>
                </div>
              </div>
            </div>

            {/* Company ID */}
            <div className="group/item">
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-100 hover:border-purple-200 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        معرف الشركة
                      </h3>
                      <p className="text-sm text-gray-600">المعرف الفريد</p>
                    </div>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      copyToClipboard(supplier?.id?.toString() || "")
                    }>
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
                <div className="bg-white/80 rounded-xl p-3 border border-purple-200/50">
                  <p className="font-medium text-gray-900 font-mono">
                    #{supplier?.id || "غير محدد"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
