import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { FiDownload } from 'react-icons/fi';
import Resume from '../assets/ShambachResume.pdf'

const Hero = ({ darkMode }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </Canvas>
      </div>

      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Tilt options={{ max: 15, scale: 1.05 }}>
            <motion.h1 
              className={`text-6xl md:text-8xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-[#0D4715]'}`}
              whileHover={{ scale: 1.02 }}
            >
              Shambach Simiyu
            </motion.h1>
          </Tilt>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h2 className="text-2xl md:text-4xl mb-8 font-medium">
              <span className="inline-block">
                Innovative{' '}
                <span className="text-[#E9762B] font-bold">
                  Full-Stack Developer
                </span>
              </span>
            </h2>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href={Resume}
              download="Shambach_Simiyu_Resume.pdf"
              className={`flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold ${darkMode ? 'bg-[#E9762B] text-white' : 'bg-[#41644A] text-white'}`}
            >
              <FiDownload className="text-xl" />
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-[#E9762B] rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-[#E9762B] rounded-full mt-1"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;