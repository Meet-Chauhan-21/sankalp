import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const CTA = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white text-center px-6">
            <div className="container mx-auto">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-6">Begin Your Journey of Devotion Today</h2>
                    <p className="text-xl text-yellow-100 mb-10 max-w-2xl mx-auto">
                        Join thousands of devotees finding peace and focus with Sankalp.
                    </p>
                    <button className="bg-white text-saffron-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-yellow-50 transition-all flex items-center gap-3 mx-auto">
                        <Download size={24} />
                        Download the App
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
