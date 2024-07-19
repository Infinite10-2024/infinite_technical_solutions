import Highlight from "@/app/components/Highlight";
import Section from "@/app/components/Section";
import styles from "./health.module.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Health = () => {
  return (
    <Section
      title={
        <h2>
          Our <Highlight color="secondary">value offer</Highlight>
        </h2>
      }
    >
      <div className={styles.container}>
        <div className={styles.info}>
          <h3 className={styles.title}>
            We work in the health care industry,{" "}
            <Highlight color="secondary">just like you</Highlight>.
          </h3>
          <p className={styles.description}>
            We’re focused on providing <b>win-to-win solutions</b> for our
            clients, partners, and employees. That is why, our top priority is
            investing in training for our Service Technicians, to ensure they
            have the necessary knowledge on everything from clinical to business
            practices.
          </p>
          <div className={styles.feats}>
            <p className={styles.feat}>Health care products</p>
            <p className={styles.feat}>Medical Equipment</p>
            <p className={styles.feat}>Technical service</p>
          </div>
        </div>
        <div className={styles.illustration}>
          <DotLottieReact
            src="assets/lottie/health/health-animation.json"
            loop
            autoplay
          />
          {/* <Image src={illustration} alt="illustration" /> */}
        </div>
      </div>
    </Section>
  );
};

export default Health;
