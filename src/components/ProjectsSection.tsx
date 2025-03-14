import { motion } from "framer-motion";
import ProjectCard from "./ui/ProjectCard";

const projects = [
  {
    title: "API для розкладу університету",
    description:
      "Розробка API для спрощення доступу до навчального графіку та розкладу занять університету.",
    technologies: ["Python", "Flask", "REST API", "Database"],
  },
  {
    title: "AirChain",
    description:
      "Стартап-проект з продажу очищеного повітря з веб-платформою для замовлень та відстеження доставки.",
    technologies: ["React", "JavaScript", "Node.js", "API Integration"],
  },
  {
    title: "Сайт оцінювання викладачів",
    description:
      "Платформа для студентів, що дозволяє залишати відгуки та оцінки про викладачів університету.",
    technologies: ["Django", "Python", "PostgreSQL", "Bootstrap"],
  },
  {
    title: "AI-помічник у Telegram",
    description:
      "Інтелектуальний бот, що інтегрує DeepSeek з Google Calendar та Email для управління розкладом.",
    technologies: ["Python", "DeepSeek", "Google API", "Telegram API"],
  },
];

const ProjectsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 bg-secondary/50 dark:bg-gray-900/50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Проекти</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Мої ключові проекти у сфері штучного інтелекту та веб-розробки.
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
