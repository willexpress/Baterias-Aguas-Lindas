import React, { useState } from 'react';
import { MapPin, Clock, Phone, Navigation, Store, X } from 'lucide-react';

const Locations: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="locations" className="py-32 px-6 relative overflow-hidden bg-slate-50 dark:bg-[#050a15] transition-colors duration-300">
       {/* Decorative background element */}
       <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-blue-200/20 dark:bg-blue-900/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 text-center md:text-left">
          <span className="text-blue-600 dark:text-[#00f2ff] text-[10px] uppercase tracking-[0.5em] font-bold block mb-4">Onde Estamos</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase text-slate-900 dark:text-white">Nossas Unidades</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: Águas Lindas */}
            <div className="glass p-8 md:p-12 rounded-[40px] bg-white dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 hover:border-blue-500 dark:hover:border-[#00f2ff]/50 transition-all duration-300 group hover:-translate-y-2 flex flex-col shadow-xl dark:shadow-none">
                <div className="flex items-start justify-between mb-8">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-heading font-bold uppercase mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-[#00f2ff] transition-colors">Águas Lindas</h3>
                        <span className="text-xs font-bold tracking-widest text-slate-500 dark:text-gray-500 uppercase">Goiás</span>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-[#00f2ff]/10 flex items-center justify-center text-blue-600 dark:text-[#00f2ff]">
                        <MapPin size={24} />
                    </div>
                </div>
                
                <div className="space-y-6 mb-10 flex-grow">
                    <div className="flex gap-4 items-start">
                        <MapPin className="text-slate-400 dark:text-gray-500 mt-1 shrink-0" size={18} />
                        <p className="text-slate-600 dark:text-gray-300 font-light leading-relaxed text-sm">
                            Av. JK, Quadra 45, Lote 12<br />
                            Jardim Brasília - Águas Lindas de Goiás
                        </p>
                    </div>
                    <div className="flex gap-4 items-start">
                        <Clock className="text-slate-400 dark:text-gray-500 mt-1 shrink-0" size={18} />
                        <div className="text-slate-600 dark:text-gray-300 font-light leading-relaxed text-sm">
                            <p>Segunda a Sexta: 08h às 18h</p>
                            <p>Sábado: 08h às 14h</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                    <a href="https://wa.me/5561998345419" target="_blank" rel="noreferrer" className="sm:col-span-2 py-3 bg-blue-600 dark:bg-[#00f2ff] text-white dark:text-[#050a15] rounded-xl text-[10px] font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] dark:hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all flex justify-center items-center gap-2">
                        <Phone size={16} /> WhatsApp
                    </a>
                    <button 
                        onClick={() => setSelectedImage('https://i.imgur.com/ACPHTt6.jpeg')}
                        className="py-3 border border-slate-300 dark:border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white dark:hover:text-[#050a15] transition-all flex justify-center items-center gap-2"
                    >
                        <Store size={16} /> Ver Loja
                    </button>
                    <a href="#" className="py-3 border border-slate-300 dark:border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white dark:hover:text-[#050a15] transition-all flex justify-center items-center gap-2">
                        <Navigation size={16} /> Ver no Mapa
                    </a>
                </div>
            </div>

            {/* Card 2: Brazlândia */}
            <div className="glass p-8 md:p-12 rounded-[40px] bg-white dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 hover:border-blue-500 dark:hover:border-[#00f2ff]/50 transition-all duration-300 group hover:-translate-y-2 flex flex-col shadow-xl dark:shadow-none">
                <div className="flex items-start justify-between mb-8">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-heading font-bold uppercase mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-[#00f2ff] transition-colors">Brazlândia</h3>
                        <span className="text-xs font-bold tracking-widest text-slate-500 dark:text-gray-500 uppercase">Distrito Federal</span>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-[#00f2ff]/10 flex items-center justify-center text-blue-600 dark:text-[#00f2ff]">
                        <MapPin size={24} />
                    </div>
                </div>
                
                <div className="space-y-6 mb-10 flex-grow">
                    <div className="flex gap-4 items-start">
                        <MapPin className="text-slate-400 dark:text-gray-500 mt-1 shrink-0" size={18} />
                        <p className="text-slate-600 dark:text-gray-300 font-light leading-relaxed text-sm">
                            Quadra 02 Norte, Lote 04<br />
                            Setor Norte - Brazlândia/DF
                        </p>
                    </div>
                    <div className="flex gap-4 items-start">
                        <Clock className="text-slate-400 dark:text-gray-500 mt-1 shrink-0" size={18} />
                        <div className="text-slate-600 dark:text-gray-300 font-light leading-relaxed text-sm">
                            <p>Segunda a Sexta: 08h às 18h</p>
                            <p>Sábado: 08h às 14h</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                    <a href="https://wa.me/5561998345419" target="_blank" rel="noreferrer" className="sm:col-span-2 py-3 bg-blue-600 dark:bg-[#00f2ff] text-white dark:text-[#050a15] rounded-xl text-[10px] font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] dark:hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all flex justify-center items-center gap-2">
                        <Phone size={16} /> WhatsApp
                    </a>
                    <button 
                        onClick={() => setSelectedImage('https://i.imgur.com/WpNNK02.jpeg')}
                        className="py-3 border border-slate-300 dark:border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white dark:hover:text-[#050a15] transition-all flex justify-center items-center gap-2"
                    >
                        <Store size={16} /> Ver Loja
                    </button>
                    <a href="#" className="py-3 border border-slate-300 dark:border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white dark:hover:text-[#050a15] transition-all flex justify-center items-center gap-2">
                        <Navigation size={16} /> Ver no Mapa
                    </a>
                </div>
            </div>
        </div>
      </div>

      {/* Modal de Visualização da Loja */}
      {selectedImage && (
        <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedImage(null)}
        >
            <div 
                className="relative max-w-5xl w-full bg-[#050a15] rounded-3xl overflow-hidden border border-white/10 shadow-2xl animate-zoom-in"
                onClick={e => e.stopPropagation()}
            >
                <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/80 to-transparent z-10 pointer-events-none"></div>
                <button 
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-[#00f2ff] text-white hover:text-black rounded-full transition-all border border-white/10"
                    aria-label="Fechar"
                >
                    <X size={24} />
                </button>
                <img 
                    src={selectedImage} 
                    alt="Foto da Unidade Volts Baterias" 
                    className="w-full h-auto max-h-[80vh] object-contain bg-[#02060e]" 
                />
            </div>
        </div>
      )}
    </section>
  );
};

export default Locations;