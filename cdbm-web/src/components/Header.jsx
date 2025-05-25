import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="research-header"
    >
      <h1>Continuous Driver Behavior Monitoring</h1>
      <p className="subtitle">A Multimodal Deep Learning Approach for Deaf Drivers</p>
    </motion.header>
  );
};

export default Header;