"use client";

import styles from "./layout.module.css";
import logo from "../../../public/assets/svg/contrast-logo.svg";
import Image from "next/image";
import Link from "next/link";
import CodingBoxLogo from "../../../public/assets/icons/CodingBoxLogo";
import Button from "../components/Button";

const Footer = () => {
  const openCodingBox = () => {
    window.open("http://www.codingbox.app");
  };

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <Image src={logo} alt="footer-logo" />
        <ul className={styles.footerRow}>
          <li>
            <Link target="_blank" href="docs/Privacy_Policy_ITS.pdf">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link target="_blank" href="docs/Terms_&_Conditions_ITS.pdf">
              Terms & Conditions
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.coding}>
        <p>Desarrollado por:</p>
        <Button
          type="ghost"
          onClick={openCodingBox}
          ariaLabel="Coding Box Page"
        >
          <CodingBoxLogo height={40} />
        </Button>
      </div>
    </div>
  );
};

export default Footer;
