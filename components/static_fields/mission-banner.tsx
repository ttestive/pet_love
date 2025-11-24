'use client';

import * as React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function MissionBanner() {
    return (
        <section className="py-16 bg-[#EC4899]/10 relative overflow-hidden">
            {/* Decorative Hearts Background Pattern - CSS only implementation for simplicity */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-4 left-10 text-blue-400 text-4xl">♥</div>
                <div className="absolute top-12 right-20 text-blue-400 text-3xl">♥</div>
                <div className="absolute bottom-8 left-1/4 text-blue-400 text-5xl">♥</div>
                <div className="absolute bottom-20 right-10 text-blue-400 text-4xl">♥</div>
                <div className="absolute top-1/2 left-10 text-blue-400 text-2xl">♥</div>
                <div className="absolute top-1/3 right-1/3 text-blue-400 text-6xl">♥</div>
                {/* Add more hearts scattered around if needed */}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="bg-gray-800/60 backdrop-blur-sm rounded-3xl p-12 md:p-20 text-center max-w-5xl mx-auto shadow-2xl border border-white/20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                        Colabore com nossa missão
                    </h2>

                    <p className="text-lg md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                        Nos ajude a seguir com nosso propósito para com os animais
                        <span className="block text-sm md:text-base mt-2 text-white/70">
                            Sua ajuda fornece lar e cuidado para nossos animais
                        </span>
                    </p>

                    <Link href="/contribuir">
                        <Button
                            variant="outline"
                            className="bg-transparent text-white border-white hover:bg-white hover:text-gray-800 text-lg px-10 py-6 rounded-xl transition-all duration-300"
                        >
                            Ver
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
