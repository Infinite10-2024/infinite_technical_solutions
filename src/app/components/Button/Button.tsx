import React from "react";
import { ButtonProps } from "./types";
import styles from "./button.module.css";

const Button = ({ type, children, icon }: ButtonProps) => {
  const classNames = `${styles.btn} ${styles[type ?? 'primary']}`;

  return (
    <button className={classNames}>
      {icon}
      {children}
    </button>
  );
};

export default Button;
