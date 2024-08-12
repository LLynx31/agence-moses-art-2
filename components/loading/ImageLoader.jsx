import React from 'react';
import styles from '@/styles/Loading/ImageLoading.module.css';

const ImageLoader = () => {
  return (
    <div className={styles.imageLoader}>
      <div className={styles.imageLoaderContent}></div>
    </div>
  );
};

export default ImageLoader;
