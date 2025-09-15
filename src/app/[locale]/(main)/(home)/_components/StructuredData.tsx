export default function StructuredData() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SupplifyHub",
      "alternateName": "SupplifyHub",
      "url": "https://SupplifyHub.com",
      "logo": "https://SupplifyHub.com/logo.png",
      "description":
        "منصة B2B متطورة تربط الفنادق والمطاعم والمقاهي بموردين موثوقين في الشرق الأوسط",
      "foundingDate": "2024",
      "sameAs": [
        "https://twitter.com/SupplifyHub_horeca",
        "https://linkedin.com/company/SupplifyHub-horeca",
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+966-xxx-xxx-xxx",
        "contactType": "Customer Service",
        "availableLanguage": ["Arabic", "English"],
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "EG",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "SupplifyHub Platform",
      "description":
        "منصة توريد ذكية للفنادق والمطاعم - احصل على عروض أسعار من موردين موثوقين خلال دقائق",
      "brand": {
        "@type": "Brand",
        "name": "SupplifyHub",
      },
      "offers": [
        {
          "@type": "Offer",
          "name": "Free Plan",
          "price": "0",
          "priceCurrency": "EGP",
          "description": "خطة مجانية تشمل 5 طلبات توريد شهريًا",
        },
        {
          "@type": "Offer",
          "name": "Basic Plan",
          "price": "700",
          "priceCurrency": "EGP",
          "description": "خطة أساسية تشمل 25 طلب توريد شهريًا مع مميزات إضافية",
        },
        {
          "@type": "Offer",
          "name": "Premium Plan",
          "price": "1000",
          "priceCurrency": "EGP",
          "description": "خطة متقدمة مع طلبات غير محدودة ومدير حساب مخصص",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "SupplifyHub",
      "url": "https://SupplifyHub.com",
      "description": "منصة التوريد الذكية للضيافة والمطاعم",
      "inLanguage": ["ar-SA", "en-US"],
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://SupplifyHub.com/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
