import Link from 'next/link';

interface propsLink {
    className?: string,
    href: string,
    prefetch?: boolean,
    role?: string,
    onClick?: () => void,
    children: React.ReactNode
}

export const LinkEst = ({ href, className, prefetch = false, onClick, children }:propsLink)=>{
  return (
    <Link
      href={href}
      className={className}
      prefetch={prefetch}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};