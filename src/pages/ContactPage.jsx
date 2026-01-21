import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, User, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        
        if (Object.keys(newErrors).length === 0) {
            // Simulate form submission
            console.log('Form submitted:', formData);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
            
            // Reset success message after 5 seconds
            setTimeout(() => setIsSubmitted(false), 5000);
        } else {
            setErrors(newErrors);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
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

    return (
        <div className="min-h-screen bg-gradient-to-br from-brand-accent via-white to-saffron-50 pt-32 pb-20 px-4">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-6xl mx-auto"
            >
                {/* Header */}
                <motion.div variants={itemVariants} className="text-center mb-12">
                    <div className="inline-block mb-6">
                        <div className="w-32 h-32 mx-auto rounded-2xl border-4 border-saffron-500 shadow-xl bg-white overflow-hidden">
                            <img src="/images/sankalp-logo.png" alt="Naam Jaap Logo" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-saffron-600 to-brand-orange bg-clip-text text-transparent mb-4">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Have questions or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </motion.div>

                {/* Two Column Layout */}
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    {/* Left Side - Contact Form */}
                    <motion.div variants={itemVariants}>
                        {isSubmitted ? (
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="text-center py-12"
                            >
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        rotate: [0, 360],
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        ease: 'easeOut',
                                    }}
                                    className="inline-block mb-6"
                                >
                                    <CheckCircle className="w-20 h-20 text-green-500" />
                                </motion.div>
                                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                                    Message Sent! 🎉
                                </h3>
                                <p className="text-gray-600 text-lg">
                                    Thank you for reaching out. We'll get back to you soon.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Field */}
                                <div>
                                    <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                                        <User className="w-5 h-5 text-saffron-600" />
                                        Name
                                    </label>
                                    <motion.input
                                        whileFocus={{ scale: 1.01 }}
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your full name"
                                        className={`w-full px-4 py-4 rounded-xl border-2 ${
                                            errors.name
                                                ? 'border-red-400 bg-red-50'
                                                : 'border-saffron-200 bg-white/50'
                                        } backdrop-blur-sm focus:border-saffron-500 focus:ring-2 focus:ring-saffron-200 outline-none transition-all duration-300`}
                                    />
                                    {errors.name && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-red-500 text-sm mt-1"
                                        >
                                            {errors.name}
                                        </motion.p>
                                    )}
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                                        <Mail className="w-5 h-5 text-saffron-600" />
                                        Email
                                    </label>
                                    <motion.input
                                        whileFocus={{ scale: 1.01 }}
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your.email@example.com"
                                        className={`w-full px-4 py-4 rounded-xl border-2 ${
                                            errors.email
                                                ? 'border-red-400 bg-red-50'
                                                : 'border-saffron-200 bg-white/50'
                                        } backdrop-blur-sm focus:border-saffron-500 focus:ring-2 focus:ring-saffron-200 outline-none transition-all duration-300`}
                                    />
                                    {errors.email && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-red-500 text-sm mt-1"
                                        >
                                            {errors.email}
                                        </motion.p>
                                    )}
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                                        <MessageSquare className="w-5 h-5 text-saffron-600" />
                                        Message
                                    </label>
                                    <motion.textarea
                                        whileFocus={{ scale: 1.01 }}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us what's on your mind..."
                                        rows="6"
                                        className={`w-full px-4 py-4 rounded-xl border-2 ${
                                            errors.message
                                                ? 'border-red-400 bg-red-50'
                                                : 'border-saffron-200 bg-white/50'
                                        } backdrop-blur-sm focus:border-saffron-500 focus:ring-2 focus:ring-saffron-200 outline-none transition-all duration-300 resize-none`}
                                    />
                                    {errors.message && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-red-500 text-sm mt-1"
                                        >
                                            {errors.message}
                                        </motion.p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-gradient-to-r from-saffron-500 to-brand-orange text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group"
                                >
                                    <span>Send Message</span>
                                    <motion.div
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                        }}
                                    >
                                        <Send className="w-5 h-5" />
                                    </motion.div>
                                </motion.button>
                            </form>
                        )}
                    </motion.div>

                    {/* Right Side - Growth Stats */}
                    <motion.div variants={itemVariants}>
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Growth Journey</h2>
                        <div className="relative h-80 p-6">
                            {/* Y-axis labels */}
                            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-sm text-gray-500 pr-2">
                                <span>100K</span>
                                <span>75K</span>
                                <span>50K</span>
                                <span>25K</span>
                                <span>0</span>
                            </div>
                            
                            {/* Chart area */}
                            <div className="ml-12 h-full relative">
                                {/* Grid lines */}
                                <div className="absolute inset-0 flex flex-col justify-between">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className="border-t border-gray-200" />
                                    ))}
                                </div>
                                
                                {/* Line chart */}
                                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
                                    {/* Gradient fill under line */}
                                    <defs>
                                        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="#ffc107" stopOpacity="0.3" />
                                            <stop offset="100%" stopColor="#ffc107" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    
                                    {/* Area under the line */}
                                    <motion.path
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 1 }}
                                        transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
                                        d="M 0 280 L 0 240 L 100 180 L 200 120 L 300 60 L 400 20 L 400 280 Z"
                                        fill="url(#chartGradient)"
                                    />
                                    
                                    {/* Main line */}
                                    <motion.path
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
                                        d="M 0 240 L 100 180 L 200 120 L 300 60 L 400 20"
                                        fill="none"
                                        stroke="url(#lineGradient)"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                    />
                                    
                                    {/* Gradient for line */}
                                    <defs>
                                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#ffc107" />
                                            <stop offset="50%" stopColor="#ff9933" />
                                            <stop offset="100%" stopColor="#ffc107" />
                                        </linearGradient>
                                    </defs>
                                    
                                    {/* Data points */}
                                    {[
                                        { x: 0, y: 240, delay: 0.7 },
                                        { x: 100, y: 180, delay: 1.0 },
                                        { x: 200, y: 120, delay: 1.3 },
                                        { x: 300, y: 60, delay: 1.6 },
                                        { x: 400, y: 20, delay: 1.9 },
                                    ].map((point, i) => (
                                        <motion.circle
                                            key={i}
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 0.3, delay: point.delay }}
                                            cx={point.x}
                                            cy={point.y}
                                            r="6"
                                            fill="white"
                                            stroke="#ff9933"
                                            strokeWidth="3"
                                        />
                                    ))}
                                </svg>
                            </div>
                            
                            {/* X-axis labels */}
                            <div className="ml-12 mt-4 flex justify-between text-sm text-gray-600">
                                <span>Jan</span>
                                <span>Mar</span>
                                <span>May</span>
                                <span>Jul</span>
                                <span>Sep</span>
                            </div>
                        </div>
                        
                        {/* Stats Summary */}
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="text-center p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                                <p className="text-2xl font-bold text-gray-800">10K+</p>
                                <p className="text-gray-600 text-sm">Active Users</p>
                            </div>
                            <div className="text-center p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                                <p className="text-2xl font-bold text-gray-800">1M+</p>
                                <p className="text-gray-600 text-sm">Jaap Sessions</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Additional Info */}
                <motion.div
                    variants={itemVariants}
                    className="mt-12 text-center text-gray-600"
                >
                    <p className="text-lg">
                        Or reach us directly at{' '}
                        <a
                            href="mailto:support@naamjaap.com"
                            className="text-saffron-600 font-semibold hover:text-brand-orange transition-colors"
                        >
                            support@naamjaap.com
                        </a>
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ContactPage;
