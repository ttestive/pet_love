import { Navbar } from '@/components/menu/navbar';
import { Button } from '@/components/ui/button';
import { Syringe, ShieldCheck, Calendar } from 'lucide-react';

export default function VacinacaoPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <main className="container mx-auto p-8">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="bg-[#67BED9] p-12 text-center text-white">
                        <Syringe className="w-20 h-20 mx-auto mb-6 opacity-90" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Vacinação Gratuita</h1>
                        <p className="text-xl opacity-90">Protegendo quem você ama, sem custo algum.</p>
                    </div>

                    <div className="p-8 md:p-12 space-y-8 text-gray-700 leading-relaxed">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                                <ShieldCheck className="text-[#67BED9]" />
                                Por que vacinar?
                            </h2>
                            <p className="text-lg">
                                A vacinação é a forma mais eficaz de proteger seu pet contra doenças graves e muitas vezes fatais. Além de garantir a saúde do seu animal, você contribui para a saúde pública, prevenindo a disseminação de zoonoses.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-[#67BED9]/10 p-6 rounded-2xl">
                                <h3 className="text-xl font-bold text-[#67BED9] mb-3">Vacinas Disponíveis (Cães)</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>V10 (Múltipla)</li>
                                    <li>Antirrábica</li>
                                    <li>Gripe Canina</li>
                                </ul>
                            </div>
                            <div className="bg-[#EC4899]/10 p-6 rounded-2xl">
                                <h3 className="text-xl font-bold text-[#EC4899] mb-3">Vacinas Disponíveis (Gatos)</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>V4 (Múltipla)</li>
                                    <li>Antirrábica</li>
                                    <li>Leucemia Felina (FeLV)</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gray-100 p-8 rounded-2xl border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                                <Calendar className="text-gray-600" />
                                Próximas Campanhas
                            </h3>
                            <p className="mb-4">
                                Realizamos campanhas de vacinação gratuita mensalmente. Fique atento às datas e locais!
                            </p>
                            <div className="space-y-2 font-medium text-gray-700">
                                <p>📅 Data: Todo primeiro sábado do mês</p>
                                <p>⏰ Horário: 08h às 14h</p>
                                <p>📍 Local: Estacionamento da Clínica Portal Vet</p>
                            </div>
                        </div>

                        <div className="text-center pt-4">
                            <p className="text-sm text-gray-500 mb-4">* Necessário levar carteirinha de vacinação (se tiver) e documento do tutor.</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
