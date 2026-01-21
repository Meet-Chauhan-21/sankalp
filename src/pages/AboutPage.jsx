import { motion } from 'framer-motion';
import { Heart, Users, Award, Target } from 'lucide-react';

const AboutPage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    const features = [
        {
            icon: Heart,
            title: 'Our Mission',
            description: 'To bring the ancient practice of Naam Jaap into the digital age, making spiritual growth accessible to everyone.',
        },
        {
            icon: Users,
            title: 'Our Community',
            description: 'Join thousands of devotees on their spiritual journey, tracking progress and growing together in faith.',
        },
        {
            icon: Award,
            title: 'Our Values',
            description: 'We believe in authenticity, simplicity, and the transformative power of consistent spiritual practice.',
        },
        {
            icon: Target,
            title: 'Our Vision',
            description: 'Creating a world where technology enhances spiritual connection rather than distracting from it.',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-brand-accent via-white to-saffron-50 pt-32 pb-20 px-4">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-6xl mx-auto"
            >
                {/* Hero Section */}
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <div className="inline-block mb-6">
                        <div className="w-32 h-32 mx-auto rounded-2xl border-4 border-saffron-500 shadow-xl bg-white overflow-hidden">
                            <img src="/images/sankalp-logo.png" alt="Naam Jaap Logo" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-saffron-600 to-brand-orange bg-clip-text text-transparent mb-6">
                        About Naam Jaap
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        A modern spiritual companion designed to help you maintain your sacred practice of chanting and meditation in today's digital world.
                    </p>
                </motion.div>

                {/* Story Section */}
                <motion.div
                    variants={itemVariants}
                    className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-saffron-200/50"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-saffron-100/30 rounded-3xl pointer-events-none" />
                    <div className="relative">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                            <p>
                                In a world increasingly dominated by technology, we recognized the need to bridge the gap between ancient spiritual practices and modern life. Naam Jaap was born from a simple yet powerful idea: what if we could use technology to enhance rather than hinder our spiritual journey?
                            </p>
                            <p>
                                The practice of Naam Jaap - the repetition of sacred names and mantras - has been a cornerstone of spiritual growth for millennia. Our app honors this tradition while making it accessible, trackable, and engaging for the contemporary practitioner.
                            </p>
                            <p>
                                We built this platform with love, devotion, and a deep respect for the sacred practices it represents. Every feature is designed to support your spiritual growth while maintaining the sanctity and essence of traditional practice.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Stats Graph */}
                <motion.div
                    variants={itemVariants}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Growth Journey</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="relative h-40 mb-4 flex items-end justify-center">
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: '60%' }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    className="w-16 bg-gradient-to-t from-saffron-500 to-saffron-400 rounded-t-xl shadow-lg"
                                />
                            </div>
                            <p className="text-3xl font-bold text-gray-800 mb-1">10K+</p>
                            <p className="text-gray-600">Active Users</p>
                        </div>
                        <div className="text-center">
                            <div className="relative h-40 mb-4 flex items-end justify-center">
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: '85%' }}
                                    transition={{ duration: 1, delay: 0.4 }}
                                    className="w-16 bg-gradient-to-t from-brand-orange to-saffron-500 rounded-t-xl shadow-lg"
                                />
                            </div>
                            <p className="text-3xl font-bold text-gray-800 mb-1">1M+</p>
                            <p className="text-gray-600">Jaap Sessions</p>
                        </div>
                        <div className="text-center">
                            <div className="relative h-40 mb-4 flex items-end justify-center">
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: '75%' }}
                                    transition={{ duration: 1, delay: 0.6 }}
                                    className="w-16 bg-gradient-to-t from-saffron-600 to-brand-orange rounded-t-xl shadow-lg"
                                />
                            </div>
                            <p className="text-3xl font-bold text-gray-800 mb-1">50K+</p>
                            <p className="text-gray-600">Daily Chants</p>
                        </div>
                        <div className="text-center">
                            <div className="relative h-40 mb-4 flex items-end justify-center">
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: '95%' }}
                                    transition={{ duration: 1, delay: 0.8 }}
                                    className="w-16 bg-gradient-to-t from-brand-orange to-saffron-400 rounded-t-xl shadow-lg"
                                />
                            </div>
                            <p className="text-3xl font-bold text-gray-800 mb-1">99%</p>
                            <p className="text-gray-600">Satisfaction</p>
                        </div>
                    </div>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    className="grid md:grid-cols-2 gap-6 mb-12"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-saffron-400 to-brand-orange rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                            <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-saffron-200/50 hover:border-saffron-400/50 transition-all duration-300">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-saffron-100/30 rounded-2xl pointer-events-none" />
                                <div className="relative">
                                    <div className="w-14 h-14 bg-gradient-to-br from-saffron-500 to-brand-orange rounded-xl flex items-center justify-center mb-4 shadow-lg">
                                        <feature.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    variants={itemVariants}
                    className="relative overflow-hidden bg-gradient-to-br from-saffron-500 via-brand-orange to-saffron-600 rounded-3xl p-12 text-center shadow-2xl"
                >
                    <div className="absolute top-8 right-8 w-40 h-40 rounded-2xl border-4 border-white/30 bg-white/10 backdrop-blur-sm overflow-hidden">
                        <img src="/images/sankalp-logo.png" alt="" className="w-full h-full object-cover opacity-40" />
                    </div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Begin Your Spiritual Journey Today
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Join our community and experience the transformative power of consistent spiritual practice.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white text-saffron-600 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            Download the App
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default AboutPage;
