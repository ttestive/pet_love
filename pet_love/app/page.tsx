// app/page.tsx

import { Navbar } from '@/components/menu/navbar';
import { CarouselDemo } from '../components/static_fields/servicosCarousel';
import { Banner_home } from '@/components/static_fields/banner';
import { AnimaisAdocaoCarousel } from '@/components/static_fields/previewCatalog';
import { Localizacao } from '@/components/localizacao';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
    
      <Navbar />

      <main className="container mx-auto p-8">
        <CarouselDemo/>


        <Banner_home/>

        <AnimaisAdocaoCarousel/>

        <Localizacao/>
      </main>


    </div>
  );
}