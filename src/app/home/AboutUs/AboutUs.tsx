import Highlight from "@/app/components/Highlight";
import Section from "@/app/components/Section";
import AboutCard from "./components/AboutCard";
import styles from "./aboutUs.module.css";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { useReverseParallax } from "@/app/utils/parallax";

export type Benefit = {
  icon: string;
  title: string;
  description: string;
};

const AboutUs = () => {
  const benefits: Benefit[] = [
    {
      icon: "/assets/svg/aboutUs/training.svg",
      title: "Excellent Training",
      description:
        "Our Service Technicians receive extensive in-house and manufacturer training. We provide a local contact you can call, who knows your office.",
    },
    {
      icon: "/assets/svg/aboutUs/cost.svg",
      title: "Cost-effective actions",
      description:
        "We’re motivated only by providing exceptional service, and all our repair recommendations are based solely on what is best for you.",
    },
    {
      icon: "/assets/svg/aboutUs/maintenance.svg",
      title: "Maintenance service",
      description:
        "We're very proud of our maintenance service that helps find issues before they become big problems.",
    },
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const y = useReverseParallax(scrollYProgress, 40);

  return (
    <Section
      id="about"
      title={
        <h2>
          <Highlight color="secondary">About Us</Highlight>
        </h2>
      }
    >
      <div>
        <motion.div
          ref={ref}
          style={{ y }}
          className={styles.description}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.2 }}
        >
          <p>
            We have the best reliable and well-trained Service Technicians
            because we know{" "}
            <b>how important it is to keep your equipment running smoothly</b>{" "}
            to help you avoid costly downtime.
          </p>
          <p>
            <b>We’re more than a supplier or technical service.</b>{" "}
            {`We're a full-service dealership, our service technicians come to your office fully stocked with parts and supplies from most manufacturers.`}
          </p>
        </motion.div>
        <div className={styles.grid}>
          {benefits.map((b, i) => (
            <motion.div
              className={styles.benefit}
              key={b.title}
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75, delay: (i + 1) / 10 }}
            >
              <AboutCard benefit={b} />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default AboutUs;
