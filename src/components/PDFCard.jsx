import {useState, useEffect} from 'react';
import {Download, X, ExternalLink, PenTool, Scale, Shield, Camera, FileText, AlertCircle} from 'lucide-react';

const iconMap = {
    PenTool,
    Scale,
    Shield,
    Camera,
    FileText,
    AlertCircle
};

export default function PDFCard({href, iconName, title, subtitle, colSpan = ""}) {
    const [showPreview, setShowPreview] = useState(false);
    const isDisabled = href === "#";
    const Icon = iconMap[iconName] || FileText;

    // Lock body scroll when modal is open
    useEffect(() => {
        if (showPreview) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showPreview]);

    const handleClick = (e) => {
        if (isDisabled) return;
        e.preventDefault();
        setShowPreview(true);
    };

    const handleClose = () => {
        setShowPreview(false);
    };

    const cardClasses = isDisabled
        ? "flex items-start gap-4 p-5 rounded-xl bg-slate-100 border-2 border-dashed border-slate-300 transition-all duration-300 group opacity-60 cursor-not-allowed"
        : "flex items-start gap-4 p-5 rounded-xl bg-white hover:border-red-300 hover:shadow-lg border border-slate-200 transition-all duration-300 group cursor-pointer";

    return (
        <>
            <a
                href={href}
                onClick={handleClick}
                className={`${cardClasses} ${colSpan}`}
                {...(!isDisabled && {target: "_blank"})}
            >
                <div
                    className={`${isDisabled ? 'bg-slate-200' : 'bg-slate-100 group-hover:bg-red-50'} p-3 rounded-lg ${isDisabled ? 'text-slate-400' : 'text-slate-600 group-hover:text-red-600'} transition-colors shrink-0`}>
                    <Icon size={22}/>
                </div>
                <div className="flex-1">
                    <span
                        className={`block font-bold text-base ${isDisabled ? 'text-slate-600' : 'text-slate-900 group-hover:text-red-700'} transition mb-1`}>
                        {title}
                    </span>
                    <span className="block text-xs text-slate-500">{subtitle}</span>
                </div>
                <Download
                    size={18}
                    className={`${isDisabled ? 'text-slate-400' : 'text-slate-400 group-hover:text-red-600'} transition shrink-0 mt-1`}
                />
            </a>

            {/* PDF Preview Modal */}
            {showPreview && !isDisabled && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                     onClick={handleClose}>
                    <div className="relative w-full max-w-6xl h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
                         onClick={(e) => e.stopPropagation()}>
                        {/* Header */}
                        <div
                            className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-white border-b border-slate-200">
                            <h3 className="font-bold text-slate-900 truncate pr-4">{title}</h3>
                            <div className="flex items-center gap-2">
                                <a
                                    href={href}
                                    target="_blank"
                                    className="px-4 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition flex items-center gap-2 text-sm"
                                >
                                    <ExternalLink size={16}/>
                                    Öffnen
                                </a>
                                <button
                                    onClick={handleClose}
                                    className="p-2 rounded-lg hover:bg-slate-100 transition"
                                    aria-label="Close preview"
                                >
                                    <X size={24} className="text-slate-600"/>
                                </button>
                            </div>
                        </div>

                        {/* PDF Viewer */}
                        <div className="w-full h-full pt-16">
                            <iframe
                                src={`${href}#view=FitH`}
                                className="w-full h-full border-0"
                                title={`PDF Preview: ${title}`}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}