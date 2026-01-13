import { motion } from 'framer-motion';
import { Heart, Brain, Sun, Zap, ShieldCheck, Infinity } from 'lucide-react';

const benefits = [
    {
        icon: <Heart size={56} className="text-white" />,
        title: "Inner Peace",
        desc: "Experience a deep sense of calm and tranquility.",
        className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-rose-400 to-orange-500 text-white"
    },
    {
        icon: <Brain size={32} className="text-saffron-600" />,
        title: "Clear Mind",
        desc: "Reduce stress, anxiety, and negative thoughts.",
        className: "bg-white text-gray-800 border-l-4 border-saffron-500"
    },
    {
        icon: <ShieldCheck size={32} className="text-teal-600" />,
        title: "Discipline",
        desc: "Build a consistent habit of spirituality.",
        className: "bg-teal-50 text-gray-800"
    },
    {
        icon: <Sun size={32} className="text-amber-600" />,
        title: "Growth",
        desc: "Enhance self-awareness and awareness.",
        className: "bg-amber-50 text-gray-800"
    },
    {
        icon: <Zap size={32} className="text-purple-600" />,
        title: "Energy",
        desc: "Vibrate with positivity and attract good energy.",
        className: "bg-purple-50 text-gray-800"
    },
    {
        icon: <Infinity size={40} className="text-white" />,
        title: "Unbroken Consistency",
        desc: "Sankalp helps you maintain a steady and unbroken practice every single day without fail.",
        className: "md:col-span-2 bg-gray-900 text-gray-300"
    }
];

const Benefits = () => {
    return (
        <section className="py-24 bg-gray-50 px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Benefits of <span className="text-saffron-600">Naam Jaap</span></h2>
                    <p className="text-gray-500 text-xl max-w-2xl">Discover the transformative power of chanting in your everyday life.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
                    {benefits.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.02 }}
                            className={`p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer border border-transparent hover:border-saffron-200 ${item.className}`}
                        >
                            <div className="mb-4">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className={`text-2xl font-bold mb-2 ${item.title === 'Inner Peace' ? 'text-4xl' : ''}`}>{item.title}</h3>
                                <p className={`text-sm md:text-base leading-relaxed opacity-90`}>
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
