import Image from "next/image";
import React from "react";
import styles from "./../styles/UpperMenu.module.scss";
import Link from "next/link";

interface Props {
  showIcon: boolean;
  showRest: boolean;
}

const UpperMenu = ({ showIcon, showRest }: Props) => {
  return (
    <>
      <div className={styles.container}>
        {showIcon && (
          <Image
            className={styles.image}
            src={"/logo.png"}
            alt={"logo"}
            layout="responsive"
            width={0}
            height={0}
            priority
          />
        )}
        {showRest && (
          <div>
            <h1 className={styles.leftItem}>MENU</h1>
            <h1 className={styles.leftItem}>REWARDS</h1>
            <h1 className={styles.leftItem}>GIFT CARDS</h1>

            <Link className={styles.joinNowButton} href="">
              join now
            </Link>
            <Link className={styles.signInButton} href="/api">
              Sign in
            </Link>
            <h1 className={styles.rightItem}>Find a store</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default UpperMenu;
