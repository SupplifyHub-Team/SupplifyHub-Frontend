import AdvertisementForm from "@/components/forms/advertisement-form/AdvertisementForm";
import AdsQuotaSection from "@/app/[locale]/(client-side-protected)/suppliers-dashboard/ads/_components/AdsQuotaSection";

export default function page() {
  return (
    <div className="space-y-8">
      <AdsQuotaSection />
      <AdvertisementForm />
    </div>
  );
}
