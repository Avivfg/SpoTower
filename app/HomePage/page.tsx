import React from "react";
import styles from "../styles/Home.module.scss";
import HomePageContent from "./HomePageContent";
import UpperMenu from "./UpperMenu";

const HomePage = () => {
  return (
    <>
      <div className={styles.upperMenu}>
        <UpperMenu></UpperMenu>
      </div>
      <div className={styles.content}>
        <HomePageContent />
      </div>
    </>
  );
};

export default HomePage;
