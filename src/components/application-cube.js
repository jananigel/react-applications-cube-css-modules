import React from "react";
import ArrowButton from "../shared/components/buttons/arrow-btn.js";
import styles from "./application-cube.module.scss";
import Cube from "./cube/cube.js";

const ApplicationCube = () => {
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.content}`}>
          <Cube />
          <ArrowButton className={`${styles.top}`} panelClass={"top"} />
          <ArrowButton className={`${styles.bottom}`} panelClass={"bottom"} />
          <ArrowButton className={`${styles.left}`} panelClass={"left"} />
          <ArrowButton className={`${styles.right}`} panelClass={"right"} />
        </div>
      </div>
    </>
  );
};

export default ApplicationCube;
