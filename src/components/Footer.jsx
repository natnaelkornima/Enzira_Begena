import React, { useContext } from 'react';
import { Phone, Info } from 'lucide-react';
import { LanguageContext } from '../contexts/LanguageContext';

export const Footer = () => {
    const { t } = useContext(LanguageContext);
    return (
        <footer id="contact" className="bg-slate-900 text-slate-300 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <img
                                src="/images/logo.png"
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
