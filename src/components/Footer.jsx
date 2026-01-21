import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 pt-16 pb-8 px-4 w-full overflow-hidden relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-saffron-500 via-brand-orange to-saffron-500"></div>
            
            <div className="container mx-auto max-w-7xl">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-saffron-500/30 overflow-hidden">
                                <img src="/images/sankalp-logo.png" alt="Sankalp Logo" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">Sankalp</h3>
                                <p className="text-xs text-saffron-400">Naam Jaap</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed mb-4">
                            A Spiritual Step Towards God. Transform your spiritual journey with our digital companion for sacred chanting and meditation.
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-3">
                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-saffron-500 transition-colors"
                            >
                                <Facebook size={18} />
                            </motion.a>
                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-saffron-500 transition-colors"
                            >
                                <Twitter size={18} />
                            </motion.a>
                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-saffron-500 transition-colors"
                            >
                                <Instagram size={18} />
                            </motion.a>
                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-saffron-500 transition-colors"
                            >
                                <Linkedin size={18} />
                            </motion.a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/">
                                    <motion.span
                                        whileHover={{ x: 5 }}
                                        className="text-gray-400 hover:text-saffron-400 transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-0.5 bg-saffron-400 group-hover:w-4 transition-all"></span>
                                        Home
                                    </motion.span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/about">
                                    <motion.span
                                        whileHover={{ x: 5 }}
                                        className="text-gray-400 hover:text-saffron-400 transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-0.5 bg-saffron-400 group-hover:w-4 transition-all"></span>
                                        About Us
                                    </motion.span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact">
                                    <motion.span
                                        whileHover={{ x: 5 }}
                                        className="text-gray-400 hover:text-saffron-400 transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-0.5 bg-saffron-400 group-hover:w-4 transition-all"></span>
                                        Contact
                                    </motion.span>
                                </Link>
                            </li>
                            <li>
                                <a href="#faq">
                                    <motion.span
                                        whileHover={{ x: 5 }}
                                        className="text-gray-400 hover:text-saffron-400 transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-0.5 bg-saffron-400 group-hover:w-4 transition-all"></span>
                                        FAQ
                                    </motion.span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Legal</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/privacy-policy">
                                    <motion.span
                                        whileHover={{ x: 5 }}
                                        className="text-gray-400 hover:text-saffron-400 transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-0.5 bg-saffron-400 group-hover:w-4 transition-all"></span>
                                        Privacy Policy
                                    </motion.span>
                                </Link>
                            </li>
                            <li>
                                <motion.a
                                    href="#"
                                    whileHover={{ x: 5 }}
                                    className="text-gray-400 hover:text-saffron-400 transition-colors text-sm flex items-center gap-2 group"
                                >
                                    <span className="w-0 h-0.5 bg-saffron-400 group-hover:w-4 transition-all"></span>
                                    Terms & Conditions
                                </motion.a>
                            </li>
                            <li>
                                <motion.a
                                    href="#"
                                    whileHover={{ x: 5 }}
                                    className="text-gray-400 hover:text-saffron-400 transition-colors text-sm flex items-center gap-2 group"
                                >
                                    <span className="w-0 h-0.5 bg-saffron-400 group-hover:w-4 transition-all"></span>
                                    Cookie Policy
                                </motion.a>
                            </li>
                            <li>
                                <motion.a
                                    href="#"
                                    whileHover={{ x: 5 }}
                                    className="text-gray-400 hover:text-saffron-400 transition-colors text-sm flex items-center gap-2 group"
                                >
                                    <span className="w-0 h-0.5 bg-saffron-400 group-hover:w-4 transition-all"></span>
                                    Disclaimer
                                </motion.a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-gray-400">
                                <Mail size={18} className="text-saffron-400 mt-0.5 flex-shrink-0" />
                                <a href="mailto:support@naamjaap.com" className="hover:text-saffron-400 transition-colors">
                                    support@naamjaap.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-gray-400">
                                <Phone size={18} className="text-saffron-400 mt-0.5 flex-shrink-0" />
                                <a href="tel:+911234567890" className="hover:text-saffron-400 transition-colors">
                                    +91 123 456 7890
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-gray-400">
                                <MapPin size={18} className="text-saffron-400 mt-0.5 flex-shrink-0" />
                                <span>
                                    Mumbai, Maharashtra<br />
                                    India
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-gray-500 text-sm">
                            &copy; {new Date().getFullYear()} Sankalp - Naam Jaap. All rights reserved.
                        </div>
                        <div className="flex gap-6 text-xs text-gray-500">
                            <span>Made with 🙏 in India</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

