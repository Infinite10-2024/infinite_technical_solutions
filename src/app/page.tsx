"use client";

import AboutUs from "./Main/AboutUs";
import Contact from "./Main/Contact";
import Health from "./Main/Health";
import Hero from "./Main/Hero";
import Partners from "./Main/Partners";
import Products from "./Main/Products";
import Value from "./Main/Value";

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
