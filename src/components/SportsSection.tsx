import { motion } from "framer-motion";

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
          <h2 className="section-title">Спортивна діяльність</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Спорт завжди був важливою частиною мого життя, допомагаючи розвивати
            дисципліну та командну роботу.
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
              <span className="tag">2023 - теперішній час</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Баскетбол</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Учасник Першої ліги України з баскетболу. Граю на позиції
              захисника, розвиваючи навички командної роботи, стратегічного
              мислення та лідерства.
            </p>
            <div className="relative h-50 rounded-lg overflow-hidden">
              <div className="absolute inset-0  from-primary/10 to-primary/30 " />
              <img
                src="/basketball.jpg"
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
            <h3 className="text-xl font-bold mb-4">Бадмінтон</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Займався бадмінтоном протягом восьми років, беручи участь у
              міських та регіональних змаганнях. Розвив високу концентрацію та
              точність.
            </p>
            <div className="relative h-50 rounded-lg overflow-hidden">
              <div className="absolute inset-0 from-primary/10 to-primary/30 z-10" />
              <img
                src="/badminton.jpg"
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
            Спортивна діяльність допомогла мені розвинути ключові навички, які
            застосовую у програмуванні: дисципліну, стратегічне мислення та
            вміння працювати в команді.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SportsSection;
