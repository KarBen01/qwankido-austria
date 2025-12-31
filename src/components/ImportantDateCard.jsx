import React from 'react';
import {Calendar, Clock, MapPin, Euro, AlertCircle, Star, ArrowRight} from 'lucide-react';

// Get type styling and icon
const getTypeConfig = (type) => {
    switch (type) {
        case 'payment-opportunity':
            return {
                icon: Euro,
                iconColor: 'text-green-600',
                iconBg: 'bg-green-100',
                borderColor: 'border-green-200',
                label: 'Zahlung'
            };
        case 'deadline':
            return {
                icon: AlertCircle,
                iconColor: 'text-red-600',
                iconBg: 'bg-red-100',
                borderColor: 'border-red-200',
                label: 'Deadline'
            };
        case 'first-training':
            return {
                icon: Star,
                iconColor: 'text-blue-600',
                iconBg: 'bg-blue-100',
                borderColor: 'border-blue-200',
                label: 'Trainingsstart'
            };
        case 'last-training':
            return {
                icon: Calendar,
                iconColor: 'text-orange-600',
                iconBg: 'bg-orange-100',
                borderColor: 'border-orange-200',
                label: 'Letztes Training'
            };
        case 'semester-start':
            return {
                icon: ArrowRight,
                iconColor: 'text-purple-600',
                iconBg: 'bg-purple-100',
                borderColor: 'border-purple-200',
                label: 'Semesterstart'
            };
        default:
            return {
                icon: Calendar,
                iconColor: 'text-slate-600',
                iconBg: 'bg-slate-100',
                borderColor: 'border-slate-200',
                label: 'Termin'
            };
    }
};

// Format date
const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('de-AT', {
        weekday: 'short',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
};

// Get day and month separately for large display
const getDateParts = (dateStr) => {
    if (!dateStr) return {day: '', month: ''};
    const date = new Date(dateStr);
    return {
        day: date.getDate(),
        month: date.toLocaleDateString('de-AT', {month: 'short'}).toUpperCase()
    };
};

export default function ImportantDateCard({date}) {
    if (!date) return null;

    const config = getTypeConfig(date.type);
    const IconComponent = config.icon;
    const {day, month} = getDateParts(date.date);

    return (
        <div
            className={`bg-white rounded-xl border ${config.borderColor} shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 overflow-hidden`}>
            <div className="p-5">
                {/* Header with Date Circle and Icon */}
                <div className="flex items-start gap-4 mb-4">
                    {/* Date Circle */}
                    {date.date && (
                        <div
                            className="flex flex-col items-center justify-center w-14 h-14 bg-slate-100 text-slate-700 rounded-xl border border-slate-200 flex-shrink-0">
                            <span className="text-xs uppercase font-bold">{month}</span>
                            <span className="text-xl font-black leading-none">{day}</span>
                        </div>
                    )}

                    {/* Icon and Label */}
                    <div className="flex-grow min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                            <div className={`p-1.5 rounded-lg ${config.iconBg} ${config.iconColor}`}>
                                <IconComponent size={14}/>
                            </div>
                            <span className={`text-xs font-bold uppercase tracking-wider ${config.iconColor}`}>
                                {config.label}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Title */}
                <h3 className="font-bold text-base text-slate-900 mb-3 leading-tight">
                    {date.title}
                </h3>

                {/* Details */}
                <div className="space-y-2 text-sm">
                    {/* Day name (if provided) */}
                    {date.day && (
                        <div className="flex items-center gap-2 text-slate-600">
                            <Calendar size={14} className="text-slate-400"/>
                            <span className="text-xs">{date.day}</span>
                        </div>
                    )}

                    {/* Time */}
                    {date.time && (
                        <div className="flex items-center gap-2 text-slate-600">
                            <Clock size={14} className="text-slate-400"/>
                            <span className="text-xs font-mono">{date.time} Uhr</span>
                        </div>
                    )}

                    {/* Location */}
                    {date.location && (
                        <div className="flex items-center gap-2 text-slate-600">
                            <MapPin size={14} className="text-slate-400"/>
                            <span className="text-xs">{date.location}</span>
                        </div>
                    )}

                    {/* Multiple Locations */}
                    {date.locations && date.locations.length > 0 && (
                        <div className="mt-2 space-y-1">
                            {date.locations.map((loc, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                                    <MapPin size={12} className="text-slate-400"/>
                                    <span>{loc}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Description */}
                {date.description && (
                    <p className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-600 leading-relaxed">
                        {date.description}
                    </p>
                )}
            </div>
        </div>
    );
}
