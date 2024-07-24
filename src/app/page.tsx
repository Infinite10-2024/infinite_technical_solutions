"use client";

import AboutUs from "./home/AboutUs";
import Contact from "./home/Contact";
import Health from "./home/Health";
import Hero from "./home/Hero";
import Partners from "./home/Partners";
import Products from "./home/Products";
import Value from "./home/Value";

export default function Home() {
  return (
    <main>
      <Hero />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          transform: "translateY(270px)",
          gap: 170,
        }}
      >
        <Partners />
        <Products />
        <Value />
        <AboutUs />
        <Health />
        <Contact />
      </div>
    </main>
  );
}
