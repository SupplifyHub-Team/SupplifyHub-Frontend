"use client";
import { Link, usePathname } from "@/i18n/navigation";

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
  activeClassName: string;
  nonActiveClassName: string;
  className?: string;
};

const NavLink = ({
  children,
  href,
  activeClassName,
  nonActiveClassName,
  className,
  ...rest
}: NavLinkProps) => {
  const pathname = usePathname();

  // detect active route
  const isActive = pathname === href || pathname.includes(href + "/");

  const newClassName = `${isActive ? activeClassName : nonActiveClassName} ${
    className ?? ""
  }`;

  return (
    <Link href={href} className={newClassName} {...rest}>
      {children}
    </Link>
  );
};

export default NavLink;
