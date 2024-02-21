import React from "react";
import Image from "next/image";
import styles from "../styles/HomePageImage.module.scss";

interface Props {
  imageName: string;
}

const HomePageImage = ({ imageName }: Props) => {
  return (
    <div>
      <Image
        className={styles.image}
        src={`/${imageName}.png`} // "/starbucksHomeImage1.png"
        alt={imageName} // "starbucksHomeImage1"
        layout="responsive"
        width={0}
        height={0}
        priority
      />
    </div>
  );
};

export default HomePageImage;
