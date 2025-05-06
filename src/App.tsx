import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import './i18n/i18n';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
  // This effect creates a dummy CV file for the demo
  useEffect(() => {
    // Create a placeholder link for CV download
    const link = document.createElement('a');
    link.style.display = 'none';
    link.setAttribute('download', 'Muhammad_Gustav_Ibrahim_CV.pdf');
    link.setAttribute('href', '#');

    // Append to body
    document.body.appendChild(link);

    return () => {
      document.body.removeChild(link);
    };
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="flex flex-col min-h-screen dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
