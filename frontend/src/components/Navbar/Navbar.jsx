import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TableOfContents, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false); 
    };

    return (
        <nav className='bg-white shadow-md sticky top-0 z-50'> 
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16'>
                    
                    {/* logo */}
                    <div className='shrink-0'>
                        <h1 
                            className='text-2xl font-bold text-blue-600 cursor-pointer' 
                            onClick={() => scrollToSection('hero')}
                        >
                            SkTrade
                        </h1>
                    </div>

                    {/* Desktop Menu */}
                    <div className='hidden md:block'>
                        <div className='ml-10 flex items-baseline space-x-4'>
                            <Link to="/signup" className='text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors'>SignUp</Link>
                            <Link to="/about" className='text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors'>About</Link>
                            <Link to="/product" className='text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors'>Products</Link>
                            <button className='text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors' onClick={() => scrollToSection('pricing')}>Pricing</button>
                            <button className='text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors' onClick={() => scrollToSection('support')}>Support</button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className='md:hidden flex items-center'>
                        <button 
                            onClick={toggleMenu}
                            className='bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'
                        >
                            {/* Toggle between Menu icon and X icon */}
                            {isOpen ? <X size={24} /> : <TableOfContents size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className='md:hidden bg-white border-t border-gray-100 pb-3 pt-2 px-2 space-y-1 shadow-lg'>
                    <Link to="/signup" className="text-gray-700 hover:text-blue-600 block py-2 px-3 rounded-md text-base font-medium w-full text-left">Singup</Link>
                    <button onClick={() => scrollToSection('about')} className='text-gray-700 hover:text-blue-600 block py-2 px-3 rounded-md text-base font-medium w-full text-left'>About</button>
                    <button onClick={() => scrollToSection('products')} className='text-gray-700 hover:text-blue-600 block py-2 px-3 rounded-md text-base font-medium w-full text-left'>Products</button>
                    <button onClick={() => scrollToSection('pricing')} className='text-gray-700 hover:text-blue-600 block py-2 px-3 rounded-md text-base font-medium w-full text-left'>Pricing</button>
                    <button onClick={() => scrollToSection('support')} className='text-gray-700 hover:text-blue-600 block py-2 px-3 rounded-md text-base font-medium w-full text-left'>Support</button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
