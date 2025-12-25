import React, { useState, useContext } from 'react';
import { ChevronRight } from 'lucide-react';
import { LanguageContext } from '../contexts/LanguageContext';

export const BegenaDetailPage = ({ item, onClose, onContactClick }) => {
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
