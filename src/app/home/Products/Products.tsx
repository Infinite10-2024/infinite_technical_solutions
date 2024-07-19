import Highlight from "@/app/components/Highlight";
import styles from "./products.module.css";
import HorizontalCard from "./components/HorizontalCard";
import { products } from "./components/constants";
import VerticalCard from "./components/VerticalCard";
import Section from "@/app/components/Section";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export type Product = {
  image: string;
  title: ReactNode;
  description: ReactNode;
};

const Products = () => {
  return (
    <Section
      id="products"
      title={
        <h2>
          Products and <Highlight color="secondary">services</Highlight>
        </h2>
      }
    >
      <motion.div
        initial={{ y: "2.5%", opacity: 0.5 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={styles.content}
        viewport={{ once: true }}
      >
        <HorizontalCard product={products[0]} />
        <div className={styles.grid}>
          {products.slice(1, 7).map((product) => (
            <VerticalCard key={product.title?.toString()} product={product} />
          ))}
        </div>
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
