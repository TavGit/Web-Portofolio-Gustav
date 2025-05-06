import type React from 'react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../hooks/useLanguage';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { id: 'home', text: t('header.home'), path: '/' },
    { id: 'about', text: t('header.about'), path: '/about' },
    { id: 'projects', text: t('header.projects'), path: '/projects' },
    { id: 'contact', text: t('header.contact'), path: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      } transition-all duration-300 ease-in-out`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300"
          >
            Gustav <span className="text-blue-600 dark:text-blue-400">Codes</span> Dev
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className="font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300"
              >
                {link.text}
              </Link>
            ))}
          </nav>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300"
              aria-label={theme === 'light' ? t('theme.dark') : t('theme.light')}
            >
              {theme === 'light' ? (
                <FaMoon className="text-gray-700 dark:text-gray-300" />
              ) : (
                <FaSun className="text-gray-300 dark:text-gray-300" />
              )}
            </button>

            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300"
            >
              {language === 'id' ? 'EN' : 'ID'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FaTimes size={24} />
              ) : (
                <FaBars size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.id}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 py-2 transition-colors duration-300"
                  >
                    {link.text}
                  </Link>
                ))}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
                  <button
                    onClick={toggleTheme}
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                  >
                    {theme === 'light' ? (
                      <>
                        <FaMoon />
                        <span>{t('theme.dark')}</span>
                      </>
                    ) : (
                      <>
                        <FaSun />
                        <span>{t('theme.light')}</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={toggleLanguage}
                    className="px-3 py-1 rounded-full border border-gray-300 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {language === 'id' ? 'EN' : 'ID'}
                  </button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
