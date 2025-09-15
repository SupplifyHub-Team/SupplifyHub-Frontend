import Logo from "../Logo";
import UserDropdown from "../UserDropdown";
import ClientDashboardSidebarMobile from "./ClientDashboardSidebarMobile";

export default function ClientDashboardHeader() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 p-4 sticky top-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div>
            <Logo />
          </div>
          <div className="lg:hidden block">
            <ClientDashboardSidebarMobile />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <UserDropdown />
        </div>
      </div>
    </header>
  );
}
