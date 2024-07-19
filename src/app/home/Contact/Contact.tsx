import Image from "next/image";
import styles from "./contact.module.css";
import left from "../../../../public/assets/img/contact/left.png";
import right from "../../../../public/assets/img/contact/right.png";
import Highlight from "@/app/components/Highlight";
import Button from "@/app/components/Button";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className={styles.container}>
      <div>
        <Image src={left} alt="left-img" />
      </div>
      <div className={styles.central}>
        <motion.h2
          initial={{ y: "50%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{duration: .5}}
        >
          Contact <Highlight color="secondary">Us</Highlight>
        </motion.h2>
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
      </div>
      <div>
        <Image src={right} alt="right-img" />
      </div>
    </section>
  );
};

export default Contact;
