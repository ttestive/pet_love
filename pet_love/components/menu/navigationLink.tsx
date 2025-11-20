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
        'transition-colors hover:text-foreground/100 text-sm font-medium',
        active ? 'text-foreground border-b-2 border-foreground/100' : 'text-foreground/60'
      )}
    >
      {children}
    </Link>
  );
}