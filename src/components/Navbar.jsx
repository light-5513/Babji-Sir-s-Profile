import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NavLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Ventures', href: '#ventures' },
  { name: 'Media', href: '#media' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-neu-light-sm dark:shadow-neu-dark-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="text-3xl md:text-4xl font-extrabold tracking-tighter text-black dark:text-white">
          Mr. Babji Neelam.
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-2">
          {NavLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:shadow-neu-light-pressed dark:hover:shadow-neu-dark-pressed"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-3 rounded-xl bg-white dark:bg-black shadow-neu-light dark:shadow-neu-dark active:shadow-neu-light-pressed dark:active:shadow-neu-dark-pressed transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 p-6 bg-white dark:bg-black shadow-neu-light dark:shadow-neu-dark border-t border-gray-100 dark:border-gray-900">
          <div className="flex flex-col space-y-4">
            {NavLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium p-3 rounded-xl hover:shadow-neu-light-pressed dark:hover:shadow-neu-dark-pressed transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
