'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface propsLink {
  className?: string;
  href: string;
  prefetch?: boolean;
  role?: string;
  onClick?: () => void;
  children: React.ReactNode;
  serverSide?: boolean;
}

export const LinkEst = ({ 
  href, 
  className, 
  prefetch = false,
  role = 'link', 
  onClick, 
  serverSide = true,
  children 
}:propsLink)=>{
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick();
    }

    if (serverSide) {
      // Forçar navegação do lado do servidor
      e.preventDefault();
      window.location.href = href;
    } else {
      // Navegação do lado do cliente
      e.preventDefault();
      router.push(href);
    }
  };

  return (
    <Link
      href={href}
      className={className}
      prefetch={prefetch}
      onClick={handleClick}
      role={role}
    >
      {children}
    </Link>
  );
};