"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "@/i18n/navigation";
import useAuth from "@/store/authStore";
import {
  Building2,
  LayoutDashboard,
  LogOut,
  ShoppingCart,
  User,
  ChevronDown,
  Settings,
} from "lucide-react";

export default function UserDropdown() {
  const auth = useAuth();

  if (!auth.user) return null;

  const isSupplier = auth.user?.role === "Suppliers";
  const userInitials =
    auth.user?.name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase() || "U";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="
            relative h-12 rounded-full 
            bg-gradient-to-r from-indigo-50 to-purple-50 
            hover:from-indigo-100 hover:to-purple-100
            border border-indigo-200/50 hover:border-indigo-300/50
            shadow-sm hover:shadow-md
            transition-all duration-200
            gap-3 px-4 py-2
            group sm:w-auto w-full
          ">
          {/* Avatar */}
          <div
            className="
            h-8 w-8 rounded-full 
            bg-gradient-to-br from-indigo-600 to-purple-600 
            text-white text-sm font-semibold
            flex items-center justify-center
            ring-2 ring-white shadow-sm
          ">
            {userInitials}
          </div>

          {/* User Info */}
          <div className="hidden sm:flex flex-col items-start text-right">
            <span className="text-sm font-medium text-slate-900 leading-none">
              {auth.user?.name?.split(" ")[0] || "المستخدم"}
            </span>
            <span className="text-xs text-slate-500 mt-1">
              {isSupplier ? "مورد" : "عميل"}
            </span>
          </div>

          {/* Icon for mobile */}
          <div className="sm:hidden">
            {isSupplier ? (
              <Building2 className="h-5 w-5 text-indigo-700" />
            ) : (
              <User className="h-5 w-5 text-indigo-700" />
            )}
          </div>

          {/* Mobile text */}
          <span className="sm:hidden text-sm font-medium text-indigo-700">
            القائمة
          </span>

          {/* Chevron */}
          <ChevronDown
            className="
            h-4 w-4 text-slate-400 
            transition-transform duration-200
            group-data-[state=open]:rotate-180
            hidden sm:block
          "
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="
          w-72 rounded-2xl border-0 shadow-2xl 
          bg-white/95 backdrop-blur-xl
          ring-1 ring-slate-200/50
          animate-in slide-in-from-top-2 duration-200
        ">
        {/* User Header */}
        <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="flex-1 text-right">
              <div className="flex items-center gap-2 justify-end mb-1">
                <div
                  className={`
                  text-xs font-medium px-2 py-1 rounded-full
                  ${
                    isSupplier
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                      : "bg-slate-100 text-slate-700"
                  }
                `}>
                  {isSupplier ? (
                    <>
                      <Building2 className="w-3 h-3 inline mr-1" />
                      مورد
                    </>
                  ) : (
                    <>
                      <User className="w-3 h-3 inline mr-1" />
                      عميل
                    </>
                  )}
                </div>
              </div>

              <h4 className="font-bold text-slate-900 text-lg leading-tight">
                {auth.user?.name}
              </h4>
              <p className="text-sm text-slate-600 truncate">
                {auth.user?.email}
              </p>
            </div>
            <div
              className="
              h-12 w-12 rounded-full 
              bg-gradient-to-br from-indigo-600 to-purple-600 
              text-white font-semibold
              flex items-center justify-center
              ring-2 ring-white shadow-md
            ">
              {userInitials}
            </div>
          </div>
        </div>

        <div className="p-2">
          {/* Navigation Items */}
          <DropdownMenuGroup className="space-y-1">
            <Link
              href={
                isSupplier
                  ? "/suppliers-dashboard/products"
                  : "/clients-dashboard/overview"
              }
              className="block">
              <DropdownMenuItem
                className="
                h-12 rounded-xl cursor-pointer
                hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50
                hover:border hover:border-indigo-200/50
                transition-all duration-200
                justify-between
                group
              ">
                <div className="flex items-center gap-3">
                  <div
                    className="
                    p-2 rounded-lg bg-gradient-to-r from-indigo-100 to-purple-100
                    group-hover:from-indigo-200 group-hover:to-purple-200
                    transition-all duration-200
                  ">
                    <LayoutDashboard className="w-4 h-4 text-indigo-700" />
                  </div>
                  <span className="font-medium text-slate-900">
                    لوحة التحكم
                  </span>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-400 rotate-[-90deg]" />
              </DropdownMenuItem>
            </Link>

            {!isSupplier ? (
              <Link href="/clients-dashboard/new-order" className="block">
                <DropdownMenuItem
                  className="
                  h-12 rounded-xl cursor-pointer
                  hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50
                  hover:border hover:border-green-200/50
                  transition-all duration-200
                  justify-between
                  group
                ">
                  <div className="flex items-center gap-3">
                    <div
                      className="
                      p-2 rounded-lg bg-gradient-to-r from-green-100 to-emerald-100
                      group-hover:from-green-200 group-hover:to-emerald-200
                      transition-all duration-200
                    ">
                      <ShoppingCart className="w-4 h-4 text-green-700" />
                    </div>
                    <span className="font-medium text-slate-900">
                      إنشاء طلب
                    </span>
                  </div>
                </DropdownMenuItem>
              </Link>
            ) : (
              <Link
                href="/suppliers-dashboard/account-settings"
                className="block">
                <DropdownMenuItem
                  className="
                  h-12 rounded-xl cursor-pointer
                  hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50
                  hover:border hover:border-green-200/50
                  transition-all duration-200
                  justify-between
                  group
                ">
                  <div className="flex items-center gap-3">
                    <div
                      className="
                      p-2 rounded-lg bg-gradient-to-r from-green-100 to-emerald-100
                      group-hover:from-green-200 group-hover:to-emerald-200
                      transition-all duration-200
                    ">
                      <Settings className="w-4 h-4 text-green-700" />
                    </div>
                    <span className="font-medium text-slate-900">
                      الاعدادات
                    </span>
                  </div>
                </DropdownMenuItem>
              </Link>
            )}
          </DropdownMenuGroup>

          <DropdownMenuSeparator className="my-3" />

          {/* Logout */}
          <DropdownMenuItem
            className="
              h-12 rounded-xl cursor-pointer
              hover:bg-red-50 hover:border hover:border-red-200/50
              text-red-600 hover:text-red-700
              transition-all duration-200
              justify-between
              group
            "
            onClick={auth.logout}>
            <div className="flex items-center gap-3">
              <div
                className="
                p-2 rounded-lg bg-red-100
                group-hover:bg-red-200
                transition-all duration-200
              ">
                <LogOut className="w-4 h-4 text-red-600" />
              </div>
              <span className="font-medium">تسجيل الخروج</span>
            </div>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
