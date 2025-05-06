import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaDownload, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Bannerdartflutteracademy from '../assets/images/Banner Dart & Flutter Academy.png';
import BannerPTNMI from '../assets/images/Banner-Web-PT-NMI.png';
import BannerRamadan from '../assets/images/Banner-Ramadan.png';
import BannerGustify from '../assets/images/banner-gustify.png';
import BannerCoder from '../assets/images/banner-coder.png';
import BannerPortfolio from '../assets/images/banner-portfolio.png';
import BannerWebLinktree from '../assets/images/banner-web-linktree.png';
import blog1 from '../assets/Blog/BLOG1.jpeg';
import blog2 from '../assets/Blog/BLOG2.jpeg';
import blog3 from '../assets/Blog/BLOG3.jpeg';
import blog4 from '../assets/Blog/BLOG4.jpeg';
import { TFunction } from 'i18next';

interface Project {
  id: string;
  title: string;
  description: (t: TFunction) => string;
  image: string;
  technologies?: string[];
  category: 'Aplikasi' | 'Website';
  downloadUrl?: string;
  sourceUrl?: string;
  demoUrl?: string;
}

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative h-48 sm:h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {project.description(t)}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {(project.technologies ?? []).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
          {project.id === 'flutter-academy' ? (
            <a
              href="https://dart-and-flutter-academy.en.uptodown.com/android"
              target="_blank"
              rel="noopener noreferrer"
              title="Download Dart & Flutter Academy"
              className="flex items-center"
            >
              <img
                src="https://stc.utdstc.com/img/mediakit/download-gio-small.png"
                alt="Download Dart & Flutter Academy"
                className="h-10"
              />
            </a>
          ) : (
            project.downloadUrl && (
              <a
                href={project.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
              >
                <FaDownload className="mr-1" /> {t('projects.download')}
              </a>
            )
          )}

          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
            >
              <FaGithub className="mr-1" /> {t('projects.sourceCode')}
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
            >
              <FaExternalLinkAlt className="mr-1" /> {t('projects.viewProject')}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<'Aplikasi' | 'Website'>('Aplikasi');

  const projects: Project[] = [
    {
      id: 'flutter-academy',
      title: 'Dart & Flutter Academy Apps',
      description: (t) => t('deskripsi-academy.deskripsi'),
      image: Bannerdartflutteracademy,
      technologies: ['Flutter', 'Dart', 'Firebase'],
      category: 'Aplikasi',
      sourceUrl: 'https://github.com/TavGit/Dart-Flutter-Academy-Apps'
    },
    {
      id: 'ramadan-muslim-app',
      title: 'Ramadan Muslim Apps',
      description: (t) => t('deskripsi-ramadan.deskripsi'),
      image: BannerRamadan,
      technologies: ['Flutter', 'Dart'],
      category: 'Aplikasi',
      downloadUrl: 'https://drive.google.com/drive/folders/1K0g29g00fIj0-9mmTwUnC94YaM9A924E?usp=drive_link',
      sourceUrl: 'https://github.com/TavGit/Ramadan-Muslim-Apps'
    },
    {
      id: 'website-pt-nmi',
      title: 'Website PT NMI',
      description: (t) => t('deskripsi-web1.deskripsi'),
      image: BannerPTNMI,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      category: 'Website',
      sourceUrl: 'https://github.com/TavGit/PT.NMI',
      demoUrl: 'https://ptnirwanamekanikalindonesia.netlify.app/'
    },
    {
      id: 'gustify-music',
      title: 'Website Gustify Music',
      description: (t) => t('deskripsi-web2.deskripsi'),
      image: BannerGustify,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      category: 'Website',
      sourceUrl: 'https://github.com/TavGit/Gustify-Music',
      demoUrl: 'https://gustifymusic.netlify.app/'
    },
    {
      id: 'coder-kids',
      title: 'Website Coder Kids RT 01',
      description: (t) => t('deskripsi-web3.deskripsi'),
      image: BannerCoder,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      category: 'Website',
      sourceUrl: 'https://github.com/TavGit/Coder-Kids-RT01',
      demoUrl: 'https://coderkids.netlify.app/'
    },
    {
      id: 'portfolio-sederhana',
      title: 'Website Portfolio Sederhana',
      description: (t) => t('deskripsi-web4.deskripsi'),
      image: BannerPortfolio,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      category: 'Website',
      sourceUrl: 'https://github.com/TavGit/Web-Portfolio-Gustav',
      demoUrl: 'https://tavgit.github.io/Web-Portfolio-Gustav/'
    },
    {
      id: 'linktree-web',
      title: 'Website Linktree',
      description: (t) => t('deskripsi-web5.deskripsi'),
      image: BannerWebLinktree,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      category: 'Website',
      sourceUrl: 'https://github.com/TavGit/gustav-web-linktree',
      demoUrl: 'https://gustav-linktree.netlify.app/'
    },
    {
      id: 'blogspot-1',
      title: 'Blog Seputar Dunia Komputer',
      description: (t) => t('deskripsi-web6.deskripsi'),
      image: blog1,
      technologies: ['BlogSpot', 'Blogger'],
      category: 'Website',
      demoUrl: 'https://gustavchannel.blogspot.com/'
    },
    {
      id: 'blogspot-2',
      title: 'Blog Seputar Dunia Networking',
      description: (t) => t('deskripsi-web7.deskripsi'),
      image: blog2,
      technologies: ['BlogSpot', 'Blogger'],
      category: 'Website',
      demoUrl: 'https://gustavnetwork.blogspot.com/'
    },
    {
      id: 'blogspot-3',
      title: 'Blog Jenis" Sistem Operasi',
      description: (t) => t('deskripsi-web8.deskripsi'),
      image: blog3,
      technologies: ['BlogSpot', 'Blogger'],
      category: 'Website',
      demoUrl: 'https://gustavcoderjunior.blogspot.com/'
    },
    {
      id: 'blogspot-4',
      title: 'Blog Jual Beli Saldo PayPal',
      description: (t) => t('deskripsi-web9.deskripsi'),
      image: blog4,
      technologies: ['BlogSpot', 'Blogger'],
      category: 'Website',
      demoUrl: 'https://jual-beli-saldo-paypal.blogspot.com/'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('projects.title')}
          </motion.h2>
          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-500 rounded-full mb-6" />
          <motion.p
            className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('projects.subtitle')}
          </motion.p>

          <div className="flex gap-4 mb-10">
            <button
              onClick={() => setSelectedCategory('Aplikasi')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                selectedCategory === 'Aplikasi'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
              }`}
            >
              Aplikasi Mobile
            </button>
            <button
              onClick={() => setSelectedCategory('Website')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                selectedCategory === 'Website'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
              }`}
            >
              Website
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter((project) => project.category === selectedCategory)
            .map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
