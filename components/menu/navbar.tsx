'use client';

import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { NavigationLink } from './navigationLink';
import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Página Inicial', active: true },
  { href: '/servicos', label: 'Serviços' },
  { href: '/nossa-causa', label: 'Nossa Causa' },
  { href: '/adote', label: 'Adote' },
  { href: '/#location-map', label: 'Onde Encontrar' },
  { href: '/contribuir', label: 'Contribuir' },
  { href: '/#events-list', label: 'Eventos' },
];

export function Navbar() {
  const currentPath = '/';

  return (
    <header className="sticky top-0 z-50 w-full bg-[#67BED9]/90 backdrop-blur-sm border-b border-[#5AADC7] shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4">

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 pt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-base font-medium hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/" className="text-2xl font-bold text-white tracking-widest">
            PORTAL VET
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavigationLink
              key={item.href}
              href={item.href}
              active={item.href === currentPath}
            >
              {item.label}
            </NavigationLink>
          ))}
        </nav>

        <div className="flex items-center">
          <Link href="/admin">
            <Avatar className="h-9 w-9 border-2 border-white cursor-pointer hover:opacity-80 transition-opacity">
              <AvatarImage src="/images/cat-avatar.png" alt="User Avatar" />
              <AvatarFallback className="bg-white text-[#67BED9] font-semibold">PV</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </header>
  );
}