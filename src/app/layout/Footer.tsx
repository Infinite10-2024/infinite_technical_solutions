import styles from "./layout.module.css";
import logo from "../../../public/assets/svg/contrast-logo.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <Image src={logo} alt="footer-logo" />
        <ul className={styles.footerRow}>
          <li>
            <a target="_blank" href="docs/Privacy_Policy_ITS.pdf">
              Privacy Policy
            </a>
          </li>
          <li>
            <a target="_blank" href="docs/Terms_&_Conditions_ITS.pdf">
              Terms & Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
