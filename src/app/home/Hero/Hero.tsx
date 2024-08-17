import Button from "@/app/components/Button";
import styles from "./hero.module.css";
import Image from "next/image";
import heroGear from "../../../../public/assets/svg/hero/hero-gear.svg";
import heroBottom from "../../../../public/assets/svg/hero/hero-bottom.svg";
import Highlight from "@/app/components/Highlight";
import Shine from "./components/Shine";
import ExploreButton from "./components/ExploreButton";
import consultingRoom from "../../../../public/assets/img/hero/consulting-room.webp";
import { motion } from "framer-motion";
import { detectScroll } from "@/app/utils/scroll";

const Hero = () => {
  return (
    <div id="home">
      <div className={styles.container}>
        <div className={styles.shineRight}>
          <Shine />
        </div>
        <div className={styles.content}>
          <motion.div
            initial={{ x: "-10%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.75 }}
            className={styles.info}
          >
            <div>
              <h1 className={styles.slogan}>
                The solution for all your office needs
              </h1>
            </div>
            <div>
              <p className={styles.text}>
                We provide the most affordable and reliable Dental and Medical
                Equipment Repair and Maintenance of all brands and health care
                products. <br />
                <Highlight>
                  Every day we do our best to be your partner.
                </Highlight>
              </p>
            </div>
            <div className={styles.cta}>
              <div className={styles.getStartedBtn}>
                <Button onClick={(e) => detectScroll(e, "products")}>
                  Get Started
                </Button>
              </div>
              <div className={styles.trustBtn}>
                <Button
                  type="outlined"
                  onClick={(e) => detectScroll(e, "about")}
                >
                  Trust Us
                </Button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: "10%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.3 }}
            className={styles.assets}
          >
            <div className={styles.assetsRow1}>
              <div className={styles.redCube}>
                <div className={styles.redCubeContent}>
                  <p>Your</p>
                  <p>Trusted</p>
                  <p>Partner</p>
                  {/* <p className={styles.assetText}>
                    Infinite Technical Solutions, <br /> guarantee
                  </p> */}
                </div>
              </div>
              <div className={styles.blueCube}>
                <div className={styles.blueCubeContent}>
                  <p className={styles.assetHeading}>1 year</p>
                  <p className={styles.assetText}>
                    Serving All Brand, <br /> <b>with excellence</b>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.assetsRow2}>
              <div className={styles.whiteCube}>
                <Image src={consultingRoom} alt="consulting-room" fill></Image>
              </div>
            </div>
          </motion.div>
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
