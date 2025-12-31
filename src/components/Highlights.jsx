import React, { useState } from 'react';
import {
    Trophy, Star, ChevronRight, X, ArrowRight, AlertTriangle,
    CalendarOff, Clock, Info, Package, Users, Calendar, AlertCircle
} from 'lucide-react';
import ImageGallery from './ImageGallery.jsx';

// Icon mapping from string names to components
const ICON_MAP = {
    Trophy, Star, AlertTriangle, CalendarOff, Clock, Info, Package,
    Users, Calendar, AlertCircle, ArrowRight
};

// Get icon component from string name
const getIcon = (iconName) => ICON_MAP[iconName] || Info;

// Get style classes based on type
const getTypeStyles = (type) => {
    switch (type) {
        case 'alert':
            return {
                style: "bg-white border border-slate-200 border-l-4 border-l-red-600 shadow-sm",
                iconColor: "text-red-600 bg-red-50",
                icon: 'AlertTriangle'
            };
        case 'success':
            return {
                style: "bg-white border border-slate-200 border-l-4 border-l-amber-500 shadow-sm hover:shadow-md hover:-translate-y-1",
                iconColor: "text-amber-600 bg-amber-50",
                icon: 'Trophy'
            };
        case 'info':
            return {
                style: "bg-white border border-slate-200 border-l-4 border-l-blue-500 shadow-sm hover:shadow-md hover:-translate-y-1",
                iconColor: "text-blue-600 bg-blue-50",
                icon: 'Info'
            };
        case 'warning':
            return {
                style: "bg-white border border-slate-200 border-l-4 border-l-orange-500 shadow-sm hover:shadow-md hover:-translate-y-1",
                iconColor: "text-orange-600 bg-orange-50",
                icon: 'AlertCircle'
            };
        default:
            return {
                style: "bg-white border border-slate-200 border-l-4 border-l-slate-500 shadow-sm hover:shadow-md hover:-translate-y-1",
                iconColor: "text-slate-600 bg-slate-50",
                icon: 'Info'
            };
    }
};

// Get color classes for detail icons
const getDetailColorClass = (iconName) => {
    const colors = {
        Trophy: "text-amber-700",
        Users: "text-blue-700",
        Calendar: "text-green-700",
        CalendarOff: "text-red-700",
        Clock: "text-orange-700",
        Star: "text-blue-700",
        ArrowRight: "text-green-700",
        Package: "text-purple-700"
    };
    return colors[iconName] || "text-slate-700";
};

export default function Highlights({ highlights = [] }) {
    const [selectedItem, setSelectedItem] = useState(null);

    // Lock body scroll when modal is open
    React.useEffect(() => {
        if (selectedItem) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedItem]);

    // If no highlights, return null
    if (!highlights || highlights.length === 0) return null;

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {highlights.map((item) => {
                    const isAlert = item.type === 'alert';
                    const isFullWidth = isAlert || item.type === 'success'; // Alerts and success messages span 2 columns
                    const spanClass = isFullWidth ? 'md:col-span-2' : 'md:col-span-1';
                    const typeStyles = getTypeStyles(item.type);
                    const IconComponent = getIcon(typeStyles.icon);

                    return (
                        <div
                            key={item.id}
                            className={`relative rounded-xl transition-all duration-300 overflow-hidden ${spanClass} ${typeStyles.style} ${!isAlert ? 'cursor-pointer group' : ''}`}
                            onClick={() => !isAlert && setSelectedItem(item)}
                        >
                            <div className="p-4 h-full flex flex-col">
                                <div className="flex items-start gap-3 mb-3">
                                    <div className={`p-2 rounded-lg shrink-0 ${typeStyles.iconColor}`}>
                                        <IconComponent size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-slate-900 leading-tight">{item.title}</h3>
                                        <p className="text-sm text-slate-500 mt-1 leading-relaxed">{item.shortText}</p>
                                    </div>
                                </div>

                                {/* Details grid for all types (previously only for alerts) */}
                                {item.details && (
                                    <div className="mt-3 grid grid-cols-3 gap-3 pt-3 border-t border-slate-100">
                                        {item.details.map((detail, idx) => {
                                            const DetailIcon = getIcon(detail.icon);
                                            const colorClass = getDetailColorClass(detail.icon);

                                            return (
                                                <div key={idx} className="flex items-center gap-2">
                                                    <div className={`shrink-0 ${colorClass}`}>
                                                        <DetailIcon size={18} />
                                                    </div>
                                                    <div className="min-w-0">
                                                        <span className={`block font-bold text-sm text-slate-800`}>
                                                            {detail.label}
                                                        </span>
                                                        <span className="block text-sm text-slate-500 truncate">{detail.value}</span>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}

                                {!isAlert && (
                                    <div className="mt-auto pt-3 flex items-center text-xs font-bold text-slate-400 group-hover:text-slate-800 transition-colors uppercase tracking-wide">
                                        Mehr erfahren
                                        <ChevronRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* MODAL */}
            {selectedItem && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                        onClick={() => setSelectedItem(null)}
                    ></div>

                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in duration-200 flex flex-col max-h-[75vh]">

                        {/* Close Button - Top Right Corner */}
                        <button
                            onClick={() => setSelectedItem(null)}
                            className="absolute top-4 right-4 z-20 bg-slate-900/80 hover:bg-slate-900 text-white p-2 rounded-full transition cursor-pointer shadow-lg"
                        >
                            <X size={18} />
                        </button>

                        <div className="p-5 overflow-y-auto flex-1">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{selectedItem.title}</h3>

                            <p className="text-slate-600 leading-relaxed mb-4 text-sm whitespace-pre-line">
                                {selectedItem.fullText || selectedItem.shortText}
                            </p>

                            {/* Image Gallery - Carousel mode */}
                            {selectedItem.images && selectedItem.images.length > 0 && (
                                <ImageGallery images={selectedItem.images} title="Bilder" showAsCarousel={true} />
                            )}
                        </div>

                        {/* Fixed Footer with Buttons */}
                        <div className="sticky bottom-0 bg-slate-50 border-t border-slate-200 p-4 flex justify-end gap-2 shrink-0">
                            {selectedItem.link && (
                                <a
                                    href={selectedItem.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-red-600 text-white rounded-lg font-bold text-sm hover:bg-red-700 transition flex items-center gap-1.5 cursor-pointer"
                                >
                                    Flyer ansehen <ArrowRight size={14} />
                                </a>
                            )}
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="px-4 py-2 bg-slate-900 text-white rounded-lg font-bold text-sm hover:bg-slate-800 transition cursor-pointer"
                            >
                                Schließen
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}