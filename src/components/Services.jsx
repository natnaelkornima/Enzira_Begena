import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

export const Services = () => {
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
                                src="/images/delivery_service.png"
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
