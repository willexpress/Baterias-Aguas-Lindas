import React from 'react';
import { Instagram, Phone, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', href);
    }
  };

  const navLinks = [
    { label: 'Início', href: '#home' },
    { label: 'A Loja', href: '#about' },
    { label: 'Produtos', href: '#products' },
    { label: 'Marcas', href: '#brands' },
    { label: 'Serviços', href: '#services' },
    { label: 'Lojas', href: '#locations' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <footer id="contact" className="relative pt-32 pb-12 px-6 border-t border-slate-200 dark:border-white/5 overflow-hidden transition-colors duration-300">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://i.imgur.com/mlbZjyj.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-slate-50/90 dark:bg-[#050a15]/90 z-0 bg-gradient-to-t from-slate-100 via-slate-50/90 to-transparent dark:from-[#02060e] dark:via-[#050a15]/90 dark:to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <div className="flex items-center mb-8">
              <img 
                src="https://i.imgur.com/xqZ3B58.png" 
                alt="Logo Rodapé Volts Baterias" 
                className="h-16 w-auto object-contain"
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
            </div>
            <h2 className="text-4xl font-heading font-bold uppercase mb-8 text-slate-900 dark:text-white">Não fique parado.<br />Nós levamos a energia.</h2>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="w-12 h-12 glass bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full flex items-center justify-center text-slate-700 dark:text-white hover:bg-blue-600 dark:hover:bg-[#00f2ff] hover:text-white dark:hover:text-[#050a15] transition-colors shadow-md dark:shadow-none">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/5561998345419" target="_blank" aria-label="WhatsApp" className="w-12 h-12 glass bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full flex items-center justify-center text-slate-700 dark:text-white hover:bg-blue-600 dark:hover:bg-[#00f2ff] hover:text-white dark:hover:text-[#050a15] transition-colors shadow-md dark:shadow-none">
                <Phone size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500 dark:text-gray-500 mb-8">Navegação</h4>
            <nav className="flex flex-col gap-4 text-sm font-bold uppercase tracking-widest text-slate-700 dark:text-gray-300">
              {navLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-blue-600 dark:hover:text-[#00f2ff] transition-colors w-fit cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500 dark:text-gray-500 mb-8">Contato Rápido</h4>
            <div className="space-y-6">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-gray-600 mb-1">WhatsApp 24h</span>
                <a href="https://wa.me/5561998345419" target="_blank" className="text-lg font-bold text-blue-600 dark:text-[#00f2ff] hover:underline">(61) 99834-5419</a>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-gray-600 mb-1">Email</span>
                <span className="text-lg font-bold text-slate-900 dark:text-white">vendas@voltsbaterias.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 dark:text-gray-600">
          <span>© 2026 Volts Baterias. Energia que Movimenta.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;