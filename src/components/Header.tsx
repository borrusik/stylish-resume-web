
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ui/ThemeToggle';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', label: 'Главная' },
    { id: 'about', label: 'Обо мне' },
    { id: 'projects', label: 'Проекты' },
    { id: 'skills', label: 'Навыки' },
    { id: 'sports', label: 'Спорт' },
    { id: 'contact', label: 'Контакты' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Find active section based on scroll position
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id),
      })).filter(section => section.element !== null);
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionElements[i];
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <motion.header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300',
        isScrolled ? 'bg-white/70 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700">
            BorisCherkashin
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {sections.map(section => (
            <a 
              key={section.id} 
              href={`#${section.id}`}
              className={cn(
                'relative py-2 text-sm font-medium transition-colors',
                activeSection === section.id 
                  ? 'text-primary' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
              )}
            >
              {section.label}
              {activeSection === section.id && (
                <motion.span 
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-primary"
                  layoutId="underline"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
