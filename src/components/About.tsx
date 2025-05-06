import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  FaDocker, FaPython, FaHtml5, FaCss3Alt,
  FaJsSquare, FaUbuntu, FaNetworkWired,
  FaGraduationCap,
  FaFilter,
} from 'react-icons/fa';
import { SiDart, SiFlutter, SiFirebase, SiGit, } from 'react-icons/si';
import { FaCode, FaCodePullRequest, FaGithub, FaJava, FaSchool } from 'react-icons/fa6';
import { FaAward, FaGoogle} from 'react-icons/fa';
import FundamentalFrontEndWeb from '../assets/Sertifikat/Fundamental-Front-End-Web.jpeg';
import FundamentalJaringanKomputer from '../assets/Sertifikat/Fundamental-Jaringan-Komputer.jpeg';
import FundamentalPython from '../assets/Sertifikat/Fundamental-Python.jpeg';
import DasarWeb from '../assets/Sertifikat/Dasar-Pemrogramman-Web.jpeg';
import DasarJavScript from '../assets/Sertifikat/Dasar-Pemrogamman-JavaScript.jpeg';
import AplikasiWeb from '../assets/Sertifikat/Aplikasi-Web-React.jpeg';
import DasarJava from '../assets/Sertifikat/Pemrogramman-Java.jpeg';
import JaringanKomputer from '../assets/Sertifikat/Jaringan-Komputer.jpeg';
import DasarDevOps from '../assets/Sertifikat/Dasar-Dasar-DevOps.jpeg';
import SertifikatKejuruan from '../assets/Sertifikat/Lomba-Kejuruan.jpeg';
import SertifikatPKL from '../assets/Sertifikat/Sertifikat-PKL.jpeg';
import FirebaseBadge from '../assets/Sertifikat/Badge-FIrebase.jpeg';
import WorkshopFlutter from '../assets/Sertifikat/workshop-flutter.jpeg'
import BootcampFlutter from '../assets/Sertifikat/Bootcamp-Flutter.jpeg';
import ProjectFlutter from '../assets/Sertifikat/FInal-Project-Flutter.jpeg';
import { TbLetterN } from 'react-icons/tb';

interface SkillProps {
  name: string;
  icon: React.ReactNode;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  color: string;
}

interface CertificateProps {
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: React.ReactNode;
  credentialLink?: string;
  image: string;
  provider: string;
}

const getBadgeColor = (level: string): string => {
  switch (level.toLowerCase()) {
    case 'beginner': return 'bg-amber-950 text-white';
    case 'intermediate': return 'bg-gray-700 text-white';
    case 'advanced': return 'bg-blue-600 text-white';
    case 'expert': return 'bg-green-500 text-white';
    default: return 'bg-gray-300 text-gray-800';
  }
};

const SkillCard: React.FC<SkillProps> = ({ name, icon, level, color }) => (
  <div className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-200">
    <div className={`text-3xl ${color}`}>{icon}</div>
    <div className="flex-1">
      <h4 className="text-sm font-semibold text-gray-800 dark:text-white">{name}</h4>
    </div>
    <span className={`text-xs font-bold px-2 py-1 rounded-full ${getBadgeColor(level)}`}>
      {level}
    </span>
  </div>
);

const About: React.FC = () => {
  const { t } = useTranslation();
  const [filterProvider, setFilterProvider] = useState<string>('All');
  const [providers, setProviders] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isDesktopFilterOpen, setIsDesktopFilterOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCertTitle, setSelectedCertTitle] = useState<string>('');
  const desktopFilterRef = useRef<HTMLDivElement>(null);

  const skills: SkillProps[] = [
    { name: 'Dart', icon: <SiDart />, level: 'Advanced', color: 'text-blue-900' },
    { name: 'Flutter', icon: <SiFlutter />, level: 'Advanced', color: 'text-cyan-500' },
    { name: 'Firebase', icon: <SiFirebase />, level: 'Intermediate', color: 'text-orange-400' },
    { name: 'HTML', icon: <FaHtml5 />, level: 'Intermediate', color: 'text-orange-500' },
    { name: 'CSS', icon: <FaCss3Alt />, level: 'Intermediate', color: 'text-blue-600' },
    { name: 'JavaScript', icon: <FaJsSquare />, level: 'Beginner', color: 'text-yellow-500' },
    { name: 'Java', icon: <FaJava />, level: 'Beginner', color: 'text-yellow-500' },
    { name: 'Python', icon: <FaPython />, level: 'Intermediate', color: 'text-amber-500' },
    { name: 'Git', icon: <SiGit />, level: 'Advanced', color: 'text-orange-700' },
    { name: 'Github', icon: <FaGithub />, level: 'Advanced', color: 'text-white-400' },
    { name: 'Docker', icon: <FaDocker />, level: 'Advanced', color: 'text-blue-600' },
    { name: t('skills.jaringan'), icon: <FaNetworkWired />, level: 'Advanced', color: 'text-green-500' },
    { name: t('skills.ubuntu'), icon: <FaUbuntu />, level: 'Expert', color: 'text-red-500' },
  ];

  const experienceList = [
    {
      title: 'Junior Mobile Developer | Flutter Enthusiast',
      date: 'Maret 2025 - Sekarang',
      desc: `Fokus pada pengembangan aplikasi mobile menggunakan Flutter dan bahasa Dart. 
        Terbiasa membangun UI responsif, menerapkan state management (seperti Provider & GetX), 
        serta mengintegrasikan aplikasi dengan backend melalui REST API dan Firebase. 
        Aktif mengeksplorasi fitur baru Flutter dan membangun proyek pribadi untuk latihan.`,
    },
    {
      title: 'DevOps Enthusiast',
      date: 'November 2024 - Januari 2025',
      desc: `Mempelajari konsep DevOps dan implementasi CI/CD menggunakan GitHub Actions, dan Jenkins.
        Bereksperimen dengan containerization menggunakan Docker dan setup sederhana dengan Nginx sebagai reverse proxy. 
        Terbiasa menggunakan server berbasis Linux untuk simulasi deployment dan automasi sederhana.`,
    },
    {
      title: 'Python Enthusiast',
      date: 'Februari 2024 - Juni 2024',
      desc: `Mengembangkan berbagai proyek dengan Python mulai dari otomasi, visualisasi data, hingga pembuatan AI. 
        Pernah menggunakan library seperti turtle, ascii-magic, matplotlib, dan pandas. 
        Sempat mencoba machine learning dan automasi jaringan serta framework Flask untuk backend web sederhana.`,
    },
    {
      title: 'Junior Web Developer',
      date: 'Januari 2022 - Januari 2024',
      desc: `Mempelajari dasar-dasar pengembangan web menggunakan HTML, CSS, dan JavaScript. 
        Pernah menyentuh backend dasar dengan PHP dan pernah mencoba framework CSS, seperti Bootstrap. 
        Eksplorasi JavaScript framework seperti React dan Node.js untuk memahami alur modern web development.`,
    },
  ];

  const certificateList: CertificateProps[] = [
    { 
      title: 'Menguasai Fundamental Front End Web', 
      issuer: 'Coding Studio', 
      date: 'Februari 2023', 
      description: 'Menguasai Fundamental Front End Web', 
      icon: <FaCode/>, 
      image: FundamentalFrontEndWeb, 
      provider: 'Coding Studio'
    },
    { 
      title: 'Fundamental Jaringan Komputer', 
      issuer: 'Coding Studio', 
      date: 'Maret 2023', 
      description: 'Fundamental Jaringan Komputer', 
      icon: <FaCode/>, 
      image: FundamentalJaringanKomputer, 
      provider: 'Coding Studio'
    },
    { 
      title: 'Fundamental Python', 
      issuer: 'Coding Studio', 
      date: 'Desember 2023', 
      description: 'Fundamental Python', 
      icon: <FaCode/>, 
      image: FundamentalPython, 
      provider: 'Coding Studio'
    },
    { 
      title: 'Belajar Dasar Pemrogramman Web', 
      issuer: 'Dicoding', 
      date: 'Oktober 2023', 
      description: 'Dasar - Dasar Pemrogramman Web', 
      icon: <FaGraduationCap />, 
      image: DasarWeb, 
      provider: 'Dicoding'
    },
    { 
      title: 'Belajar Dasar Pemrogramman JavaScript', 
      issuer: 'Dicoding', 
      date: 'November 2023', 
      description: 'Dasar - Dasar Pemrogramman JavaScript', 
      icon: <FaGraduationCap />, 
      image: DasarJavScript, 
      provider: 'Dicoding'
    },
    { 
      title: 'Belajar Membuat Aplikasi Web Dengan React', 
      issuer: 'Dicoding', 
      date: 'Desember 2023', 
      description: 'Membuat Aplikasi Web Dengan React', 
      icon: <FaGraduationCap />, 
      image: AplikasiWeb, 
      provider: 'Dicoding'
    },
    { 
      title: 'Memulai Pemrogramman Dengan Java', 
      issuer: 'Dicoding', 
      date: 'Februari 2024', 
      description: 'Dasar - Dasar Bahasa Pemrogramman Java', 
      icon: <FaGraduationCap />, 
      image: DasarJava, 
      provider: 'Dicoding'
    },
    { 
      title: 'Belajar Jaringan Komputer untuk Pemula', 
      issuer: 'Dicoding', 
      date: 'Desember 2024', 
      description: 'Belajar Jaringan Komputer untuk Pemula', 
      icon: <FaGraduationCap />, 
      image: JaringanKomputer, 
      provider: 'Dicoding'
    },
    { 
      title: 'Belajar Dasar - Dasar DevOps', 
      issuer: 'Dicoding', 
      date: 'Desember 2024', 
      description: 'Belajar Dasar - Dasar DevOps', 
      icon: <FaGraduationCap />, 
      image: DasarDevOps, 
      provider: 'Dicoding'
    },
    { 
      title: 'Sertifikat Lomba Kejuruan TJKT(Teknik Jaringan Komputer dan Telekomunikasi', 
      issuer: 'SMK Karya Guna 2 Bekasi', 
      date: 'Juni 2024', 
      description: 'Sertifikat Lomba Kejuruan TJKT(Teknik Jaringan Komputer dan Telekomunikasi', 
      icon: <FaSchool />, 
      image: SertifikatKejuruan, 
      provider: 'SMK Karya Guna 2 Bekasi'
    },
    { 
      title: 'Sertifikat PKL', 
      issuer: 'PT. Lintas Jaringan Nusantara', 
      date: 'November 2024', 
      description: 'Praktik Kerja Lapangan(PKL) di ISP PT.Lintas Jariangan Nusantara Selama 4 Bulan', 
      icon: <FaNetworkWired />, 
      image: SertifikatPKL, 
      provider: 'PT. Lintas Jaringan Nusantara'
    },
    { 
      title: 'Komunitas Firebase Developer Studio Badge', 
      issuer: 'Google For Developer', 
      date: 'April 2025', 
      description: 'Mendapatkan Badge Komunitas Firebase Developer, bukti partisipasi aktif di dalam komunitas google developer', 
      icon: <FaGoogle  />, 
      image: FirebaseBadge, 
      provider: 'Google'
    },
    { 
      title: 'Workshop Flutter', 
      issuer: 'DuniaCoding', 
      date: 'Maret 2025', 
      description: 'Mengikuti Event Workshop flutter selama 2 hari', 
      icon: <FaCodePullRequest />, 
      image: WorkshopFlutter, 
      provider: 'DuniaCoding'
    },
    { 
      title: 'Bootcamp Flutter', 
      issuer: 'NusaCodes', 
      date: 'April 2025', 
      description: 'Pengenalan Framework Flutter, dengan pelatiahan bootcamp selama 1 bulan penuh', 
      icon: <TbLetterN />, 
      image: BootcampFlutter, 
      provider: 'NusaCodes'
    },
    { 
      title: 'Final Project Bootcamp Flutter', 
      issuer: 'NusaCodes', 
      date: 'April 2025', 
      description: 'Menyelesaikan Final Project', 
      icon: <TbLetterN />, 
      image: ProjectFlutter, 
      provider: 'NusaCodes'
    },
  ];

  // Extract unique providers for filter buttons
  useEffect(() => {
    const uniqueProviders = Array.from(new Set(certificateList.map(cert => cert.provider)));
    setProviders(uniqueProviders);
  }, []);

  // Function to filter certificates by provider
  const filteredCertificates = filterProvider === 'All'
    ? certificateList
    : certificateList.filter(cert => cert.provider === filterProvider);

  const getProviderColor = (provider: string): string => {
    switch(provider) {
      case 'Coding Studio': return 'bg-[conic-gradient(#00FFD9_10deg,#0890D4_90deg,#0066FF_180deg)]';
      case 'Dicoding': return 'bg-[conic-gradient(#030202_100deg,#002E73_90deg,#003B59_180deg)]';
      case 'SMK Karya Guna 2 Bekasi': return 'bg-[conic-gradient(from_-45deg_at_center,#030202_200deg,#A69307_100deg)]';
      case 'PT. Lintas Jaringan Nusantara': return 'bg-[conic-gradient(from_-45deg_at_center,#FF9D00_200deg,#4D4D4D_100deg)]';
      case 'Google': return 'bg-[conic-gradient(from_-45deg_at_center,#4285F4_0deg,#EA4335_90deg,#FBBC05_180deg,#34A853_270deg)]';
      case 'DuniaCoding': return 'bg-violet-900';
      case 'NusaCodes': return 'bg-[conic-gradient(from_-45deg_at_center,#0898FF_200deg,#130475_100deg)]';
      default: return 'bg-gray-600';
    }
  };

  const getProviderIcon = (provider: string): React.ReactNode => {
    switch(provider) {
      case 'Coding Studio': return <FaCode className="mr-2" />;
      case 'Dicoding': return <FaGraduationCap className="mr-2" />;
      case 'SMK Karya Guna 2 Bekasi': return <FaSchool className="mr-2" />;
      case 'PT. Lintas Jaringan Nusantara': return <FaNetworkWired className="mr-2" />;
      case 'Google': return <FaGoogle className="mr-2" />;
      case 'DuniaCoding': return <FaCodePullRequest className="mr-2" />;
      case 'NusaCodes': return <TbLetterN className="mr-2" />;
      default: return <FaAward className="mr-2" />;
    }
  };

  const CertificateCard: React.FC<CertificateProps> = ({ title, issuer, date, description, icon, image }) => (
    <motion.div 
      className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      layout
    >
      <div className="absolute top-4 right-4 text-3xl text-blue-600 dark:text-blue-400 opacity-20 group-hover:opacity-40 transition-opacity">
        <FaAward />
      </div>
      
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 text-2xl">
          {icon}
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h4>
          <p className="text-sm text-blue-600 dark:text-blue-400">{issuer}</p>
        </div>
      </div>
      
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{description}</p>
  
      {/* Menambahkan Gambar Sertifikat (Thumbnail) dengan fungsi klik */}
      <div 
        className="relative mb-4 overflow-hidden rounded-md group-hover:shadow-lg transition-all duration-300 cursor-pointer"
        onClick={() => {
          setSelectedImage(image);
          setSelectedCertTitle(title);
        }}
      >
        <img 
          src={image} 
          alt="Certificate" 
          className="w-full h-32 object-cover rounded-md transform transition-transform duration-300 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-3 w-full">
            <span className="text-white text-xs font-medium">Klik untuk detail</span>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{date}</span>
      </div>
    </motion.div>
  );
  
  // Modal overlay refs and handlers
  const modalRef = useRef<HTMLDivElement>(null);
  
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && modalRef.current === e.target) {
      handleCloseModal();
    }
  };

  // Handle escape key press
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedImage) {
        handleCloseModal();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [selectedImage]);

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('about.title')}
          </motion.h2>
          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-500 rounded-full mx-auto mb-4" />
          <motion.p
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('about.info')}
          </motion.p>
        </div>

        {/* Section Skill (atas sendiri) */}
        <motion.div
          className="mb-16 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('about.skills')}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </motion.div>

        {/* Section Experience (bawahnya skill) */}
        <motion.div
          className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('about.experience')}</h3>
          {experienceList.map((exp, i) => (
            <div key={i} className="border-l-4 border-blue-600 dark:border-blue-500 pl-4">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">{exp.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{exp.date}</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300 whitespace-pre-line">{exp.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Section Sertifikat dengan Filter yang Ditingkatkan */}
        <motion.div
          className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t('about.certificate')}</h3>
            
            {/* Desktop Filter - Updated to dropdown style */}
            <div className="hidden md:block relative mt-4 md:mt-0" ref={desktopFilterRef}>
              <button
                onClick={() => setIsDesktopFilterOpen(!isDesktopFilterOpen)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
              >
                <FaFilter />
                <span>Filter: {filterProvider}</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${isDesktopFilterOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Desktop Filter Dropdown */}
              <AnimatePresence>
                {isDesktopFilterOpen && (
                  <motion.div 
                    className="absolute right-0 mt-2 bg-white dark:bg-gray-700 rounded-lg shadow-xl z-10 overflow-hidden min-w-full w-64"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="max-h-64 overflow-y-auto">
                      <button
                        onClick={() => {
                          setFilterProvider('All');
                          setIsDesktopFilterOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left flex items-center
                          ${filterProvider === 'All' 
                            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' 
                            : 'hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'}`}
                      >
                        <FaAward className="mr-2" /> All
                      </button>
                      
                      {providers.map(provider => (
                        <button
                          key={provider}
                          onClick={() => {
                            setFilterProvider(provider);
                            setIsDesktopFilterOpen(false);
                          }}
                          className={`w-full px-4 py-3 text-left flex items-center
                            ${filterProvider === provider 
                              ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' 
                              : 'hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'}`}
                        >
                          {getProviderIcon(provider)} {provider}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Mobile Filter Toggle */}
            <div className="md:hidden w-full mt-4">
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg flex justify-between items-center"
              >
                <span className="flex items-center">
                  {filterProvider === 'All' ? <FaAward className="mr-2" /> : getProviderIcon(filterProvider)}
                  Filter: {filterProvider}
                </span>
                <svg 
                  className={`w-5 h-5 transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Mobile Filter Dropdown */}
              <AnimatePresence>
                {isFilterOpen && (
                  <motion.div 
                    className="bg-white dark:bg-gray-700 mt-2 rounded-lg shadow-lg overflow-hidden"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <button
                      onClick={() => {
                        setFilterProvider('All');
                        setIsFilterOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-left flex items-center
                        ${filterProvider === 'All' 
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' 
                          : 'hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'}`}
                    >
                      <FaAward className="mr-2" /> All
                    </button>
                    
                    {providers.map(provider => (
                      <button
                        key={provider}
                        onClick={() => {
                          setFilterProvider(provider);
                          setIsFilterOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left flex items-center
                          ${filterProvider === provider 
                            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' 
                            : 'hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'}`}
                      >
                        {getProviderIcon(provider)} {provider}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          
          {/* Active filter indicator */}
          <div className="mb-6">
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <span className="mr-2">Active filter:</span>
              <span className={`px-3 py-1 rounded-full text-white flex items-center ${filterProvider === 'All' ? 'bg-blue-600' : getProviderColor(filterProvider)}`}>
                {filterProvider === 'All' ? <FaAward className="mr-1" /> : getProviderIcon(filterProvider)}
                {filterProvider} 
                {filterProvider !== 'All' && (
                  <button 
                    onClick={() => setFilterProvider('All')}
                    className="ml-2 bg-white/20 rounded-full w-4 h-4 flex items-center justify-center"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </span>
              <span className="ml-2">
                {filteredCertificates.length} {filteredCertificates.length === 1 ? 'certificate' : 'certificates'} found
              </span>
            </div>
          </div>
          
          {/* Certificate grid with animation */}
          <AnimatePresence mode="popLayout">
            {filteredCertificates.length > 0 ? (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                layout
              >
                {filteredCertificates.map((certificate, index) => (
                  <CertificateCard
                    key={`${certificate.provider}-${index}`}
                    {...certificate}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div 
                className="py-12 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-gray-400 dark:text-gray-500 text-6xl mb-4">
                  <FaAward />
                </div>
                <h4 className="text-xl font-medium text-gray-700 dark:text-gray-300">No certificates found</h4>
                <p className="text-gray-500 dark:text-gray-400 mt-2">Try changing your filter selection</p>
                <button
                  onClick={() => setFilterProvider('All')}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Show all certificates
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Certificate full screen modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center backdrop-blur-sm"
            onClick={handleClickOutside}
            ref={modalRef}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6 max-w-4xl w-[90%] mx-auto relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors z-10"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 overflow-hidden rounded-lg">
                  <img
                    src={selectedImage}
                    alt={selectedCertTitle}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
                
                <div className="flex-1 p-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{selectedCertTitle}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Saya telah Menyelesaikan {selectedCertTitle}.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium px-2.5 py-1 rounded-full">
                      Certificate
                    </span>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs font-medium px-2.5 py-1 rounded-full">
                      Verified
                    </span>
                    <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-xs font-medium px-2.5 py-1 rounded-full">
                      Professional
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;