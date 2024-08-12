import React from 'react';
import styles from '@/styles/Loading/CarrouselLoading.module.css';

const CarouselLoader = () => {
  return (
    <div className={styles.carouselLoader}>
      {[1, 2, 3].map((item) => (
        <div key={item} className={styles.carouselItem}>
          <div className={styles.carouselImage}></div>
          <div className={styles.carouselText}></div>
        </div>
      ))}
    </div>
  );
};

export default CarouselLoader;
