'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface INavLink {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
}
function NavLink({
  href,
  children,
  className = '',
  activeClassName = '',
}: INavLink) {
  const pathname = usePathname();
  const isActive = pathname === 'href';

  return (
    <Link href={href} className={`${className} ${isActive && activeClassName}`}>
      {children}
    </Link>
  );
}

export default NavLink;
