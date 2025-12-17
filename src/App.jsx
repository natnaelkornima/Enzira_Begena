import React, { useState, useEffect, createContext, useContext } from 'react';
import { ShoppingBag, Menu, X, ChevronRight, Music, Heart, Info, Phone, Globe } from 'lucide-react';

// --- Language Context ---
const LanguageContext = createContext();

const translations = {
  en: {
    nav: {
      home: "Home",
      gallery: "Gallery",
      about: "About",
      contact: "Contact Us"
    },
    hero: {
      badge: "Soul-Healing Melodies of the Strings.",
      title: "Enzira Begena",
      title2: "Playing in the spirit of David.",
      desc: "History in every string. Quality in every craft. Discover our collection of meticulously handcrafted Begenas.",
      viewCollection: "View Collection",
      learnMore: "Learn More"
    },
    gallery: {
      title: "Featured Collection",
      desc: "Explore our meticulously crafted instruments, designed for both beginners and masters of the begena.",
      showAll: "Show All Instruments",
      price: "Price"
    },
    footer: {
      desc: "We provide high-quality Begenas that meet the sacred standards of the Ethiopian Orthodox Tewahedo Church, delivered with speed and care.",
      quickLinks: "Quick Links",
      contact: "Contact",
      rights: "All rights reserved."
    }
  },
  am: {
    nav: {
      home: "መነሻ",
      gallery: "በገናዎች",
      about: "ስለ እኛ",
      contact: "ያግኙን"
    },
    hero: {
      badge: "መንፈስ ፈዋሽ የአውታር ድምጾች !",
      title: "እንዚራ በገና",
      title2: "እኔም እንደ ዳዊት እደረድራለው",
      desc: "ታሪክን በአውታር፤ ጥራትን በጥበብ። በጥንቃቄ የተሰሩ የበገናዎችን እዚህ ያገኛሉ።",
      viewCollection: "በገኖችን ይመልከቱ",
      learnMore: "የበለጠ ለማወቅ"
    },
    gallery: {
      title: "የበገና አይነቶች",
      desc: "ለጀማሪዎችም ሆነ ለባለሙያዎች በጥንቃቄ የተሰሩ በገናዎች።",
      showAll: "የምናቀርባቸው የበገና አይነቶችን ይመልከቱ",
      price: "ዋጋ"
    },
    footer: {
      desc: "የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተክርስቲያን የምትጠቀምባቸውን ፣ ጥራትና ደረጃቸው የጠበቁ በገናዎችን በፍጥነት እናቀርባለን።",
      quickLinks: "ማስፈንጠርያ",
      contact: "አድራሻ",
      rights: "መብቱ በህግ የተጠበቀ ነው።"
    }
  }
};

// --- Mock Data ---
const begenas = [
  {
    id: 1,
    number: "B-001",
    name: { en: "Royal Davit", am: "ሮያል ዳዊት" },
    price: "15,000 ETB",
    image: "/api/placeholder/400/500",
    description: {
      en: "Traditional 10-string Begena made from quality wood.",
      am: "ከጥራት እንጨት የተሰራ ባህላዊ የ10 ክር በገና።"
    }
  },
  {
    id: 2,
    number: "B-002",
    name: { en: "Lalibela Classic", am: "ላሊበላ ክላሲክ" },
    price: "12,500 ETB",
    image: "/api/placeholder/400/500",
    description: {
      en: "Handcrafted with premium leather and authentic sound.",
      am: "በምርጥ ቆዳ እና ትክክለኛ ድምጽ በእጅ የተሰራ።"
    }
  },
  {
    id: 3,
    number: "B-003",
    name: { en: "Gondar Special", am: "ጎንደር ስፔሻል" },
    price: "18,000 ETB",
    image: "/api/placeholder/400/500",
    description: {
      en: "Exquisite craftsmanship with detailed carvings.",
      am: "ልዩ ጥበብ ከዝርዝር ቅርጻ ቅርጾች ጋር።"
    }
  },
  {
    id: 4,
    number: "B-004",
    name: { en: "Axum Heritage", am: "አክሱም ቅርስ" },
    price: "14,200 ETB",
    image: "/api/placeholder/400/500",
    description: {
      en: "A perfect blend of tradition and durability.",
      am: "የባህል እና የመቆየት አቅም ፍጹም ውህደት።"
    }
  },
  {
    id: 5,
    number: "B-005",
    name: { en: "Tana Reed", am: "ጣና ሪድ" },
    price: "11,000 ETB",
    image: "/api/placeholder/400/500",
    description: {
      en: "Lightweight design with a deep, resonant tone.",
      am: "ቀላል ንድፍ ከጥልቅ፣ አስተጋባ ድምጽ ጋር።"
    }
  },
  {
    id: 6,
    number: "B-006",
    name: { en: "Sheba Gold", am: "ሳባ ጎልድ" },
    price: "20,000 ETB",
    image: "/api/placeholder/400/500",
    description: {
      en: "Premium finish for professional players.",
      am: "ለባለሙያ ተጫዋቾች ፕሪሚየም አጨራረስ።"
    }
  }
];

// --- Components ---

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2";
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-900/90 shadow-sm",
    outline: "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 text-slate-900",
    ghost: "hover:bg-slate-100 hover:text-slate-900 text-slate-600",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Badge = ({ children, className = '' }) => (
  <span className={`inline-flex items-center rounded-full border border-slate-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none text-slate-950 ${className}`}>
    {children}
  </span>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useContext(LanguageContext);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
            <img
              src="/logo.png"
              alt="BegenaHouse Logo"
              className="h-24 w-auto object-contain transition-all duration-300"
              style={{ filter: 'brightness(0) saturate(100%) invert(12%) sepia(96%) saturate(6232%) hue-rotate(1deg) brightness(90%) contrast(115%)' }}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">{t.nav.home}</a>
            <a href="#gallery" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">{t.nav.gallery}</a>
            <a href="#about" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">{t.nav.about}</a>

            {/* Language Switcher */}
            <div className="flex items-center bg-slate-100 rounded-full p-1 border border-slate-200">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${language === 'en' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('am')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${language === 'am' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                አማ
              </button>
            </div>

            <Button variant="primary" className="rounded-full px-6">
              {t.nav.contact}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {/* Mobile Language Switcher */}
            <div className="flex items-center bg-slate-100 rounded-full p-1 border border-slate-200">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded-full text-xs font-bold transition-all ${language === 'en' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('am')}
                className={`px-2 py-1 rounded-full text-xs font-bold transition-all ${language === 'am' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                አማ
              </button>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-white border-b border-gray-100 shadow-lg animate-in slide-in-from-top-5">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">{t.nav.home}</a>
            <a href="#gallery" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">{t.nav.gallery}</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">{t.nav.about}</a>
            <div className="pt-4">
              <Button className="w-full justify-center">{t.nav.contact}</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { t } = useContext(LanguageContext);
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <Badge className="mb-6 bg-[#981c00]/5 text-[#981c00] border-[#981c00]/20 px-4 py-1.5 text-sm backdrop-blur-sm">
          {t.hero.badge}
        </Badge>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-[#981c00] to-slate-900 animate-gradient-x">
            {t.hero.title}
          </span>
          <br className="hidden md:block" />
          <span className="text-slate-800">{t.hero.title2}</span>
        </h1>
        <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.desc}
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Button className="h-14 px-10 text-base rounded-full shadow-xl shadow-[#981c00]/20 hover:shadow-[#981c00]/40 transition-all duration-300 transform hover:-translate-y-1 bg-[#981c00] hover:bg-[#7a1600] text-white border-none">
            {t.hero.viewCollection}
          </Button>
          <Button variant="outline" className="h-14 px-10 text-base rounded-full border-slate-200 hover:border-[#981c00]/50 hover:text-[#981c00] hover:bg-[#981c00]/5 transition-all duration-300">
            {t.hero.learnMore}
          </Button>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#981c00]/10 rounded-full blur-[100px] opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-[#981c00]/5 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(152,28,0,0.03)_0%,transparent_70%)]"></div>
      </div>
    </section>
  );
};

const BegenaCard = ({ item }) => {
  const { language, t } = useContext(LanguageContext);
  return (
    <div className="group relative bg-white rounded-2xl border border-slate-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
      {/* Image Area */}
      <div className="aspect-[4/5] bg-slate-100 relative overflow-hidden">
        {/* Placeholder for actual image - using a gradient div instead of broken image */}
        <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-400">
          <Music size={64} className="opacity-20" />
        </div>

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Floating Number Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm border border-white/20">
          {item.number}
        </div>

        {/* Wishlist Button */}
        <button className="absolute top-4 right-4 p-2 rounded-full bg-white/90 text-slate-400 hover:text-red-500 hover:bg-white shadow-sm transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
          <Heart size={18} />
        </button>
      </div>

      {/* Content Area */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
            {item.name[language]}
          </h3>
        </div>
        <p className="text-sm text-slate-500 mb-4 line-clamp-2">
          {item.description[language]}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
          <div className="flex flex-col">
            <span className="text-xs text-slate-400 uppercase font-semibold tracking-wider">{t.gallery.price}</span>
            <span className="text-lg font-bold text-slate-900">{item.price}</span>
          </div>
          <Button variant="primary" className="rounded-full px-4 h-10 flex items-center justify-center bg-slate-900 group-hover:bg-slate-800 text-xs font-bold">
            {item.number}
          </Button>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const { t } = useContext(LanguageContext);
  return (
    <section id="gallery" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.gallery.title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t.gallery.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {begenas.map((item) => (
            <BegenaCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" className="h-12 px-8 rounded-full border-slate-300">
            {t.gallery.showAll}
          </Button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const { t } = useContext(LanguageContext);
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/logo.png"
                alt="BegenaHouse Logo"
                className="h-16 w-auto object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              {t.footer.desc}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">{t.footer.quickLinks}</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">{t.nav.home}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.nav.gallery}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.nav.about}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">{t.footer.contact}</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-slate-500" />
                <span>+251920312156</span>
              </li>
              <li className="flex items-center gap-3">
                <Info size={18} className="text-slate-500" />
                <span>kirubelhabtamu@gmail.com</span>
              </li>
              <li className="text-slate-500 text-sm mt-4">
                Addis Ababa, Ethiopia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">© 2025 Enzira Begena Shop. {t.footer.rights}</p>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/enzira_begena?igsh=ZGp2dW1tbzZ1Mnlk" target="_blank" className="text-slate-500 hover:text-white transition-colors">Instagram</a>
            <a href="https://t.me/enzira_begena" target="_blank" className="text-slate-500 hover:text-white transition-colors">Telegram</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  const [language, setLanguage] = useState('en');
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-200">
        <style>{`
          html {
            scroll-behavior: smooth;
          }
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          body {
            font-family: ${language === 'am' ? "'Shiromeda', 'Noto Sans Ethiopic', sans-serif" : "'Inter', sans-serif"};
          }
        `}</style>
        <Navbar />
        <Hero />
        <Gallery />
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
