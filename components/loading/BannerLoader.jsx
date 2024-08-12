import React from 'react';
import styles from '@/styles/Loading/BannerLoading.module.css';

const BannerLoader = () => {
  return (
    <div className={styles.bannerLoader}>
      <div className={styles.bannerLoaderContent}></div>
    </div>
  );
};

export default BannerLoader;
