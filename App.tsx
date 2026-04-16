import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ComparisonSection from './components/ComparisonSection';
import Products from './components/Products';
import BrandCatalog from './components/BrandCatalog';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Locations from './components/Locations';
import Footer from './components/Footer';
import MobileFloatingButton from './components/MobileFloatingButton';
import { ThemeProvider } from './context/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="bg-slate-50 dark:bg-[#050a15] min-h-screen text-slate-900 dark:text-white transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <Stats />
          <BrandCatalog />
          <ComparisonSection />
          <Products />
          <Marquee />
          <Services />
          <Locations />
        </main>
        <Footer />
        <MobileFloatingButton />
      </div>
    </ThemeProvider>
  );
};

export default App;