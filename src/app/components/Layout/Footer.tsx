import styles from "./layout.module.css";
import logo from "../../../../public/assets/svg/contrast-logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <Image src={logo} alt="footer-logo" />
        <div className={styles.footerRow}>
          <div>Lorem ipsum</div>
          <div>Lorem ipsum</div>
          <div>Lorem ipsum</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
