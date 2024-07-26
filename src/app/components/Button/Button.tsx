import { ButtonProps } from "./types";
import styles from "./button.module.css";

const Button = ({ type, children, icon, onClick, ariaLabel }: ButtonProps) => {
  const classNames = `${styles.btn} ${styles[type ?? "primary"]}`;

  return (
    <button aria-label={ariaLabel} className={classNames} onClick={onClick}>
      {icon}
      {children}
    </button>
  );
};

export default Button;
