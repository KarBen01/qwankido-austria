import React from 'react';
import { AlertCircle, Clock, Sun, Calendar, MapPin, Info } from 'lucide-react';

// Get type styling
const getTypeStyle = (type) => {
    switch (type) {
        case 'cancelled':
            return {
                bg: 'bg-red-50',
                border: 'border-red-200',
                accentBorder: 'border-l-red-600',
                icon: AlertCircle,
                iconColor: 'text-red-600',
                iconBg: 'bg-red-100',
                title: 'KEIN TRAINING'
            };
        case 'special-times':
            return {
                bg: 'bg-amber-50',
                border: 'border-amber-200',
                accentBorder: 'border-l-amber-600',
                icon: Clock,
                iconColor: 'text-amber-600',
                iconBg: 'bg-amber-100',
                title: 'GEÄNDERTE ZEITEN'
            };
        case 'outdoor':
            return {
                bg: 'bg-blue-50',
                border: 'border-blue-200',
                accentBorder: 'border-l-blue-600',
                icon: Sun,
                iconColor: 'text-blue-600',
                iconBg: 'bg-blue-100',
                title: 'OUTDOOR TRAINING'
            };
        default:
            return {
                bg: 'bg-slate-50',
                border: 'border-slate-200',
                accentBorder: 'border-l-slate-600',
                icon: Info,
                iconColor: 'text-slate-600',
                iconBg: 'bg-slate-100',
                title: 'INFO'
            };
    }
};

// Format date
const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('de-AT', { weekday: 'short', day: '2-digit', month: '2-digit', year: 'numeric' });
};

export default function TrainingChangeCard({ change }) {
    if (!change) return null;

    const style = getTypeStyle(change.type);
    const IconComponent = style.icon;

    return (
        <div className={`rounded-2xl border ${style.border} border-l-4 ${style.accentBorder} ${style.bg} shadow-sm overflow-hidden`}>
            <div className="p-5">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                    <div className={`p-2.5 rounded-lg ${style.iconBg} ${style.iconColor} shrink-0`}>
                        <IconComponent size={20} />
                    </div>
                    <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-1">
                            <span className={`text-xs font-bold uppercase tracking-wider ${style.iconColor}`}>
                                {style.title}
                            </span>
                        </div>
                        <h3 className="font-bold text-lg text-slate-900">
                            {change.title || change.reason}
                        </h3>
                        {change.date && (
                            <div className="flex items-center gap-2 mt-2 text-sm text-slate-600">
                                <Calendar size={14} className="text-slate-400" />
                                <span>{formatDate(change.date)}</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Description/Reason */}
                {change.description && (
                    <p className="text-sm text-slate-700 mb-3">
                        {change.description}
                    </p>
                )}

                {/* Affected Locations */}
                {change.affectedLocations && (
                    <div className="text-sm text-slate-600 mb-3">
                        <span className="font-bold">Betroffen:</span> {change.affectedLocations}
                    </div>
                )}

                {/* Location (for outdoor training) */}
                {change.location && (
                    <div className="flex items-start gap-2 text-sm text-slate-700 mb-3">
                        <MapPin size={16} className="shrink-0 text-slate-400 mt-0.5" />
                        <div>
                            <div className="font-medium">{change.location.name}</div>
                            {change.location.address && (
                                <div className="text-xs text-slate-500">{change.location.address}</div>
                            )}
                        </div>
                    </div>
                )}

                {/* Schedule (for special times or outdoor) */}
                {change.schedule && change.schedule.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-slate-200/50">
                        <h4 className="text-xs font-bold text-slate-700 uppercase mb-3">Trainingszeiten:</h4>
                        <div className="space-y-2">
                            {change.schedule.map((item, idx) => (
                                <div key={idx} className="flex items-center justify-between bg-white/50 rounded-lg p-2 text-sm">
                                    <span className="font-medium text-slate-800">{item.group}</span>
                                    <span className="text-slate-600 font-mono text-xs">{item.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Cancelled times (for special-times type) */}
                {change.cancelled && change.cancelled.length > 0 && (
                    <div className="mt-3">
                        {change.cancelled.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm text-red-700 bg-red-100/50 rounded-lg p-2">
                                <AlertCircle size={16} className="shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-bold">{item.timeRange}:</span> {item.reason}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Makeup info */}
                {change.makeup && (
                    <div className="mt-4 pt-4 border-t border-slate-200/50">
                        <div className="flex items-start gap-2 text-sm text-slate-700">
                            <Info size={16} className="shrink-0 text-blue-500 mt-0.5" />
                            <div>
                                <span className="font-bold">Nachholen:</span> {change.makeup}
                            </div>
                        </div>
                    </div>
                )}

                {/* Multiple dates (for outdoor training) */}
                {change.dates && change.dates.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-slate-200/50">
                        <h4 className="text-xs font-bold text-slate-700 uppercase mb-2">Termine:</h4>
                        <div className="flex flex-wrap gap-2">
                            {change.dates.slice(0, 6).map((date, idx) => (
                                <span key={idx} className="text-xs bg-white/50 border border-slate-200 rounded px-2 py-1 font-mono">
                                    {formatDate(date)}
                                </span>
                            ))}
                            {change.dates.length > 6 && (
                                <span className="text-xs text-slate-500 px-2 py-1">
                                    +{change.dates.length - 6} weitere
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Notes */}
                {change.notes && change.notes.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-slate-200/50">
                        <div className="space-y-1.5">
                            {change.notes.map((note, idx) => (
                                <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                                    <Info size={14} className="shrink-0 text-slate-400 mt-0.5" />
                                    <span>{note}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
