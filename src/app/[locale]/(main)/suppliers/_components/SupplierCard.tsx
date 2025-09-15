import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Building2,
  Verified,
  User,
  ShieldCheck,
  Tag,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatDistance } from "date-fns";
import { ar } from "date-fns/locale";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

export default function SupplierCard({ supplier }: { supplier: ISupplier }) {
  return (
    <div className="group flex flex-col relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-200/50  hover:shadow-2xl hover:shadow-gray-900/10 hover:border-gray-300/50 transition-all duration-500 transform  h-full">
      {/* Header Section */}
      <div className="relative flex  flex-wrap flex-col justify-center items-center gap-5 mb-3">
        <div className="relative w-full bg-gradient-to-br from-indigo-50 via-purple-100 to-blue-200 rounded-t-2xl p-5">
          <div className="size-30 relative bg-indigo-50 rounded-2xl bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center  shadow-lg border border-gray-200/50 group-hover:shadow-xl transition-all duration-300 mx-auto">
            {supplier?.logoUrl ? (
              <Image
                src={supplier.logoUrl}
                alt={`${supplier.companyName} شعار`}
                className="w-full rounded-[inherit] h-full object-cover group-hover:scale-110 transition-transform duration-300"
                fill
              />
            ) : (
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16  rounded-xl flex items-center justify-center">
                  <Building2 className="size-20 text-indigo-600" />
                </div>
              </div>
            )}

            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full  shadow-lg flex items-center justify-center">
              <Tooltip>
                <TooltipTrigger type="button">
                  <Verified className="size-4 text-white" />
                </TooltipTrigger>
                <TooltipContent className="text-xs! flex gap-2 items-center font-semibold p-2">
                  <span>موثق</span>
                  <ShieldCheck className="size-4 text-white" />
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 pt-0 space-y-2 relative">
        <div className="flex-1 space-y-1 self-start">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2 truncate group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
            {supplier.companyName}
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Calendar className="w-4 h-4" />
            <span>
              انضم{" "}
              {formatDistance(supplier.joinDate, new Date(), {
                locale: ar,
                addSuffix: true,
              })}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 ">
            <Mail className="size-4 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-all duration-300" />
            {supplier.email}
          </div>
        </div>
        {/* Categories */}
        <div className="my-4">
          <div className="flex flex-wrap gap-3">
            {supplier?.categoryNames?.slice(0, 5).map((category, index) => (
              <Badge key={index} className="px-2  py-1 rounded-xl shadow-lg">
                <Tag />
                {category}
              </Badge>
            ))}
            {supplier?.categoryNames?.length > 5 && (
              <Badge className="shadow-lg rounded-xl text-sm font-semibold bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 border border-gray-300/50  transition-transform duration-200">
                +{supplier?.categoryNames.length - 5}
                <Tag />
              </Badge>
            )}
          </div>
        </div>

        {/* Locations */}
        <div className="mb-3 relative flex gap-2">
          {supplier.locations.map((location, index) => (
            <Badge
              key={index}
              className="px-2  py-1 rounded-2xl shadow-lg!"
              variant="outline">
              <MapPin className="size-4" />
              {location}
            </Badge>
          ))}
          {supplier.locations.length > 3 && (
            <Badge className="shadow-lg rounded-xl text-sm font-semibold bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 border border-gray-300/50  transition-transform duration-200">
              +{supplier.locations.length - 3}
              <MapPin className="size-4" />
            </Badge>
          )}
        </div>

        {/* Contact Actions */}
        <div className="relative flex flex-col gap-4 mt-auto">
          <Link
            href={`tel:${supplier.phoneNumber}`}
            className="flex-1 bg-gradient-to-r from-green-50  to-emerald-50 hover:from-green-100 hover:to-emerald-100 text-green-700 px-2 py-2 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 border border-green-200/50 hover:border-green-300/50 shadow-lg hover:shadow-xl hover:shadow-green-500/20 group/btn backdrop-blur-sm">
            <Phone className="size-4 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-all duration-300" />
            {supplier.phoneNumber}
          </Link>
          <Link href={`/suppliers/${supplier.id}`}>
            <Button
              type="button"
              variant="gradient-indigo"
              className="w-full flex items-center gap-2">
              <User className="size-4 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-all duration-300" />
              عرض الملف الشخصي
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
