'use client';

import * as React from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

export function LocationMap() {
    return (
        <section id="location-map" className="py-16 bg-[#67BED9]/10">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-gray-800 mb-2">Onde nos encontrar</h2>
                <p className="text-xl text-gray-600">Onde proporcionamos cuidado e esperança</p>
                <a href="#" className="text-[#67BED9] hover:underline mt-2 inline-block">Clínica Veterinária Portal Vet</a>
            </div>

            <div className="container mx-auto px-4 max-w-5xl">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                    {/* Map Area */}
                    <div className="w-full md:w-1/2 bg-gray-200 min-h-[400px] relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.6849836334864!2d-47.9743656!3d-15.873145599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2f530a7db8a9%3A0xecdb83f40a585914!2sCl%C3%ADnica%20Veterin%C3%A1ria%20Portal%20Vet!5e0!3m2!1spt-BR!2sbr!4v1763943227829!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '400px' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0"
                        />
                    </div>

                    {/* Info Area */}
                    <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Venha nos visitar</h3>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-[#67BED9]/20 p-2 rounded-full text-[#67BED9] mt-1">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-700">Endereço</p>
                                    <p className="text-gray-600">Av. Central, 1345</p>
                                    <p className="text-gray-600">Núcleo Bandeirante, Brasilia - DF</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-[#67BED9]/20 p-2 rounded-full text-[#67BED9] mt-1">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-700">Horário</p>
                                    <p className="text-gray-600">Seg - Sex: 09h - 17h</p>
                                    <p className="text-gray-600">Sáb: 09h - 13h</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-[#67BED9]/20 p-2 rounded-full text-[#67BED9] mt-1">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-700">Contato</p>
                                    <p className="text-gray-600">(61) 98208-0204</p>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://www.google.com/maps/dir//Cl%C3%ADnica+Veterin%C3%A1ria+Portal+Vet+-+Av.+Cear%C3%A1,+1240+-+Bosque,+Rio+Branco+-+AC,+69900-474/@-15.8731456,-47.9743656,17z"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full"
                        >
                            <Button className="mt-8 w-full bg-[#67BED9] hover:bg-[#5AADC7] text-white font-bold py-6 rounded-xl shadow-lg transition-all hover:scale-[1.02]">
                                <Navigation className="mr-2 h-5 w-5" />
                                Como Chegar
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
