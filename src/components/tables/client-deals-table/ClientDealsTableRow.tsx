import { TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  MapPin,
  Calendar,
  Phone,
  CheckCircle,
  Clock,
  XCircle,
  AlertCircle,
  X,
} from "lucide-react";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import TextTooltip from "@/components/TextTooltip";
import useClientCancelDeal from "@/hooks/deals/clients/useClientCancelDeal";
import { AreYouSureDeleteing } from "@/components/AreYouSureDeleteing";
import { Button } from "@/components/ui/button";
import { ConfirmDeal } from "@/app/[locale]/(client-side-protected)/clients-dashboard/overview/_components/ConfirmDeal";

export default function ClientDealsTableRow({
  deal,
}: {
  deal: IGetOrderResponse;
}) {
  const { mutate: cancelDeal } = useClientCancelDeal();

  const getDealStatusBadge = (status: keyof typeof EDealStatus) => {
    switch (status) {
      case "Pending":
      case "Pending":
        return {
          variant: "secondary" as const,
          className:
            "bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-200",
          icon: <Clock className="w-3 h-3" />,
          text: "قيد الانتظار",
        };
      case "ClientConfirmed":
        return {
          variant: "default" as const,
          className:
            "bg-green-100 text-green-800 border-green-200 hover:bg-green-200",
          icon: <CheckCircle className="w-3 h-3" />,
          text: "اكد العميل",
        };
      case "AdminRefused":
        return {
          variant: "destructive" as const,
          className: "bg-red-100 text-red-800 border-red-200 hover:bg-red-200",
          icon: <XCircle className="w-3 h-3" />,
          text: "رفض المسؤول",
        };
      case "SupplierConfirmed":
        return {
          variant: "default" as const,
          className:
            "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
          icon: <CheckCircle className="w-3 h-3" />,
          text: "المورد اكد",
        };
      case "AdminConfirmed":
        return {
          variant: "default" as const,
          className:
            "bg-cyan-100 text-cyan-800 border-cyan-200 hover:bg-cyan-200",
          icon: <CheckCircle className="w-3 h-3" />,
          text: "مؤكدة من المسؤول",
        };
      default:
        return {
          variant: "outline" as const,
          className: "bg-gray-100 text-gray-800 border-gray-200",
          icon: <AlertCircle className="w-3 h-3" />,
          text: status || "غير محدد",
        };
    }
  };

  const dealStatusConfig = getDealStatusBadge(deal.dealStatus);

  return (
    <TableRow className="group hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 transition-all duration-300 border-b border-gray-100">
      {/* Deal ID */}
      <TableCell className="font-mono text-sm">
        <p className="font-bold text-blue-600">#{deal.orderId}</p>
      </TableCell>

      {/* Deal Details */}
      <TableCell>
        <div className="space-y-2 max-w-xs">
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 ">
            <p className="font-medium text-gray-900 text-sm mb-2 line-clamp-2">
              {deal.description}
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <TextTooltip content={`اقصى عدد للموردين`}>
                <Building2 className="w-3 h-3 text-blue-500" />
                <span className="font-medium">{deal.numSuppliersDesired}</span>
              </TextTooltip>

              <TextTooltip content={`مكان التسليم`}>
                <MapPin className="w-3 h-3 text-green-500" />
                <span className="truncate ">{deal.requiredLocation}</span>
              </TextTooltip>
              <TextTooltip content={`ميعاد التسليم`}>
                <Calendar className="w-3 h-3 text-orange-500" />
                <span>
                  {format(new Date(deal.deadline), "dd MMM yyyy", {
                    locale: ar,
                  })}
                </span>
              </TextTooltip>
            </div>
          </div>
        </div>
      </TableCell>

      {/* Contact Person */}
      <TableCell>
        <p className="font-semibold text-gray-900 text-sm">
          {deal.contactPersonName}
        </p>
        <div className="flex items-center gap-1 text-xs text-gray-600">
          <span>{deal.contactPersonPhone}</span>
          <Phone className="w-3 h-3" />
        </div>
      </TableCell>

      {/* Deal Status */}
      <TableCell>
        <Badge
          variant={dealStatusConfig.variant}
          className={`${dealStatusConfig.className} flex items-center gap-1 w-fit px-3 py-1 shadow-sm transition-all duration-200 hover:shadow-md`}>
          {dealStatusConfig.icon}
          <span className="font-medium">{dealStatusConfig.text}</span>
        </Badge>
      </TableCell>

      {/* Order Status */}
      <TableCell className=" space-x-2 ">
        {deal.dealStatus === "Pending" ? (
          <>
            <ConfirmDeal dealId={deal.orderId} />
            <AreYouSureDeleteing
              title="الغاء الصفقة"
              description="هذا الإجراء لا يمكن التراجع عنه."
              onAccept={() => cancelDeal({ id: deal.orderId })}
              TriggerButton={
                <Button variant="destructive" className="w-fit">
                  <X />
                </Button>
              }
            />
          </>
        ) : (
          <span className="text-xs">الصفقة حالتها انتهت</span>
        )}
      </TableCell>
    </TableRow>
  );
}
