import { Navbar } from '@/components/menu/navbar';
import { Button } from '@/components/ui/button';
import { Scissors, Heart, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function CastracaoPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <main className="container mx-auto p-8">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="bg-[#EC4899] p-12 text-center text-white">
                        <Scissors className="w-20 h-20 mx-auto mb-6 opacity-90" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Castração Gratuita</h1>
                        <p className="text-xl opacity-90">Um ato de amor e responsabilidade.</p>
                    </div>

                    <div className="p-8 md:p-12 space-y-8 text-gray-700 leading-relaxed">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                                <Heart className="text-[#EC4899]" />
                                Benefícios da Castração
                            </h2>
                            <p className="text-lg">
                                A castração é fundamental para o controle populacional de cães e gatos, evitando o abandono. Além disso, previne diversas doenças como câncer de mama, infecções uterinas e problemas de próstata, aumentando a expectativa de vida do seu pet.
                            </p>
                        </div>

                        <div className="bg-yellow-50 p-8 rounded-2xl border border-yellow-200">
                            <h3 className="text-2xl font-bold text-yellow-800 mb-4 flex items-center gap-3">
                                <AlertCircle className="text-yellow-600" />
                                Como participar?
                            </h3>
                            <p className="mb-4 text-yellow-900/80">
                                Nosso programa de castração gratuita é destinado a famílias de baixa renda e animais resgatados. O cadastro deve ser feito presencialmente ou através do nosso formulário online (quando disponível).
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-yellow-900/80 font-medium">
                                <li>Animais a partir de 6 meses de idade</li>
                                <li>Jejum de 8 horas (água e comida) no dia da cirurgia</li>
                                <li>Exames de sangue pré-operatórios (realizados na clínica)</li>
                            </ul>
                        </div>

                        <div className="text-center pt-8">
                            <p className="text-lg text-gray-600 mb-6">
                                Tem interesse? Entre em contato para verificar a disponibilidade de vagas.
                            </p>
                            <Link href="/onde-encontrar">
                                <Button className="bg-[#EC4899] hover:bg-[#DB2777] text-white text-xl px-10 py-6 rounded-xl shadow-lg transition-transform hover:scale-105">
                                    Entrar em Contato
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
