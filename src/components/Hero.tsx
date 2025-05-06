import type React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaDownload, FaArrowRight } from 'react-icons/fa';
import profilImage from '../assets/images/Profil-Gustav.png';
import CV from '../assets/CV/CV_Desain_Muhammad Gustav Ibrahim.pdf';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center pt-16 transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-200 dark:bg-blue-800/30 rounded-full blur-2xl opacity-60" />
      <div className="absolute top-20 left-1/4 w-24 h-24 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-xl opacity-50" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Content */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Muhammad Gustav Ibrahim
            </h1>

            <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-6">
              {t('hero.tagline')}
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              {t('about.intro')}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <Link
                to="/projects"
                className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 font-medium"
              >
                {t('hero.cta')} <FaArrowRight className="ml-2" />
              </Link>

              <a
                href={CV}
                download="CV_Muhammad_Gustav_Ibrahim.pdf"
                className="flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg transition-colors duration-300 font-medium"
              >
                {t('hero.downloadCV')} <FaDownload className="ml-2" />
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-80 h-80 sm:w-96 sm:h-96 relative rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-xl">
              <img
                src={profilImage}
                alt="Profile"
                className="w-full h-full object-cover object-top scale-105"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          className="mt-12 flex flex-col items-center text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <span className="text-sm mb-2">{t('hero.scrollDown')}</span>
          <motion.div
            className="w-6 h-10 border-2 border-gray-500 dark:border-gray-400 rounded-full relative"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          >
            <div className="w-1.5 h-1.5 bg-gray-500 dark:bg-gray-400 rounded-full absolute top-2 left-1/2 -translate-x-1/2" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
