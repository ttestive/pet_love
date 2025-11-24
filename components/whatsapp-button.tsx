'use client';

import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/556899999999" // Replace with actual number
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#67BED9] hover:bg-[#5AADC7] text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
            aria-label="Contato via WhatsApp"
        >
            <MessageCircle className="w-8 h-8" />
        </a>
    );
}
