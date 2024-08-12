import React from 'react';
import styles from '@/styles/Loading/TextLoading.module.css';

const TextLoader = ({ lineCount = 3, width = '100%' }) => {
  return (
    <div className={styles.textLoader}>
      {[...Array(lineCount)].map((_, index) => (
        <div
          key={index}
          className={styles.textLoaderItem}
          style={{ width }} 
        ></div>
      ))}
    </div>
  );
};

export default TextLoader;
