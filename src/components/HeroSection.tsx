
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './ui/AnimatedText';

const codeSnippet = `async function fetchAIData() {
  const response = await fetch('/api/AI/data');
  const data = await response.json();
  return processAIModel(data);
}`;

const HeroSection = () => {
  const [typedCode, setTypedCode] = useState('');
  const [codeIndex, setCodeIndex] = useState(0);

  useEffect(() => {
    if (codeIndex < codeSnippet.length) {
      const timeout = setTimeout(() => {
        setTypedCode(prev => prev + codeSnippet[codeIndex]);
        setCodeIndex(codeIndex + 1);
      }, 40);
      
      return () => clearTimeout(timeout);
    }
  }, [codeIndex]);

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20 pb-10">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-300/10 dark:bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-purple-300/10 dark:bg-purple-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-8 relative z-10">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="tag inline-block mb-4">Искусственный интеллект & Веб-разработка</span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Черкашин <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700">
              Борис
            </span>
          </motion.h1>

          <motion.div
            className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimatedText 
              text="Разработчик с фокусом на искусственный интеллект и веб-технологии." 
              delay={300}
            />
          </motion.div>

          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a 
              href="#projects" 
              className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
            >
              Проекты
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-lg bg-secondary text-foreground font-medium hover:bg-secondary/80 transition-colors"
            >
              Связаться
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="hidden md:flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="glass p-6 rounded-xl max-w-md w-full transform rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="flex items-center mb-3">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="ml-4 text-xs text-gray-500 dark:text-gray-400">AiWebDev.py</div>
            </div>
            
            <pre className="text-sm text-left font-mono text-gray-800 dark:text-gray-300 overflow-auto max-h-96">
              <code>{typedCode}<span className="border-r-2 border-primary animate-blink"></span></code>
            </pre>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-sm text-gray-400">
          <span>Прокрутите вниз</span>
          <svg className="w-5 h-5 mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
