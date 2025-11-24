'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone, ArrowRight } from 'lucide-react'; // Ícones

// --- Informações Estáticas da Clínica ---
const CLINIC_INFO = {
  name: 'Clínica Veterinária Portal Vet',
  address: 'Av. Central, 1345, Núcleo Bandeirante, Brasília - DF, 71705-350',
  scheduleWeek: 'Seg - Sex: 08:00 - 18:00',
  scheduleWeekend: 'Sáb - Feriados: 09:00 - 13:00',
  contact: '(61) XXXXX-XXXX', // Substitua pelo número de telefone real
  // URL de pesquisa para rotas no Google Maps (usada no botão)
  mapsUrl: 'https://www.google.com/maps/place/Cl%C3%ADnica+Veterin%C3%A1ria+Portal+Vet/@-15.8731456,-47.9769405,17z/data=!3m1!4b1!4m6!3m5!1s0x935a2f530a7db8a9:0xecdb83f40a585914!8m2!3d-15.8731456!4d-47.9743656!16s%2Fg%2F11vlf_sg38?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D',
  // URL do mapa embedado (iframe)
  embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.6849839233964!2d-47.9769405246281!3d-15.873145584778328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2f530a7db8a9%3A0xecdb83f40a585914!2sCl%C3%ADnica%20Veterin%C3%A1ria%20Portal%20Vet!5e0!3m2!1spt-BR!2sbr!4v1763939938309!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade' // Substitua pelo link embed correto da sua clínica
};

// --- Função Auxiliar para Abrir o Mapa ---
const handleGetDirections = () => {
  // Abre o link de rotas em uma nova aba
  window.open(CLINIC_INFO.mapsUrl, '_blank');
};


// --- Componente Principal ---
export function Localizacao() {
  return (
    <section className="py-16 md:py-24 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Onde nos encontrar
        </h2>
        <p className="text-lg text-gray-600">Onde proporcionamos cuidado e esperança</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-blue-600">{CLINIC_INFO.name}</h3>
        </div>

        {/* Layout: Mapa à Esquerda, Detalhes à Direita */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Coluna do Mapa (2/3 da largura em telas grandes) */}
          <div className="lg:col-span-2">
            <div className="h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-xl border border-gray-200">
              {/* iFrame do Google Maps Embed API */}
              <iframe
                src={CLINIC_INFO.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Localização de ${CLINIC_INFO.name}`}
              ></iframe>
            </div>
            {/* Opcional: Link para o mapa (simulando a opção "Ver mapa ampliado") */}
            <div className='mt-2 text-left'>
                <a 
                    href={CLINIC_INFO.mapsUrl.replace('dir/?api=1&', '')} // Remove o parâmetro de rota para ir direto ao local
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='text-sm text-blue-600 hover:underline inline-flex items-center'
                >
                    Ver mapa ampliado <ArrowRight className='ml-1 h-3 w-3' />
                </a>
            </div>
          </div>

          {/* Coluna de Detalhes (1/3 da largura em telas grandes) */}
          <div className="lg:col-span-1">
            <Card className="shadow-xl h-full flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-xl">Venha nos visitar</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                
                {/* Endereço */}
                <div>
                  <h4 className="font-medium text-gray-700 flex items-center mb-1">
                    <MapPin className="h-4 w-4 mr-2 text-blue-500" /> Endereço
                  </h4>
                  <p className="text-sm pl-6">{CLINIC_INFO.address.split(',').join(',\n')}</p>
                </div>

                {/* Horário */}
                <div>
                  <h4 className="font-medium text-gray-700 flex items-center mb-1">
                    <Clock className="h-4 w-4 mr-2 text-blue-500" /> Horário
                  </h4>
                  <p className="text-sm pl-6">
                    **Seg - Sex:** {CLINIC_INFO.scheduleWeek.split(': ')[1]}
                  </p>
                  <p className="text-sm pl-6">
                    **Sáb - Feriados:** {CLINIC_INFO.scheduleWeekend.split(': ')[1]}
                  </p>
                </div>

                {/* Contato */}
                <div>
                  <h4 className="font-medium text-gray-700 flex items-center mb-1">
                    <Phone className="h-4 w-4 mr-2 text-blue-500" /> Contato
                  </h4>
                  <p className="text-sm pl-6">{CLINIC_INFO.contact}</p>
                </div>

              </CardContent>
              
              {/* Botão Como Chegar */}
              <div className="p-6 pt-0">
                <Button 
                  onClick={handleGetDirections}
                  className="w-full bg-cyan-500 hover:bg-cyan-600 transition-colors"
                >
                  <MapPin className="h-4 w-4 mr-2" /> Como Chegar
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}