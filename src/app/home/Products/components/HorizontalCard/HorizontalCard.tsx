import Image from "next/image";
import styles from "./horizontalCard.module.css";
import Button from "@/app/components/Button";
import { Product } from "../../Products";

type HorizontalCardProps = {
  product: Product;
};

const HorizontalCard = ({ product }: HorizontalCardProps) => {
  const { image, title, description } = product;

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={image} alt="image" width={446} height={360} />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        <Button type="secondary">{`I'm interested`}</Button>
      </div>
    </div>
  );
};

export default HorizontalCard;
