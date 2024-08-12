import React, { useState } from 'react';
import styles from '@/styles/Carrousel.module.css';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.carousel}>
      <button onClick={prevSlide} className={styles.arrowLeft}>
        &#10094;
      </button>
      <div className={styles.carouselContainer}>
        {items.map((item, index) => {
          let position = styles.item;
          if (index === currentIndex) {
            position = `${styles.item} ${styles.itemActive}`;
          } else if (
            index === currentIndex - 1 ||
            (currentIndex === 0 && index === items.length - 1)
          ) {
            position = `${styles.item} ${styles.itemLeft}`;
          } else if (
            index === currentIndex + 1 ||
            (currentIndex === items.length - 1 && index === 0)
          ) {
            position = `${styles.item} ${styles.itemRight}`;
          }
          return (
            <div key={index} className={position}>
              {item}
            </div>
          );
        })}
      </div>
      <button onClick={nextSlide} className={styles.arrowRight}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
