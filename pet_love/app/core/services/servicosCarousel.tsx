// components/servicos-carousel.tsx

'use client';

import * as React from "react"
import { cn } from "@/lib/utils" // Importe o utilitário cn do shadcn/ui

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const servicos = [
    { title: "CIRURGIA", imageUrl: "/images/cirurgia.jpg" }, 
    { title: "CONSULTAS", imageUrl: "/images/consultas.jpg" }, 
    { title: "VACINAS", imageUrl: "/images/vacinas.jpg" },
    { title: "EXAMES", imageUrl: "/images/exames.jpg" },
];

export function CarouselDemo() {
   
    return (
        <section className="py-16 bg-blue-50/70">
            {/* Títulos do Componente (Mantidos, pois são o texto fora do carrossel) */}
            <div className="text-center mb-10">
                <h2 className="text-4xl font-semibold text-gray-800">
                    Conheça nossa Clínica
                </h2>
                <p className="mt-2 text-xl text-gray-600">
                    Oferecemos atendimento especializado de qualidade
                </p>
            </div>

            {/* Carrossel */}
            <Carousel 
                opts={{
                    align: "start", 
                    loop: true,
                }}
                className="w-full max-w-2xl mx-auto" // Diminui o carrossel na horizontal
            >
                <CarouselContent className="">
                    {/* Mantendo Array.from e index como solicitado */}
                    {Array.from({ length: servicos.length }).map((_, index) => (
                        <CarouselItem 
                            key={index} 
                            // 🔑 ALTERAÇÃO CHAVE: Define o item para ocupar a largura total (1 por vez)
                            className="basis-full" 
                        >
                            <div className="p-1">
                                <Card className="rounded-xl overflow-hidden shadow-xl h-96 w-full relative">
                                    
                                    {/* 1. Imagem de Fundo (Sem filtros ou desfoque) */}
                                    <div 
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${servicos[index].imageUrl})` }}
                                    />
                                    
                                    {/* 2. Camada Escura de Sobreposição (Leve) */}
                                    <div className="absolute inset-0 bg-black/10" />

                                    {/* 3. Conteúdo (Títulos removidos de dentro do CardContent) */}
                                    <CardContent className="flex items-center justify-center p-6 h-full relative">
                                        {/* REMOVIDO: <span>{servicos[index].title}</span> */}
                                        {/* O CardContent agora está vazio, apenas a imagem é exibida. */}
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                
                <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-gray-800 bg-white/70 hover:bg-white border-none" />
                <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-gray-800 bg-white/70 hover:bg-white border-none" />
            </Carousel>
        </section>
    )
}