
import { motion } from 'framer-motion';
import ProjectCard from './ui/ProjectCard';

const projects = [
  {
    title: 'API для расписания университета',
    description: 'Разработка API для упрощения доступа к учебному графику и расписанию занятий университета.',
    technologies: ['Python', 'Flask', 'REST API', 'Database'],
  },
  {
    title: 'AirChain',
    description: 'Стартап-проект по продаже очищенного воздуха с веб-платформой для заказов и отслеживания доставки.',
    technologies: ['React', 'JavaScript', 'Node.js', 'API Integration'],
  },
  {
    title: 'Сайт оценки преподавателей',
    description: 'Платформа для студентов, позволяющая оставлять отзывы и оценки о преподавателях университета.',
    technologies: ['Django', 'Python', 'PostgreSQL', 'Bootstrap'],
  },
  {
    title: 'AI-помощник в Telegram',
    description: 'Интеллектуальный бот, интегрирующий DeepSeek с Google Calendar и Email для управления расписанием.',
    technologies: ['Python', 'DeepSeek', 'Google API', 'Telegram API'],
  },
];

const ProjectsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-secondary/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Проекты</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Мои ключевые проекты в сфере искусственного интеллекта и веб-разработки.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
