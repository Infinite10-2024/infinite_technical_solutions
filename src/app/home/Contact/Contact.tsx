import Image from "next/image";
import styles from "./contact.module.css";
import left from "../../../../public/assets/img/contact/left.webp";
import right from "../../../../public/assets/img/contact/right.png";
import Highlight from "@/app/components/Highlight";
import Button from "@/app/components/Button";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useParallax } from "@/app/utils/parallax";

function useParallax2(value: MotionValue, distance: number) {
  return useTransform(value, [1, 0], [-distance, distance]);
}

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const y = useParallax(scrollYProgress, 100);
  const y2 = useParallax2(scrollYProgress, 25);
  return (
    <section id="contact" className={styles.container}>
      <motion.div
        className={styles.img}
        style={{ y: y2 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.5 }}
      >
        <Image src={left} alt="left-img" />
      </motion.div>
      <motion.div
        ref={ref}
        className={styles.central}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        style={{ y }}
      >
        <h2>
          Contact <Highlight color="secondary">Us</Highlight>
        </h2>
        <p>
          We guarantee an agile and cost-effective actions for the operation of
          our clients businesses. You always will be receiving a personalized
          service.
        </p>
        <h3>We love our clients</h3>
        <div className={styles.btnsRow}>
          <Button type="primary">Fill form</Button>
          <Button type="secondary">Make a call</Button>
          <Button type="outlined-contrast">Send an e-mail</Button>
        </div>
      </motion.div>
      <motion.div
        className={styles.img}
        style={{ y: y2 }}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.5 }}
      >
        <Image src={right} alt="right-img" />
      </motion.div>
    </section>
  );
};

export default Contact;
