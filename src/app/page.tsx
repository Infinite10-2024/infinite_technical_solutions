"use client";

import AboutUs from "./Home/AboutUs";
import Contact from "./Home/Contact";
import Health from "./Home/Health";
import Hero from "./Home/Hero";
import Partners from "./Home/Partners";
import Products from "./Home/Products";
import Value from "./Home/Value";

export default function Home() {
  return (
    <main>
      <Hero />
      <div style={{ display: "flex", flexDirection: "column", gap: 120 }}>
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
