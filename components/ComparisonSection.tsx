import React from 'react';
import { AlertTriangle, Zap, XCircle, CheckCircle } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-slate-50 dark:bg-[#050a15] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-[#00f2ff] text-[10px] uppercase tracking-[0.5em] font-bold block mb-4">Realidade vs Expectativa</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase text-slate-900 dark:text-white">
            Não conte com a <span className="text-red-500">Sorte</span>, conte com a <span className="text-blue-600 dark:text-[#00f2ff]">Volts</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Lado Negativo - Bateria Ruim */}
          <div className="group relative rounded-[40px] overflow-hidden border-2 border-red-500/20 hover:border-red-500/50 transition-all duration-500 shadow-2xl hover:shadow-[0_0_40px_rgba(239,68,68,0.2)]">
            <div className="absolute inset-0 bg-red-900/20 z-10 mix-blend-multiply group-hover:bg-red-900/10 transition-all"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-20"></div>
            
            {/* Imagem de IA - Carro enguiçado */}
            <img 
              src="https://i.imgur.com/k01P8DC.jpeg" 
              alt="Carro enguiçado na estrada escura com bateria arriada" 
              className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
            />

            <div className="absolute top-8 right-8 z-30 bg-red-500/20 backdrop-blur-md border border-red-500/50 p-4 rounded-full">
              <AlertTriangle className="text-red-500 w-8 h-8 animate-pulse" />
            </div>

            <div className="absolute bottom-0 left-0 w-full p-10 z-30">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="text-red-500" />
                <h3 className="text-2xl font-heading font-bold uppercase text-white tracking-wider">Dor de Cabeça</h3>
              </div>
              <p className="text-gray-300 font-light text-sm mb-6 leading-relaxed">
                Atrasos, estresse e perigo. Uma bateria velha te deixa na mão nos piores momentos: na chuva, à noite ou antes daquela reunião importante.
              </p>
              <div className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-lg">
                <span className="text-red-400 text-xs font-bold uppercase tracking-widest">Risco Alto</span>
              </div>
            </div>
          </div>

          {/* Lado Positivo - Bateria Boa (Volts) */}
          <div className="group relative rounded-[40px] overflow-hidden border-2 border-blue-500/20 dark:border-[#00f2ff]/20 hover:border-blue-500 dark:hover:border-[#00f2ff] transition-all duration-500 shadow-2xl hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_40px_rgba(0,242,255,0.3)]">
            <div className="absolute inset-0 bg-blue-900/10 z-10 mix-blend-overlay group-hover:bg-transparent transition-all"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-20"></div>
            
            {/* Imagem de IA - Carro futurista/rápido */}
            <img 
              src="https://i.imgur.com/9fwfqiT.png" 
              alt="Carro esportivo em movimento com luzes neon representando energia" 
              className="w-full h-[500px] object-cover transition-all duration-700 scale-100 group-hover:scale-110"
            />

            <div className="absolute top-8 right-8 z-30 bg-blue-500/20 dark:bg-[#00f2ff]/20 backdrop-blur-md border border-blue-500/50 dark:border-[#00f2ff]/50 p-4 rounded-full">
              <Zap className="text-blue-500 dark:text-[#00f2ff] w-8 h-8" />
            </div>

            <div className="absolute bottom-0 left-0 w-full p-10 z-30">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="text-blue-500 dark:text-[#00f2ff]" />
                <h3 className="text-2xl font-heading font-bold uppercase text-white tracking-wider">Energia Máxima</h3>
              </div>
              <p className="text-gray-200 font-light text-sm mb-6 leading-relaxed">
                Partida instantânea, eletrônica estável e segurança para sua família. Com a Volts, seu carro está sempre pronto para ir mais longe.
              </p>
              <div className="inline-block px-4 py-2 bg-blue-600/20 dark:bg-[#00f2ff]/20 border border-blue-500/30 dark:border-[#00f2ff]/30 rounded-lg">
                <span className="text-blue-400 dark:text-[#00f2ff] text-xs font-bold uppercase tracking-widest">Garantia Total</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;