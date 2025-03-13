
import { motion } from 'framer-motion';

const SportsSection = () => {
  return (
    <section id="sports" className="py-20 bg-secondary/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Спортивная деятельность</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Спорт всегда был важной частью моей жизни, помогая развивать дисциплину и командную работу.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass p-6 rounded-xl"
          >
            <div className="mb-4">
              <span className="tag">2018 - настоящее время</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Баскетбол</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Участник Первой лиги Украины по баскетболу. Играю на позиции защитника, 
              развивая навыки командной работы, стратегического мышления и лидерства.
            </p>
            <div className="relative h-40 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/30 z-10" />
              <img 
                src="/placeholder.svg" 
                alt="Basketball"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass p-6 rounded-xl"
          >
            <div className="mb-4">
              <span className="tag">2014 - 2022</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Бадминтон</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Занимался бадминтоном на протяжении восьми лет, участвуя в городских и 
              региональных соревнованиях. Развил высокую концентрацию и точность.
            </p>
            <div className="relative h-40 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/30 z-10" />
              <img 
                src="/placeholder.svg" 
                alt="Badminton"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Спортивная деятельность помогла мне развить ключевые навыки, которые применяю в программировании: 
            дисциплину, стратегическое мышление и умение работать в команде.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SportsSection;
