import { Navbar } from '@/components/menu/navbar';
import { Button } from '@/components/ui/button';
import { CheckCircle2, HeartHandshake, Home } from 'lucide-react';
import Link from 'next/link';

export default function ContribuirPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <main className="container mx-auto p-8">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="bg-gradient-to-r from-[#67BED9] to-purple-600 p-12 text-center text-white">
                        <HeartHandshake className="w-20 h-20 mx-auto mb-6 opacity-90" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Colabore com nossa Missão</h1>
                        <p className="text-xl opacity-90">Juntos podemos transformar vidas.</p>
                    </div>

                    <div className="p-8 md:p-12 space-y-10 text-gray-700 leading-relaxed">

                        {/* Adoption Requirements Section */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                                <Home className="text-[#67BED9]" />
                                Requisitos para Adoção
                            </h2>
                            <p className="text-lg">
                                Adotar um animal é um ato de amor, mas também de muita responsabilidade. Para garantir o bem-estar dos nossos animais, estabelecemos alguns critérios para adoção:
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    "Ser maior de 21 anos",
                                    "Apresentar documento de identidade e comprovante de residência",
                                    "Ter residência segura (telas em janelas para gatos, muros altos para cães)",
                                    "Concordar com a entrevista de adoção",
                                    "Assinar termo de responsabilidade",
                                    "Ter condições financeiras para manter o animal (ração, vacinas, veterinário)"
                                ].map((req, index) => (
                                    <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
                                        <CheckCircle2 className="text-green-500 shrink-0 mt-1" />
                                        <span className="font-medium">{req}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <hr className="border-gray-200" />

                        {/* Other ways to help */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-gray-800">Outras formas de ajudar</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-[#67BED9]/10 p-6 rounded-2xl text-center">
                                    <h3 className="font-bold text-[#67BED9] text-xl mb-2">Seja Voluntário</h3>
                                    <p className="text-gray-700 mb-4">Doe seu tempo e carinho para cuidar dos animais na clínica ou em eventos.</p>
                                </div>
                                <div className="bg-purple-50 p-6 rounded-2xl text-center">
                                    <h3 className="font-bold text-purple-800 text-xl mb-2">Doe Ração</h3>
                                    <p className="text-purple-900/70 mb-4">Recebemos doações de ração, medicamentos e produtos de limpeza.</p>
                                </div>
                                <div className="bg-[#EC4899]/10 p-6 rounded-2xl text-center">
                                    <h3 className="font-bold text-[#EC4899] text-xl mb-2">Apadrinhe</h3>
                                    <p className="text-gray-700 mb-4">Ajude a custear o tratamento de um animal específico até que ele seja adotado.</p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center pt-8">
                            <Link href="/adote">
                                <Button className="bg-gradient-to-r from-[#67BED9] to-purple-600 hover:from-[#5AADC7] hover:to-purple-700 text-white text-xl px-10 py-6 rounded-xl shadow-lg transition-transform hover:scale-105">
                                    Ver Animais para Adoção
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
