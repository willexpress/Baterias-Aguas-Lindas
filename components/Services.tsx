import React from 'react';
import { CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
        <div className="md:w-1/2">
          <span className="text-blue-600 dark:text-[#00f2ff] text-[10px] uppercase tracking-[0.5em] font-bold block mb-4">Diferenciais</span>
          <h2 className="text-5xl font-heading font-bold uppercase leading-tight text-slate-900 dark:text-white">Muito além de<br />apenas vender</h2>
          <p className="text-slate-600 dark:text-gray-400 mt-8 mb-10 font-light max-w-md">
            Oferecemos serviços técnicos especializados para garantir que o sistema elétrico do seu veículo esteja sempre em ordem.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-white/5 flex items-center justify-center flex-shrink-0 text-blue-600 dark:text-[#00f2ff]">
                <CheckCircle size={20} />
              </div>
              <div>
                <h4 className="font-bold uppercase text-sm tracking-wider text-slate-800 dark:text-white">Teste de Alternador Grátis</h4>
                <p className="text-slate-500 dark:text-gray-500 text-xs mt-1">Verificamos se o seu carro está carregando a bateria corretamente.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full grid grid-cols-1 gap-4">
          <div className="glass p-1 rounded-[32px] overflow-hidden group bg-white dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 hover:border-blue-500 dark:hover:border-[#00f2ff] transition-all duration-300 shadow-xl dark:shadow-none">
            <div className="h-64 overflow-hidden rounded-[28px]">
                <img 
                src="https://i.imgur.com/kKerPFH.jpeg" 
                alt="Socorro Especializado - Técnico verificando bateria" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125" 
                />
            </div>
            <div className="p-8">
               <h4 className="text-xl font-bold uppercase tracking-tighter mb-2 text-slate-900 dark:text-white">Socorro Especializado</h4>
               <p className="text-slate-600 dark:text-gray-400 text-sm font-light leading-relaxed">Equipe treinada para diagnósticos precisos no local e instalação imediata.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;