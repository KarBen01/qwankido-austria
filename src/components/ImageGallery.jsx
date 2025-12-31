import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

/**
 * Reusable Image Gallery Component
 * Shows a carousel in the modal that can expand to fullscreen
 *
 * @param {string[]} images - Array of image URLs
 * @param {string} title - Gallery title (optional)
 * @param {boolean} showAsCarousel - Show as carousel instead of thumbnails (default: false)
 */
export default function ImageGallery({ images = [], title = "Galerie", showAsCarousel = false }) {
    const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!images || images.length === 0) return null;

    const openFullscreen = (index) => {
        setCurrentIndex(index);
        setIsFullscreenOpen(true);
    };

    const closeFullscreen = () => {
        setIsFullscreenOpen(false);
    };

    const nextImage = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    // Keyboard navigation
    React.useEffect(() => {
        if (!isFullscreenOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'Escape') closeFullscreen();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isFullscreenOpen]);

    return (
        <>
            {showAsCarousel ? (
                /* Carousel Mode - In Modal */
                <div className="mb-4">
                    <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">{title}</h4>
                    <div className="relative bg-slate-100 rounded-lg overflow-hidden" style={{ height: '300px' }}>
                        {/* Current Image */}
                        <img
                            src={images[currentIndex]}
                            alt={`${title} ${currentIndex + 1}`}
                            className="w-full h-full object-contain cursor-pointer"
                            onClick={() => openFullscreen(currentIndex)}
                        />

                        {/* Navigation Arrows */}
                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition cursor-pointer"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition cursor-pointer"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </>
                        )}

                        {/* Image Counter */}
                        {images.length > 1 && (
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-medium">
                                {currentIndex + 1} / {images.length}
                            </div>
                        )}

                        {/* Thumbnail Indicators */}
                        {images.length > 1 && (
                            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
                                {images.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentIndex(i)}
                                        className={`w-2 h-2 rounded-full transition cursor-pointer ${
                                            i === currentIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
                                        }`}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Click to Expand Hint */}
                        <div className="absolute top-3 right-3 bg-black/60 text-white px-2 py-1 rounded text-xs">
                            Klicken zum Vergrößern
                        </div>
                    </div>
                </div>
            ) : (
                /* Thumbnail Grid Mode */
                <div className="mb-4">
                    <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">{title}</h4>
                    <div className="grid grid-cols-5 gap-2">
                        {images.map((img, i) => (
                            <button
                                key={i}
                                onClick={() => openFullscreen(i)}
                                className="aspect-video w-full rounded-lg border-2 border-slate-200 hover:border-red-400 transition cursor-pointer overflow-hidden group"
                            >
                                <img
                                    src={img}
                                    alt={`${title} ${i + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Full-Screen Modal */}
            {isFullscreenOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 pt-20">
                    {/* Main Image */}
                    <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8">
                        <img
                            src={images[currentIndex]}
                            alt={`${title} ${currentIndex + 1}`}
                            className="max-w-full max-h-full object-contain"
                        />

                        {/* Navigation Arrows - Larger on Mobile */}
                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 active:bg-white/30 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition cursor-pointer touch-manipulation"
                                    aria-label="Vorheriges Bild"
                                >
                                    <ChevronLeft size={28} className="md:w-8 md:h-8" />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 active:bg-white/30 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition cursor-pointer touch-manipulation"
                                    aria-label="Nächstes Bild"
                                >
                                    <ChevronRight size={28} className="md:w-8 md:h-8" />
                                </button>
                            </>
                        )}

                        {/* Close Button - Top Right - Larger Touch Target */}
                        <button
                            onClick={closeFullscreen}
                            className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/10 hover:bg-white/20 active:bg-white/30 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition cursor-pointer z-10 touch-manipulation"
                            aria-label="Schließen"
                        >
                            <X size={24} className="md:w-7 md:h-7" />
                        </button>

                        {/* ESC Hint - Show on desktop, hide on mobile */}
                        <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-xs md:text-sm font-medium hidden sm:block">
                            ESC zum Schließen
                        </div>

                        {/* Image Counter */}
                        {images.length > 1 && (
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                                {currentIndex + 1} / {images.length}
                            </div>
                        )}
                    </div>

                    {/* Thumbnail Strip at Bottom */}
                    {images.length > 1 && (
                        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 max-w-3xl w-full px-4">
                            <div className="flex gap-2 overflow-x-auto pb-2 justify-center">
                                {images.map((img, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentIndex(i)}
                                        className={`w-20 h-14 rounded border-2 flex-shrink-0 transition cursor-pointer overflow-hidden ${
                                            i === currentIndex
                                                ? 'border-red-500 ring-2 ring-red-300'
                                                : 'border-white/30 hover:border-white/60'
                                        }`}
                                    >
                                        <img
                                            src={img}
                                            alt={`Thumbnail ${i + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}
