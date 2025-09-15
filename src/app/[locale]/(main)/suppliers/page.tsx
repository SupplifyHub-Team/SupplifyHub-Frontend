import { fetchSuppliers } from "@/services/suppliersServices";
import { SUPPLIERS_PAGE_SIZE } from "@/lib/constants";
import SuppliersHero from "./_components/SuppliersHero";
import SuppliersMainContent from "./_components/SuppliersMainContent";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { suppliersMetadata } from "@/config/metadata";

export const metadata = suppliersMetadata;

export const revalidate = 60;

export default async function SuppliersPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const suppliers = await fetchSuppliers({
    ...(await searchParams),
    pageSize: SUPPLIERS_PAGE_SIZE,
  });

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
      dir="rtl">
      <SuppliersHero />
      <SuppliersMainContent initialSuppliers={suppliers} />
      <ScrollToTopButton />
    </div>
  );
}
