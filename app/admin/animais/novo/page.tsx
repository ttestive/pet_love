'use client';

import { Navbar } from '@/components/menu/navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner'; 

// Interface para garantir a tipagem correta do formulário
interface AnimalForm {
    nome: string;
    race: string;
    color: string;
    type: string;
    size: string;
    entrance: string;
    sick: boolean;
    hurted: boolean;
    adopted: boolean;
}

export function CadastrarAnimal() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    
    // Estado do formulário (sem img_url, pois ela é gerada após o upload ou definida como null)
    const [formData, setFormData] = useState<AnimalForm>({
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
    
    // ESTADO NOVO: Armazena o objeto File para upload
    const [imageFile, setImageFile] = useState<File | null>(null); 

    // Lida com inputs de texto e checkbox
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };
    
    // HANDLER NOVO: Lida especificamente com o input type="file"
    const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setImageFile(e.target.files[0]);
        } else {
            setImageFile(null);
        }
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        
        let uploadedImageUrl: string | null = null;
        
        // LÓGICA DE UPLOAD
        if (imageFile) {
            // 🛑 LÓGICA PENDENTE: INTEGRAR O SUPABASE STORAGE AQUI
            // Esta é a parte que exige o SDK do Supabase Client para fazer o upload real
            
            console.log("Arquivo pronto para upload:", imageFile.name);
            
            // Simulação de URL gerada após "upload" (para teste da API):
            // Substitua isso pela URL real retornada pelo seu serviço de storage quando integrar
            uploadedImageUrl = `https://placehold.co/600x400/ECEFF1/607D8B?text=${encodeURIComponent(formData.nome)}`; 
        }

        // 1. Prepara o payload final para o backend
        const payload = {
            ...formData,
            
            // Adiciona a URL da imagem no payload (ou null se não houver)
            img_url: uploadedImageUrl, 
            
            // Converte booleanos para o formato 'Sim'/'Nao' esperado pelo banco
            sick: formData.sick ? 'Sim' : 'Nao',
            hurted: formData.hurted ? 'Sim' : 'Nao',
            adopted: formData.adopted ? 'Sim' : 'Nao', 
            
            // Garante que campos vazios opcionais sejam null
            color: formData.color || null,
        };

        try {
            const response = await fetch('http://localhost:3001/animais_clinica', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // OBS: Adicione o cabeçalho Authorization: Bearer <token> se a rota POST for protegida!
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `Falha no servidor com status: ${response.status}`);
            }

            toast.success('Animal cadastrado com sucesso!');
            router.push('/admin/animais');
            
        } catch (error: any) {
            console.error(error);
            toast.error(`Erro ao cadastrar animal. Detalhes: ${error.message || 'Verifique o backend.'}`);
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
                            {/* Linha 1: Nome e Raça */}
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

                            {/* Linha 2: Cor e Tipo */}
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

                            {/* Linha 3: Porte e Data */}
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

                            {/* MUDANÇA PRINCIPAL: INPUT TYPE="FILE" */}
                            <div className="space-y-2">
                                <Label htmlFor="imageFile">Foto do Animal (Upload)</Label>
                                <Input 
                                    id="imageFile" 
                                    name="imageFile" 
                                    type="file" 
                                    accept="image/*" 
                                    onChange={handleChangeFile} 
                                    className="cursor-pointer"
                                />
                                {imageFile && <p className="text-xs text-gray-500 mt-1">Arquivo selecionado: {imageFile.name}</p>}
                            </div>

                            {/* Checkboxes */}
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
