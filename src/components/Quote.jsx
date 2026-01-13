import { motion } from 'framer-motion';
import { Flower, Flame } from 'lucide-react';

const Quote = () => {
    return (
        <section className="py-24 bg-saffron-600 text-brand-white text-center relative overflow-hidden px-6">
            {/* Decorative Background Icons */}
            <div className="absolute top-10 left-10 opacity-10">
                <Flower size={100} />
            </div>
            <div className="absolute bottom-10 right-10 opacity-10">
                <div className="text-9xl leading-none">🕉</div>
            </div>

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex justify-center mb-6 text-yellow-200">
                        <Flame size={40} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif italic font-medium leading-tight mb-8">
                        "Naam smaran is the simplest path to God."
                    </h2>
                    <div className="w-24 h-1 bg-yellow-300 mx-auto rounded-full"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Quote;
