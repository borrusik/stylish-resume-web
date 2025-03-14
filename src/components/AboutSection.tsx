import { motion } from "framer-motion";

const AboutSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
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
          <h2 className="section-title">Про мене</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
              <img
                src="/ceo.jpg"
                alt="Boris Cherkashin"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="glass absolute -bottom-6 -right-6 px-6 py-4 rounded-xl">
              <p className="text-sm font-medium">
                Студент факультету комп'ютерних наук
              </p>
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
              Черкашин Борис Андрійович
            </h3>

            <div className="space-y-6 text-gray-600 dark:text-gray-400">
              <p>
                Студент Харківського національного університету
                радіоелектроніки, факультет комп'ютерних наук (з 2024 року).
              </p>

              <div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">
                  Освіта
                </h4>
                <div className="glass p-4 rounded-xl">
                  <div className="flex flex-col sm:flex-row justify-between mb-1">
                    <span className="font-medium text-foreground">
                      ХНУРЕ, факультет комп'ютерних наук
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      2024 - теперішній час
                    </span>
                  </div>
                  <p className="text-sm">
                    Спеціалізація в галузі штучного інтелекту та веб-розробки
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">
                  Спеціалізація
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="tag">Штучний інтелект</span>
                  <span className="tag">Веб-розробка</span>
                  <span className="tag">Python</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag">React</span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">
                  Шукаю співпрацю
                </h4>
                <p>
                  Відкритий для проектів та стажувань у сфері розробки з
                  використанням штучного інтелекту та сучасних веб-технологій.
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
