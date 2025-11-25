"use client";

import { Navbar } from "@/components/menu/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlusCircle, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { PawPrint } from "lucide-react";
import Image from "next/image";

export function GerenciarAnimais() {
  const [animals, setAnimals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedAnimal, setSelectedAnimal] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Novo estado para delete
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [animalToDelete, setAnimalToDelete] = useState<any | null>(null);

  const handleAnimalClick = (animal: any) => {
    setSelectedAnimal(animal);
    setIsModalOpen(true);
  };

  const openDeleteModal = (animal: any) => {
    setAnimalToDelete(animal);
    setDeleteModalOpen(true);
  };

  async function fetchAnimals() {
    try {
      const response = await fetch("http://localhost:3001/animais_clinica");
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      setAnimals(data);
    } catch (error) {
      console.error("Error fetching animals:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAnimals();
  }, []);

  const confirmDelete = async () => {
    if (!animalToDelete) return;

    try {
      const response = await fetch(
        `http://localhost:3001/animais_clinica/${animalToDelete.id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) throw new Error("Erro ao deletar");

      setAnimals((prev) => prev.filter((a) => a.id !== animalToDelete.id));
      setDeleteModalOpen(false);
      setAnimalToDelete(null);
    } catch (err) {
      console.error(err);
      alert("Erro ao excluir animal.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="bg-[#67BED9]/10 border-b border-gray-200">
        <div className="container mx-auto px-6 py-10 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="bg-[#67BED9]/20 p-4 rounded-full">
              <PawPrint className="h-8 w-8 text-[#67BED9]" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Gerenciar Animais
              </h1>
              <p className="text-gray-600">
                Lista completa de animais cadastrados
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-6 py-10 max-w-6xl">
        {loading ? (
          <p className="text-center py-12 text-gray-500">
            Carregando animais...
          </p>
        ) : (
          <div className="grid gap-4">
            {animals.map((animal) => (
              <Card
                key={animal.id}
                className="hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-center p-6">
                  <div className="flex items-center gap-5">
                    <div className="h-20 w-20 bg-gray-200 rounded-full overflow-hidden">
                      <Image
                        src={animal.imageUrl || "/images/cat-avatar.png"}
                        alt={animal.nome}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{animal.nome}</h3>
                      <p className="text-gray-600">
                        {animal.race} • {animal.color || "Cor não informada"}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleAnimalClick(animal)}
                    >
                      Ver detalhes
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => openDeleteModal(animal)}
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

      {/* Modal de detalhes */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{selectedAnimal?.nome}</DialogTitle>
          </DialogHeader>

          {selectedAnimal && (
            <div className="space-y-3">
              <p><strong>Raça:</strong> {selectedAnimal.race}</p>
              <p><strong>Cor:</strong> {selectedAnimal.color}</p>
            </div>
          )}

          <Button
            className="w-full mt-4 bg-[#67BED9]"
            onClick={() => setIsModalOpen(false)}
          >
            Fechar
          </Button>
        </DialogContent>
      </Dialog>

      {/* Modal de confirmação de delete */}
      <Dialog open={deleteModalOpen} onOpenChange={setDeleteModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-red-600">Confirmar exclusão</DialogTitle>
            <DialogDescription>
              Tem certeza que deseja remover <strong>{animalToDelete?.nome}</strong>?
              Isso não poderá ser desfeito.
            </DialogDescription>
          </DialogHeader>

          <div className="flex justify-end gap-3 mt-6">
            <Button variant="outline" onClick={() => setDeleteModalOpen(false)}>
              Cancelar
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Excluir
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
