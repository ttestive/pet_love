'use client';

import { Navbar } from '@/components/menu/navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function NovoAnimalPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        nome: '',
        race: '',
        color: '',
        type: '',
        size: '',
        entrance: new Date().toISOString().split('T')[0],
        sick: false,
        hurted: false,
        adopted: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('http://localhost:3001/animais_clinica', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Erro ao cadastrar');
            }

            toast.success('Animal cadastrado com sucesso!');
            router.push('/admin/animais');
        } catch (error) {
            console.error(error);
            toast.error('Erro ao cadastrar animal. Verifique se o backend está rodando.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <main className="container mx-auto p-8 max-w-2xl">
                <Card>
                    <CardHeader>
                        <CardTitle>Cadastrar Novo Animal</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="nome">Nome</Label>
                                    <Input id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="race">Raça</Label>
                                    <Input id="race" name="race" value={formData.race} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="color">Cor</Label>
                                    <Input id="color" name="color" value={formData.color} onChange={handleChange} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="type">Tipo (Cão/Gato)</Label>
                                    <Input id="type" name="type" value={formData.type} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="size">Porte</Label>
                                    <Input id="size" name="size" value={formData.size} onChange={handleChange} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="entrance">Data de Entrada</Label>
                                    <Input id="entrance" name="entrance" type="date" value={formData.entrance} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="flex space-x-6 pt-4">
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        id="sick"
                                        name="sick"
                                        checked={formData.sick}
                                        onChange={handleChange}
                                        className="h-4 w-4 rounded border-gray-300 text-[#67BED9] focus:ring-[#67BED9]"
                                    />
                                    <Label htmlFor="sick">Doente?</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        id="hurted"
                                        name="hurted"
                                        checked={formData.hurted}
                                        onChange={handleChange}
                                        className="h-4 w-4 rounded border-gray-300 text-[#67BED9] focus:ring-[#67BED9]"
                                    />
                                    <Label htmlFor="hurted">Machucado?</Label>
                                </div>
                            </div>

                            <Button type="submit" className="w-full mt-6 bg-[#67BED9] hover:bg-[#5AADC7] text-white" disabled={loading}>
                                {loading ? 'Salvando...' : 'Cadastrar Animal'}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
