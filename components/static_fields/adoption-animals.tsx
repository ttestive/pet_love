'use client';

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AnimalModal } from "@/components/animal-modal";
import { useState, useEffect } from "react";

export function AdoptionAnimals() {
  const [animals, setAnimals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAnimal, setSelectedAnimal] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAnimalClick = (animal: any) => {
    setSelectedAnimal(animal);
    setIsModalOpen(true);
  };

  // 🔥 Busca animais da API
  useEffect(() => {
    fetchAnimals();
  }, []);

  async function fetchAnimals() {
    try {
      const response = await fetch("http://localhost:3001/animais_clinica");

      if (!response.ok) {
        throw new Error("Erro ao buscar animais!");
      }

      const data = await response.json();
      setAnimals(data);
    } catch (err) {
      console.error("❌ Erro ao carregar animais:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Animais Para Adoção</h2>
        <p className="text-xl text-gray-600">Conheça os novos membros da nossa família ❤️</p>
      </div>

      <div className="container mx-auto px-4">
        {loading ? (
          <p className="text-center text-gray-500 py-10">Carregando animais...</p>
        ) : animals.length === 0 ? (
          <p className="text-center text-gray-500 py-10">
            Nenhum animal disponível para adoção no momento.
          </p>
        ) : (
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {animals.map((animal) => (
                <CarouselItem
                  key={animal.id}
                  className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="p-1">
                    <Card
                      className="border-none shadow-none cursor-pointer group"
                      onClick={() => handleAnimalClick(animal)}
                    >
                      <CardContent className="flex flex-col items-center p-0">
                        <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-100 group-hover:border-blue-300 transition-colors">
                          <img
                            src={animal.imageUrl || "/images/cat-avatar.png"}
                            alt={animal.nome}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <h3 className="mt-4 text-xl font-bold text-gray-800 group-hover:text-blue-500 transition-colors">
                          {animal.nome}
                        </h3>
                        <p className="text-gray-500">{animal.race}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
      </div>

      {/* Modal */}
      <AnimalModal
        animal={selectedAnimal}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
