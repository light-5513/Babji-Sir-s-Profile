import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeContext';

const NavLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Ventures', href: '#ventures' },
  { name: 'Media', href: '#media' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-light-bg/90 dark:bg-dark-bg/90 backdrop-blur-md shadow-neu-light-sm dark:shadow-neu-dark-sm py-3 sm:py-4' : 'bg-transparent py-4 sm:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#home" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tighter whitespace-nowrap shrink-0 text-black dark:text-white select-none">
          Mr. Babji Neelam.
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {NavLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="px-3 xl:px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:shadow-neu-light-pressed dark:hover:shadow-neu-dark-pressed"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Right Controls: Theme Toggle + Menu Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-light-bg dark:bg-dark-bg shadow-neu-light dark:shadow-neu-dark active:shadow-neu-light-pressed dark:active:shadow-neu-dark-pressed text-black dark:text-white transition-all flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Sun size={20} className="text-yellow-500" />
            ) : (
              <Moon size={20} className="text-purple-400" />
            )}
          </motion.button>

          <motion.button 
            whileTap={{ scale: 0.92 }}
            className="p-2.5 rounded-xl bg-light-bg dark:bg-dark-bg shadow-neu-light dark:shadow-neu-dark active:shadow-neu-light-pressed dark:active:shadow-neu-dark-pressed text-black dark:text-white transition-all"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Nav Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden absolute top-full left-0 right-0 bg-light-bg/95 dark:bg-dark-bg/95 backdrop-blur-xl shadow-neu-light dark:shadow-neu-dark border-t border-black/5 dark:border-white/5"
          >
            <div className="flex flex-col p-5 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
              {NavLinks.map((link, idx) => (
                <motion.a 
                  key={link.name} 
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04, duration: 0.25 }}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold p-3.5 rounded-xl bg-light-bg dark:bg-dark-bg shadow-neu-light-sm dark:shadow-neu-dark-sm active:shadow-neu-light-pressed dark:active:shadow-neu-dark-pressed hover:shadow-neu-light-pressed dark:hover:shadow-neu-dark-pressed text-black dark:text-white transition-all flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-gray-500 font-mono">0{idx + 1}</span>
                </motion.a>
              ))}

              <div className="pt-2">
                <button
                  onClick={toggleTheme}
                  className="w-full text-base font-semibold p-3.5 rounded-xl bg-light-bg dark:bg-dark-bg shadow-neu-light-sm dark:shadow-neu-dark-sm active:shadow-neu-light-pressed dark:active:shadow-neu-dark-pressed text-black dark:text-white transition-all flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    {theme === 'light' ? <Sun size={18} className="text-yellow-500" /> : <Moon size={18} className="text-purple-400" />}
                    <span>{theme === 'light' ? 'Light Theme Active' : 'Dark Theme Active'}</span>
                  </span>
                  <span className="text-xs text-gray-500 font-mono">Switch</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
