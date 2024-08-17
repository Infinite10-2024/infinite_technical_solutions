import Highlight from "@/app/components/Highlight";
import Section from "@/app/components/Section";
import styles from "./health.module.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import { detectScroll } from "@/app/utils/scroll";

const Health = () => {
  return (
    <Section
      id="health"
      title={
        <h2>
          Our <Highlight color="secondary">culture</Highlight>
        </h2>
      }
    >
      <div className={styles.container}>
        <motion.div
          initial={{ x: "-10%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.5 }}
          className={styles.info}
        >
          <h3 className={styles.title}>
            We work in the health care industry,{" "}
            <Highlight color="secondary">just like you</Highlight>.
          </h3>
          <div className={styles.description}>
            <p>
              We’re focused on providing <b>win-to-win solutions</b> for our
              clients, partners, and employees. That is why we make it a
              priority to invest in training our Service Technicians, to ensure
              they have the necessary knowledge, from clinical to business
              practices, to provide the best possible solution for all of our
              customers.
            </p>
            <p>{`Every day at Infinite Technical Solutions, we're striving to improve
            efficiencies, advance technologies, and reduce overhead costs, which
            translates into an exceptional customer experience.`}</p>
          </div>
          <div className={styles.feats}>
            <p
              className={styles.feat}
              onClick={(e) => detectScroll(e, "products")}
            >
              Health care products
            </p>
            <p
              className={styles.feat}
              onClick={(e) => detectScroll(e, "products")}
            >
              Medical Equipment
            </p>
            <p
              className={styles.feat}
              onClick={(e) => detectScroll(e, "products")}
            >
              Technical service
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "5%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.5 }}
          className={styles.illustration}
        >
          <DotLottieReact
            src="/assets/lottie/health/health-animation.json"
            loop
            autoplay
          />
        </motion.div>
      </div>
    </Section>
  );
};

export default Health;
