import React from 'react';
import styles from './arrow-btn.module.scss';

const ArrowButton = ({ panelClass, className, callback }) => {
  const onBtnClick = e => {
    callback(e);
  };
  return (
    <>
      <div
        className={`${styles.arrowBtn} ${styles[panelClass]} ${className}`}
        onClick={e => onBtnClick(e)}
      />
    </>
  );
};

export { ArrowBtn };
export default ArrowButton;
