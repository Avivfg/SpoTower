import React from "react";
import styles from "../styles/Home.module.scss";
import HomePageContent from "./HomePageContent";
import UpperMenu from "../components/UpperMenu";

const HomePage = () => {
  return (
    <>
      <div className={styles.upperMenu}>
        <UpperMenu showIcon={true} showRest={true}></UpperMenu>
      </div>
      <div className={styles.content}>
        <HomePageContent />
      </div>
    </>
  );
};

export default HomePage;
