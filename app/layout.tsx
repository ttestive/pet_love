import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "Pet Love - Clínica Veterinária",
  description: "Cuidado e amor para seu pet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
        <Toaster />
        <WhatsAppButton />
      </body>
    </html>
  );
}
