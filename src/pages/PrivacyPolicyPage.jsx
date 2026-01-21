import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, UserCheck, Mail } from 'lucide-react';

const PrivacyPolicyPage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    };

    const sections = [
        {
            icon: Database,
            title: 'Information We Collect',
            content: [
                'Personal identification information (name, email address)',
                'Usage data and analytics',
                'Device information and preferences',
                'Spiritual practice tracking data (chant counts, sessions)',
            ],
        },
        {
            icon: Lock,
            title: 'How We Use Your Information',
            content: [
                'To provide and maintain our service',
                'To improve user experience and app functionality',
                'To send important updates and notifications',
                'To analyze usage patterns and optimize performance',
            ],
        },
        {
            icon: Shield,
            title: 'Data Security',
            content: [
                'We use industry-standard encryption to protect your data',
                'Regular security audits and updates',
                'Secure cloud storage with backup systems',
                'Limited access to personal information by authorized personnel only',
            ],
        },
        {
            icon: Eye,
            title: 'Your Privacy Rights',
            content: [
                'Access and download your personal data',
                'Request correction of inaccurate information',
                'Delete your account and associated data',
                'Opt-out of marketing communications',
            ],
        },
        {
            icon: UserCheck,
            title: 'Data Sharing',
            content: [
                'We do not sell your personal information to third parties',
                'Data may be shared with service providers for app functionality',
                'Anonymous analytics may be used for research purposes',
                'Legal compliance when required by law',
            ],
        },
        {
            icon: Mail,
            title: 'Contact Us',
            content: [
                'For privacy concerns or questions, email us at privacy@naamjaap.com',
                'Response time: within 48 hours',
                'Data protection officer available for formal requests',
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-brand-accent via-white to-saffron-50 pt-32 pb-20 px-4">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-5xl mx-auto"
            >
                {/* Header */}
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className="inline-block text-6xl mb-6"
                    >
                        🔒
                    </motion.div>
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-saffron-600 to-brand-orange bg-clip-text text-transparent mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
                    </p>
                    <div className="mt-6 text-sm text-gray-500">
                        Last updated: January 21, 2026
                    </div>
                </motion.div>

                {/* Introduction */}
                <motion.div
                    variants={itemVariants}
                    className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 mb-10 shadow-lg border border-saffron-200/50"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-saffron-100/30 rounded-2xl pointer-events-none" />
                    <div className="relative">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
                        <p className="text-gray-700 leading-relaxed">
                            At Naam Jaap, we are committed to protecting your privacy and ensuring the security of your personal information. 
                            This Privacy Policy describes how we collect, use, store, and share information when you use our mobile application 
                            and services. By using Naam Jaap, you agree to the collection and use of information in accordance with this policy.
                        </p>
                    </div>
                </motion.div>

                {/* Policy Sections */}
                <div className="space-y-6">
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.01 }}
                            className="relative group"
                        >
                            {/* Hover glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-saffron-400 to-brand-orange rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
                            
                            <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-saffron-200/50 hover:border-saffron-400/50 transition-all duration-300">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-saffron-100/30 rounded-2xl pointer-events-none" />
                                <div className="relative">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-saffron-500 to-brand-orange rounded-xl flex items-center justify-center shadow-lg">
                                            <section.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-800">
                                                {section.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <ul className="space-y-3 ml-16">
                                        {section.content.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className="flex-shrink-0 w-2 h-2 bg-saffron-500 rounded-full mt-2" />
                                                <span className="text-gray-700 leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Cookies Policy */}
                <motion.div
                    variants={itemVariants}
                    className="mt-10 bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-saffron-200/50"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-saffron-100/30 rounded-2xl pointer-events-none" />
                    <div className="relative">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Cookies and Tracking</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We use cookies and similar tracking technologies to enhance your experience on our app. These technologies help us:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-2 h-2 bg-saffron-500 rounded-full mt-2" />
                                <span>Remember your preferences and settings</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-2 h-2 bg-saffron-500 rounded-full mt-2" />
                                <span>Understand how you use our app</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-2 h-2 bg-saffron-500 rounded-full mt-2" />
                                <span>Improve app performance and user experience</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>

                {/* Changes to Policy */}
                <motion.div
                    variants={itemVariants}
                    className="mt-10 bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-saffron-200/50"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-saffron-100/30 rounded-2xl pointer-events-none" />
                    <div className="relative">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to This Policy</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
                            Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy 
                            Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                        </p>
                    </div>
                </motion.div>

                {/* Footer CTA */}
                <motion.div
                    variants={itemVariants}
                    className="mt-12 text-center bg-gradient-to-br from-saffron-500 via-brand-orange to-saffron-600 rounded-2xl p-10 shadow-2xl relative overflow-hidden"
                >
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className="absolute top-0 right-0 text-[200px] text-white/10 leading-none"
                    >
                        🕉
                    </motion.div>
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold text-white mb-4">Questions About Privacy?</h3>
                        <p className="text-white/90 mb-6 text-lg">
                            If you have any questions or concerns about our privacy practices, we're here to help.
                        </p>
                        <motion.a
                            href="mailto:privacy@naamjaap.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block px-8 py-4 bg-white text-saffron-600 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            Contact Privacy Team
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default PrivacyPolicyPage;
