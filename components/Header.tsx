import React, { useState, useEffect } from 'react';
import { Zap, Menu, X, Phone, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloqueia o scroll do body quando o menu está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const menuItems = [
    { label: 'Início', href: '#home' },
    { label: 'A Loja', href: '#about' },
    { label: 'Produtos', href: '#products' },
    { label: 'Marcas', href: '#brands' },
    { label: 'Serviços', href: '#services' },
    { label: 'Lojas', href: '#locations' },
    { label: 'Contato', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <>
      <header 
        id="main-header" 
        className={`fixed w-full z-50 top-0 transition-all duration-500 border-b border-gray-200 dark:border-white/5 ${
          isScrolled 
            ? 'bg-white/95 dark:bg-[#050a15]/95 shadow-lg dark:shadow-2xl py-2 backdrop-blur-xl' 
            : 'bg-white/80 dark:bg-[#050a15]/80 py-4 backdrop-blur-xl'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo Section */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center group relative z-50" 
            aria-label="Voltar para o topo"
          >
            <img 
              src="https://i.imgur.com/xqZ3B58.png" 
              alt="Logo Volts Baterias" 
              className="h-12 md:h-14 object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden flex items-center gap-2">
              <div className="w-10 h-10 bg-[#00f2ff] rounded flex items-center justify-center">
                <Zap className="text-[#050a15]" />
              </div>
              <span className="font-bold text-xl font-heading text-slate-900 dark:text-white">VOLTS</span>
            </div>
          </a>
          
          <div className="flex items-center gap-6">
            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600 dark:text-gray-400">
                {menuItems.map((item) => (
                <a 
                    key={item.label} 
                    href={item.href} 
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="hover:text-blue-600 dark:hover:text-[#00f2ff] transition-colors cursor-pointer"
                >
                    {item.label}
                </a>
                ))}
            </nav>

            <button
                onClick={toggleTheme}
                className="hidden md:flex items-center justify-center p-2 rounded-full text-slate-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                aria-label="Alternar Tema"
            >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a 
                href="https://wa.me/5561998345419"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 px-6 py-2 border border-blue-600/30 dark:border-[#00f2ff]/50 text-blue-600 dark:text-[#00f2ff] rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-blue-600 dark:hover:bg-[#00f2ff] hover:text-white dark:hover:text-[#050a15] transition-all duration-300"
            >
                <Phone size={14} />
                Ligar Agora
            </a>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-4 md:hidden">
                 <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full text-slate-600 dark:text-gray-300"
                >
                    {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                </button>
                <button 
                    className="text-slate-900 dark:text-white relative z-50 p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
                >
                    {isMobileMenuOpen ? <X size={28} className="text-blue-600 dark:text-[#00f2ff]" /> : <Menu size={28} />}
                </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Nav Fullscreen Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-50 dark:bg-[#050a15] z-40 md:hidden flex flex-col justify-center items-center transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 dark:bg-[#00f2ff]/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

        <nav className="flex flex-col items-center gap-8 w-full px-6 relative z-10">
           {menuItems.map((item) => (
             <a 
               key={item.label}
               href={item.href} 
               onClick={(e) => handleNavClick(e, item.href)} 
               className="text-2xl font-heading text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-[#00f2ff] transition-colors uppercase tracking-wider"
             >
               {item.label}
             </a>
           ))}
           
           <div className="w-full max-w-xs h-px bg-slate-200 dark:bg-white/10 my-4"></div>

           <a 
              href="https://wa.me/5561998345419"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs py-4 bg-blue-600 dark:bg-[#00f2ff] text-white dark:text-[#050a15] rounded-full font-bold uppercase tracking-widest text-sm flex justify-center items-center gap-3 hover:scale-105 transition-transform shadow-[0_0_20px_rgba(37,99,235,0.3)] dark:shadow-[0_0_20px_rgba(0,242,255,0.3)]"
           >
              <Phone size={20} />
              Ligar Agora
           </a>
        </nav>
      </div>
    </>
  );
};

export default Header;