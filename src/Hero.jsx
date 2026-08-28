import { ArrowDownRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          DIGITAL MARKETING • DATA • AI
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Turning ideas into
          <span> digital growth.</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          I combine creativity, data and technology to help businesses
          build stronger digital experiences, reach the right audience
          and make better marketing decisions.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a href="#projects" className="btn btn-primary">
            View My Work
            <ArrowDownRight size={19} />
          </a>

          <a href="#contact" className="btn btn-secondary">
            Let's Talk
            <Mail size={18} />
          </a>
        </motion.div>

        <motion.div
          className="hero-tags"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <span>Digital Strategy</span>
          <span>Content Marketing</span>
          <span>Analytics</span>
          <span>AI</span>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;