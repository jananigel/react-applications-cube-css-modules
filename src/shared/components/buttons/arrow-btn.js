import React from "react";
import styles from "./arrow-btn.module.scss";

const ArrowButton = ({ panelClass, className }) => {
  return (
    <>
      <div
        className={`${styles.arrowBtn} ${styles[panelClass]} ${className}`}
      />
    </>
  );
};

export { ArrowBtn };
export default ArrowButton;
