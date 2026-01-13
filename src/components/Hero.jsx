import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-saffron-500 via-brand-orange to-saffron-600 overflow-hidden text-brand-white">
            {/* Background patterns */}
            {/* Background patterns */}
            <motion.div
                animate={{
                    x: [0, 20, -20, 10, -10, 0],
                    y: [0, -20, 10, -10, 20, 0],
                    rotate: [0, 5, -5, 3, -3, 0]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut"
                }}
                className="absolute top-10 right-10 md:top-20 md:right-20 text-[300px] md:text-[500px] font-bold text-white opacity-10 pointer-events-none select-none leading-none z-0 mix-blend-overlay font-serif"
            >
                🕉
            </motion.div>
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-yellow-300 blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-red-400 blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight drop-shadow-md">
                        Sankalp
                    </h1>
                    <p className="text-xl md:text-3xl font-light mb-8 text-yellow-100 italic">
                        Transform Your Mind Through Naam Jaap
                    </p>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-10 text-white/90">
                        Sankalp is a spiritual companion that helps devotees chant God’s name with focus, discipline, and devotion.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-brand-accent text-saffron-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto"
                    >
                        Start Your Spiritual Journey
                        <ChevronRight size={20} />
                    </motion.button>
                </motion.div>
            </div>

            {/* Decorative calm element at bottom */}
            <div className="absolute bottom-0 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
                    <path fill="#FEF9E7" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </div>
    );
};

export default Hero;
