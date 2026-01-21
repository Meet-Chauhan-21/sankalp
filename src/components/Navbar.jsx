import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();
    const location = useLocation();
    
    // Transform navbar background based on scroll
    const navbarOpacity = useTransform(scrollY, [0, 100], [0.85, 0.95]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', path: '/', type: 'link' },
        { name: 'About', path: '/about', type: 'link' },
        { name: 'Contact', path: '/contact', type: 'link' },
        { name: 'FAQ', path: '#faq', type: 'scroll' },
    ];

    const isActive = (path) => {
        if (path === '#faq') return false;
        return location.pathname === path;
    };

    const handleNavClick = (item) => {
        if (item.type === 'scroll') {
            // Smooth scroll to FAQ section on home page
            if (location.pathname !== '/') {
                // Navigate to home first, then scroll
                window.location.href = '/#faq';
            } else {
                // Already on home, just scroll
                scrollToFAQ();
            }
        }
        setIsOpen(false);
    };

    const scrollToFAQ = () => {
        // Find the HowItWorks section or create a FAQ section
        const faqSection = document.getElementById('faq') || document.getElementById('how-it-works');
        if (faqSection) {
            const navbarHeight = 100; // Offset for navbar
            const elementPosition = faqSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            {/* Desktop Navbar - Right Half Only */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="fixed top-6 right-8 z-50 hidden md:block"
            >
                <motion.div
                    style={{
                        opacity: navbarOpacity,
                    }}
                    className={`relative rounded-full transition-all duration-300 ${
                        scrolled 
                            ? 'bg-white/20 backdrop-blur-xl shadow-2xl shadow-black/20' 
                            : 'bg-white/15 backdrop-blur-xl shadow-xl shadow-black/15'
                    }`}
                >
                    {/* Enhanced liquid glass effect overlay */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-white/10 to-transparent pointer-events-none" />
                    
                    {/* Stronger border for contrast */}
                    <div className="absolute inset-0 rounded-full border-2 border-white/40 pointer-events-none" />
                    
                    {/* Animated subtle glow */}
                    <motion.div
                        animate={{
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-saffron-400/20 via-brand-orange/20 to-saffron-400/20 blur-md pointer-events-none"
                    />

                    {/* Slim navbar content */}
                    <div className="relative px-6 py-2.5 flex items-center justify-center gap-2">
                        {navItems.map((item) => {
                            if (item.type === 'scroll') {
                                return (
                                    <button
                                        key={item.path}
                                        onClick={() => handleNavClick(item)}
                                        className="relative px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 group"
                                    >
                                        {/* Liquid hover effect */}
                                        <motion.div
                                            initial={{ scale: 0, opacity: 0 }}
                                            whileHover={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 0.4, ease: 'easeOut' }}
                                            className="absolute inset-0 bg-gradient-to-r from-white/40 to-white/20 rounded-full"
                                        />
                                        
                                        <span className="relative z-10 text-gray-800 drop-shadow-sm group-hover:text-gray-900 group-hover:drop-shadow-md font-semibold inline-block">
                                            {item.name}
                                            {/* Smooth hover underline */}
                                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-700 to-gray-900 origin-left rounded-full shadow-sm scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                                        </span>
                                    </button>
                                );
                            }
                            
                            return (
                                <Link key={item.path} to={item.path}>
                                    <button
                                        className="relative px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 group"
                                    >
                                        {/* Liquid hover effect */}
                                        <motion.div
                                            initial={{ scale: 0, opacity: 0 }}
                                            whileHover={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 0.4, ease: 'easeOut' }}
                                            className="absolute inset-0 bg-gradient-to-r from-white/40 to-white/20 rounded-full"
                                        />
                                        
                                        {/* Active indicator */}
                                        {isActive(item.path) && (
                                            <>
                                                <motion.div
                                                    layoutId="activeTab"
                                                    className="absolute inset-0 bg-gradient-to-r from-saffron-500 to-brand-orange rounded-full"
                                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                                />
                                                <motion.div
                                                    animate={{
                                                        boxShadow: [
                                                            '0 0 15px rgba(255, 153, 51, 0.5)',
                                                            '0 0 25px rgba(255, 153, 51, 0.7)',
                                                            '0 0 15px rgba(255, 153, 51, 0.5)',
                                                        ],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: 'easeInOut',
                                                    }}
                                                    className="absolute inset-0 rounded-full"
                                                />
                                            </>
                                        )}
                                        
                                        <span className={`relative z-10 inline-block ${
                                            isActive(item.path) 
                                                ? 'text-white font-semibold drop-shadow-lg' 
                                                : 'text-gray-800 drop-shadow-sm group-hover:text-gray-900 group-hover:drop-shadow-md font-semibold'
                                        }`}>
                                            {item.name}
                                            {/* Smooth hover underline */}
                                            {!isActive(item.path) && (
                                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-700 to-gray-900 origin-left rounded-full shadow-sm scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                                            )}
                                        </span>
                                    </button>
                                </Link>
                            );
                        })}
                    </div>
                </motion.div>
            </motion.nav>

            {/* Mobile Hamburger Button */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden fixed top-6 right-6 z-50 p-3 rounded-full bg-white/20 backdrop-blur-xl border-2 border-white/40 shadow-xl"
            >
                {isOpen ? (
                    <X className="w-6 h-6 text-gray-800 drop-shadow-sm" />
                ) : (
                    <Menu className="w-6 h-6 text-gray-800 drop-shadow-sm" />
                )}
            </motion.button>

            {/* Mobile Menu - 60% Width, Slide from Right */}
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: isOpen ? 0 : '100%' }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="fixed inset-y-0 right-0 z-40 w-[60%] md:hidden rounded-l-3xl overflow-hidden"
            >
                <div className="h-full bg-white/20 backdrop-blur-2xl shadow-2xl border-l-2 border-white/40">
                    {/* Enhanced glass effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent pointer-events-none" />
                    
                    <div className="relative h-full flex flex-col justify-center px-6 py-8">
                        {navItems.map((item, index) => {
                            if (item.type === 'scroll') {
                                return (
                                    <motion.button
                                        key={item.path}
                                        onClick={() => handleNavClick(item)}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 + 0.2 }}
                                        className="relative mb-4 p-4 rounded-2xl bg-white/30 backdrop-blur-sm hover:bg-white/40 transition-all duration-300 border border-white/30 group"
                                    >
                                        <span className="relative z-10 text-lg font-semibold text-gray-800 drop-shadow-sm text-left block w-fit">
                                            {item.name}
                                            {/* Smooth hover underline */}
                                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-700 to-gray-900 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                                        </span>
                                    </motion.button>
                                );
                            }

                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 + 0.2 }}
                                        className={`relative mb-4 p-4 rounded-2xl transition-all duration-300 overflow-hidden border group ${
                                            isActive(item.path)
                                                ? 'bg-gradient-to-r from-saffron-500 to-brand-orange shadow-lg border-white/40'
                                                : 'bg-white/30 backdrop-blur-sm hover:bg-white/40 border-white/30'
                                        }`}
                                    >
                                        {/* Active glow effect */}
                                        {isActive(item.path) && (
                                            <motion.div
                                                animate={{
                                                    opacity: [0.4, 0.7, 0.4],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: 'easeInOut',
                                                }}
                                                className="absolute inset-0 bg-gradient-to-r from-saffron-400/40 to-brand-orange/40 blur-xl"
                                            />
                                        )}
                                        
                                        <span className={`relative z-10 text-lg font-semibold w-fit block ${
                                            isActive(item.path) ? 'text-white drop-shadow-lg' : 'text-gray-800 drop-shadow-sm'
                                        }`}>
                                            {item.name}
                                            {/* Smooth hover underline for non-active items */}
                                            {!isActive(item.path) && (
                                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-700 to-gray-900 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                                            )}
                                        </span>

                                        {/* Active indicator dot */}
                                        {isActive(item.path) && (
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-lg"
                                            />
                                        )}
                                    </motion.div>
                                </Link>
                            );
                        })}

                        {/* Decorative Om Symbol */}
                        <motion.div
                            animate={{
                                rotate: [0, 360],
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-7xl text-white/10 pointer-events-none"
                        >
                            🕉
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden"
                />
            )}
        </>
    );
};

export default Navbar;
