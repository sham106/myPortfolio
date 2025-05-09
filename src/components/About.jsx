import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profilepic from '../assets/images/profile.jpg'
import Resume from '../assets/ShambachResume.pdf'

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-[#E9762B] mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/3 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#E9762B] shadow-lg">
              <img
                src={profilepic}
                alt="Shambach Simiyu"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <h3 className="text-2xl font-bold mb-4">Innovative Full-Stack Developer</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm Shambach Simiyu, a passionate software engineer with a bachelor's degree in Telecommunications and hands-on experience in full-stack development. I specialize in designing, developing, and deploying scalable web applications with a focus on clean code and user experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-bold text-lg mb-2">Education</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E9762B]">•</span>
                    <span>
                      <strong>Bachelor of Science in Telecommunications</strong><br />
                      Kabarak University
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E9762B]">•</span>
                    <span>
                      <strong>Certification in Software Development</strong><br />
                      Power Learn Project
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">Key Values</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E9762B]">•</span>
                    <span>Clean, maintainable code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E9762B]">•</span>
                    <span>Continuous learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E9762B]">•</span>
                    <span>Community impact through tech</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E9762B]">•</span>
                    <span>Collaborative problem-solving</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={Resume}
                download="Shambach_Simiyu_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 bg-[#E9762B] text-white rounded-lg hover:bg-[#d46925] transition-colors"
              >
                <FiDownload className="text-xl" />
                Download CV
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/shambach-simiyu-587a081a0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-lg hover:bg-[#084a93] transition-colors"
              >
                <FaLinkedin className="text-xl" />
                LinkedIn
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/sham106"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <FaGithub className="text-xl" />
                GitHub
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;