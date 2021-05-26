import React, { useState, useEffect } from 'react';
import ArrowButton from '../shared/components/buttons/arrow-btn.js';
import styles from './application-cube.module.scss';
import Cube from './cube/cube.js';

const ApplicationCube = () => {
  let timer;
  const [variables, setVariables] = useState({
    isIdle: false
  });

  const runTime = () => {
    timer = setTimeout(() => {
      console.log('idle 3 seconds');
      setVariables({
        isIdle: true
      });
      clearTimeout(timer);
    }, 3000);
  };

  const idleHandle = () => {
    runTime();
  };

  const clearIdle = () => {
    clearTimeout(timer);
    setVariables({
      isIdle: false
    });

    runTime();
  };

  useEffect(() => {
    // idleHandle();
    // document.addEventListener('mousemove', clearIdle);
    // document.addEventListener('click', clearIdle);
    // return () => {
    //   document.removeEventListener('click', clearIdle);
    //   document.removeEventListener('mousemove', clearIdle);
    // };
  });

  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.content}`}>
          <Cube isAutoPlay={variables.isIdle} />
          <ArrowButton className={`${styles.top}`} panelClass={'top'} />
          <ArrowButton className={`${styles.bottom}`} panelClass={'bottom'} />
          <ArrowButton className={`${styles.left}`} panelClass={'left'} />
          <ArrowButton className={`${styles.right}`} panelClass={'right'} />
        </div>
      </div>
    </>
  );
};

export default ApplicationCube;
