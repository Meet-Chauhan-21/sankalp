import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when page is scrolled down 400px
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileHover={{ scale: 1.1, boxShadow: "0 10px 30px rgba(255, 107, 0, 0.4)" }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 bg-gradient-to-br from-saffron-500 to-orange-600 text-white p-4 rounded-full shadow-2xl cursor-pointer border-2 border-white/30 backdrop-blur-sm"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={24} className="animate-bounce" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
