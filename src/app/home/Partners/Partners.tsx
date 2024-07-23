import Highlight from "@/app/components/Highlight";
import styles from "./partners.module.css";
import owandy from "../../../../public/assets/svg/partners/owandy-logo.svg";
import ads from "../../../../public/assets/svg/partners/ads-logo.svg";
import basevac from "../../../../public/assets/svg/partners/basevac-logo.svg";
import brandmax from "../../../../public/assets/svg/partners/brandmax-logo.svg";
import dansereau from "../../../../public/assets/svg/partners/dansereau-logo.svg";
import dci from "../../../../public/assets/svg/partners/dci-logo.svg";
import kinetic from "../../../../public/assets/svg/partners/kinetic-logo.svg";
import rpi from "../../../../public/assets/svg/partners/rpi-logo.svg";
import tpc from "../../../../public/assets/svg/partners/tpc-logo.svg";
import vector from "../../../../public/assets/svg/partners/vector-logo.svg";
import bienAir from "../../../../public/assets/svg/partners/bien-air-logo.svg";
import Image from "next/image";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";
import { useRef } from "react";
import { useParallax } from "@/app/utils/parallax";

const Partners = () => {
  const logos = [
    owandy,
    ads,
    basevac,
    brandmax,
    dansereau,
    dci,
    kinetic,
    rpi,
    tpc,
    vector,
    bienAir,
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const y = useParallax(scrollYProgress, 290);

  const baseVelocity = -5;
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={styles.container}>
      <motion.p ref={ref}>
        We&rsquo;sre <Highlight color="secondary">dealers</Highlight> of:
      </motion.p>
      <motion.div className={styles.sliderContainer}>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          // style={{ x }}
          className={styles.slider}
        >
          {logos.map((logo, index) => (
            <Image key={index} src={logo} alt="partner-logo" />
          ))}
          {logos.map((logo, index) => (
            <Image key={index} src={logo} alt="partner-logo" />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Partners;
