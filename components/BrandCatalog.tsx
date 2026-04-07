import React from 'react';
import { ShieldCheck, Zap, Battery, Award } from 'lucide-react';

const brands = [
  {
    name: 'Moura',
    description: 'Líder absoluta. A bateria original das maiores montadoras do mundo. Durabilidade comprovada.',
    icon: <ShieldCheck size={24} className="text-blue-600 dark:text-[#00f2ff]" />,
    image: 'https://i.imgur.com/rDi6Fsu.png'
  },
  {
    name: 'Crall',
    description: 'Excelente custo-benefício. Energia confiável para o dia a dia com certificação do Inmetro.',
    icon: <Battery size={24} className="text-blue-600 dark:text-[#00f2ff]" />,
    image: 'https://i.imgur.com/QQvBK2A.png'
  },
  {
    name: 'Heliar',
    description: 'Tecnologia PowerFrame. Maior resistência à corrosão e fluxo de corrente otimizado.',
    icon: <Zap size={24} className="text-blue-600 dark:text-[#00f2ff]" />,
    image: 'https://i.imgur.com/ik4r0sE.png'
  },
  {
    name: 'Pioneiro',
    description: 'Alta performance e variedade de aplicações. A escolha inteligente para quem busca qualidade.',
    icon: <Award size={24} className="text-blue-600 dark:text-[#00f2ff]" />,
    image: 'https://i.imgur.com/ZmND1y8.png'
  }
];

const BrandCatalog: React.FC = () => {
  return (
    <section id="brands" className="py-24 px-6 bg-slate-100 dark:bg-[#02060e] border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
                <span className="text-blue-600 dark:text-[#00f2ff] text-[10px] uppercase tracking-[0.5em] font-bold block mb-4">Parceiros Oficiais</span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase text-slate-900 dark:text-white">
                    As Melhores <span className="text-blue-600 dark:text-[#00f2ff]">Marcas</span>
                </h2>
                <p className="mt-6 text-slate-600 dark:text-gray-400 font-light leading-relaxed">
                    Trabalhamos apenas com baterias certificadas e com garantia de fábrica. Escolha a marca de sua preferência e solicite um orçamento via WhatsApp.
                </p>
            </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <div key={brand.name} className="group relative bg-white dark:bg-[#050a15] border border-slate-200 dark:border-white/5 rounded-3xl overflow-hidden hover:border-blue-500 dark:hover:border-[#00f2ff]/30 transition-all duration-500 hover:-translate-y-2 flex flex-col shadow-lg dark:shadow-none">
              <div className="h-48 overflow-hidden relative bg-slate-50 dark:bg-transparent">
                 <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#050a15] via-transparent to-transparent z-10"></div>
                 <img src={brand.image} alt={brand.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 mix-blend-multiply dark:mix-blend-normal" />
                 <div className="absolute top-4 right-4 z-20">
                     <span className="bg-blue-600 dark:bg-[#00f2ff] text-white dark:text-[#050a15] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                         Original
                     </span>
                 </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-50 dark:bg-white/5 rounded-lg text-blue-600 dark:text-[#00f2ff]">
                        {brand.icon}
                    </div>
                    <h3 className="text-2xl font-bold font-heading uppercase text-slate-900 dark:text-white">{brand.name}</h3>
                </div>
                
                <p className="text-slate-600 dark:text-gray-400 text-xs font-light leading-relaxed mb-6 flex-grow border-l border-slate-300 dark:border-white/10 pl-3">
                    {brand.description}
                </p>
                
                <a 
                    href={`https://wa.me/5561998345419?text=Olá, gostaria de saber o preço da bateria ${brand.name}`}
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full py-3 flex items-center justify-center gap-2 bg-slate-100 dark:bg-white/5 hover:bg-blue-600 dark:hover:bg-[#00f2ff] text-slate-900 dark:text-white hover:text-white dark:hover:text-[#050a15] rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all"
                >
                    <Zap size={14} />
                    Consultar Valor
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandCatalog;