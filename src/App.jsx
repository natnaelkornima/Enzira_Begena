import React, { useState, useContext } from 'react';
import { LanguageProvider, LanguageContext } from './contexts/LanguageContext';
import { FavoritesProvider } from './contexts/FavoritesContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { BegenaDetailPage } from './components/BegenaDetailPage';
import './App.css';

const AppContent = () => {
  const { language } = useContext(LanguageContext);
  const [selectedBegena, setSelectedBegena] = useState(null);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-200">
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        body {
          font-family: ${language === 'am' ? "'Shiromeda', 'Noto Sans Ethiopic', sans-serif" : "'Geom', sans-serif"};
        }
      `}</style>

      <Navbar />
      <Hero />
      <Services />
      <Gallery onSelectBegena={setSelectedBegena} />
      <Footer />

      {/* Detail Page Overlay */}
      {selectedBegena && (
        <BegenaDetailPage
          item={selectedBegena}
          onClose={() => setSelectedBegena(null)}
          onContactClick={() => {
            setSelectedBegena(null);
            setTimeout(() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }, 300);
          }}
        />
      )}
    </div>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <FavoritesProvider>
        <AppContent />
      </FavoritesProvider>
    </LanguageProvider>
  );
};

export default App;
