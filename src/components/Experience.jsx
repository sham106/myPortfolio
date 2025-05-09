import { motion } from 'framer-motion';
import { experiences } from '../constants/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Professional Journey</h2>
          <div className="w-20 h-1 bg-[#E9762B] mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 w-1 h-full bg-[#E9762B] transform -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`mb-8 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-[#E9762B]">{exp.company}</p>
                <p className="text-gray-500 dark:text-gray-400">{exp.date}</p>
              </div>
              <div className="w-2/12 flex justify-center">
                <div className="w-6 h-6 rounded-full bg-[#E9762B] border-4 border-white dark:border-gray-900 z-10"></div>
              </div>
              <div className={`w-5/12 ${index % 2 === 0 ? 'pl-8' : 'pr-8 text-right'}`}>
                <ul className="list-disc pl-5">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;