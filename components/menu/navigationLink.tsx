// components/navigation-link.tsx
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

export function NavigationLink({ href, children, active = false }: NavigationLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'transition-colors hover:text-white text-sm font-medium',
        active ? 'text-white border-b-2 border-white' : 'text-white/80'
      )}
    >
      {children}
    </Link>
  );
}