import { motion } from 'framer-motion';
import { Smartphone, CheckCircle } from 'lucide-react';

const WhyDigital = () => {
    return (
        <section className="py-20 bg-white px-6">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="md:w-1/2"
                >
                    <div className="relative bg-brand-accent p-10 rounded-3xl overflow-hidden">
                        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-saffron-100 rounded-full blur-3xl opacity-50"></div>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Why a Digital Mala?</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            While traditional Malas are sacred, carrying them everywhere isn't always possible in a modern, busy lifestyle. Sankalp bridges the gap between tradition and technology.
                        </p>
                        <div className="flex items-center gap-4 text-saffron-600 font-semibold">
                            <Smartphone size={24} />
                            <span>Your Spiritual Companion, Always With You</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="md:w-1/2 space-y-6"
                >
                    {[
                        "Zero distractions—just you and the name.",
                        "Automatic counting ensures accuracy.",
                        "Perfect for travel, office breaks, or commute.",
                        "Helps build a consistent daily spiritual habit."
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-saffron-50 transition-colors">
                            <CheckCircle className="text-green-500 shrink-0 mt-1" size={24} />
                            <p className="text-gray-700 text-lg font-medium">{item}</p>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default WhyDigital;
