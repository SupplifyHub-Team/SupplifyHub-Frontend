import { Metadata } from "next";

export const homeMetadata: Metadata = {
  title: "منصة SupplifyHub | ابحث عن الموردين وقدّم RFQ خلال دقائق",
  description:
    "منصة B2B متطورة تربط الفنادق والمطاعم والمقاهي بموردين موثوقين. احصل على عروض أسعار فورية، وفّر حتى 40% من الوقت، وزيد كفاءة التوريد.",
  keywords: "B2B, موردين, فنادق, مطاعم, مقاهي, هوريكا, عروض أسعار, RFQ, توريد",
  authors: [{ name: "SupplifyHub Team" }],
  openGraph: {
    title: "منصة SupplifyHub | ثورة في التوريد للضيافة",
    description:
      "اكتشف آلاف الموردين الموثوقين، احصل على عروض أسعار تنافسية خلال دقائق",
    type: "website",
    locale: "ar_EG",
    siteName: "SupplifyHub",
    images: [
      {
        url: "/placeholder.webp",
        width: 1200,
        height: 630,
        alt: "منصة SupplifyHub",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      "index": true,
      "follow": true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
