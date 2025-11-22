// components/servicos-carousel.tsx

'use client';

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const servicos = [
    { title: "CIRURGIA", imageUrl: "/carrousel/surgery_item.png", route: "/servicos/cirurgia" }, 
    { title: "CONSULTAS", imageUrl: "/carrousel/schedule_item.jpg", route: "/servicos/consultas" }, 
    { title: "VACINAS", imageUrl: "/carrousel/injection_item.jpg", route: "/servicos/vacinas" },
    { title: "EXAMES", imageUrl: "/carrousel/exam_item.jpg", route: "/servicos/exames" },
];

export function CarouselDemo() {
   
    return (
        <section className="py-16 bg-blue-50/70">
            {/* Títulos do Componente (Mantidos) */}
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
                className="w-full max-w-2xl mx-auto"
            >
                <CarouselContent className="">
                    {Array.from({ length: servicos.length }).map((_, index) => (
                        <CarouselItem 
                            key={index} 
                            className="basis-full" 
                        >
                            <div className="p-1">
                                <Link href={servicos[index].route}>
                                    <Card className="rounded-xl overflow-hidden shadow-xl h-96 w-full relative cursor-pointer hover:shadow-2xl transition-shadow">
                                        
                                        <div 
                                            className="absolute inset-0 bg-cover bg-center"
                                            style={{ backgroundImage: `url(${servicos[index].imageUrl})` }}
                                        />
                                        
                                        <div className="absolute inset-0 bg-black/30" />

                                        <CardContent className="flex items-center justify-center p-6 h-full relative">
                                            <span 
                                                className="
                                                    text-6xl 
                                                    text-white 
                                                    font-extrabold 
                                                    tracking-wider 
                                                    uppercase 
                                                    leading-none 
                                                    drop-shadow-lg
                                                    hover:scale-110
                                                    transition-transform
                                                "
                                            >
                                                {servicos[index].title}
                                            </span>
                                        </CardContent>
                                    </Card>
                                </Link>
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