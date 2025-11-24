// app/page.tsx

import { Navbar } from '@/components/menu/navbar';
import { CarouselDemo } from '../components/static_fields/servicosCarousel';
import { Banner_home } from '@/components/static_fields/banner';
import { AdoptionAnimals } from '@/components/static_fields/adoption-animals';
import { LocationMap } from '@/components/static_fields/location-map';
import { MissionBanner } from '@/components/static_fields/mission-banner';
import { EventsList } from '@/components/static_fields/events-list';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex flex-col">
        <CarouselDemo />
        <Banner_home />
        <AdoptionAnimals />
        <LocationMap />
        <MissionBanner />
        <EventsList />
      </main>
    </div>
  );
}