import Highlight from "@/app/components/Highlight";
import styles from "./products.module.css";
import HorizontalCard from "./components/HorizontalCard";
import { products } from "./components/constants";
import VerticalCard from "./components/VerticalCard";
import Section from "@/app/components/Section";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

export type Product = {
  image: string;
  title: ReactNode;
  description: ReactNode;
};

function useParallax(value: MotionValue, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function useParallax2(value: MotionValue, distance: number) {
  return useTransform(value, [1, 0], [-distance, distance]);
}

const Products = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const y = useParallax(scrollYProgress, 300);
  const y2 = useParallax2(scrollYProgress, 30);

  return (
    <Section
      id="products"
      title={
        <motion.h2>
          Products and <Highlight color="secondary">services</Highlight>
        </motion.h2>
      }
    >
      <motion.div
        // initial={{ y: "2.5%", opacity: 0.5 }}
        // whileInView={{ y: 0, opacity: 1 }}
        // transition={{ duration: 0.5 }}
        // viewport={{ once: true }}

        className={styles.content}
      >
        <motion.div
          // initial={{ x: "-10%", opacity: 0 }}
          // whileInView={{ x: 0, opacity: 1 }}
          // transition={{ duration: 0.75, delay: 0.5 }}
          ref={ref}
          style={{ y: y2 }}
        >
          <HorizontalCard product={products[0]} />
        </motion.div>
        <motion.div
          className={styles.grid}
          initial={{ y: "10%", opacity: 0 }}
          whileInView={{ y: 30, opacity: 1 }}
          transition={{ delay: -0.2, duration: 0.75 }}
        >
          {products.slice(1, 7).map((product) => (
            <VerticalCard key={product.title?.toString()} product={product} />
          ))}
        </motion.div>
        <div className={styles.slider}>
          {products.slice(7, products.length).map((product) => (
            <HorizontalCard key={product.title?.toString()} product={product} />
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Products;
