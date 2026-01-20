import { motion } from 'framer-motion';
import { ChevronRight, Download, Smartphone } from 'lucide-react';
import { useState } from 'react';

const Hero = () => {
    const [hoveredButton, setHoveredButton] = useState(null);

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-saffron-500 via-brand-orange to-saffron-600 overflow-hidden text-brand-white w-full">
            {/* Background patterns */}
            {/* Large Om Symbol */}
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

            {/* Small Om Symbol - Top Left */}
            <motion.div
                animate={{
                    y: [0, -15, 0],
                    rotate: [0, 10, -10, 0]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-32 left-10 text-[80px] md:text-[120px] text-white opacity-15 pointer-events-none select-none leading-none z-0"
            >
                🕉
            </motion.div>

            {/* Medium Ram Text - Left Side */}
            <motion.div
                animate={{
                    y: [0, 20, 0],
                    x: [0, -10, 0]
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/3 left-5 md:left-10 text-[100px] md:text-[150px] font-bold text-orange-300 opacity-30 pointer-events-none select-none leading-none z-0 font-serif"
            >
                राम
            </motion.div>

            {/* Small Ram Text - Top Right */}
            <motion.div
                animate={{
                    y: [0, -10, 0],
                    rotate: [0, -5, 5, 0]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-5 md:top-10 right-5 md:right-32 text-[60px] md:text-[100px] font-bold text-orange-300 opacity-30 pointer-events-none select-none leading-none z-0 font-serif"
            >
                राम
            </motion.div>

            {/* Medium Om Symbol - Bottom Left */}
            <motion.div
                animate={{
                    y: [0, 15, 0],
                    x: [0, 10, 0],
                    rotate: [0, -8, 8, 0]
                }}
                transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-32 left-16 md:left-32 text-[100px] md:text-[160px] text-white opacity-10 pointer-events-none select-none leading-none z-0"
            >
                🕉
            </motion.div>

            {/* Small Ram Text - Bottom Right */}
            <motion.div
                animate={{
                    y: [0, 10, 0],
                    rotate: [0, 5, -5, 0]
                }}
                transition={{
                    duration: 7.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-1/4 right-10 md:right-20 text-[70px] md:text-[110px] font-bold text-orange-300 opacity-30 pointer-events-none select-none leading-none z-0 font-serif"
            >
                राम
            </motion.div>

            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-yellow-300 blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-red-400 blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl pt-8 sm:pt-12 pb-20 sm:pb-24 md:pb-32">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Left Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left px-4 lg:px-0"
                    >
                        {/* Logo */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            whileHover={{ 
                                scale: 1.1, 
                                rotate: [0, -5, 5, -5, 0],
                                boxShadow: "0 25px 50px rgba(255, 255, 255, 0.3)",
                                transition: { duration: 0.3 }
                            }}
                            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                            className="inline-block mb-3 sm:mb-4 cursor-pointer"
                        >
                            <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border-4 border-white/30 overflow-hidden transition-all duration-300 hover:border-white/50">
                                <img src="/images/sankalp-logo.png" alt="Sankalp Logo" className="w-full h-full object-cover" />
                            </div>
                        </motion.div>

                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-3 sm:mb-4 tracking-tight drop-shadow-md">
                            Sankalp
                        </h1>
                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-6 sm:mb-8 text-yellow-50 italic bg-gradient-to-r from-yellow-200 via-yellow-100 to-orange-200 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]" style={{ fontFamily: '\"Playfair Display\", \"Georgia\", serif' }}>
                            Transform Your Mind Through Naam Jaap
                        </p>
                    </motion.div>

                    {/* Right Side - Description and Buttons */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col gap-6 justify-center px-4 lg:px-0"
                    >
                        {/* Description Text */}
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/90 text-center lg:text-left max-w-xl mx-auto lg:mx-0 mb-2">
                            Sankalp is a spiritual companion that helps devotees chant God's name with focus, discipline, and devotion.
                        </p>

                        {/* Primary Download Button */}
                        <motion.a
                            href="#download"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('download')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}
                            onMouseEnter={() => setHoveredButton('download')}
                            onMouseLeave={() => setHoveredButton(null)}
                            whileTap={{ scale: 0.95 }}
                            className={`relative bg-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-2xl transition-all flex items-center justify-center gap-3 overflow-hidden cursor-pointer mx-auto lg:mx-0 w-fit ${hoveredButton === 'download' ? 'text-white' : 'text-saffron-600'}`}
                        >
                            {/* Diagonal Fill Animation */}
                            <motion.div
                                initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
                                animate={{ 
                                    clipPath: hoveredButton === 'download' 
                                        ? 'polygon(100% 0, 0 0, 0 100%, 100% 100%)' 
                                        : 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'
                                }}
                                transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                                className="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600"
                            />
                            
                            <Download size={22} className="relative z-10" />
                            <span className="relative z-10">Download App</span>
                        </motion.a>

                        {/* Secondary Info Button */}
                        <motion.a
                            href="#benefits"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}
                            onMouseEnter={() => setHoveredButton('learn')}
                            onMouseLeave={() => setHoveredButton(null)}
                            whileTap={{ scale: 0.95 }}
                            className="relative bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.3)] cursor-pointer overflow-hidden mx-auto lg:mx-0 w-fit"
                        >
                            {/* Diagonal Fill Animation */}
                            <motion.div
                                initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
                                animate={{ 
                                    clipPath: hoveredButton === 'learn' 
                                        ? 'polygon(100% 0, 0 0, 0 100%, 100% 100%)' 
                                        : 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'
                                }}
                                transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                                className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/20 to-white/10"
                            />

                            <Smartphone size={20} className="relative z-10" />
                            <span className="relative z-10">Learn More</span>
                            <ChevronRight size={20} className="relative z-10" />
                        </motion.a>
                    </motion.div>
                </div>
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
