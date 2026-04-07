import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

const MobileFloatingButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calcula a porcentagem de scroll da página
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;

      // Mostra o botão se o scroll for maior que 15%
      setIsVisible(scrollPercent > 15);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-6 left-4 right-4 z-40 md:hidden transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <a 
        href="https://wa.me/5561998345419?text=Olá, preciso de uma bateria com urgência!" 
        target="_blank"
        rel="noreferrer"
        className="block w-full bg-blue-600 dark:bg-[#00f2ff] text-white dark:text-[#050a15] py-4 rounded-full font-bold uppercase tracking-widest shadow-[0_0_30px_rgba(37,99,235,0.5)] dark:shadow-[0_0_30px_rgba(0,242,255,0.5)] border border-white/20 flex items-center justify-center gap-3 active:scale-95 transition-transform backdrop-blur-md"
      >
        <div className="bg-white/20 dark:bg-[#050a15] p-1 rounded-full">
           <Zap className="text-white dark:text-[#00f2ff] fill-current" size={16} />
        </div>
        Pedir Bateria Agora
      </a>
    </div>
  );
};

export default MobileFloatingButton;