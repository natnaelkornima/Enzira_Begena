import React, { useState, useEffect, useContext } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { LanguageContext } from '../contexts/LanguageContext';
import { FavoritesContext } from '../contexts/FavoritesContext';
import { Button } from './ui/Button';
import { FavoritesPanel } from './FavoritesPanel';

export const Navbar = () => {
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
                                src="/images/logo.png"
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
