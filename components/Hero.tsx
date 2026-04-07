import React from 'react';
import { MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-20 overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://i.imgur.com/mlbZjyj.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      ></div>
      
      {/* Overlay: Reduced opacity for light mode so image is visible */}
      <div className="absolute inset-0 bg-slate-50/60 dark:bg-[#050a15]/60 bg-gradient-to-b from-slate-50/80 via-slate-50/40 to-slate-50 dark:from-[#050a15]/60 dark:via-[#050a15]/80 dark:to-[#050a15] z-0 pointer-events-none"></div>
      
      {/* Decorative Blue Circle Blob behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
      
      <div className="relative z-10 text-center max-w-5xl flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center justify-center gap-2 mb-8 px-6 py-2 rounded-full bg-slate-200/50 dark:bg-white/10 backdrop-blur-md border border-white/20 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-[#00f2ff] animate-pulse"></span>
          <span className="text-[10px] md:text-xs font-bold text-slate-600 dark:text-gray-200 tracking-[0.2em] uppercase">
            Entrega e Instalação em toda região
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-[70px] font-black font-heading leading-[0.9] tracking-tighter mb-8 uppercase italic drop-shadow-sm">
          <span className="text-slate-900 dark:text-white block">LOJA DE BATERIAS</span>
          <span className="text-blue-600 dark:text-[#00f2ff] block">AGUAS LINDAS</span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-600 dark:text-gray-300 text-sm md:text-lg max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
          As melhores marcas do mercado com garantia estendida e o socorro mais rápido da cidade. Carros, motos, caminhões e náutica.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
          <a 
            href="https://wa.me/5561998345419" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-blue-600 dark:bg-[#00f2ff] text-white dark:text-[#050a15] px-10 py-4 rounded-full font-bold text-xs uppercase tracking-[0.15em] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] dark:hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] hover:scale-105 transition-all flex items-center gap-2 min-w-[240px] justify-center"
          >
            <MessageCircle size={18} /> Chamar no WhatsApp
          </a>
          <a 
            href="#products" 
            className="px-10 py-4 bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-white rounded-full font-bold text-xs uppercase tracking-[0.15em] hover:bg-slate-300 dark:hover:bg-white/20 transition-all min-w-[200px] text-center"
          >
            Ver Catálogo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;