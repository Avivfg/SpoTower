import React from "react";
import HomePageImage from "./HomePageImage";

const HomePageContent = () => {
  // const HomePageContent = async () => {
  // const res = await fetch(images_url);
  // const homePageImages = await res.json();

  // fixed images list for now.
  // Later on "HomePageImage" will contain a component with a button and linkage.
  const homePageImages = [
    "starbucksHomeImage1",
    "starbucksHomeImage2",
    "starbucksHomeImage3",
  ];
  return (
    <ul>
      {homePageImages.map((hpImage, index) => (
        <HomePageImage key={index} imageName={hpImage} />
      ))}
    </ul>
  );
};

export default HomePageContent;
