'use client';

import { Navbar } from '@/components/menu/navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlusCircle, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { PawPrint } from 'lucide-react'; // ícone bonitinho pro header

export function GerenciarAnimais() {
    const [animals, setAnimals] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAnimals();
    }, []);

    async function fetchAnimals() {
        try {
            const response = await fetch('http://localhost:3001/animais_clinica');
            if (!response.ok) throw new Error('Failed to fetch');
            const data = await response.json();
            setAnimals(data);
        } catch (error) {
            console.error("Error fetching animals:", error);
            setAnimals([
                { id: 1, nome: "Filhote", race: "Gato", color: "Branco e cinza", imageUrl: "/images/cat-avatar.png" },
                { id: 2, nome: "Serena", race: "Gato", color: "Preto", imageUrl: "/images/cat-avatar.png" },
                { id: 3, nome: "Rex", race: "Cão", color: "Caramelo", imageUrl: "/images/dog-avatar.png" },
            ]);
        } finally {
            setLoading(false);
        }
    }

    const handleDelete = (id: number) => {
        // alert("Funcionalidade de remoção ainda não implementada no backend.");
        setAnimals(animals.filter(a => a.id !== id));
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Header bonito igual ao seu card anterior */}
            <div className="bg-[#67BED9]/10 border-b border-gray-200">
                <div className="container mx-auto px-6 py-10">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="bg-[#67BED9]/20 p-4 rounded-full">
                                <PawPrint className="h-8 w-8 text-[#67BED9]" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-gray-800">Gerenciar Animais</h1>
                                <p className="text-gray-600 mt-1">Lista completa de animais cadastrados para adoção e tratamento</p>
                            </div>
                        </div>

                        <Link href="/admin/animais/cadastro">
                            <Button className="bg-[#67BED9] hover:bg-[#5AADC7] text-white font-medium">
                                <PlusCircle className="mr-2 h-5 w-5" />
                                Novo Animal
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            <main className="container mx-auto px-6 py-10 max-w-6xl">
                {loading ? (
                    <div className="text-center py-12 text-gray-500">Carregando animais...</div>
                ) : animals.length === 0 ? (
                    <Card className="text-center py-16">
                        <CardContent>
                            <p className="text-gray-500 text-lg">Nenhum animal cadastrado ainda.</p>
                            <Link href="/admin/animais/cadastro">
                                <Button className="mt-6 bg-[#67BED9] hover:bg-[#5AADC7]">
                                    <PlusCircle className="mr-2 h-5 w-5" />
                                    Cadastrar o primeiro animal
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                ) : (
                    <div className="grid gap-4">
                        {animals.map((animal) => (
                            <Card
                                key={animal.id}
                                className="hover:shadow-md transition-shadow duration-200 overflow-hidden"
                            >
                                <div className="flex items-center justify-between p-6">
                                    <div className="flex items-center gap-5">
                                        <div className="h-20 w-20 bg-gray-200 border-2 border-dashed rounded-full overflow-hidden flex-shrink-0">
                                            <img
                                                src={animal.imageUrl || "/images/cat-avatar.png"}
                                                alt={animal.nome}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800">{animal.nome}</h3>
                                            <p className="text-gray-600">
                                                {animal.race} • {animal.color || "Cor não informada"}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Button variant="outline" size="sm" asChild>
                                            <Link href={`/admin/animais/${animal.id}`}>
                                                Ver detalhes
                                            </Link>
                                        </Button>
                                        <Button
                                            variant="destructive"
                                            size="icon"
                                            onClick={() => handleDelete(animal.id)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}