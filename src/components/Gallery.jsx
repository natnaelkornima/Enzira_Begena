import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { BegenaCard } from './BegenaCard';
import { Button } from './ui/Button';
import { begenas } from '../data/begenas';

export const Gallery = ({ onSelectBegena }) => {
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
