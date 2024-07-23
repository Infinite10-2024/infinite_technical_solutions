import Highlight from "@/app/components/Highlight";
import Section from "@/app/components/Section";
import AboutCard from "./components/AboutCard";
import styles from "./aboutUs.module.css";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export type Benefit = {
  icon: string;
  title: string;
  description: string;
};

function useParallax2(value: MotionValue, distance: number) {
  return useTransform(value, [1, 0], [-distance, distance]);
}

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

  const y2 = useParallax2(scrollYProgress, 40);

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
        <motion.p
          ref={ref}
          style={{ y: y2 }}
          className={styles.description}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.2 }}
        >
          We have the best reliable and well-trained Service Technicians because
          we know{" "}
          <b>how important it is to keep your equipment running smoothly</b> to
          help you avoid costly downtime
        </motion.p>
        <div className={styles.grid}>
          {benefits.map((b, i) => (
            <motion.div
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
