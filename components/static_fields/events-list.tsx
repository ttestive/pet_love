'use client';

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const events = [
    {
        id: 1,
        title: "Feira de adoção",
        imageUrl: "/images/event1.jpg", 
        description: "Não compre, Adote!",
        link: "/adote"
    },
    {
        id: 2,
        title: "Bazar beneficente",
        imageUrl: "/images/event2.jpg", 
        description: "Ajude nossa causa",
        link: "/bazar"
    },
    {
        id: 3,
        title: "Vacinação público",
        imageUrl: "/images/event3.jpg", 
        description: "Proteja seu amigo",
        link: "/eventos/vacinacao"
    },
    {
        id: 4,
        title: "Castração",
        imageUrl: "/images/event4.jpg", 
        description: "Controle populacional",
        link: "/eventos/castracao"
    },
    {
        id: 5,
        title: "Teste carrosel",
        imageUrl: "/images/event1.jpg", 
        description: "Exercício e diversão",
        link: "/eventos/caminhada"
    },
];

export function EventsList() {
    return (
        <section id="events-list" className="py-16 bg-white">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-2">Eventos</h2>
                <p className="text-xl text-gray-600">Fique a par dos eventos que nós e nossos parceiros contribuímos</p>
            </div>

            {/* Aumentei o px-4 para px-12 para dar espaço para as setas laterais não ficarem coladas na borda */}
            <div className="container mx-auto px-12"> 
                <Carousel
                    opts={{
                        align: "start",
                        loop: true, // Opcional: faz o carrossel ser infinito
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {events.map((event) => (
                            // As classes basis definem quantos itens aparecem por vez
                            // md:basis-1/2 = 2 itens em telas médias
                            // lg:basis-1/4 = 4 itens em telas grandes (igual ao seu grid anterior)
                            <CarouselItem key={event.id} className="pl-4 md:basis-1/2 lg:basis-1/4">
                                <Card className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group h-96 border-none">
                                    <div className="absolute inset-0">
                                        <img
                                            src={event.imageUrl}
                                            alt={event.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                                            <h3 className="text-white text-2xl font-bold mb-2">{event.title}</h3>
                                            <p className="text-white/80 text-sm mb-6">{event.description}</p>

                                            <Link href={event.link} className="w-full">
                                                <Button className="w-full bg-[#67BED9] hover:bg-[#5AADC7] text-white font-semibold rounded-lg border-none">
                                                    Saiba mais
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    );
}