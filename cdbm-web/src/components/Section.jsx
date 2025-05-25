import { motion } from 'framer-motion';

const Section = ({ title, children, id }) => {
  return (
    <motion.section 
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="research-section"
    >
      <h2>{title}</h2>
      <div className="section-content">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;