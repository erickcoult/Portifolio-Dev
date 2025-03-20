import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { Header } from "./components/header";
import { ContactForm } from "./components/contact-form";
import { Footer } from "./components/footer";
import { BackToTop } from "./components/voltar-topo";
import { Toaster } from "./components/toaster";


export const metadata = {
  title: {
    default: 'Home',
    template: '%s | EC DEV'
  },
  icons: [
    {
      url: '/favicon.svg'  //Troca o fav icone da aba
    }
  ]
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Toaster/>
        <Header></Header>
        {children}
        <ContactForm />
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
