import React from "react";

import styles from "./About.module.scss";
import myPhoto from "../../assets/images/steve.png";

const About = () => {
  return (
    <div className={styles.about}>
      <h1 className={styles.titleName}>Vasya Pupkin</h1>
      <p className={styles.subTitleName}>Блог фронтенд-разработчика</p>
      <img src={myPhoto} alt="myPhoto" />
      <h5 className={styles.descriptionTitle}>Обо мне</h5>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        scelerisque diam arcu risus. Imperdiet dolor, porttitor pellentesque
        fringilla aliquet sit. Turpis arcu vitae quis nunc suscipit. Mattis
        scelerisque leo curabitur faucibus. Nec, sed porta ac enim. Mattis quam
        accumsan ipsum commodo sed purus mi. Platea sit lectus neque, nulla
        sapien vitae nulla. Nisl viverra viverra quis mattis tincidunt laoreet
        amet, laoreet proin. Duis mi, aliquam tincidunt amet phasellus malesuada
        non nisi.
      </p>
    </div>
  );
};

export default About;
