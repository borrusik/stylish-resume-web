
import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  className?: string;
}

const ProjectCard = ({ title, description, technologies, className }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={cn(
        'relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-border p-6 shadow-sm transition-all duration-300',
        isHovered ? 'shadow-card-hover scale-[1.02]' : '',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-xl transition-all duration-300 z-0" 
        style={{ transform: isHovered ? 'scale(1.5)' : 'scale(1)' }}
      />
      
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="tag">{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
