import { ReactNode } from "react";
import styles from "./section.module.css";

type SectionProps = {
  title: ReactNode;
  children: ReactNode;
};

const Section = ({ title, children }: SectionProps) => {
  return (
    <section className={styles.container}>
      <div className={styles.heading}>{title}</div>
      {children}
    </section>
  );
};

export default Section;
