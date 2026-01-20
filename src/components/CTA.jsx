import { motion, AnimatePresence } from 'framer-motion';
import { Download, Smartphone, QrCode, Apple, ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { useState } from 'react';

const faqs = [
    {
        question: "What is Sankalp?",
        answer: "Sankalp is a digital spiritual companion that helps you practice Naam Jaap (chanting God's name) with focus and discipline. It's designed to make your spiritual practice accessible anytime, anywhere."
    },
    {
        question: "Is Sankalp free to use?",
        answer: "Yes, Sankalp is completely free to download and use. We believe spirituality should be accessible to everyone."
    },
    {
        question: "How does the counter work?",
        answer: "Simply tap anywhere on your screen for each mantra you recite. The app provides haptic feedback and maintains accurate count, allowing you to chant with closed eyes while staying focused."
    },
    {
        question: "Can I customize my deity or mantra?",
        answer: "Absolutely! You can choose from various deity names like Ram, Krishna, Shiv, or add your own personal mantra to make your practice truly yours."
    },
    {
        question: "Does it work offline?",
        answer: "Yes! Sankalp works completely offline. Once downloaded, you can use it anywhere without an internet connection."
    },
    {
        question: "How does the streak feature work?",
        answer: "Sankalp tracks your daily practice and maintains a streak counter to help you build consistency. Regular practice builds spiritual discipline and the app celebrates your progress."
    }
];

const CTA = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <>
            {/* FAQ Section */}
            <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-saffron-50 to-orange-50 px-4 sm:px-6 w-full overflow-hidden">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        
                        {/* Left: Animated Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            {/* Decorative Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-saffron-400 to-orange-500 rounded-3xl transform rotate-6 opacity-20 blur-sm"></div>
                            
                            {/* Main Card */}
                            <div className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-2xl">
                                {/* Top Section */}
                                <div className="flex items-center gap-4 mb-8">
                                    <motion.div
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                        className="w-16 h-16 bg-gradient-to-br from-saffron-500 to-orange-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg"
                                    >
                                        🕉
                                    </motion.div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-800">Frequently Asked</h3>
                                        <p className="text-saffron-600 font-semibold">Questions</p>
                                    </div>
                                </div>

                                {/* Animated Stats */}
                                <div className="space-y-6">
                                    <motion.div
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 }}
                                        className="bg-gradient-to-r from-saffron-100 to-orange-100 p-6 rounded-2xl"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-gray-600 text-sm mb-1">Active Users</p>
                                                <p className="text-3xl font-bold text-gray-800">10,000+</p>
                                            </div>
                                            <motion.div
                                                animate={{ scale: [1, 1.1, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            >
                                                <Sparkles className="text-saffron-500" size={32} />
                                            </motion.div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 }}
                                        className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-2xl"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-gray-600 text-sm mb-1">Mantras Counted</p>
                                                <p className="text-3xl font-bold text-gray-800">1M+</p>
                                            </div>
                                            <motion.div
                                                animate={{ rotate: [0, 360] }}
                                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                            >
                                                <HelpCircle className="text-purple-500" size={32} />
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Floating Elements */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-4 -right-4 w-20 h-20 bg-saffron-400 rounded-full blur-2xl opacity-60"
                                ></motion.div>
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute -bottom-4 -left-4 w-24 h-24 bg-orange-400 rounded-full blur-2xl opacity-60"
                                ></motion.div>
                            </div>
                        </motion.div>

                        {/* Right: FAQ Questions */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                                Got Questions? <span className="text-saffron-600">We've Got Answers</span>
                            </h2>

                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden"
                                    >
                                        <button
                                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                            className="w-full text-left p-6 flex items-center justify-between gap-4 group"
                                        >
                                            <span className="font-semibold text-gray-800 text-base sm:text-lg group-hover:text-saffron-600 transition-colors">
                                                {faq.question}
                                            </span>
                                            <motion.div
                                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="flex-shrink-0"
                                            >
                                                <ChevronDown className="text-saffron-600" size={24} />
                                            </motion.div>
                                        </button>
                                        
                                        <AnimatePresence>
                                            {openIndex === index && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-6 pb-6 text-gray-600 text-sm sm:text-base leading-relaxed">
                                                        {faq.answer}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Download Section with QR Code */}
            <section id="download" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white px-4 sm:px-6 w-full overflow-hidden">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        
                        {/* Left: Phone Mockup */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex justify-center"
                        >
                            <div className="relative">
                                {/* Phone Frame */}
                                <div className="relative w-[280px] sm:w-[320px] h-[560px] sm:h-[640px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
                                    {/* Screen */}
                                    <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center p-8">
                                        {/* App Logo/Icon */}
                                        <div className="w-32 h-32 bg-gradient-to-br from-saffron-500 to-orange-600 rounded-3xl shadow-lg mb-6 border-4 border-white/30 overflow-hidden">
                                            <img src="/images/sankalp-logo.png" alt="Sankalp Logo" className="w-full h-full object-cover" />
                                        </div>
                                        <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">SANKALP</p>
                                        <h3 className="text-2xl font-bold text-gray-800">Sankalp</h3>
                                    </div>
                                    {/* Notch */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-2xl"></div>
                                </div>
                                {/* Floating Elements */}
                                <div className="absolute -top-4 -right-4 w-16 h-16 bg-saffron-400 rounded-full blur-xl opacity-60 animate-pulse"></div>
                                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-orange-400 rounded-full blur-xl opacity-60 animate-pulse"></div>
                            </div>
                        </motion.div>

                        {/* Right: Download Options */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center md:text-left"
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                                Scan to download<br />the app
                            </h2>

                            {/* QR Code */}
                            <div className="inline-block bg-white p-6 rounded-3xl shadow-lg mb-8">
                                <div className="w-48 h-48 bg-gray-900 rounded-2xl flex items-center justify-center">
                                    <QrCode size={120} className="text-white" />
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
                                <div className="h-px bg-gray-300 flex-1 max-w-[100px]"></div>
                                <span className="text-gray-400 font-semibold text-sm">OR</span>
                                <div className="h-px bg-gray-300 flex-1 max-w-[100px]"></div>
                            </div>

                            {/* App Store Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                {/* Google Play Button */}
                                <motion.a
                                    href="#"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-3 bg-gray-900 text-white px-6 py-4 rounded-2xl hover:bg-gray-800 transition-all shadow-lg group"
                                >
                                    <Smartphone size={28} className="group-hover:scale-110 transition-transform" />
                                    <div className="text-left">
                                        <p className="text-xs text-gray-400">GET IT ON</p>
                                        <p className="font-bold text-lg">Google Play</p>
                                    </div>
                                </motion.a>

                                {/* Apple App Store Button */}
                                <motion.a
                                    href="#"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-3 bg-gray-900 text-white px-6 py-4 rounded-2xl hover:bg-gray-800 transition-all shadow-lg group"
                                >
                                    <Apple size={28} className="group-hover:scale-110 transition-transform" />
                                    <div className="text-left">
                                        <p className="text-xs text-gray-400">Download on the</p>
                                        <p className="font-bold text-lg">App Store</p>
                                    </div>
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CTA;
