import React, { useState, useEffect } from 'react';
import ArrowButton from '../../shared/components/buttons/arrow/arrow-btn.js';
import styles from './application-cube.module.scss';
import Cube from '../../components/cube/cube.js';
import CubeConfig from '../../shared/configs/cube.config.js';

const DEFAULT_X = -15;
const ROTATE_VALUE = 90;

const ApplicationCube = () => {
  let timer;
  let cubeConfig = new CubeConfig();
  const [variables, setVariables] = useState({
    isIdle: false,
    axis: {
      y: 0,
      x: DEFAULT_X
    }
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

  const onArrowClick = (axis, direction) => {
    if (axis === 'y') {
      // TODO: the number shall be reset when > 360
      setVariables({
        axis: {
          y: variables.axis.y + direction * ROTATE_VALUE,
          x: variables.axis.x
        }
      });
    } else {
      setVariables({
        axis: {
          x: variables.axis.x + direction * ROTATE_VALUE,
          y: variables.axis.y
        }
      });
    }
  };

  useEffect(() => {
    // TODO: auto rotate when the web idle.
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
          <Cube isAutoPlay={variables.isIdle} direction={variables['axis']} cubeInfo={cubeConfig}/>
          <ArrowButton
            className={`${styles.top}`}
            panelClass={'top'}
            callback={e => onArrowClick('y', 1)}
          />
          <ArrowButton
            className={`${styles.bottom}`}
            panelClass={'bottom'}
            callback={e => onArrowClick('y', -1)}
          />
          <ArrowButton
            className={`${styles.left}`}
            panelClass={'left'}
            callback={e => onArrowClick('x', 1)}
          />
          <ArrowButton
            className={`${styles.right}`}
            panelClass={'right'}
            callback={e => onArrowClick('x', -1)}
          />
        </div>
      </div>
    </>
  );
};

export default ApplicationCube;
