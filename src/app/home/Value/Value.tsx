"use client";

import Section from "@/app/components/Section";
import styles from "./value.module.css";
import Highlight from "@/app/components/Highlight";
import Image from "next/image";
import img1 from "../../../../public/assets/img/value/1.webp";
import img2 from "../../../../public/assets/img/value/2.webp";
import img3 from "../../../../public/assets/img/value/3.webp";
import stripImg from "../../../../public/assets/img/value/lamp.png";
import { useState } from "react";
import { motion } from "framer-motion";

const Value = () => {
  const [activeImg, setActiveImg] = useState<number>(0);

  const images = [img1, img2, img3];

  const stripInfo = [
    {
      title: "Optimal performance",
      description: (
        <p>
          In all dental and <br /> medical equipment <br /> repair.
        </p>
      ),
    },
    {
      title: (
        <p>
          Well-
          <br /> trained
        </p>
      ),
      description:
        "Our Service Technicians are the best because we know the importance",
    },
    {
      title: "Full-Service dealership",
      description:
        "We arrive at your office fully stocked with supplies from most manufacturers.",
    },
  ];

  return (
    <Section
      id="value"
      title={
        <h2>
          Our <Highlight color="secondary">value offer</Highlight>
        </h2>
      }
    >
      <div className={styles.content}>
        <motion.div
          initial={{ x: "-10%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.3 }}
          className={styles.info}
        >
          <h3 className={styles.heading}>
            We guarantee an{" "}
            <Highlight color="secondary">agile and cost-effective</Highlight>{" "}
            actions
          </h3>
          <p className={styles.description}>
            We’re specialists <b>in dental and medical equipment repair</b>, our
            service will be received as soon as possible and most work will be
            done on-site using high quality parts.
          </p>
          <div className={styles.row}>
            <p>Health care products</p>
            <p>Medical Equipment</p>
            <p>Technical service</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "10%", opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.75,
            delay: 0.3,
          }}
          className={styles.images}
        >
          {images.map((img, index) => {
            const isActiveImg = activeImg === index;

            return (
              <div
                key={index}
                style={{ width: isActiveImg ? "50%" : "25%" }}
                className={styles.imageContainer}
                onClick={() => setActiveImg(index)}
              >
                <Image
                  src={img}
                  alt={"img" + index}
                  style={{ width: "100%" }}
                />
                <div
                  className={styles.background}
                  style={{
                    background:
                      activeImg === index
                        ? "var(--color-secondary)"
                        : "#C9CAC9",
                  }}
                ></div>
                <p
                  style={{
                    opacity: activeImg === index ? 1 : 0,
                  }}
                >
                  High Quality
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
      <motion.div
        className={styles.stripContainer}
        initial={{ y: "10%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0, duration: 0.75 }}
      >
        <div className={styles.strip}>
          <motion.div
            className={styles.stripImgContainer}
            animate={{
              y: [
                Math.random() * 20,
                Math.random() * 20,
                0,
                Math.random() * 20,
                Math.random() * 20,
                0,
                Math.random() * 20,
                Math.random() * 20,
                0,
                Math.random() * 20,
                Math.random() * 20,
                0,
              ],
              x: [
                Math.random() * 30,
                Math.random() * 30,
                0,
                Math.random() * 30,
                Math.random() * 30,
                0,
                Math.random() * 30,
                Math.random() * 30,
                0,
                Math.random() * 30,
                Math.random() * 30,
                0,
              ],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          >
            <Image src={stripImg} alt="strip-image" />
          </motion.div>
          <div className={styles.stripTextContainer}>
            {stripInfo.map((info, index) => (
              <motion.div
                initial={{ y: "25%", opacity: 0.5 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.75, delay: (index * 2) / 10 }}
                key={index}
                className={styles.stripText}
              >
                <div className={styles.stripHeading}>{info.title}</div>
                <p className={styles.stripDescription}>{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default Value;
