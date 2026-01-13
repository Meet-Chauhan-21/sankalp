import { motion } from 'framer-motion';
import { Quote, Sparkles, Wind, Flower } from 'lucide-react';

const About = () => {
    return (
        <section className="relative py-32 overflow-hidden bg-gradient-to-br from-orange-50 to-saffron-100 text-gray-900 selection:bg-saffron-500 selection:text-white">
            {/* Dynamic Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-saffron-300 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-orange rounded-full blur-[150px] opacity-10"></div>
                {/* Subtle Texture */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* Left: Experimental Typographic Layout */}
                    <div className="lg:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="absolute -top-20 -left-10 text-[150px] md:text-[200px] font-bold text-saffron-900 opacity-[0.05] select-none pointer-events-none leading-none tracking-tighter">
                                SOUL
                            </div>

                            <h2 className="text-sm font-bold tracking-[0.3em] text-saffron-600 uppercase mb-4 pl-1">
                                Devotion over Complexity
                            </h2>
                            <h3 className="text-5xl md:text-6xl font-serif font-medium leading-tight mb-8 text-gray-900">
                                Sanctuary of <br />
                                <span className="italic text-saffron-600">Silence.</span>
                            </h3>

                            <div className="w-24 h-1 bg-gradient-to-r from-saffron-500 to-transparent rounded-full mb-8"></div>

                            <p className="text-gray-600 text-lg leading-relaxed max-w-sm">
                                In a world of constant notifications and endless noise, Sankalp exists to be your sanctuary of silence and focus.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right: Glassmorphism Cards */}
                    <div className="lg:col-span-7 grid md:grid-cols-2 gap-6 relative">
                        {/* Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white/60 backdrop-blur-xl border border-white/40 p-8 rounded-3xl hover:bg-white/80 transition-all group shadow-lg"
                        >
                            <div className="bg-gradient-to-br from-saffron-500 to-orange-600 w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                                <Sparkles size={24} />
                            </div>
                            <h4 className="text-xl font-bold mb-4 text-gray-900">Modern Spirituality</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                We bridge the gap between ancient vedic traditions and modern lifestyle needs. Your mala is now digital, but your devotion remains real.
                            </p>
                        </motion.div>

                        {/* Card 2 (Offset down) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white/60 backdrop-blur-xl border border-white/40 p-8 rounded-3xl hover:bg-white/80 transition-all group md:mt-12 shadow-lg"
                        >
                            <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                                <Wind size={24} />
                            </div>
                            <h4 className="text-xl font-bold mb-4 text-gray-900">Pure Discipline</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Sankalp isn't just a counter; it's a habit builder. It helps you reclaim your mind from distractions, one name at a time.
                            </p>
                        </motion.div>

                        {/* Floating Spiritual Badge */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.5, type: "spring" }}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex bg-saffron-500 text-white w-20 h-20 rounded-full items-center justify-center shadow-[0_0_40px_rgba(255,165,0,0.5)] z-20 border-4 border-white"
                        >
                            <Flower size={32} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
