import { motion } from 'framer-motion';
import { Heart, Brain, Sparkles, Target } from 'lucide-react';
import { useState } from 'react';

const benefits = [
    {
        icon: Heart,
        iconSize: 48,
        title: "Inner Peace",
        desc: "Experience a deep sense of calm and tranquility through regular spiritual practice.",
        gradient: "from-rose-400 to-orange-500"
    },
    {
        icon: Brain,
        iconSize: 48,
        title: "Clear Mind",
        desc: "Reduce stress, anxiety, and negative thoughts with focused meditation.",
        gradient: "from-blue-400 to-purple-500"
    },
    {
        icon: Sparkles,
        iconSize: 48,
        title: "Spiritual Growth",
        desc: "Enhance self-awareness and deepen your connection with the divine.",
        gradient: "from-amber-400 to-orange-500"
    },
    {
        icon: Target,
        iconSize: 48,
        title: "Discipline",
        desc: "Build a consistent habit of spirituality and maintain daily practice.",
        gradient: "from-teal-400 to-emerald-500"
    }
];

const Benefits = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section id="benefits" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-orange-50 via-white to-saffron-50 px-4 sm:px-6 w-full overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Side - Heading and Description */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                            Benefits of <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-600 to-orange-500">Naam Jaap</span>
                        </h2>
                        <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-8">
                            Discover the transformative power of chanting in your everyday life. Experience profound changes in your mind, body, and spirit.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-1 bg-gradient-to-r from-saffron-500 to-orange-500 rounded-full"></div>
                            <p className="text-sm text-gray-500 font-medium">Backed by ancient wisdom</p>
                        </div>
                    </motion.div>

                    {/* Right Side - Four Equal Cards with Diagonal Fill Animation */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    onHoverStart={() => setHoveredIndex(index)}
                                    onHoverEnd={() => setHoveredIndex(null)}
                                    className="relative bg-white rounded-3xl p-8 cursor-pointer overflow-hidden group border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500"
                                    style={{ minHeight: '280px' }}
                                >
                                    {/* Diagonal Fill Animation - Right to Left */}
                                    <motion.div
                                        initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
                                        animate={{
                                            clipPath: hoveredIndex === index 
                                                ? 'polygon(100% 0, 0 0, 0 100%, 100% 100%)' 
                                                : 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            ease: [0.4, 0.0, 0.2, 1]
                                        }}
                                        className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-95`}
                                        style={{ 
                                            transformOrigin: 'right',
                                        }}
                                    />

                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col h-full">
                                        {/* Icon */}
                                        <motion.div
                                            animate={{
                                                scale: hoveredIndex === index ? 1.1 : 1,
                                                rotate: hoveredIndex === index ? 5 : 0
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className={`mb-6 transition-colors duration-300 ${
                                                hoveredIndex === index ? 'text-white' : 'text-saffron-600'
                                            }`}
                                        >
                                            <Icon size={benefit.iconSize} strokeWidth={1.5} />
                                        </motion.div>

                                        {/* Title */}
                                        <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                                            hoveredIndex === index ? 'text-white' : 'text-gray-800'
                                        }`}>
                                            {benefit.title}
                                        </h3>

                                        {/* Description */}
                                        <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                                            hoveredIndex === index ? 'text-white/90' : 'text-gray-600'
                                        }`}>
                                            {benefit.desc}
                                        </p>
                                    </div>

                                    {/* Subtle Corner Accent */}
                                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${benefit.gradient} opacity-10 rounded-bl-full transition-opacity duration-300 group-hover:opacity-0`}></div>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Benefits;
