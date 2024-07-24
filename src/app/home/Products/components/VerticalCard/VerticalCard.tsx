import Image from "next/image";
import { Product } from "../../Products";
import styles from "./verticalCard.module.css";
import Button from "@/app/components/Button";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import { useReverseParallax } from "@/app/utils/parallax";
import { motion } from "framer-motion";

type VerticalCardProps = {
  product: Product;
};

const VerticalCard = ({ product }: VerticalCardProps) => {
  const { image, title, description } = product;

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const y = useReverseParallax(scrollYProgress, 15);

  return (
    <div className={styles.container}>
      <motion.div className={styles.image}>
        <Image src={image} alt="image" fill />
      </motion.div>
      <div className={styles.info}>
        <motion.div className={styles.title} ref={ref} style={{ y }}>
          {title}
        </motion.div>
        <motion.div className={styles.description}>{description}</motion.div>
        <Button type="secondary">{`I'm interested`}</Button>
      </div>
    </div>
  );
};

export default VerticalCard;
