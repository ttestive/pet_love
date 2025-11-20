// app/page.tsx

import { Navbar } from '@/components/menu/navbar';
import { CarouselDemo } from './core/services/servicosCarousel';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
    
      <Navbar />

      <main className="container mx-auto p-8">
        <CarouselDemo/>
      </main>

    </div>
  );
}