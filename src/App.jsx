import React, { useState, useEffect, createContext, useContext } from 'react';
import { ShoppingBag, Menu, X, ChevronRight, Music, Heart, Info, Phone, Globe, ArrowRight } from 'lucide-react';

// --- Language Context ---
const LanguageContext = createContext();

// --- Favorites Context ---
const FavoritesContext = createContext();

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
    services: {
      title: "Our Services",
      delivery: "Free Delivery",
      desc: " exclusively for our customers in Addis Ababa.We will deliver your Begena order quickly. ",
      badge: "Premium Service"
    },
    gallery: {
      title: "Featured Collection",
      desc: "Explore our meticulously crafted instruments, designed for both beginners and masters of the begena.",
      showAll: "Show All Instruments",
      price: "Price"
    },
    detail: {
      back: "Back to Gallery",
      specifications: "Specifications",
      strings: "10 Strings",
      stringsDesc: "Made from lamb intestine",
      dimensions: "53\" × 24\"",
      dimensionsDesc: "Height × Width",
      handcrafted: "Handcrafted",
      handcraftedDesc: "Traditional Ethiopian craft",
      packageOption: "Package Option",
      withoutBag: "Begena Only",
      withBag: "With Carrying Bag",
      orderNow: "Order Now",
      contactUs: "Contact us on Telegram or Instagram"
    },
    favorites: {
      added: "Added to Favorites!",
      removed: "Removed from Favorites",
      title: "My Favorites",
      empty: "No favorites yet"
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
    services: {
      title: "አገልግሎቶቻችን",
      delivery: "ነፃ Delivery",
      desc: " ለአዲስ አበባ ደንበኞቻችን ብቻ። ያዘዙትን በገና ያሉበት ድርስ በፍጥነት እናቀርባለን።",
      badge: "ልዩ አገልግሎት"
    },
    gallery: {
      title: "የበገና አይነቶች",
      desc: "ለጀማሪዎችም ሆነ ለባለሙያዎች በጥንቃቄ የተሰሩ በገናዎች።",
      showAll: "የምናቀርባቸው የበገና አይነቶችን ይመልከቱ",
      price: "ዋጋ"
    },
    detail: {
      back: "ወደ በገናዎች ተመለስ",
      specifications: "ዝርዝሮች",
      strings: "10 አውታር",
      stringsDesc: "ከበግ አንጀት የተሰሩ",
      dimensions: "53\" × 24\"",
      dimensionsDesc: "ቁመት × ስፋት",
      handcrafted: "በእጅ የተሰራ",
      handcraftedDesc: "ባህላዊ የኢትዮጵያ ጥበብ",
      packageOption: "የጥቅል አማራጭ",
      withoutBag: "በገና ብቻ",
      withBag: "ከቦርሳ ጋር",
      orderNow: "አሁን ይዘዙ",
      contactUs: "በቴሌግራም ወይም ኢንስታግራም ያግኙን"
    },
    favorites: {
      added: "ወደ ተወዳጆች ታክሏል!",
      removed: "ከተወዳጆች ተወግዷል",
      title: "የእኔ ተወዳጆች",
      empty: "ገና ተወዳጆች የሉም"
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
    name: { en: "Begena One", am: "በገና አንድ" },
    price: "7,500 ETB",
    priceWithBag: "9,000 ETB",
    image: "/begena_new_1.jpg",
    bagImage: "/bag_1.jpg",
    description: {
      en: "Ethiopian spiritual instrument with amazing sound. 10 strings made from lamb intestine. Beautiful design with patterns and cross motifs. 53 inch long × 24 inch wide.",
      am: "በድንቅ ዲዛይን የተዋበ በገና ከጉልህ ድምፅ ጋር። በእንስሳት ተዋጽዖ የተሰሩ 10 አውታር ያሉት። በተለያዩ ሐረጎች መስቀል ዲዛይን የተዋበ። 53 ኢንች ቁመት እና 24 ኢንች ስፋት ያለው።"
    }
  },
  {
    id: 2,
    number: "B-002",
    name: { en: "Begena Two", am: "በገና ሁለት" },
    price: "8,500 ETB",
    priceWithBag: "10,000 ETB",
    image: "/begena_new_2.png",
    bagImage: "/bag_2.jpg",
    description: {
      en: "Ethiopian spiritual instrument with amazing sound. 10 strings made from lamb intestine. Handcrafted with premium leather and authentic resonance. 53 inch long × 24 inch wide.",
      am: "በድንቅ ዲዛይን የተዋበ በገና ከጉልህ ድምፅ ጋር። በእንስሳት ተዋጽዖ የተሰሩ 10 አውታር ያሉት። በተለያዩ ሐረጎች መስቀል ዲዛይን የተዋበ። 53 ኢንች ቁመት እና 24 ኢንች ስፋት ያለው።"
    }
  },
  {
    id: 3,
    number: "B-003",
    name: { en: "Begena Three", am: "በገና ሶስት" },
    price: "9,000 ETB",
    priceWithBag: "11,000 ETB",
    image: "/begena_new_3.jpg",
    bagImage: "/bag_3.jpg",
    description: {
      en: "Ethiopian spiritual instrument with amazing sound. 10 strings made from lamb intestine. Beautiful design adorned with Saint David's image. 53 inch long × 24 inch wide.",
      am: "በድንቅ ዲዛይን የተዋበ በገና ከጉልህ ድምፅ ጋር። በእንስሳት ተዋጽዖ የተሰሩ 10 አውታር ያሉት። በቅዱስ ዳዊት ምስል የተዋበ። 53 ኢንች ቁመት እና 24 ኢንች ስፋት ያለው።"
    }
  },
  {
    id: 4,
    number: "B-004",
    name: { en: "Begena Four", am: "በገና አራት" },
    price: "10,000 ETB",
    priceWithBag: "12,000 ETB",
    image: "/begena_new_4.png",
    bagImage: "/bag_4.png",
    description: {
      en: "Ethiopian spiritual instrument with amazing sound. 10 strings made from lamb intestine. Beautiful design with crown carvings and cross patterns. 53 inch long × 24 inch wide.",
      am: "በድንቅ ዲዛይን የተዋበ በገና ከጉልህ ድምፅ ጋር። በእንስሳት ተዋጽዖ የተሰሩ 10 አውታር ያሉት። በዘውድ ቅርጻ እና መስቀል ንድፍ የተዋበ። 53 ኢንች ቁመት እና 24 ኢንች ስፋት ያለው።"
    }
  },
  {
    id: 5,
    number: "B-005",
    name: { en: "Tana Reed", am: "ጣና ሪድ" },
    price: "10,000 ETB",
    image: "/begena_1.jpg",
    description: {
      en: "Lightweight design with a deep, resonant tone.",
      am: "ቀላል ንድፍ ከጥልቅ፣ አስተጋባ ድምጽ ጋር።"
    }
  },
  {
    id: 6,
    number: "B-006",
    name: { en: "Sheba Gold", am: "ሳባ ጎልድ" },
    price: "10,000 ETB",
    image: "/begena_2.jpg",
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

// --- Favorites Panel ---
const FavoritesPanel = ({ isOpen, onClose }) => {
  const { favorites } = useContext(FavoritesContext);
  const { language, t } = useContext(LanguageContext);

  if (!isOpen) return null;

  const favoriteItems = begenas.filter(b => favorites.includes(b.id));

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-50 animate-in fade-in" onClick={onClose}></div>

      {/* Panel */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl animate-in slide-in-from-right">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Heart className="text-red-500 fill-red-500" size={24} />
            {t.favorites.title}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto h-[calc(100%-80px)]">
          {favoriteItems.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              <Heart size={48} className="mx-auto mb-4 opacity-30" />
              <p>{t.favorites.empty}</p>
            </div>
          ) : (
            <div className="space-y-4">
              {favoriteItems.map(item => (
                <div key={item.id} className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                  <img src={item.image} alt={item.name[language]} className="w-20 h-28 object-cover rounded-lg" />
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900">{item.name[language]}</h3>
                    <p className="text-sm text-slate-500">{item.number}</p>
                    <p className="text-lg font-bold text-slate-900 mt-2">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

// --- Begena Detail Page ---
const BegenaDetailPage = ({ item, onClose, onContactClick }) => {
  const { language, t } = useContext(LanguageContext);
  const [withBag, setWithBag] = useState(false);
  const [showBagImage, setShowBagImage] = useState(false);

  if (!item) return null;

  const currentPrice = withBag ? item.priceWithBag : item.price;
  const currentImage = showBagImage && item.bagImage ? item.bagImage : item.image;

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto animate-in fade-in duration-300">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-lg border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-slate-600 hover:text-[#981c00] transition-colors font-medium"
          >
            <ChevronRight className="rotate-180" size={20} />
            {t.detail.back}
          </button>
          <span className="text-sm font-bold text-[#981c00] bg-[#981c00]/10 px-4 py-2 rounded-full">
            {item.number}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Image Section */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50 shadow-2xl">
              <img
                src={currentImage}
                alt={item.name[language]}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Image Toggle */}
            {item.bagImage && (
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => setShowBagImage(false)}
                  className={`p-2 rounded-xl border-2 transition-all ${!showBagImage ? 'border-[#981c00] bg-[#981c00]/10' : 'border-slate-200 hover:border-slate-300'}`}
                >
                  <img src={item.image} alt="Begena" className="w-10 h-14 object-cover rounded-lg" />
                </button>
                <button
                  onClick={() => setShowBagImage(true)}
                  className={`p-2 rounded-xl border-2 transition-all ${showBagImage ? 'border-[#981c00] bg-[#981c00]/10' : 'border-slate-200 hover:border-slate-300'}`}
                >
                  <img src={item.bagImage} alt="With Bag" className="w-10 h-14 object-cover rounded-lg" />
                </button>
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="space-y-8">
            {/* Title & Price */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                {item.name[language]}
              </h1>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-[#981c00]">{currentPrice}</span>
                {withBag && (
                  <span className="text-lg text-slate-400 line-through">{item.price}</span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-slate-600 leading-relaxed">
              {item.description[language]}
            </p>

            {/* Specifications */}
            <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4">{t.detail.specifications}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="text-center p-3 sm:p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-lg sm:text-xl font-bold text-[#981c00] mb-1">{t.detail.strings}</div>
                  <div className="text-xs text-slate-500 break-words">{t.detail.stringsDesc}</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-lg sm:text-xl font-bold text-[#981c00] mb-1">{t.detail.dimensions}</div>
                  <div className="text-xs text-slate-500 break-words">{t.detail.dimensionsDesc}</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-lg sm:text-xl font-bold text-[#981c00] mb-1">{t.detail.handcrafted}</div>
                  <div className="text-xs text-slate-500 break-words">{t.detail.handcraftedDesc}</div>
                </div>
              </div>
            </div>

            {/* Package Option */}
            {item.bagImage && (
              <div className="bg-gradient-to-r from-[#981c00]/5 to-[#981c00]/10 rounded-2xl p-6 border border-[#981c00]/20">
                <h3 className="text-lg font-bold text-slate-900 mb-4">{t.detail.packageOption}</h3>
                <div className="space-y-3">
                  <label
                    className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all ${!withBag ? 'bg-white border-2 border-[#981c00] shadow-lg' : 'bg-white/50 border border-slate-200 hover:border-slate-300'}`}
                    onClick={() => setWithBag(false)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${!withBag ? 'border-[#981c00] bg-[#981c00]' : 'border-slate-300'}`}>
                        {!withBag && <div className="w-2 h-2 bg-white rounded-full"></div>}
                      </div>
                      <span className="font-medium text-slate-900">{t.detail.withoutBag}</span>
                    </div>
                    <span className="font-bold text-slate-900">{item.price}</span>
                  </label>

                  <label
                    className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all ${withBag ? 'bg-white border-2 border-[#981c00] shadow-lg' : 'bg-white/50 border border-slate-200 hover:border-slate-300'}`}
                    onClick={() => setWithBag(true)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${withBag ? 'border-[#981c00] bg-[#981c00]' : 'border-slate-300'}`}>
                        {withBag && <div className="w-2 h-2 bg-white rounded-full"></div>}
                      </div>
                      <div>
                        <span className="font-medium text-slate-900">{t.detail.withBag}</span>
                        <span className="ml-2 text-xs bg-[#981c00] text-white px-2 py-0.5 rounded-full">
                          +{(parseInt(item.priceWithBag.replace(/[^0-9]/g, '')) - parseInt(item.price.replace(/[^0-9]/g, ''))).toLocaleString()} ETB
                        </span>
                      </div>
                    </div>
                    <span className="font-bold text-[#981c00]">{item.priceWithBag}</span>
                  </label>
                </div>
              </div>
            )}

            {/* Order Button */}
            <div className="space-y-4">
              <a
                href={`https://t.me/enzira_begena?text=${encodeURIComponent(
                  language === 'am'
                    ? `ሰላም! እባክዎን ይህን በገና ማዘዝ እፈልጋለሁ:\n\n📦 ምርት: ${item.name.am}\n🔢 ቁጥር: ${item.number}\n💰 ዋጋ: ${withBag ? item.priceWithBag : item.price}\n🎒 ቦርሳ: ${withBag ? 'አዎ' : 'የለም'}\n\n🖼️ ምስል: ${window.location.origin}${item.image}${withBag && item.bagImage ? `\n🖼️ የቦርሳ ምስል: ${window.location.origin}${item.bagImage}` : ''}\n\nእባክዎን ተጨማሪ መረጃ ይስጡኝ።`
                    : `Hello! I would like to order this Begena:\n\n📦 Product: ${item.name.en}\n🔢 Code: ${item.number}\n💰 Price: ${withBag ? item.priceWithBag : item.price}\n🎒 With Bag: ${withBag ? 'Yes' : 'No'}\n\n🖼️ Image: ${window.location.origin}${item.image}${withBag && item.bagImage ? `\n🖼️ Bag Image: ${window.location.origin}${item.bagImage}` : ''}\n\nPlease provide me with more details.`
                )}`}
                target="_blank"
                className="block w-full py-4 px-8 bg-gradient-to-r from-[#981c00] to-[#7a1600] text-white text-center rounded-2xl font-bold text-lg shadow-xl shadow-[#981c00]/30 hover:shadow-[#981c00]/50 hover:-translate-y-1 transition-all duration-300"
              >
                {t.detail.orderNow}
              </a>
              <button
                onClick={onContactClick}
                className="block w-full text-center text-slate-500 text-sm hover:text-[#981c00] transition-colors"
              >
                {t.detail.contactUs}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const { language, setLanguage, t } = useContext(LanguageContext);
  const { favorites } = useContext(FavoritesContext);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
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

              {/* Favorites Button */}
              <button
                onClick={() => setShowFavorites(true)}
                className="relative p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <Heart size={22} className={favorites.length > 0 ? 'text-red-500 fill-red-500' : 'text-slate-600'} />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {favorites.length}
                  </span>
                )}
              </button>

              <Button
                variant="primary"
                className="rounded-full px-6"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t.nav.contact}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
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

              {/* Mobile Favorites Button */}
              <button
                onClick={() => setShowFavorites(true)}
                className="relative p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <Heart size={20} className={favorites.length > 0 ? 'text-red-500 fill-red-500' : 'text-slate-600'} />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold text-[10px]">
                    {favorites.length}
                  </span>
                )}
              </button>

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
                <Button
                  className="w-full justify-center"
                  onClick={() => {
                    setIsOpen(false);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {t.nav.contact}
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
      <FavoritesPanel isOpen={showFavorites} onClose={() => setShowFavorites(false)} />
    </>
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
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-[#981c00] to-slate-900 animate-gradient-x">
            {t.hero.title}
          </span>
          <br />
          <span className="text-slate-800">{t.hero.title2}</span>
        </h1>
        <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.desc}
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Button
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="h-14 px-10 text-base rounded-full shadow-xl shadow-[#981c00]/20 hover:shadow-[#981c00]/40 transition-all duration-300 transform hover:-translate-y-1 bg-[#981c00] hover:bg-[#7a1600] text-white border-none"
          >
            {t.hero.viewCollection}
          </Button>
          <a href="https://www.instagram.com/enzira_begena/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="h-14 px-10 text-base rounded-full border-slate-200 hover:border-[#981c00]/50 hover:text-[#981c00] hover:bg-[#981c00]/5 transition-all duration-300">
              {t.hero.learnMore}
            </Button>
          </a>
        </div>
      </div>

      {/* Decorative Background Elements */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none overflow-hidden">


        {/* Premium Decorative Elements */}
        <img src="/deco_1.png" alt="" className="absolute top-[15%] left-[10%] w-12 opacity-80 animate-pulse" style={{ filter: 'brightness(0) saturate(100%) invert(13%) sepia(94%) saturate(5386%) hue-rotate(358deg) brightness(94%) contrast(114%)' }} />
        <img src="/deco_2.png" alt="" className="absolute top-[20%] right-[15%] w-16 opacity-80 animate-float" style={{ filter: 'brightness(0) saturate(100%) invert(13%) sepia(94%) saturate(5386%) hue-rotate(358deg) brightness(94%) contrast(114%)' }} />
        <img src="/deco_3.png" alt="" className="absolute bottom-[20%] left-[20%] w-10 opacity-80 animate-pulse" style={{ filter: 'brightness(0) saturate(100%) invert(13%) sepia(94%) saturate(5386%) hue-rotate(358deg) brightness(94%) contrast(114%)' }} />
        {/* Angel Background Image - Right */}
        <img
          src="/angel_bg.png"
          alt=""
          className="absolute top-[30%] right-[2%] -translate-y-1/2 w-24 md:w-48 h-auto opacity-60 blur-[4px] mix-blend-multiply rotate-12"
        />

        {/* Angel Background Image - Left (Duplicate) */}
        <img
          src="/angel_bg.png"
          alt=""
          className="absolute bottom-[5%] left-[2%] w-24 md:w-48 h-auto opacity-60 blur-[4px] mix-blend-multiply -rotate-12"
        />
      </div>
    </section>
  );
};

const BegenaCard = ({ item, onClick }) => {
  const { language, t } = useContext(LanguageContext);
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const [showToast, setShowToast] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const isFavorite = favorites.includes(item.id);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    toggleFavorite(item.id);
    setIsAnimating(true);
    if (!isFavorite) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <div
      onClick={onClick}
      className="group relative bg-white rounded-3xl p-2 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
    >
      <div className="relative aspect-[2/3] rounded-2xl overflow-hidden">
        {/* Full Bleed Image - Cover for premium look, taller aspect ratio to fit instrument */}
        <img
          src={item.image}
          alt={item.name[language]}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

        {/* Wishlist Button */}
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-md transition-all border border-white/30 ${isFavorite ? 'bg-red-500 text-white' : 'bg-black/20 text-white hover:bg-white hover:text-red-500'} ${isAnimating ? 'scale-125' : ''}`}
        >
          <Heart size={18} className={`transition-all duration-300 ${isFavorite ? 'fill-white' : ''} ${isAnimating ? 'animate-ping' : ''}`} />
        </button>

        {/* Toast Animation */}
        {showToast && (
          <div className="absolute top-16 right-4 bg-white text-slate-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-in slide-in-from-top-2 fade-in duration-300">
            ❤️ {t.favorites.added}
          </div>
        )}

        {/* Begena Number Badge - Bottom Right - Always Visible */}
        <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-full text-sm font-bold text-slate-900 shadow-lg">
          {item.number}
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-xl font-bold text-white mb-2">
            {item.name[language]}
          </h3>
          <p className="text-sm text-slate-200 mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {item.description[language]}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-white/20">
            <div className="flex flex-col">
              <span className="text-xs text-slate-300 uppercase font-semibold tracking-wider">{t.gallery.price}</span>
              <span className="text-lg font-bold text-white">{item.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Gallery = ({ onSelectBegena }) => {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {begenas.slice(0, 4).map((item) => (
            <BegenaCard key={item.id} item={item} onClick={() => onSelectBegena(item)} />
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

const Services = () => {
  const { t } = useContext(LanguageContext);
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#981c00]/5 to-white pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-0 shadow-2xl shadow-[#981c00]/10 border border-[#981c00]/10 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">

            {/* Text Content */}
            <div className="flex-1 p-6 md:p-16 text-center md:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#981c00]/10 text-[#981c00] font-bold text-sm tracking-wide uppercase mb-2">
                <span className="w-2 h-2 rounded-full bg-[#981c00] animate-pulse"></span>
                {t.services.badge}
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                {t.services.title}
              </h2>

              <div className="space-y-4">
                <p className="text-2xl md:text-3xl font-medium text-slate-800">
                  <span className="text-[#981c00] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#981c00] to-[#ff4d4d] animate-pulse">
                    {t.services.delivery}
                  </span>
                  {t.services.desc}
                </p>
              </div>

              <div className="pt-4">
                <div className="h-1 w-24 bg-gradient-to-r from-[#981c00] to-transparent rounded-full mx-auto md:mx-0"></div>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex-1 relative w-full flex justify-center md:justify-end p-6 md:p-0">
              {/* Glow Effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#981c00]/20 rounded-full blur-[80px] z-0"></div>

              <img
                src="/delivery_service.png"
                alt="Free Delivery Service"
                className="relative z-10 w-64 md:w-80 lg:w-96 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const { t } = useContext(LanguageContext);
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-16">
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

          <div >
            <h4 className="text-white font-semibold mb-6">{t.footer.contact}</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-slate-500" />
                <span>+251920312156</span>
              </li>
              <li className="flex items-center gap-3">
                <Info size={18} className="text-slate-500" />
                <span>enzirabegena19@gmail.com</span>
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
  const [selectedBegena, setSelectedBegena] = useState(null);

  // Favorites state with localStorage persistence
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('begena-favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(id)
        ? prev.filter(fav => fav !== id)
        : [...prev, id];
      localStorage.setItem('begena-favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
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
                  window.location.hash = 'contact';
                }, 300);
              }}
            />
          )}
        </div>
      </FavoritesContext.Provider>
    </LanguageContext.Provider>
  );
};

export default App;
