import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#E9762B] shadow-lg flex items-center justify-center text-white"
    >
      {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
    </motion.button>
  );
};

export default ThemeToggle;