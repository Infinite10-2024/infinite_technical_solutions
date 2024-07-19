import Image from "next/image";
import styles from "./contact.module.css";
import left from "../../../../public/assets/img/contact/left.png";
import right from "../../../../public/assets/img/contact/right.png";
import Highlight from "@/app/components/Highlight";
import Button from "@/app/components/Button";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <motion.div
        className={styles.central}
        initial={{ x: "-5%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75 }}
      >
        <Image src={left} alt="left-img" />
      </motion.div>
      <motion.div
        className={styles.central}
        initial={{ y: "10%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75 }}
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
        className={styles.central}
        initial={{ x: "5%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75 }}
      >
        <Image src={right} alt="right-img" />
      </motion.div>
    </section>
  );
};

export default Contact;
