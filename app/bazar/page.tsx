import { Navbar } from '@/components/menu/navbar';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Heart, Calendar } from 'lucide-react';

export default function BazarPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <main className="container mx-auto p-8">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-gray-800 mb-4">Bazar Beneficente</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Transforme suas compras em atos de amor. Todo o lucro do nosso bazar é revertido para o tratamento e cuidado dos animais resgatados.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:shadow-xl transition-shadow">
                            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-pink-500">
                                <ShoppingBag size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Produtos Variados</h3>
                            <p className="text-gray-600">
                                Roupas, acessórios, decoração e muito mais. Itens novos e seminovos com preços acessíveis.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:shadow-xl transition-shadow">
                            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500">
                                <Heart size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Ajuda Direta</h3>
                            <p className="text-gray-600">
                                100% do valor arrecadado vai para a compra de ração, medicamentos e cirurgias para os animais.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:shadow-xl transition-shadow">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-500">
                                <Calendar size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Eventos Mensais</h3>
                            <p className="text-gray-600">
                                Realizamos edições especiais todo mês. Fique atento às nossas redes sociais para as próximas datas!
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                        <div className="md:w-1/2 bg-gray-200 min-h-[300px] relative">
                            {/* Placeholder for Bazar Image */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100">
                                <span>Imagem do Bazar</span>
                            </div>
                        </div>
                        <div className="md:w-1/2 p-10 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Como doar para o Bazar?</h2>
                            <p className="text-gray-600 mb-6">
                                Aceitamos doações de roupas, sapatos, acessórios, livros e objetos de decoração em bom estado. Sua doação ajuda a manter nosso projeto vivo!
                            </p>
                            <div className="space-y-2 text-gray-700 font-medium">
                                <p>📍 Ponto de Coleta: Clínica Veterinária Portal Vet</p>
                                <p>⏰ Horário: Seg a Sex, das 09h às 17h</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
