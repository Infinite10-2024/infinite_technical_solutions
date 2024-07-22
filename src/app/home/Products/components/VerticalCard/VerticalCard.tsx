import Image from "next/image";
import { Product } from "../../Products";
import styles from "./verticalCard.module.css";
import Button from "@/app/components/Button";

type VerticalCardProps = {
  product: Product;
};

const VerticalCard = ({ product }: VerticalCardProps) => {
  const { image, title, description } = product;

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={image} alt="image" fill />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        <Button type="secondary">{`I'm interested`}</Button>
      </div>
    </div>
  );
};

export default VerticalCard;
