"use client";

import OrderDetails from "@/app/[locale]/(client-side-protected)/suppliers-dashboard/orders/_components/OrderDetails";
import SupplierReview from "@/app/[locale]/(client-side-protected)/suppliers-dashboard/orders/_components/SupplierReview";
import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";

import {
  Building2,
  Phone,
  User,
  CheckCircle,
  XCircle,
  Clock,
  UserCheck,
  ShieldCheck,
  MailIcon,
} from "lucide-react";

const getDealStatusConfig = (status: string) => {
  const configs: Record<string, any> = {
    Pending: {
      label: "قيد الانتظار",
      icon: <Clock className="w-3 h-3" />,
      color: "bg-yellow-100 text-yellow-800 border-yellow-200",
    },
    ClientConfirmed: {
      label: "اكد العميل",
      icon: <UserCheck className="w-3 h-3" />,
      color: "bg-blue-100 text-blue-800 border-blue-200",
    },
    SupplierConfirmed: {
      label: "اكد المورد",
      icon: <ShieldCheck className="w-3 h-3" />,
      color: "bg-indigo-100 text-indigo-800 border-indigo-200",
    },
    AdminConfirmed: {
      label: "مؤكدة",
      icon: <CheckCircle className="w-3 h-3" />,
      color: "bg-green-100 text-green-800 border-green-200",
    },
    AdminRefused: {
      label: "مرفوضة",
      icon: <XCircle className="w-3 h-3" />,
      color: "bg-red-100 text-red-800 border-red-200",
    },
  };
  return configs[status] || configs["Pending"];
};

export default function SupplierDealsTableRow({
  deal,
}: {
  deal: ISupplierDeal;
}) {
  const dealStatusConfig = getDealStatusConfig(deal.dealStatus);

  return (
    <TableRow className="border-b border-gray-100 hover:bg-gradient-to-r hover:from-blue-50/30 hover:to-indigo-50/30 transition-all duration-300 group">
      {/* Deal ID */}
      <TableCell>
        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
          <span className="text-white text-sm font-bold">
            {String(deal.dealId).slice(-2)}
          </span>
        </div>
      </TableCell>

      {/* Company Info */}
      <TableCell>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-indigo-600" />
            <span className="font-semibold text-gray-900">
              {deal.CompanyName}
            </span>
          </div>
          <div>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <MailIcon className="w-3 h-3" />
              <span> {deal.CompanyEmail}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Phone className="w-3 h-3" />
              <span>{deal.CompanyPhone}</span>
            </div>
          </div>
        </div>
      </TableCell>

      {/* Description */}
      <TableCell>
        <div className="space-y-2 max-w-xs">
          {deal.items.slice(0, 2).map((item) => (
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
          {deal.items.length > 2 && (
            <div className="text-xs text-center text-gray-500 py-1">
              +{deal.items.length - 2} منتج آخر
            </div>
          )}
        </div>
      </TableCell>

      {/* Contact Person */}
      <TableCell>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-green-600" />
            <span className="font-medium text-gray-900 text-sm">
              {deal.contactPersonName}
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Phone className="w-3 h-3" />
            <span>{deal.contactPersonPhone}</span>
          </div>
        </div>
      </TableCell>

      {/* Deal Status */}
      <TableCell>
        <Badge
          className={`${dealStatusConfig.color} border font-medium shadow-sm`}
          variant="outline">
          {dealStatusConfig.icon}
          <span className="mr-1">{dealStatusConfig.label}</span>
        </Badge>
      </TableCell>
      <TableCell className="flex gap-2 flex-wrap ">
        {deal.dealStatus == "ClientConfirmed" ? (
          <SupplierReview id={deal.dealId} />
        ) : null}
        <OrderDetails deal={deal} />
      </TableCell>
    </TableRow>
  );
}
