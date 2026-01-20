import { motion } from 'framer-motion';
import { MousePointer2, Smartphone, Hash, Trophy } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: "Select Your Deity",
        desc: "Start by choosing the name that resonates with your soul—Ram, Krishna, Shiv, or any personal mantra.",
        icon: <MousePointer2 size={24} />,
        color: "from-orange-400 to-red-500"
    },
    {
        id: 2,
        title: "Tap to Chant",
        desc: "The interface is pure and distraction-free. Simply tap anywhere on the screen for every mantra you recite.",
        icon: <Smartphone size={24} />,
        color: "from-blue-400 to-purple-500"
    },
    {
        id: 3,
        title: "Experience Flow",
        desc: "Seamless counting with haptic feedback allows you to chant with closed eyes, maintaining deep focus.",
        icon: <Hash size={24} />,
        color: "from-green-400 to-teal-500"
    },
    {
        id: 4,
        title: "Grow Daily",
        desc: "Visualize your spiritual consistency. Track your streaks and watch your discipline transform your life.",
        icon: <Trophy size={24} />,
        color: "from-yellow-400 to-amber-500"
    }
];

const HowItWorks = () => {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-saffron-50 relative overflow-hidden w-full">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-saffron-200 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-brand-accent rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-12 sm:mb-16 md:mb-20 text-saffron-900">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-xs sm:text-sm font-bold tracking-widest text-saffron-600 uppercase mb-2 sm:mb-3">Simple & Intuitive</h2>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif">How Sankalp Works</h3>
                    </motion.div>
                </div>

                <div className="relative max-w-6xl mx-auto flex flex-col items-center">

                    {/* SVG Connecting Lines for ZigZag Pattern */}
                    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                        {/* We will draw lines between center points of cards logically */}
                        {/* This is a visual representation, using a path that zigzags */}
                        <path d="M 25 10 L 75 35 L 25 60 L 75 85" fill="none" stroke="#FF9933" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.4" vectorEffect="non-scaling-stroke" />
                    </svg>

                    <div className="w-full space-y-12 md:space-y-0 relative">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, scale: 0.9, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row items-center w-full relative z-10 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                                    } md:mb-[-40px] last:mb-0`}
                            >
                                {/* Card Container */}
                                <div className={`w-full md:w-[45%] relative ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                                    {/* Connector Dot for Desktop */}
                                    <div className={`hidden md:flex absolute top-1/2 w-4 h-4 bg-saffron-500 rounded-full border-4 border-white shadow-sm z-20 
                                ${index % 2 === 0 ? '-right-14 translate-x-1/2' : '-left-14 -translate-x-1/2'}
                            `}></div>

                                    {/* Connector Line to Dot */}
                                    <div className={`hidden md:block absolute top-1/2 h-[2px] w-14 bg-saffron-300 z-0
                                 ${index % 2 === 0 ? 'right-0' : 'left-0'}
                             `}></div>

                                    <div className={`group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-saffron-100 hover:scale-105`}>
                                        {/* Gradient Number */}
                                        <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-gradient-to-br from-saffron-400 to-brand-orange text-white flex items-center justify-center font-bold text-xl shadow-lg border-4 border-saffron-50 z-20">
                                            {step.id}
                                        </div>

                                        <div className="flex items-start gap-4 mt-2">
                                            <div className={`p-3 rounded-xl bg-gradient-to-br ${step.color} text-white shadow-md shrink-0`}>
                                                {step.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-brand-orange transition-colors">
                                                    {step.title}
                                                </h4>
                                                <p className="text-gray-600 leading-relaxed text-sm">
                                                    {step.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
