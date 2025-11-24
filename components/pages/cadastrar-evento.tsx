'use client';

import { Navbar } from '@/components/menu/navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function CadastrarEvento() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        description: '',
        imageUrl: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            console.log("Evento criado:", formData);
            alert('Evento criado com sucesso! (Simulação)');
            setLoading(false);
            router.push('/admin');
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <main className="container mx-auto p-8 max-w-2xl">
                <Card>
                    <CardHeader>
                        <CardTitle>Criar Novo Evento</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="title">Título do Evento</Label>
                                <Input id="title" name="title" value={formData.title} onChange={handleChange} required />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="date">Data</Label>
                                <Input id="date" name="date" type="date" value={formData.date} onChange={handleChange} required />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="imageUrl">URL da Imagem</Label>
                                <Input id="imageUrl" name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="https://..." />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Descrição</Label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    rows={4}
                                />
                            </div>

                            <Button type="submit" className="w-full mt-6 bg-[#EC4899] hover:bg-[#DB2777] text-white" disabled={loading}>
                                {loading ? 'Salvando...' : 'Criar Evento'}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
