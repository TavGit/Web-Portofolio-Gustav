import type React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaPaperPlane,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success?: boolean;
    message?: string;
  }>({ submitted: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would normally send the data to a backend
    // For demo purposes, we're just simulating a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Terima Kasih atas pesan yang anda kirim!, Saya akan segera membalas nya.'
    });

    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    // Reset status after 5 seconds
    setTimeout(() => {
      setFormStatus({ submitted: false });
    }, 5000);
  };

  const socialLinks = [
    { id: 'github', icon: <FaGithub size={24} />, url: 'https://github.com/TavGit' },
    { id: 'linkedin', icon: <FaLinkedin size={24} />, url: 'https://www.linkedin.com/in/muhammad-gustav-ibrahim-7a2a01293/' },
    { id: 'twitter', icon: <FaYoutube size={24} />, url: 'https://www.youtube.com/@GustavIbrahim' },
    { id: 'instagram', icon: <FaInstagram size={24} />, url: 'https://www.instagram.com/mhmmdgustavibrm_tech/' },
  ];

  const contactInfoItems = [
    {
      id: 'email',
      icon: <FaEnvelope className="text-blue-600 dark:text-blue-400" size={20} />,
      title: 'Email',
      value: 'gustavcodes.dev@gmail.com',
      link: 'mailto:gustavcodes.dev@gmail.com'
    },
    {
      id: 'location',
      icon: <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400" size={20} />,
      title: 'Location',
      value: 'Bekasi, Indonesia'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('contact.title')}
          </motion.h2>
          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-500 rounded-full mb-6" />
          <motion.p
            className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('contact.connect')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('contact.subtitle')}
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2"
                  >
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    placeholder={t('contact.name')}
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2"
                  >
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    placeholder={t('contact.email')}
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2"
                  >
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none"
                    placeholder={t('contact.message')}
                  />
                </div>

                {formStatus.submitted && (
                  <div className={`p-4 mb-4 rounded-lg ${formStatus.success ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200' : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'}`}>
                    {formStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full flex justify-center items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 font-medium"
                >
                  <FaPaperPlane className="mr-2" /> {t('contact.send')}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social Media */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-8"
          >
            {/* Contact Info */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('contact.title')}
              </h3>

              <div className="space-y-6">
                {contactInfoItems.map((item) => (
                  <div key={item.id} className="flex items-start gap-4">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h4 className="text-gray-900 dark:text-white font-medium">{item.title}</h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {t('contact.follow')}
              </h3>

              <div className="flex justify-around">
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    aria-label={link.id}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
