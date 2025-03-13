
import { motion } from 'framer-motion';
import { Mail, Send, Github, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import DownloadButton from './ui/DownloadButton';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Сообщение отправлено!', {
        description: 'Спасибо за ваше сообщение. Я свяжусь с вами в ближайшее время.'
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Контакты</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Свяжитесь со мной для обсуждения сотрудничества, проектов или просто чтобы поздороваться.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4">Связаться со мной</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  placeholder="Ваше имя"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Ваше сообщение..."
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-4">Контактная информация</h3>
            
            <div className="space-y-6">
              <a 
                href="mailto:example@gmail.com" 
                className="group flex items-center p-4 glass rounded-xl hover:bg-primary/10 transition-colors"
              >
                <div className="mr-4 p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">wwork8655@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="https://t.me/username" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center p-4 glass rounded-xl hover:bg-primary/10 transition-colors"
              >
                <div className="mr-4 p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium">Telegram</h4>
                  <p className="text-gray-600 dark:text-gray-400">@borrusik</p>
                </div>
              </a>
              
              <a 
                href="https://github.com/username" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center p-4 glass rounded-xl hover:bg-primary/10 transition-colors"
              >
                <div className="mr-4 p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Github className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <p className="text-gray-600 dark:text-gray-400">github.com/borrusik</p>
                </div>
              </a>
            </div>
            
            <div className="pt-6">
              <DownloadButton pdfUrl="/resume.pdf" className="w-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
