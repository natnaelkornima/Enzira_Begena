import React, { useState, useContext } from 'react';
import { Heart } from 'lucide-react';
import { LanguageContext } from '../contexts/LanguageContext';
import { FavoritesContext } from '../contexts/FavoritesContext';

export const BegenaCard = ({ item, onClick }) => {
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
