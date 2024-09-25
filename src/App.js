import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import { IntlProvider } from 'react-intl';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Separator from './components/Separator';
import en from './locales/en.json';
import pt from './locales/pt.json';

const messages = { en, pt };

const App = () => {
  const [language, setLanguage] = useState('pt');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'pt' ? 'en' : 'pt');
  };

  if (!mounted) return null;

  return (
    <IntlProvider messages={messages[language]} locale={language}>
      <ThemeProvider attribute="class" defaultTheme="system">
        <div className="flex flex-col min-h-screen">
          <Header toggleLanguage={toggleLanguage} language={language} />
          <main className="flex-grow">
            <Home />
            <Separator id="projects-separator" className="z-50" />
            <Projects />
            <Separator id="skills-separator" />
            <Skills />
            <Separator id="contact-separator" />
            <Contact />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </IntlProvider>
  );
};

export default App;