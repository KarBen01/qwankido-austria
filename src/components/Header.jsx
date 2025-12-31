import React, {useState, useEffect} from 'react';
import {Menu, X} from 'lucide-react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);

        // Aktuellen Pfad setzen für Active-State
        setCurrentPath(window.location.pathname);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        {label: 'Home', path: '/'},
        {label: 'Vereine', path: '/vereine'},
        {label: 'Trainer', path: '/trainer'},
        {label: 'Aktuelles', path: '/aktuelles'},
    ];

    return (
        // ÄNDERUNG: 'border-t-4' entfernt und durch 'border-b-4 border-red-600' ersetzt.
        // Der Border ist jetzt immer da, egal ob gescrollt oder nicht.
        <nav
            className={`fixed w-full z-50 transition-all duration-300 border-b-4 border-red-600 ${scrolled ? 'bg-white shadow-sm py-2' : 'bg-white py-4'}`}>
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-14">

                    {/* Logo Area */}
                    <a href="/" className="flex items-center gap-3 group">
                        <img
                            src="/images/logo.png"
                            alt="Qwan Ki Do Logo"
                            className="w-12 h-12 rounded-full object-cover hover:scale-105 transition shadow-sm"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                        {/* Fallback */}
                        <div
                            className="hidden w-12 h-12 bg-red-700 rounded-full items-center justify-center text-white font-bold text-lg shadow-sm border border-white">Q
                        </div>

                        <div className="leading-tight">
                            <span
                                className="block font-bold text-lg tracking-tight text-slate-900 group-hover:text-red-700 transition">Qwan Ki Do</span>
                            <span
                                className="block text-xs font-medium text-slate-500 uppercase tracking-widest">Österreich</span>
                        </div>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-1 items-center">
                        {navItems.map((item) => (
                            <a
                                key={item.path}
                                href={item.path}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                                    (item.path === '/' && currentPath === '/') || (item.path !== '/' && currentPath.startsWith(item.path))
                                        ? 'text-red-700 bg-red-50'
                                        : 'text-slate-600 hover:text-red-700 hover:bg-slate-50'
                                }`}
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="mailto:office@qwankido.at?subject=Anfrage%20Probetraining"
                            className="ml-4 bg-red-700 text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-red-800 transition shadow-sm hover:shadow flex items-center gap-2"
                        >
                            Probetraining
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-slate-600">
                        {mobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {mobileMenuOpen && (
                <div
                    className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl py-4 px-4 flex flex-col gap-2">
                    {navItems.map((item) => (
                        <a
                            key={item.path}
                            href={item.path}
                            className="text-left px-4 py-3 rounded-lg text-slate-700 font-medium hover:bg-slate-50"
                        >
                            {item.label}
                        </a>
                    ))}
                    <a href="mailto:office@qwankido.at"
                       className="mt-2 w-full bg-red-700 text-white py-3 rounded-lg font-bold text-center">
                        E-Mail senden
                    </a>
                </div>
            )}
        </nav>
    );
}