import { ReactNode } from "react";
import styles from "./section.module.css";
import { motion } from "framer-motion";

type SectionProps = {
  title: ReactNode;
  children: ReactNode;
};

const Section = ({ title, children }: SectionProps) => {
  return (
    <section className={styles.container}>
      <motion.div
        initial={{ y: "50%", opacity: 0.5 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={styles.heading}
      >
        {title}
      </motion.div>
      {children}
    </section>
  );
};

export default Section;
