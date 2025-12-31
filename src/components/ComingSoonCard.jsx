import React from 'react';
import { Clock, AlertCircle, Package, Tent, Calendar, Info } from 'lucide-react';

// Icon mapping
const ICON_MAP = {
    Clock, AlertCircle, Package, Tent, Calendar, Info
};

// Get icon component from string name
const getIcon = (iconName) => ICON_MAP[iconName] || Info;

// Get status badge styling
const getStatusStyle = (status) => {
    switch (status) {
        case 'registration-opens-soon':
            return {
                text: 'Anmeldung öffnet bald',
                bg: 'bg-blue-100',
                textColor: 'text-blue-700',
                border: 'border-blue-200'
            };
        case 'announced':
            return {
                text: 'Angekündigt',
                bg: 'bg-amber-100',
                textColor: 'text-amber-700',
                border: 'border-amber-200'
            };
        case 'in-planning':
            return {
                text: 'In Planung',
                bg: 'bg-slate-100',
                textColor: 'text-slate-700',
                border: 'border-slate-200'
            };
        case 'ordered':
            return {
                text: 'Bestellt',
                bg: 'bg-purple-100',
                textColor: 'text-purple-700',
                border: 'border-purple-200'
            };
        default:
            return {
                text: 'Demnächst',
                bg: 'bg-slate-100',
                textColor: 'text-slate-700',
                border: 'border-slate-200'
            };
    }
};

// Get category badge color
const getCategoryColor = (category) => {
    const colors = {
        'Trainingslager': 'bg-teal-100 text-teal-700 border-teal-200',
        'Wettkampf': 'bg-red-100 text-red-700 border-red-200',
        'Seminar': 'bg-blue-100 text-blue-700 border-blue-200',
        'Equipment': 'bg-purple-100 text-purple-700 border-purple-200'
    };
    return colors[category] || 'bg-slate-100 text-slate-700 border-slate-200';
};

export default function ComingSoonCard({ item }) {
    if (!item) return null;

    const statusStyle = getStatusStyle(item.status);
    const IconComponent = getIcon(item.icon);
    const categoryColor = item.category ? getCategoryColor(item.category) : null;

    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 overflow-hidden">
            <div className="p-5">
                {/* Icon and Status Badge */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-slate-100 text-slate-600">
                            <IconComponent size={20} />
                        </div>
                        {item.category && (
                            <span className={`text-xs font-bold uppercase tracking-wider border px-2 py-1 rounded ${categoryColor}`}>
                                {item.category}
                            </span>
                        )}
                    </div>
                    <span className={`text-xs font-bold uppercase tracking-wider border px-2 py-1 rounded ${statusStyle.bg} ${statusStyle.textColor} ${statusStyle.border}`}>
                        {statusStyle.text}
                    </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-base text-slate-900 mb-3 leading-tight">
                    {item.title}
                </h3>

                {/* Description */}
                {item.description && (
                    <p className="text-sm text-slate-600 leading-relaxed">
                        {item.description}
                    </p>
                )}

                {/* "Mehr Info folgt" indicator */}
                <div className="mt-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Clock size={14} className="text-slate-400" />
                        <span>Mehr Informationen folgen in Kürze</span>
                    </div>
                </div>
            </div>

            {/* Subtle pulse animation for "coming soon" feel */}
            <div className="h-1 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 animate-pulse"></div>
        </div>
    );
}
