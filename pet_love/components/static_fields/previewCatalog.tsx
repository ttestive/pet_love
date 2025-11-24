'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'; // Importar o plugin Autoplay

import { cn } from '@/lib/utils'; // Função utility do shadcn para classes
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'; // Importa o Avatar do shadcn
import { Button } from '@/components/ui/button'; // Importa o Button para as setas

interface Animal {
  id: number;
  name: string;
  image: string; 
  fallback: string; 
}

const ANIMALS_MOCK_DATA: Animal[] = [
  { id: 1, name: 'Filhote', image: '/images/cat1.jpg', fallback: 'F' }, 
  { id: 2, name: 'Serena', image: '/images/cat2.jpg', fallback: 'S' },
  { id: 3, name: 'Cássia', image: '/images/cat3.jpg', fallback: 'C' },
  { id: 4, name: 'Mônica', image: '/images/cat4.jpg', fallback: 'M' },
  { id: 5, name: 'Rex', image: '/images/dog1.jpg', fallback: 'R' },
  { id: 6, name: 'Luna', image: '/images/dog2.jpg', fallback: 'L' },
];

const OPTIONS: EmblaOptionsType = { 
    loop: true, 
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
        '(min-width: 640px)': { slidesToScroll: 2, slidesToScroll: 1 }, 
        '(min-width: 1024px)': { slidesToScroll: 4, slidesToScroll: 1 },
    }
};

// --- Componente Principal ---
export function AnimaisAdocaoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
    Autoplay({ delay: 4000, stopOnInteraction: false }), // Autoplay a cada 4 segundos
  ]);
  
  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true);
  
  // Funções de navegação
  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Atualiza o estado dos botões (para carousels não loop)
  const onSelect = React.useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  // Adiciona listeners para atualizar os botões (apenas necessário se loop: false)
  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);


  return (
    <section className="py-12 md:py-24 space-y-12">
      {/* Títulos */}
      <div className="text-center space-y-2">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Animais Para adoção
        </h2>
        <p className="text-lg text-gray-500">Descubra seu novo amigo</p>
      </div>

      {/* Container do Carousel */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y -ml-4">
            {ANIMALS_MOCK_DATA.map((animal) => (
              // SLIDE DO CAROUSEL
              <div 
                className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/4 pl-4" // Define o tamanho de cada slide
                key={animal.id}
              >
                {/* O conteúdo da imagem no formato da imagem fornecida */}
                <div className="flex flex-col items-center justify-center text-center space-y-2 group">
                  
                  {/* Avatar do Animal (Círculo Grande) */}
                  <div className="relative w-48 h-48 md:w-56 md:h-56">
                    <Avatar className="w-full h-full border-4 border-white shadow-lg">
                      <AvatarImage 
                        src={animal.image} 
                        alt={animal.name} 
                        className="object-cover" 
                      />
                      <AvatarFallback>{animal.fallback}</AvatarFallback>
                    </Avatar>

                    {/* Botão de Ação (Plus - Ícone do "+" azul na imagem) */}
                    <Button 
                      variant="default" 
                      size="icon" 
                      className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/4 rounded-full w-10 h-10 shadow-xl bg-blue-500 hover:bg-blue-600"
                      aria-label={`Ver detalhes de ${animal.name}`}
                    >
                      <Plus className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  {/* Nome do Animal */}
                  <p className="mt-4 text-lg font-semibold">{animal.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botões de Navegação (Setas Laterais) */}
        {/* Seta Esquerda */}
        <Button
          variant="outline"
          size="icon"
          className={cn(
            "absolute top-1/2 left-0 md:left-4 transform -translate-y-1/2 rounded-full w-12 h-12 shadow-lg bg-white/70 hover:bg-white",
            // Ajuste para loop: true, desabilitar se quiser desativar botões
          )}
          onClick={scrollPrev}
          // disabled={prevBtnDisabled} // Desnecessário se loop: true
          aria-label="Anterior"
        >
          <ChevronLeft className="h-6 w-6 text-gray-700" />
        </Button>
        
        {/* Seta Direita */}
        <Button
          variant="outline"
          size="icon"
          className={cn(
            "absolute top-1/2 right-0 md:right-4 transform -translate-y-1/2 rounded-full w-12 h-12 shadow-lg bg-white/70 hover:bg-white",
            // Ajuste para loop: true, desabilitar se quiser desativar botões
          )}
          onClick={scrollNext}
          // disabled={nextBtnDisabled} // Desnecessário se loop: true
          aria-label="Próximo"
        >
          <ChevronRight className="h-6 w-6 text-gray-700" />
        </Button>

      </div>
    </section>
  );
}