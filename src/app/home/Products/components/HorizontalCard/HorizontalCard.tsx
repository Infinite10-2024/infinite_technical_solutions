import Image from "next/image";
import styles from "./horizontalCard.module.css";
import Button from "@/app/components/Button";
import { Product } from "../../Products";
import { detectScroll } from "@/app/utils/scroll";

type HorizontalCardProps = {
  product: Product;
};

const HorizontalCard = ({ product }: HorizontalCardProps) => {
  const { image, title, description } = product;

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={image} alt="image" fill />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        <Button
          type="secondary"
          onClick={(e) => detectScroll(e, "contact")}
        >{`I'm interested`}</Button>
      </div>
    </div>
  );
};

export default HorizontalCard;
