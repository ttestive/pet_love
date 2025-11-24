import { Navbar } from '@/components/menu/navbar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NossaCausaPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <main className="container mx-auto p-8">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="relative h-64 md:h-96">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: "url('/wallpaper_pages/wallpaper_home.png')" }} // Reusing existing asset
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg text-center px-4">
                                Nossa Causa
                            </h1>
                        </div>
                    </div>

                    <div className="p-8 md:p-12 space-y-8 text-gray-700 leading-relaxed text-lg">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-gray-800">Por que existimos?</h2>
                            <p>
                                A Clínica Veterinária Portal Vet nasceu de um sonho: proporcionar saúde e dignidade para todos os animais, independentemente de sua origem. Acreditamos que cada vida importa e que o amor pelos animais deve se traduzir em ações concretas de cuidado e proteção.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-gray-800">Nossa Missão</h2>
                            <p>
                                Nossa missão vai além do atendimento clínico. Trabalhamos incansavelmente para resgatar, tratar e encontrar lares amorosos para animais abandonados. Cada animal que passa por nossas portas recebe não apenas tratamento médico de excelência, mas também o carinho e a atenção que merece.
                            </p>
                        </div>

                        <div className="bg-[#67BED9]/10 p-8 rounded-2xl border border-[#67BED9]/20">
                            <h3 className="text-2xl font-bold text-[#67BED9] mb-4">Como você pode ajudar?</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Adotando um de nossos animais resgatados</li>
                                <li>Sendo um voluntário para lar temporário</li>
                                <li>Participando de nossos eventos e bazares</li>
                                <li>Divulgando nossa causa nas redes sociais</li>
                            </ul>
                        </div>

                        <div className="text-center pt-8">
                            <Link href="/adote">
                                <Button className="bg-[#67BED9] hover:bg-[#5AADC7] text-white text-xl px-10 py-6 rounded-xl shadow-lg transition-transform hover:scale-105">
                                    Quero Adotar
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
