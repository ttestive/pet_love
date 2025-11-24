import { Navbar } from '@/components/menu/navbar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <main className="flex flex-col">
                {/* Hero Section */}
                <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: 'url("/images/hero-services.jpg")' }} // Assuming a placeholder or generic image
                    >
                        <div className="absolute inset-0 bg-black/50"></div>
                    </div>

                    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg tracking-tight">
                            Nossos Serviços
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-light">
                            Cuidado completo e especializado para garantir a saúde e felicidade do seu melhor amigo.
                        </p>
                    </div>
                </section>

                {/* Cirurgia */}
                <section id="cirurgia" className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="w-full md:w-1/2">
                                <img
                                    src="/carrousel/surgery_item.png"
                                    alt="Cirurgia Veterinária"
                                    className="rounded-2xl shadow-xl w-full h-[400px] object-cover hover:scale-[1.02] transition-transform duration-500"
                                />
                            </div>
                            <div className="w-full md:w-1/2 space-y-6">
                                <h2 className="text-4xl font-bold text-gray-800">Cirurgia Geral e Especializada</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Contamos com um centro cirúrgico moderno e equipado para realizar diversos tipos de procedimentos,
                                    desde castrações eletivas até cirurgias complexas de tecidos moles e ortopédicas.
                                </p>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#67BED9] rounded-full"></span>
                                        Monitoramento anestésico avançado
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#67BED9] rounded-full"></span>
                                        Equipe especializada
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#67BED9] rounded-full"></span>
                                        Recuperação assistida
                                    </li>
                                </ul>
                                <a href="https://wa.me/5561982080204" target="_blank" rel="noopener noreferrer" className="inline-block mt-4">
                                    <Button className="bg-[#67BED9] hover:bg-[#5AADC7] text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
                                        Agendar Avaliação
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Consultas */}
                <section id="consultas" className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                            <div className="w-full md:w-1/2">
                                <img
                                    src="/carrousel/schedule_item.jpg"
                                    alt="Consultas Veterinárias"
                                    className="rounded-2xl shadow-xl w-full h-[400px] object-cover hover:scale-[1.02] transition-transform duration-500"
                                />
                            </div>
                            <div className="w-full md:w-1/2 space-y-6">
                                <h2 className="text-4xl font-bold text-gray-800">Consultas Clínicas</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Atendimento clínico completo para prevenção, diagnóstico e tratamento.
                                    Nossos veterinários estão preparados para acolher seu pet com todo carinho e profissionalismo.
                                </p>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#EC4899] rounded-full"></span>
                                        Check-up geral
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#EC4899] rounded-full"></span>
                                        Pediatria e Geriatria
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#EC4899] rounded-full"></span>
                                        Especialidades médicas
                                    </li>
                                </ul>
                                <a href="https://wa.me/5561982080204" target="_blank" rel="noopener noreferrer" className="inline-block mt-4">
                                    <Button className="bg-[#EC4899] hover:bg-[#D61F69] text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
                                        Marcar Consulta
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vacinas */}
                <section id="vacinas" className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="w-full md:w-1/2">
                                <img
                                    src="/carrousel/injection_item.jpg"
                                    alt="Vacinação"
                                    className="rounded-2xl shadow-xl w-full h-[400px] object-cover hover:scale-[1.02] transition-transform duration-500"
                                />
                            </div>
                            <div className="w-full md:w-1/2 space-y-6">
                                <h2 className="text-4xl font-bold text-gray-800">Vacinação e Imunização</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    A prevenção é o melhor remédio. Mantenha a carteirinha de vacinação do seu pet em dia
                                    para protegê-lo contra doenças graves e contagiosas.
                                </p>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#67BED9] rounded-full"></span>
                                        Vacinas importadas
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#67BED9] rounded-full"></span>
                                        Protocolos personalizados
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#67BED9] rounded-full"></span>
                                        Controle de parasitas
                                    </li>
                                </ul>
                                <a href="https://wa.me/5561982080204" target="_blank" rel="noopener noreferrer" className="inline-block mt-4">
                                    <Button className="bg-[#67BED9] hover:bg-[#5AADC7] text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
                                        Atualizar Vacinas
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
