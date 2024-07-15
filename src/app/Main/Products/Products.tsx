import Highlight from "@/app/components/Highlight";
import styles from "./products.module.css";
import { ReactNode } from "react";
import HorizontalCard from "./components/HorizontalCard";
import { products } from "./components/constants";
import VerticalCard from "./components/VerticalCard";
import Section from "@/app/components/Section";

export type Product = {
  image: string;
  title: ReactNode;
  description: ReactNode;
};

const Products = () => {
  return (
    <Section
      title={
        <h2>
          Products and <Highlight color="secondary">services</Highlight>
        </h2>
      }
    >
      <div className={styles.content}>
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
      </div>
    </Section>
  );
};

export default Products;
