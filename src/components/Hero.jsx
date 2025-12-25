import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';

export const Hero = () => {
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
                <img src="/images/deco_1.png" alt="" className="absolute top-[15%] left-[10%] w-12 opacity-80 animate-pulse" style={{ filter: 'brightness(0) saturate(100%) invert(13%) sepia(94%) saturate(5386%) hue-rotate(358deg) brightness(94%) contrast(114%)' }} />
                <img src="/images/deco_2.png" alt="" className="absolute top-[20%] right-[15%] w-16 opacity-80 animate-float" style={{ filter: 'brightness(0) saturate(100%) invert(13%) sepia(94%) saturate(5386%) hue-rotate(358deg) brightness(94%) contrast(114%)' }} />
                <img src="/images/deco_3.png" alt="" className="absolute bottom-[20%] left-[20%] w-10 opacity-80 animate-pulse" style={{ filter: 'brightness(0) saturate(100%) invert(13%) sepia(94%) saturate(5386%) hue-rotate(358deg) brightness(94%) contrast(114%)' }} />
                {/* Angel Background Image - Right */}
                <img
                    src="/images/angel_bg.png"
                    alt=""
                    className="absolute top-[30%] right-[2%] -translate-y-1/2 w-24 md:w-48 h-auto opacity-60 blur-[4px] mix-blend-multiply rotate-12"
                />

                {/* Angel Background Image - Left (Duplicate) */}
                <img
                    src="/images/angel_bg.png"
                    alt=""
                    className="absolute bottom-[5%] left-[2%] w-24 md:w-48 h-auto opacity-60 blur-[4px] mix-blend-multiply -rotate-12"
                />
            </div>
        </section>
    );
};
