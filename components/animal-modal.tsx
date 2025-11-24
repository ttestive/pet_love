'use client';

import { X, Heart, Calendar, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

interface Animal {
    id: number;
    nome: string;
    race: string;
    imageUrl: string;
    color?: string;
    type?: string;
    size?: string;
    entrance?: string;
    sick?: boolean;
    hurted?: boolean;
    adopted?: boolean;
    description?: string;
}

interface AnimalModalProps {
    animal: Animal | null;
    isOpen: boolean;
    onClose: () => void;
}

export function AnimalModal({ animal, isOpen, onClose }: AnimalModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !animal) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
            <div
                className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden relative animate-in fade-in zoom-in duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                >
                    <X className="w-6 h-6 text-gray-600" />
                </button>

                <div className="flex flex-col md:flex-row h-full">
                    {/* Image Section */}
                    <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-100 relative">
                        <img
                            src={animal.imageUrl || "/images/cat-avatar.png"}
                            alt={animal.nome}
                            className="w-full h-full object-cover"
                        />
                        {animal.adopted && (
                            <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                                Adotado
                            </div>
                        )}
                    </div>

                    {/* Details Section */}
                    <div className="w-full md:w-1/2 p-8 flex flex-col">
                        <div className="mb-6">
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">{animal.nome}</h2>
                            <p className="text-xl text-[#67BED9] font-medium">{animal.race || "Raça indefinida"}</p>
                        </div>

                        <div className="space-y-4 flex-grow">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <p className="text-gray-500">Cor</p>
                                    <p className="font-medium text-gray-800">{animal.color || "N/A"}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">Porte</p>
                                    <p className="font-medium text-gray-800">{animal.size || "N/A"}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">Tipo</p>
                                    <p className="font-medium text-gray-800">{animal.type || "N/A"}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">Entrada</p>
                                    <p className="font-medium text-gray-800 flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {animal.entrance ? new Date(animal.entrance).toLocaleDateString('pt-BR') : "N/A"}
                                    </p>
                                </div>
                            </div>

                            {(animal.sick || animal.hurted) && (
                                <div className="bg-red-50 p-4 rounded-xl border border-red-100 mt-4">
                                    <h4 className="text-red-800 font-bold flex items-center gap-2 mb-1">
                                        <AlertCircle className="w-4 h-4" />
                                        Observações de Saúde
                                    </h4>
                                    <ul className="text-sm text-red-700 list-disc list-inside">
                                        {animal.sick && <li>Animal em tratamento (doente)</li>}
                                        {animal.hurted && <li>Animal ferido/recuperando</li>}
                                    </ul>
                                </div>
                            )}

                            <div className="mt-4">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {animal.description || "Este animal está a espera de um lar amoroso. Venha conhecê-lo pessoalmente em nossa clínica!"}
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <a href="https://wa.me/5561982080204" target="_blank" rel="noopener noreferrer" className="w-full">
                                <Button className="w-full bg-[#67BED9] hover:bg-[#5AADC7] text-white font-bold py-6 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all">
                                    <Heart className="mr-2 w-5 h-5" />
                                    Quero Adotar
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
