import React from 'react';
import styles from './LoadingScreen.module.css'; 

const LoadingScreen = () => {
  return (
    <div className={`select-none ${styles.loader}`} ><span>Loading...</span></div>
  );
};

export default LoadingScreen;
