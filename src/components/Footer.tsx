import type React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { id: 'github', icon: <FaGithub size={20} />, url: 'https://github.com/TavGit' },
    { id: 'linkedin', icon: <FaLinkedin size={20} />, url: 'https://www.linkedin.com/in/muhammad-gustav-ibrahim-7a2a01293/' },
    { id: 'youtube', icon: <FaYoutube size={20} />, url: 'https://www.youtube.com/@GustavIbrahim' },
    { id: 'instagram', icon: <FaInstagram size={20} />, url: 'https://www.instagram.com/mhmmdgustavibrm_tech/' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
              Gustav
              <span className="ml-1 text-blue-600 dark:text-blue-400">Codes</span>
              <span className="ml-1">Dev</span>
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Junior Mobile Developer
            </p>
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label={link.id}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
            &copy; {currentYear} Gustav
              <span className="ml-1 text-blue-600 dark:text-blue-400">Codes</span>
              <span className="ml-1">Dev | </span> {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
