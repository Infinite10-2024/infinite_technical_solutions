import Image from "next/image";
import styles from "./contact.module.css";
import left from "../../../../public/assets/svg/contact/left.png";
import right from "../../../../public/assets/svg/contact/right.png";
import Highlight from "@/app/components/Highlight";
import Button from "@/app/components/Button";

const Contact = () => {
  return (
    <section className={styles.container}>
      <div>
        <Image src={left} alt="left-img" />
      </div>
      <div className={styles.central}>
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
      </div>
      <div>
        <Image src={right} alt="right-img" />
      </div>
    </section>
  );
};

export default Contact;
