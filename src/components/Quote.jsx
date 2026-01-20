import { motion } from 'framer-motion';
import { Flower, Flame } from 'lucide-react';

const Quote = () => {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white text-center relative overflow-hidden px-4 sm:px-6 w-full">
            {/* Decorative Background Icons */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                    rotate: [0, 10, 0]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-10 left-10 opacity-20 hidden sm:block text-saffron-500"
            >
                <Flower size={80} className="sm:w-[100px] sm:h-[100px]" />
            </motion.div>
            <motion.div
                animate={{
                    y: [0, 20, 0],
                    x: [0, -10, 0],
                    rotate: [0, -10, 0]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-10 right-10 opacity-20 hidden sm:block"
            >
                <div className="text-6xl sm:text-9xl leading-none text-saffron-500">🕉</div>
            </motion.div>

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex justify-center mb-4 sm:mb-6 text-saffron-500">
                        <Flame size={32} className="sm:w-10 sm:h-10" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic font-medium leading-tight mb-6 sm:mb-8 px-4 text-saffron-600">
                        "Naam smaran is the simplest path to God."
                    </h2>
                    <div className="w-24 h-1 bg-saffron-500 mx-auto rounded-full"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Quote;
