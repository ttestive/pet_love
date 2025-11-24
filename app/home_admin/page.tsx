// app/page.tsx

import { Navbar } from '@/components/menu/navbar';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
    
      <Navbar />

      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Bem-vindo ao Portal Vet!
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Esta é a sua página Home
        </p>
        
      </main>

    </div>
  );
}