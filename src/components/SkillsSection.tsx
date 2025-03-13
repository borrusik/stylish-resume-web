
import { motion } from 'framer-motion';
import { 
  Github, 
  Code2, 
  FlaskConical, 
  Database, 
  PenTool,
  BrainCircuit, 
  GitBranch,
  Container
} from 'lucide-react';

const skills = [
  {
    category: 'Языки программирования',
    skills: [
      { name: 'Python', icon: <Code2 className="w-6 h-6" />, level: 90 },
      { name: 'JavaScript', icon: <Code2 className="w-6 h-6" />, level: 85 },
      { name: 'HTML/CSS', icon: <PenTool className="w-6 h-6" />, level: 80 },
    ]
  },
  {
    category: 'Фреймворки и библиотеки',
    skills: [
      { name: 'React', icon: <Code2 className="w-6 h-6" />, level: 75 },
      { name: 'Flask', icon: <FlaskConical className="w-6 h-6" />, level: 85 },
      { name: 'Django', icon: <Code2 className="w-6 h-6" />, level: 80 },
    ]
  },
  {
    category: 'Инструменты и технологии',
    skills: [
      { name: 'Git', icon: <GitBranch className="w-6 h-6" />, level: 85 },
      { name: 'Docker', icon: <Container className="w-6 h-6" />, level: 70 },
      { name: 'БД (SQL/NoSQL)', icon: <Database className="w-6 h-6" />, level: 75 },
      { name: 'AI (ML/DL)', icon: <BrainCircuit className="w-6 h-6" />, level: 80 },
    ]
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Навыки</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Мои технические навыки и компетенции в области разработки программного обеспечения.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-6">{category.category}</h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center mb-2">
                      <div className="mr-2 text-primary">{skill.icon}</div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    
                    <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a 
            href="https://github.com/borrusik" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-secondary text-foreground font-medium hover:bg-secondary/80 transition-colors"
          >
            <Github className="w-5 h-5 mr-2" />
            Посмотреть проекты на GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
