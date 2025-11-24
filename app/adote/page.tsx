'use client';

import { Navbar } from '@/components/menu/navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { AnimalModal } from '@/components/animal-modal';

// Mock data for fallback
const mockAnimals = [
    { id: 1, nome: "Filhote", race: "Gato", imageUrl: "/images/cat-avatar.png", color: "Branco", size: "Pequeno", type: "Gato" },
    { id: 2, nome: "Serena", race: "Gato", imageUrl: "/images/cat-avatar.png", color: "Preto", size: "Médio", type: "Gato" },
    { id: 3, nome: "Cássia", race: "Gato", imageUrl: "/images/cat-avatar.png", color: "Malhado", size: "Pequeno", type: "Gato" },
    { id: 4, nome: "Mônica", race: "Gato", imageUrl: "/images/cat-avatar.png", color: "Laranja", size: "Médio", type: "Gato" },
    { id: 5, nome: "Tobias", race: "Gato", imageUrl: "/images/cat-avatar.png", color: "Cinza", size: "Grande", type: "Gato" },
    { id: 6, nome: "Rex", race: "Cachorro", imageUrl: "/images/cat-avatar.png", color: "Marrom", size: "Grande", type: "Cachorro" },
];

export default function AdotePage() {
    const [animals, setAnimals] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedAnimal, setSelectedAnimal] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        async function fetchAnimals() {
            try {
                const response = await fetch('http://localhost:3001/animais_clinica');
                if (!response.ok) throw new Error('Failed to fetch');
                const data = await response.json();
                setAnimals(data);
            } catch (error) {
                console.error("Error fetching animals, using mock data:", error);
                setAnimals(mockAnimals);
            } finally {
                setLoading(false);
            }
        }

        fetchAnimals();
    }, []);

    const handleAnimalClick = (animal: any) => {
        setSelectedAnimal(animal);
        setIsModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="container mx-auto p-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Animais para Adoção</h1>
                    <p className="text-xl text-gray-600">Encontre seu novo melhor amigo</p>
                </div>

                {loading ? (
                    <div className="text-center text-gray-500 text-xl">Carregando...</div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {animals.map((animal) => (
                            <Card
                                key={animal.id || animal.nome}
                                className="overflow-hidden hover:shadow-lg transition-shadow rounded-2xl border-none shadow-md cursor-pointer"
                                onClick={() => handleAnimalClick(animal)}
                            >
                                <div className="h-64 bg-gray-200 relative group">
                                    <img
                                        src={animal.imageUrl || "/images/cat-avatar.png"}
                                        alt={animal.nome}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <CardContent className="p-6 text-center">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{animal.nome}</h3>
                                    <p className="text-gray-500 mb-4">{animal.race || "Sem raça definida"}</p>
                                    <Button className="w-full bg-[#67BED9] hover:bg-[#5AADC7] text-white font-bold rounded-xl py-6">
                                        Quero Adotar
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}

                <AnimalModal
                    animal={selectedAnimal}
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            </main>
        </div>
    );
}
