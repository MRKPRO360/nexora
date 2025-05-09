'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface INavLink {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  toggleSidebar?: () => void;
}
function NavLink({
  href,
  children,
  className = '',
  activeClassName = '',
  toggleSidebar,
}: INavLink) {
  const pathname = usePathname();
  const isActive = pathname === 'href';

  return (
    <Link
      onClick={() => {
        if (!toggleSidebar) return;
        toggleSidebar();
      }}
      href={href}
      className={`${className} ${isActive && activeClassName}`}
    >
      {children}
    </Link>
  );
}

export default NavLink;
