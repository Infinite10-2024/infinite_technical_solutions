import Highlight from "@/app/components/Highlight";
import styles from "./products.module.css";
import HorizontalCard from "./components/HorizontalCard";
import { products } from "./constants";
import VerticalCard from "./components/VerticalCard";
import Section from "@/app/components/Section";
import { motion, useScroll } from "framer-motion";
import { ReactNode, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useReverseParallax } from "@/app/utils/parallax";

export type Product = {
  image: string;
  title: ReactNode;
  description: ReactNode;
};

const Products = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const y2 = useReverseParallax(scrollYProgress, 30);

  return (
    <Section
      id="products"
      title={
        <h2>
          Products and <Highlight color="secondary">services</Highlight>
        </h2>
      }
    >
      <div className={styles.content}>
        <motion.div ref={ref} style={{ y: y2 }}>
          <HorizontalCard product={products[0]} />
        </motion.div>
        <motion.div
          className={styles.grid}
          initial={{ y: "5%", opacity: 0 }}
          whileInView={{ y: 14, opacity: 1 }}
          transition={{ duration: 0.75 }}
        >
          {products.slice(1, 7).map((product) => (
            <VerticalCard key={product.title?.toString()} product={product} />
          ))}
        </motion.div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          speed={750}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className={styles.swiper}
        >
          {products.slice(7, products.length).map((product) => (
            <SwiperSlide key={product.title?.toString()}>
              <HorizontalCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <motion.div
        className={styles.mobileContent}
        ref={ref}
        style={{ y: y2 }}
        initial={{ y: "5%", opacity: 0 }}
        whileInView={{ y: 14, opacity: 1 }}
        transition={{ delay: -0.2, duration: 0.75 }}
      >
        {products.map((product) => (
          <VerticalCard key={product.title?.toString()} product={product} />
        ))}
      </motion.div>
    </Section>
  );
};

export default Products;
