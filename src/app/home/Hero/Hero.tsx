import Button from "@/app/components/Button";
import styles from "./hero.module.css";
import Image from "next/image";
import heroImg from "../../../../public/assets/img/hero/hero-img.webp";
import heroGear from "../../../../public/assets/svg/hero/hero-gear.svg";
import heroBottom from "../../../../public/assets/svg/hero/hero-bottom.svg";
import Highlight from "@/app/components/Highlight";
import Shine from "./components/Shine";
import ExploreButton from "./components/ExploreButton";
import consultingRoom from "../../../../public/assets/img/hero/consulting-room.webp";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="home">
      <div className={styles.container}>
        <div className={styles.shineRight}>
          <Shine />
        </div>
        <div className={styles.content}>
          <div className={styles.info}>
            <div>
              <h1 className={styles.title}>
                We’re <Highlight>more</Highlight> than a supplier or technical
                service
              </h1>
              <h2 className={styles.slogan}>
                The solution for all your office needs
              </h2>
            </div>
            <div>
              <p className={styles.text}>
                We provide Dental and Medical Equipment Repair and Maintenance
                of all brands, and supporting business.{" "}
                <Highlight>
                  Every day we do our best to be your partner.
                </Highlight>
              </p>
            </div>
            <div className={styles.cta}>
              <div className={styles.getStartedBtn}>
                <Button>Get Started</Button>
              </div>
              <div className={styles.trustBtn}>
                <Button type="outlined">Trust Us</Button>
              </div>
            </div>
          </div>
          <div className={styles.assets}>
            <div className={styles.assetsRow1}>
              <div className={styles.redCube}>
                <div className={styles.redCubeContent}>
                  <p className={styles.assetHeading}>200K</p>
                  <p className={styles.assetText}>
                    Infinite Technical Solutions, <br /> guarantee
                  </p>
                </div>
              </div>
              <div className={styles.blueCube}>
                <div className={styles.blueCubeContent}>
                  <p className={styles.assetHeading}>1 year</p>
                  <p className={styles.assetText}>
                    Infinite Technical Solutions, <br /> guarantee
                  </p>
                </div>
                {/* <Image
                  src={heroImg}
                  alt="hero-img"
                  className={styles.heroImg}
                ></Image> */}
              </div>
            </div>
            <div className={styles.assetsRow2}>
              <div className={styles.whiteCube}>
                <Image src={consultingRoom} alt="consulting-room"></Image>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.shineLeft}>
          <Shine />
        </div>
        <motion.div
          className={styles.gear}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        >
          <Image src={heroGear} alt="gear" />
        </motion.div>
      </div>
      <div className={styles.bottom}>
        <ExploreButton />
        <Image src={heroBottom} alt="bottom" />
      </div>
    </div>
  );
};

export default Hero;
