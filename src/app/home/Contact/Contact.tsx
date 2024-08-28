import Image from "next/image";
import styles from "./contact.module.css";
import left from "../../../../public/assets/img/contact/left.webp";
import right from "../../../../public/assets/img/contact/right.png";
import Highlight from "@/app/components/Highlight";
import Button from "@/app/components/Button";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { useParallax, useReverseParallax } from "@/app/utils/parallax";
import Link from "next/link";

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const y = useParallax(scrollYProgress, 100);
  const y2 = useReverseParallax(scrollYProgress, 25);
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
        <h3 className={styles.title}>
          We love our customers,{" "}
          <Highlight color="secondary">feel free to contact us</Highlight>.
        </h3>
        <p>
          We guarantee an agile and cost-effective actions for the operation of
          our clients businesses.{" "}
          <b>You always will be receiving a personalized service. </b>
        </p>
        <div className={styles.btnsRow}>
          <Link target="_blank" href="https://forms.gle/VFGAwK5TKg8NZVdH6">
            <Button type="primary">Fill form</Button>
          </Link>
          <Link target="_blank" href="tel:+3012890029">
            <Button type="secondary">Make a call</Button>
          </Link>
          <Link
            target="_blank"
            href="mailto:customerservice@infinitetechnicalsolutions.com"
          >
            <Button type="outlined-contrast">Send an e-mail</Button>
          </Link>
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
