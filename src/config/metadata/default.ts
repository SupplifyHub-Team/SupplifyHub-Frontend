// src/config/metadata/default.ts
import { Metadata } from "next";
import site from "../site";

export const defaultMetadata: Metadata = {
  title: {
    default: `${site.name} | تسهيل الأعمال التجارية بين الشركات`,
    template: `%s | ${site.name}`,
  },
  description:
    "منصة متكاملة لتسهيل الأعمال التجارية بين الشركات (B2B)، حيث يمكن للشركات العثور على الموردين والعملاء بسهولة.",
  keywords: ["B2B", "SupplifyHub", "موردين", "عملاء", "استيراد", "تصدير"],
  metadataBase: new URL(site.url),
  openGraph: {
    type: "website",
    locale: "ar_AR",
    siteName: site.name,
    images: [
      {
        url: "/placeholder.webp",
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};
