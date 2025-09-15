"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Building2,
  Phone,
  Mail,
  User,
  FileText,
  CheckCircle,
  Clock,
  XCircle,
  AlertCircle,
  Target,
  Zap,
  Copy,
} from "lucide-react";
import { copyToClipboard } from "@/lib/utils";

const getDealStatusConfig = (status: string) => {
  switch (status?.toLowerCase()) {
    case "Pending":
      return {
        className: "bg-amber-100 text-amber-800 border-amber-200",
        icon: <Clock className="w-3.5 h-3.5" />,
        text: "قيد الانتظار",
        dot: "bg-amber-500",
      };
    case "ClientConfirmed":
      return {
        className: "bg-emerald-100 text-emerald-800 border-emerald-200",
        icon: <CheckCircle className="w-3.5 h-3.5" />,
        text: "مؤكد",
        dot: "bg-emerald-500",
      };
    case "rejected":
      return {
        className: "bg-red-100 text-red-800 border-red-200",
        icon: <XCircle className="w-3.5 h-3.5" />,
        text: "مرفوض",
        dot: "bg-red-500",
      };
    default:
      return {
        className: "bg-gray-100 text-gray-800 border-gray-200",
        icon: <AlertCircle className="w-3.5 h-3.5" />,
        text: status || "غير محدد",
        dot: "bg-gray-500",
      };
  }
};

const getOrderStatusConfig = (status: string) => {
  switch (status?.toLowerCase()) {
    case "Active":
      return {
        className: "bg-blue-100 text-blue-800 border-blue-200",
        icon: <Zap className="w-3.5 h-3.5" />,
        text: "نشط",
        dot: "bg-blue-500",
      };
    case "Completed":
      return {
        className: "bg-green-100 text-green-800 border-green-200",
        icon: <Target className="w-3.5 h-3.5" />,
        text: "مكتمل",
        dot: "bg-green-500",
      };
    case "Canceled":
      return {
        className: "bg-gray-100 text-gray-800 border-gray-200",
        icon: <XCircle className="w-3.5 h-3.5" />,
        text: "ملغي",
        dot: "bg-gray-500",
      };
    default:
      return {
        className: "bg-gray-100 text-gray-800 border-gray-200",
        icon: <AlertCircle className="w-3.5 h-3.5" />,
        text: status || "غير محدد",
        dot: "bg-gray-500",
      };
  }
};

export default function DealDetails({ deal }: { deal: ISupplierDeal }) {
  const dealStatusConfig = getDealStatusConfig(deal.dealStatus);
  const orderStatusConfig = getOrderStatusConfig(deal.OrderStatus);

  return (
    <div className="max-w-4xl mx-auto space-y-6 p-4" dir="rtl">
      {/* Header Section */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <div className="mb-4">
          <h1 className="text-xl font-bold text-gray-900 mb-1">
            {deal.CompanyName}
          </h1>
          <div className="flex items-center gap-2 text-gray-600">
            <FileText className="w-4 h-4" />
            <span className="text-sm font-medium">صفقة #{deal.dealId}</span>
          </div>
        </div>

        {/* Status Row */}
        <div className="flex items-center gap-6 p-4 bg-gray-50 rounded-xl flex-wrap">
          <div className="flex items-center gap-3">
            <div
              className={`w-2 h-2 rounded-full ${dealStatusConfig.dot}`}></div>
            <span className="text-sm text-gray-600">حالة الصفقة:</span>
            <Badge className={`${dealStatusConfig.className} font-medium`}>
              {dealStatusConfig.icon}
              <span className="mr-1">{dealStatusConfig.text}</span>
            </Badge>
          </div>

          <div className="flex items-center gap-3">
            <div
              className={`w-2 h-2 rounded-full ${orderStatusConfig.dot}`}></div>
            <span className="text-sm text-gray-600">حالة الطلب:</span>
            <Badge className={`${orderStatusConfig.className} font-medium`}>
              {orderStatusConfig.icon}
              <span className="mr-1">{orderStatusConfig.text}</span>
            </Badge>
          </div>
        </div>
      </div>
      {/* Contact Information */}
      <div className="grid grid-cols-1  gap-6">
        {/* Company Information */}
        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Building2 className="w-4 h-4 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">معلومات الشركة</h3>
            </div>

            <div className="space-y-4">
              <div className="group">
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  البريد الإلكتروني
                </label>
                <div className="flex items-center justify-between mt-1 p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span
                      className="text-sm font-medium text-gray-900"
                      dir="ltr">
                      {deal.CompanyEmail}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 w-7 p-0"
                    onClick={() => copyToClipboard(deal.CompanyEmail)}>
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>
              </div>

              <div className="group">
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  رقم الهاتف
                </label>
                <div className="flex items-center justify-between mt-1 p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span
                      className="text-sm font-medium text-gray-900"
                      dir="ltr">
                      {deal.CompanyPhone}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 w-7 p-0"
                    onClick={() => copyToClipboard(deal.CompanyPhone)}>
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Person */}
        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <User className="w-4 h-4 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">الشخص المسؤول</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  الاسم
                </label>
                <div className="flex items-center gap-3 mt-1 p-3 bg-gray-50 rounded-lg">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-purple-600 text-white text-xs font-medium">
                      {deal.contactPersonName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium text-gray-900">
                    {deal.contactPersonName}
                  </span>
                </div>
              </div>

              <div className="group">
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  رقم الهاتف المباشر
                </label>
                <div className="flex items-center justify-between mt-1 p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span
                      className="text-sm font-medium text-gray-900"
                      dir="ltr">
                      {deal.contactPersonPhone}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 w-7 p-0"
                    onClick={() => copyToClipboard(deal.contactPersonPhone)}>
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Main Content Grid */}
      <div className="grid grid-cols-1  gap-6">
        {/* Deal Description - Takes 2 columns */}
        <div>
          <Card className="border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-4 h-4 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">تفاصيل الصفقة</h3>
              </div>
              <div className="space-y-2 max-w-xs">
                {deal.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-2 bg-gray-50 rounded-lg text-sm">
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 truncate">
                        {item.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        الكمية: {item.quantity}
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-indigo-600 ml-2">
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
