import React from 'react';
import {Calendar, MapPin, Clock, Users, Euro, Info, Trophy, Tent} from 'lucide-react';

// Helper to parse date and get month name
const getMonthName = (dateStr) => {
    const months = {
        "01": "JAN", "02": "FEB", "03": "MÄR", "04": "APR", "05": "MAI", "06": "JUN",
        "07": "JUL", "08": "AUG", "09": "SEP", "10": "OKT", "11": "NOV", "12": "DEZ"
    };
    if (dateStr.includes('-')) {
        // ISO format YYYY-MM-DD
        const [year, month, day] = dateStr.split('-');
        return {day: Number.parseInt(day), month: months[month]};
    } else {
        // DD.MM.YYYY format
        const [day, month, year] = dateStr.split('.');
        return {day: Number.parseInt(day), month: months[month]};
    }
};

// Get type badge color
const getTypeBadgeColor = (type) => {
    const colors = {
        'competition': 'bg-red-100 text-red-700 border-red-200',
        'training-camp': 'bg-teal-100 text-teal-700 border-teal-200',
        'training-event': 'bg-green-100 text-green-700 border-green-200',
        'social': 'bg-purple-100 text-purple-700 border-purple-200',
        'last-training': 'bg-orange-100 text-orange-700 border-orange-200',
        'first-training': 'bg-blue-100 text-blue-700 border-blue-200'
    };
    return colors[type] || 'bg-slate-100 text-slate-700 border-slate-200';
};

// Get type icon
const getTypeIcon = (type) => {
    switch (type) {
        case 'competition':
            return Trophy;
        case 'training-camp':
            return Tent;
        case 'training-event':
            return Users;
        case 'social':
            return Users;
        default:
            return Calendar;
    }
};

export default function EventCard({event}) {
    if (!event) return null;

    const {day, month} = getMonthName(event.date);
    const badgeColor = getTypeBadgeColor(event.type);
    const TypeIcon = getTypeIcon(event.type);

    return (
        <div
            className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-red-200 transition-all duration-300 overflow-hidden">
            <div className="p-5">
                {/* Header with Date and Badge */}
                <div className="flex items-start gap-4 mb-4">
                    {/* Date Block */}
                    <div
                        className="flex flex-col items-center justify-center w-16 h-16 bg-slate-100 text-slate-700 rounded-xl border border-slate-200 group-hover:border-red-200 group-hover:bg-red-50 group-hover:text-red-700 transition flex-shrink-0">
                        <span className="text-xs uppercase font-bold tracking-wider">{month}</span>
                        <span className="text-2xl font-black leading-none">{day}</span>
                    </div>

                    {/* Title and Badge */}
                    <div className="flex-grow min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                            <span
                                className={`inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider border px-2 py-1 rounded ${badgeColor}`}>
                                <TypeIcon size={12}/>
                                {event.category}
                            </span>
                            {event.status && event.status === 'registration-open' && (
                                <span
                                    className="text-xs font-bold text-green-600 bg-green-50 border border-green-200 px-2 py-1 rounded">
                                    Anmeldung offen
                                </span>
                            )}
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 group-hover:text-red-700 transition leading-tight">
                            {event.title}
                        </h3>
                    </div>
                </div>

                {/* Details */}
                <div className="space-y-2 text-sm">
                    {/* Time */}
                    {event.time && (
                        <div className="flex items-center gap-2 text-slate-600">
                            <Clock size={16} className="shrink-0 text-slate-400"/>
                            <span>{event.time} Uhr</span>
                        </div>
                    )}

                    {/* Location */}
                    {event.location && (
                        <div className="flex items-start gap-2 text-slate-600">
                            <MapPin size={16} className="shrink-0 text-slate-400 mt-0.5"/>
                            <div>
                                <div className="font-medium">{event.location.name}</div>
                                {event.location.address && (
                                    <div className="text-xs text-slate-500">{event.location.address}</div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Age Range and Cost */}
                    <div className="flex items-center gap-4 pt-1">
                        {event.ageRange && (
                            <div className="flex items-center gap-2 text-slate-600">
                                <Users size={16} className="text-slate-400"/>
                                <span className="text-xs">{event.ageRange}</span>
                            </div>
                        )}
                        {event.cost && (
                            <div className="flex items-center gap-2 text-slate-600">
                                <Euro size={16} className="text-slate-400"/>
                                <span className="text-xs font-bold">{event.cost}</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Description */}
                {event.description && (
                    <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                        {event.description}
                    </p>
                )}

                {/* Notes */}
                {event.notes && event.notes.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-slate-100">
                        <div className="space-y-1.5">
                            {event.notes.map((note, idx) => (
                                <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                                    <Info size={14} className="shrink-0 text-slate-400 mt-0.5"/>
                                    <span>{note}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Instructor (if available) */}
                {event.instructor && (
                    <div className="mt-4 pt-4 border-t border-slate-100">
                        <div className="text-xs text-slate-500">
                            <span className="font-bold">Leitung:</span> {event.instructor}
                        </div>
                    </div>
                )}

                {/* Date Range Display (if multi-day) */}
                {event.dateEnd && event.dateEnd !== event.date && (
                    <div className="mt-4 pt-4 border-t border-slate-100">
                        <div className="text-xs text-slate-500">
                            <span
                                className="font-bold">Mehrtägig:</span> {new Date(event.date).toLocaleDateString('de-AT')} - {new Date(event.dateEnd).toLocaleDateString('de-AT')}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
