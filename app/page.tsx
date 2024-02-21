import styles from "./page.module.css";
import HomePage from "./components/HomePage/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomePage />
    </main>
  );
}

// test signin page:

// import React from "react";
// import styles from "./page.module.css";
// import Page from "./components/api/page";

// const Home = () => {
//   return (
//     <main className={styles.main}>
//       <Page />
//     </main>
//   );
// };

// export default Home;
