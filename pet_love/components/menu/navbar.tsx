// components/navbar.tsx
'use client';

import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { NavigationLink } from './navigationLink'; // Assumindo que você criou o componente NavigationLink
import Link from 'next/link';

// Defina seus links em um array para facilitar a manutenção
const navItems = [
  { href: '/', label: 'Página Inicial', active: true }, // Adicione 'active' para o link sublinhado
  { href: '/servicos', label: 'Serviços' },
  { href: '/nosso-curso', label: 'Nosso Curso' },
  { href: '/adote', label: 'Adote' },
  { href: '/onde-encontrar', label: 'Onde Encontrar' },
  { href: '/contribuir', label: 'Contribuir' },
  { href: '/eventos', label: 'Eventos' },
];

export function Navbar() {
  // Simulação da URL atual para destacar o link ativo
  const currentPath = '/'; // Você usaria usePathname() do next/navigation

  return (
    <header className="sticky top-0 z-50 w-full bg-blue-400/90 backdrop-blur-sm border-b border-blue-500 shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logotipo e Menu Hambúrguer (Mobile) */}
        <div className="flex items-center space-x-4">
          
          {/* Menu Hambúrguer (visível apenas em telas pequenas) */}
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
          
          {/* Logotipo */}
          <Link href="/" className="text-2xl font-bold text-white tracking-widest">
            PORTAL VET
          </Link>
        </div>

        {/* Links de Navegação (Desktop) */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavigationLink
              key={item.href}
              href={item.href}
              active={item.href === currentPath} // Lógica para destacar o link ativo
            >
              {item.label}
            </NavigationLink>
          ))}
        </nav>

        {/* Avatar/Perfil do Usuário */}
        <div className="flex items-center">
          <Avatar className="h-9 w-9 border-2 border-white cursor-pointer hover:opacity-80 transition-opacity">
            <AvatarImage src="/images/cat-avatar.png" alt="User Avatar" /> {/* Ajuste o caminho da imagem */}
            <AvatarFallback className="bg-white text-blue-400 font-semibold">PV</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}