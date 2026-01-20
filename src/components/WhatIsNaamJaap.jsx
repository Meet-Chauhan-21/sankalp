import { motion } from 'framer-motion';
import { Sparkles, Scroll, Activity, Heart } from 'lucide-react';

const WhatIsNaamJaap = () => {
    return (
        <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-b from-brand-accent/50 to-white w-full">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 opacity-5 pointer-events-none translate-x-1/4 -translate-y-1/4 select-none hidden sm:block">
                <span className="text-[200px] sm:text-[300px] md:text-[400px] leading-none text-saffron-600 font-serif">🕉</span>
            </div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-saffron-100 rounded-full blur-3xl opacity-40 -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Typography & Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 text-saffron-600 font-bold mb-6 uppercase tracking-widest text-xs md:text-sm">
                            <Sparkles size={16} />
                            <span>Ancient Wisdom for Modern Minds</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 sm:mb-8 leading-tight">
                            Connect with the <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-600 to-brand-orange">Divine</span> through Sound.
                        </h2>

                        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                            <span className="font-bold text-gray-800">Naam Jaap</span> is more than just repetition; it is a sacred technology for the mind. By chanting names like <span className="text-saffron-600 font-medium">Ram, Krishna, or Shiv</span>, you tune your consciousness to a higher, purer frequency.
                        </p>

                        <div className="bg-white/80 backdrop-blur-md border-l-4 border-saffron-500 p-4 sm:p-6 md:p-8 rounded-r-2xl shadow-sm hover:shadow-md transition-shadow">
                            <p className="italic text-gray-700 font-medium text-base sm:text-lg">
                                "Just as fire burns fuel to ashes, the Name of God burns away all sins and impurities of the mind."
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column: Visual Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="relative"
                    >
                        {/* Decorative card background */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-saffron-500 to-brand-orange rounded-[2.5rem] transform rotate-3 opacity-20 blur-sm"></div>

                        <div className="bg-gradient-to-tr from-saffron-500 to-brand-orange p-1 rounded-[2.5rem] transform rotate-3 md:rotate-6 hover:rotate-2 transition-all duration-500 shadow-2xl relative z-10">
                            <div className="bg-white rounded-[2.3rem] p-8 md:p-10 h-full">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b border-gray-100 pb-4">Core Aspects</h3>
                                <ul className="space-y-8">
                                    <li className="flex items-start gap-4 group">
                                        <div className="bg-saffron-50 p-4 rounded-2xl text-saffron-600 mt-1 shrink-0 group-hover:bg-saffron-500 group-hover:text-white transition-colors duration-300">
                                            <Scroll size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 text-lg mb-1">Mantra Yoga</h4>
                                            <p className="text-sm text-gray-500 leading-relaxed">A focused form of yoga that centers the scattered mind through rhythmic sound vibrations.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4 group">
                                        <div className="bg-saffron-50 p-4 rounded-2xl text-saffron-600 mt-1 shrink-0 group-hover:bg-saffron-500 group-hover:text-white transition-colors duration-300">
                                            <Activity size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 text-lg mb-1">Vibrational Healing</h4>
                                            <p className="text-sm text-gray-500 leading-relaxed">Cleanses the subconscious mind and calms the nervous system instantly.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4 group">
                                        <div className="bg-saffron-50 p-4 rounded-2xl text-saffron-600 mt-1 shrink-0 group-hover:bg-saffron-500 group-hover:text-white transition-colors duration-300">
                                            <Heart size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 text-lg mb-1">Pure Devotion</h4>
                                            <p className="text-sm text-gray-500 leading-relaxed">A direct, simple bridge to connect your heart with the Divine energy.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default WhatIsNaamJaap;
