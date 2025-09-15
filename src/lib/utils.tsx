import { queryClient } from "@/providers/ReactQueryProvider";
import useAuth from "@/store/authStore";
import { clsx, type ClassValue } from "clsx";
import { File, FileText, FileVideo, ImageIcon, Music } from "lucide-react";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatFileSize = (bytes: number) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};
export const getFileIcon = (file: File) => {
  const type = file.type;
  if (type.startsWith("image/"))
    return <ImageIcon className="w-8 h-8 text-blue-500" />;
  if (type.startsWith("video/"))
    return <FileVideo className="w-8 h-8 text-purple-500" />;
  if (type.startsWith("audio/"))
    return <Music className="w-8 h-8 text-green-500" />;
  if (type.includes("pdf"))
    return <FileText className="w-8 h-8 text-red-500" />;
  if (type.includes("document") || type.includes("word"))
    return <FileText className="w-8 h-8 text-yellow-500" />;
  return <File className="w-8 h-8 text-gray-500" />;
};

export function buildQueryStringWithBase(
  params: Record<string, unknown>,
  base: string
) {
  const searchParams = new URLSearchParams();
  for (const key in params) {
    if (key.startsWith(base)) {
      if (params[key] !== undefined && params[key] !== null) {
        searchParams.append(key.slice(base.length + 1), String(params[key]));
      }
    }
  }
  return searchParams.toString();
}
export function buildQueryString(params?: Record<string, unknown>) {
  const searchParams = new URLSearchParams();
  for (const key in params) {
    if (
      params[key] !== undefined &&
      params[key] !== null &&
      params[key] !== ""
    ) {
      searchParams.append(key, String(params[key]));
    }
  }
  return searchParams.toString();
}

export function clearState() {
  queryClient.clear();
  useAuth.getState().logout();
}

export const formatMonths = (months: number): string => {
  if (months === 1) return "شهر";
  if (months === 2) return "شهرين";
  if (months <= 10) return `${months} أشهر`;
  if (months === 12) return "سنة";
  if (months === 24) return "سنتين";
  if (months % 12 === 0) return `${months / 12} سنوات`;
  return `${months} شهر`;
};

export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};
