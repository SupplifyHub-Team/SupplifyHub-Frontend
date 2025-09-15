import HeroSection from "@/app/[locale]/(main)/(home)/_components/sections/HeroSection";
import HowItWorksSection from "@/app/[locale]/(main)/(home)/_components/sections/HowItWorksSection";
import ValuePropositionSection from "@/app/[locale]/(main)/(home)/_components/sections/ValuePropositionSection/ValuePropositionSection";

import FAQSection from "@/app/[locale]/(main)/(home)/_components/sections/FAQSection";
import CTASection from "@/app/[locale]/(main)/(home)/_components/sections/CTASection";
import StructuredData from "@/app/[locale]/(main)/(home)/_components/StructuredData";
import { getCategoriesServer } from "@/services/categoriesServices";
import Categories from "@/app/[locale]/(main)/(home)/_components/sections/categories-section/Categories";
import { fetchAdvertisements } from "@/services/advertisementsServices";
import CarouselSection from "@/components/CarouselSection";
import PricingSection from "./_components/sections/pricing-plans/PricingSection";
import { homeMetadata } from "@/config/metadata";


export const metadata = homeMetadata;

export const revalidate = 3600;

export default async function HomePage() {
  const categories = await getCategoriesServer();
  const advertisements = await fetchAdvertisements();
  return (
    <>
      <StructuredData />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
        <HeroSection />
        <CarouselSection advertisements={advertisements} />
        <HowItWorksSection />
        <PricingSection />
        <Categories categories={categories} />
        <ValuePropositionSection />
        <FAQSection />
        <CTASection />
      </main>
    </>
  );
}
