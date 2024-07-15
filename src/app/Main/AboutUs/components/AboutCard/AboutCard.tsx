import Image from "next/image";
import { Benefit } from "../../AboutUs";
import styles from "./aboutCard.module.css";

type AboutCardProps = {
  benefit: Benefit;
};

const AboutCard = ({ benefit }: AboutCardProps) => {
  const { icon, title, description } = benefit;

  return (
    <div className={styles.container}>
      <Image
        className={styles.icon}
        src={icon}
        alt={title}
        width={80}
        height={80}
      />
      <b className={styles.title}>{title}</b>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default AboutCard;
