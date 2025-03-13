
import { Github, Mail, MessageSquare } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-secondary/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700">
            Borrusik
            </span>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              © {currentYear} Все права защищены
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/borrusik" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-primary/10 text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://t.me/borrusik" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-primary/10 text-foreground transition-colors"
              aria-label="Telegram"
            >
              <MessageSquare className="h-5 w-5" />
            </a>
            <a 
              href="mailto:wwork8655@gmail.com" 
              className="p-2 rounded-full bg-secondary hover:bg-primary/10 text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
