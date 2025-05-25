import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <ul className="nav-menu">
        <li><NavLink to="/" end>Abstract</NavLink></li>
        <li><NavLink to="/introduction">Introduction</NavLink></li>
        <li><NavLink to="/methodology">Methodology</NavLink></li>
        <li><NavLink to="/results">Results</NavLink></li>
        <li><NavLink to="/conclusion">Conclusion</NavLink></li>
      </ul>
    </motion.nav>
  );
};

export default Navigation;