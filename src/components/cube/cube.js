import React from 'react';
import styles from './cube.module.scss';

const Cube = ({ isAutoPlay, direction, cubeInfo }) => {
  const rotate = {
    transform: `rotateY(${direction['x']}deg) rotateX(${direction['y']}deg)`
  };

  const background = url => {
    return url ? { background: `url(${url})` } : {};
  };

  return (
    <>
      <div className={`${styles.scene} ${isAutoPlay ? 'auto-play' : ''}`}>
        <div className={styles.cube} style={rotate}>
          <div
            className={styles.front}
            style={background(cubeInfo.front.background)}
          >
            {cubeInfo.front.background ? '' : cubeInfo.front.text}
          </div>
          <div
            className={styles.back}
            style={background(cubeInfo.back.background)}
          >
            {cubeInfo.back.background ? '' : cubeInfo.back.text}
          </div>
          <div
            className={styles.top}
            style={background(cubeInfo.top.background)}
          >
            {cubeInfo.top.background ? '' : cubeInfo.top.text}
          </div>
          <div
            className={styles.bottom}
            style={background(cubeInfo.bottom.background)}
          >
            {cubeInfo.bottom.background ? '' : cubeInfo.bottom.text}
          </div>
          <div
            className={styles.left}
            style={background(cubeInfo.left.background)}
          >
            {cubeInfo.left.background ? '' : cubeInfo.left.text}
          </div>
          <div
            className={styles.right}
            style={background(cubeInfo.right.background)}
          >
            {cubeInfo.right.background ? '' : cubeInfo.right.text}
          </div>
        </div>
      </div>
      <div className={styles.shadow} />
    </>
  );
};

export default Cube;
