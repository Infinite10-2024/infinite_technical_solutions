import { ReactNode, useRef } from "react";
import styles from "./section.module.css";
import { motion, useScroll } from "framer-motion";
import { useParallax } from "@/app/utils/parallax";

interface SectionProps {
  id: string;
  title: ReactNode | string;
  children: ReactNode;
}

const Section = ({ id, title, children }: SectionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const y = useParallax(scrollYProgress, 225);
  return (
    <motion.section id={id} className={styles.container}>
      <motion.div
        ref={ref}
        style={{ y }}
        className={styles.heading}
        initial={{ opacity: 0.8 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {title}
      </motion.div>
      <motion.div style={{ y }} className={styles.content}>
        {children}
      </motion.div>
    </motion.section>
  );
};

export default Section;
