import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

const Hero = () => {
    return (
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi, I'm Dhivya</h1>
          <p className={styles.description}>
          I'm a dedicated full-stack developer proficient in front-end and back-end technologies. Committed to delivering efficient, innovative solutions through continuous learning and adaptability.
          </p>
          <a href="https://drive.google.com/file/d/1wT-1KArXAv4lkB8N9u_N4HeBVSyViqp8/view?usp=sharing" download className={styles.contactBtn}>
            Download Resume
          </a>
        </div>
        <img
          src={getImageUrl("hero/heroImage.png")}
          alt="Hero image of me"
          className={styles.heroImg}
        />
      </section>
    );
  };
export default Hero