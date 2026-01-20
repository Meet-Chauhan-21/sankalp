const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 sm:py-12 px-4 sm:px-6 w-full overflow-hidden">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6 sm:gap-8">
                <div className="flex items-center gap-4">
                    {/* Logo */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-white/20 overflow-hidden">
                        <img src="/images/sankalp-logo.png" alt="Sankalp Logo" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">Sankalp</h3>
                        <p className="text-xs sm:text-sm text-gray-500">A Spiritual Step Towards God</p>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm font-medium">
                    <a href="#" className="hover:text-saffron-400 transition-colors">About</a>
                    <a href="#" className="hover:text-saffron-400 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-saffron-400 transition-colors">Terms & Conditions</a>
                </div>

                <div className="text-gray-500 text-xs sm:text-sm">
                    &copy; {new Date().getFullYear()} Sankalp. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

