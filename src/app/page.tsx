"use client";

import AboutUs from "./home/AboutUs";
import Contact from "./home/Contact";
import Health from "./home/Health";
import Hero from "./home/Hero";
import Partners from "./home/Partners";
import Products from "./home/Products";
import Value from "./home/Value";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <Hero />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          transform: "translateY(270px)",
          gap: 80,
        }}
      >
        <Partners />
        <motion.div>
          <Products />
        </motion.div>
        <Value />
        <AboutUs />
        <Health />
        <Contact />
      </div>
    </main>
  );
}
