import Account from "@/components/account-settings/Account";
import SupplierAccountSettingsHeader from "./_components/SupplierAccountSettingsHeader";

export default function page() {
  return (
    <>
      <SupplierAccountSettingsHeader />

      <Account />
    </>
  );
}
