'use client';

import { Navbar } from '@/components/menu/navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Eye, EyeOff } from 'lucide-react';

interface LoginForm {
    email: string;
    senha: string;
}

export function LoginUsuario() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState<LoginForm>({
        email: '',
        senha: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('http://localhost:3001/login', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `Erro: ${response.status}`);
            }

            // const data = await response.json();
            // localStorage.setItem('token', data.token);

            toast.success('Login realizado com sucesso!');
            router.push('/admin');

        } catch (error: any) {
            console.error(error);
            toast.error(error.message || 'Erro ao realizar login.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <main className="container mx-auto p-8 max-w-lg flex items-center justify-center min-h-[80vh]">
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="text-center">Login Administrativo</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input 
                                    id="email" 
                                    name="email" 
                                    type="email"
                                    placeholder="admin@clinica.com"
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="senha">Senha</Label>
                                <div className="relative">
                                    <Input 
                                        id="senha" 
                                        name="senha" 
                                        type={showPassword ? "text" : "password"} 
                                        value={formData.senha} 
                                        onChange={handleChange} 
                                        required
                                        className="pr-10" 
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                                        aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4" />
                                        ) : (
                                            <Eye className="h-4 w-4" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <Button 
                                type="submit" 
                                className="w-full mt-6 bg-[#67BED9] hover:bg-[#5AADC7] text-white" 
                                disabled={loading}
                            >
                                {loading ? 'Acessando...' : 'Entrar'}
                            </Button>
                        </form>
                        <p className="mt-4 text-xs text-center text-gray-500">
                            Área restrita a funcionários da Clínica
                        </p>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}