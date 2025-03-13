
import { motion } from 'framer-motion';

const AboutSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="section-title">Обо мне</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/30 z-0" />
              <img 
                src="/placeholder.svg" 
                alt="Boris Cherkashin"
                className="h-full w-full object-cover z-10 mix-blend-overlay opacity-50"
              />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-20">
                <span className="tag mb-3">Искусственный интеллект</span>
                <span className="tag">Веб-разработка</span>
              </div>
            </div>
            
            <div className="glass absolute -bottom-6 -right-6 px-6 py-4 rounded-xl">
              <p className="text-sm font-medium">Студент факультета компьютерных наук</p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700">
              Черкашин Борис Андреевич
            </h3>
            
            <div className="space-y-6 text-gray-600 dark:text-gray-400">
              <p>
                Студент Харьковского национального университета радиоэлектроники, 
                факультет компьютерных наук (с 2024 года).
              </p>
              
              <div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">Образование</h4>
                <div className="glass p-4 rounded-xl">
                  <div className="flex flex-col sm:flex-row justify-between mb-1">
                    <span className="font-medium text-foreground">ХНУРЭ, факультет компьютерных наук</span>
                    <span className="text-gray-500 dark:text-gray-400">2024 - настоящее время</span>
                  </div>
                  <p className="text-sm">Специализация в области искусственного интеллекта и веб-разработки</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">Специализация</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="tag">Искусственный интеллект</span>
                  <span className="tag">Веб-разработка</span>
                  <span className="tag">Python</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag">React</span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">Ищу сотрудничество</h4>
                <p>
                  Открыт для проектов и стажировок в области разработки с использованием 
                  искусственного интеллекта и современных веб-технологий.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
