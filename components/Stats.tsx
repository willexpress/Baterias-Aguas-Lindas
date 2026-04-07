import React from 'react';

const Stats: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 border-y border-slate-200 dark:border-white/5 bg-slate-100/50 dark:bg-blue-900/[0.02]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-blue-500/20 dark:bg-[#00f2ff]/10 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative rounded-[40px] border border-white/20 dark:border-white/10 overflow-hidden shadow-2xl dark:shadow-none">
            <img 
              src="https://i.imgur.com/D0tG8qe.png" 
              alt="Carro de Luxo" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay para destacar o texto */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-300"></div>
            
            <div className="absolute bottom-8 left-8 z-10">
              <h2 className="text-8xl font-black font-heading text-blue-500 dark:text-[#00f2ff] tracking-tighter leading-none mb-2 drop-shadow-2xl">3</h2>
              <p className="text-blue-400 dark:text-[#00f2ff] uppercase tracking-[0.4em] text-xs font-bold drop-shadow-lg">Anos de Confiança</p>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <h3 className="text-3xl md:text-5xl font-heading font-medium leading-tight text-slate-900 dark:text-gray-100">
            SÓ TRABALHAMOS COM <span className="text-blue-600 dark:text-[#00f2ff]">POTÊNCIA</span> REAL E DURABILIDADE.
          </h3>
          <p className="text-slate-600 dark:text-gray-400 leading-relaxed font-light text-lg">
            A Volts Baterias nasceu com o propósito de oferecer não apenas um produto, mas a segurança de que seu veículo terá a partida perfeita em qualquer condição. Somos especialistas em diagnósticos elétricos.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="border-l-2 border-blue-600 dark:border-[#00f2ff] pl-4">
              <span className="block text-2xl font-bold font-heading text-slate-900 dark:text-white">+50k</span>
              <span className="text-[10px] uppercase text-slate-500 dark:text-gray-500 tracking-widest">Baterias Instaladas</span>
            </div>
            <div className="border-l-2 border-blue-600 dark:border-[#00f2ff] pl-4">
              <span className="block text-2xl font-bold font-heading text-slate-900 dark:text-white">24h</span>
              <span className="text-[10px] uppercase text-slate-500 dark:text-gray-500 tracking-widest">Suporte Emergencial</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;