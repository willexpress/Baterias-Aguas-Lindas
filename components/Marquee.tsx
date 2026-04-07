import React from 'react';

const Marquee: React.FC = () => {
  return (
    <div className="py-12 border-y border-slate-200 dark:border-white/5 overflow-hidden bg-slate-50 dark:bg-white/[0.01]">
      <div className="animate-marquee">
        <span className="text-6xl md:text-7xl font-black font-heading uppercase outline-text tracking-tighter px-4">
          MOURA • HELIAR • AC DELCO • TUDOR • ZETTA • STRADA • 
        </span>
        <span className="text-6xl md:text-7xl font-black font-heading uppercase outline-text tracking-tighter px-4">
          MOURA • HELIAR • AC DELCO • TUDOR • ZETTA • STRADA • 
        </span>
        <span className="text-6xl md:text-7xl font-black font-heading uppercase outline-text tracking-tighter px-4">
          MOURA • HELIAR • AC DELCO • TUDOR • ZETTA • STRADA • 
        </span>
        <span className="text-6xl md:text-7xl font-black font-heading uppercase outline-text tracking-tighter px-4">
          MOURA • HELIAR • AC DELCO • TUDOR • ZETTA • STRADA • 
        </span>
      </div>
    </div>
  );
};

export default Marquee;