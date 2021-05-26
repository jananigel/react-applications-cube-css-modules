import React from 'react';
import styles from './cube.module.scss';

const Cube = ({ isAutoPlay, direction }) => {
  const rotate = {
    transform: `rotateY(${direction['x']}deg) rotateX(${direction['y']}deg)`
  };
  return (
    <>
      <div className={`${styles.scene} ${isAutoPlay ? 'auto-play' : ''}`}>
        <div className={styles.cube} style={rotate}>
          <div className={styles.front}>Front</div>
          <div className={styles.back}>Back</div>
          <div className={styles.top}>Top</div>
          <div className={styles.bottom}>Bottom</div>
          <div className={styles.left}>Left</div>
          <div className={styles.right}>Right</div>
        </div>
      </div>
      <div className={styles.shadow} />
    </>
  );
};

export default Cube;
