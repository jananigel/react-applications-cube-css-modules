import React, { setState, useState, useEffect } from "react";
import ArrowButton from "../shared/components/buttons/arrow-btn.js";
import styles from "./application-cube.module.scss";
import Cube from "./cube/cube.js";

// let timer;
// let isIdle = false;

// const runTime = () => {
//   timer = setTimeout(() => {
//     console.log("idle 3 seconds");
//     clearTimeout(timer);
//     isIdle = true;
//   }, 3000);
// };

// const idleHandle = () => {
//   runTime();
//   document.addEventListener("mousemove", _ => {
//     console.log("move");
//     isIdle = false;
//     clearTimeout(timer);
//     timer = null;
//     runTime();
//   });

//   document.addEventListener("click", _ => {
//     clearTimeout(timer);
//     isIdle = false;
//     timer = null;
//     runTime();
//   });
// };
document.addEventListener("mousemove", _ => {
  console.log("move");
  // clearTimeout(timer);
  // // setVariables({
  // //   isIdle: false
  // // });

  // runTime();
});

document.addEventListener("click", _ => {
  // clearTimeout(timer);
  // setVariables({
  //   isIdle: false
  // });
  // runTime();
});

const ApplicationCube = () => {
  let timer;
  const [variables, setVariables] = useState({
    isIdle: false
  });

  const runTime = () => {
    // timer = setTimeout(() => {
    //   console.log("idle 3 seconds");
    //   setVariables({
    //     isIdle: true
    //   });
    //   clearTimeout(timer);
    // }, 3000);
  };

  const idleHandle = () => {
    runTime();
  };

  useEffect(() => {
    // idleHandle();
  });

  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.content}`}>
          <Cube isAutoPlay={variables.isIdle} />
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
