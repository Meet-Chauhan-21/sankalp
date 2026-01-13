const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 px-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Sankalp</h3>
                    <p className="text-sm text-gray-500">A Spiritual Step Towards God</p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
                    <a href="#" className="hover:text-saffron-400 transition-colors">About</a>
                    <a href="#" className="hover:text-saffron-400 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-saffron-400 transition-colors">Terms & Conditions</a>
                </div>

                <div className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Sankalp. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

