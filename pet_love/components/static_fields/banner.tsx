// components/causa-banner.tsx (Ajustado)

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; 

// URL da sua imagem de colagem
const BACKGROUND_IMAGE_URL = '/wallpaper_pages/wallpaper_home.png'; // Altere este caminho conforme a localização do seu arquivo!

export function Banner_home() {
    return (
        // O elemento principal agora preencherá a largura total (w-full)
        <section className="relative w-full h-[500px] overflow-hidden">
            
            {/* 1. Imagem Única de Fundo (Colagem) */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                    backgroundImage: `url(${BACKGROUND_IMAGE_URL})`,
                    // A imagem em si não precisa de desfoque
                }}
            />

            {/* 2. Camada Escura de Sobreposição (Mantida para contraste) */}
            <div className="absolute inset-0 bg-black/10" /> 
            
            {/* 3. Conteúdo Central DENTRO do Retângulo Desfocado */}
            <div className="relative z-10 flex items-center justify-center h-full w-full">
                
                {/* 🔑 NOVO: O Retângulo Translúcido e Desfocado */}
                <div 
                    className="
                        p-10 md:p-12 
                        bg-white/10 
                        backdrop-blur-md 
                        rounded-xl 
                        shadow-2xl 
                        max-w-3xl 
                        mx-4 
                        flex flex-col items-center text-center
                    "
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
                        Conheça nossa Causa
                    </h2>

                    <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
                        Descubra os benefícios de dar um lar a um animal resgatado ao conhecer quem faz/fez parte dessa trajetória
                    </p>

                    <Link href="/nossa-causa" passHref>
                        <Button 
                            variant="default" 
                            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-8 rounded-lg shadow-xl text-lg transition-colors"
                        >
                            Ver mais
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}