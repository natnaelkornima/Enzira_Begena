import React, { useContext } from 'react';
import { Heart, X } from 'lucide-react';
import { LanguageContext } from '../contexts/LanguageContext';
import { FavoritesContext } from '../contexts/FavoritesContext';
import { begenas } from '../data/begenas';

export const FavoritesPanel = ({ isOpen, onClose }) => {
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
