import React from 'react';
import { Car, Truck, Bike } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-blue-600 dark:text-[#00f2ff] text-[10px] uppercase tracking-[0.5em] font-bold block mb-4">Linha Completa</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-8 text-slate-900 dark:text-white">Produtos Originais</h2>
          
          <div className="rounded-2xl overflow-hidden relative group max-w-2xl bg-slate-100 dark:bg-transparent">
             <img 
               src="https://i.imgur.com/B9Z4uXE.png" 
               alt="Baterias Volts Estoque e Variedade" 
               className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-200 dark:from-[#050a15] via-transparent to-transparent opacity-60"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Linha Leve */}
          <article className="glass rounded-[40px] group overflow-hidden flex flex-col h-full bg-white dark:bg-white/5 shadow-xl dark:shadow-none border border-slate-200 dark:border-white/10 hover:border-blue-500 dark:hover:border-[#00f2ff] hover:bg-blue-50 dark:hover:bg-[#00f2ff]/5 transition-all duration-300 hover:-translate-y-1">
            <div className="h-48 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=600" alt="Carro Moderno" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
            </div>
            <div className="p-10 flex flex-col flex-grow">
              <Car className="text-blue-600 dark:text-[#00f2ff] mb-6" size={24} />
              <h3 className="text-2xl font-bold mb-4 font-heading uppercase tracking-tighter text-slate-900 dark:text-white">Linha Automotiva</h3>
              <p className="text-slate-600 dark:text-gray-400 text-sm font-light mb-8 flex-grow">Baterias de 45Ah a 75Ah para todos os modelos de carros nacionais e importados.</p>
              <button className="w-full py-4 border border-slate-300 dark:border-white/10 rounded-2xl text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-white hover:bg-blue-600 dark:hover:bg-[#00f2ff] hover:text-white dark:hover:text-[#050a15] transition-all">Consultar Preço</button>
            </div>
          </article>

          {/* Linha Pesada */}
          <article className="glass rounded-[40px] border border-blue-100 dark:border-[#00f2ff]/30 bg-blue-50 dark:bg-white/5 group overflow-hidden flex flex-col h-full hover:border-blue-500 dark:hover:border-[#00f2ff] hover:bg-blue-100 dark:hover:bg-[#00f2ff]/5 transition-all duration-300 hover:-translate-y-1 shadow-xl dark:shadow-none">
            <div className="h-48 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=600" alt="Caminhão" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
            </div>
            <div className="p-10 flex flex-col flex-grow">
              <Truck className="text-blue-600 dark:text-[#00f2ff] mb-6" size={24} />
              <h3 className="text-2xl font-bold mb-4 font-heading uppercase tracking-tighter text-slate-900 dark:text-white">Linha Pesada</h3>
              <p className="text-slate-600 dark:text-gray-300 text-sm font-light mb-8 flex-grow">Energia bruta para caminhões, ônibus e máquinas agrícolas. Alta resistência a vibrações.</p>
              <button className="w-full py-4 bg-blue-600 dark:bg-[#00f2ff] text-white dark:text-[#050a15] rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] dark:hover:shadow-[0_0_30px_rgba(0,242,255,0.3)] transition-all">Ver Modelos</button>
            </div>
          </article>

          {/* Moto */}
          <article className="glass rounded-[40px] group overflow-hidden flex flex-col h-full bg-white dark:bg-white/5 shadow-xl dark:shadow-none border border-slate-200 dark:border-white/10 hover:border-blue-500 dark:hover:border-[#00f2ff] hover:bg-blue-50 dark:hover:bg-[#00f2ff]/5 transition-all duration-300 hover:-translate-y-1">
            <div className="h-48 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&q=80&w=600" alt="Moto Esportiva" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
            </div>
            <div className="p-10 flex flex-col flex-grow">
              <Bike className="text-blue-600 dark:text-[#00f2ff] mb-6" size={24} />
              <h3 className="text-2xl font-bold mb-4 font-heading uppercase tracking-tighter text-slate-900 dark:text-white">Linha Moto</h3>
              <p className="text-slate-600 dark:text-gray-400 text-sm font-light mb-8 flex-grow">Baterias AGM de alta performance para partidas rápidas e maior vida útil em duas rodas.</p>
              <button className="w-full py-4 border border-slate-300 dark:border-white/10 rounded-2xl text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-white hover:bg-blue-600 dark:hover:bg-[#00f2ff] hover:text-white dark:hover:text-[#050a15] transition-all">Falar com Consultor</button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Products;