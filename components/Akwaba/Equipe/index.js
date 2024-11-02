import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { baseUrl } from "@/config/config";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import { motion } from "framer-motion";
import ImageLoader from "@/components/loading/ImageLoader";
import { useMediaQuery } from 'react-responsive';

function Profil({ imgSrc, alt, loading }) {
  return (
    <div className="layout-profil">
      <Image
        loading="lazy"
        src={baseUrl + imgSrc}
        alt={alt}
        width={400}
        height={500}
      ></Image>
    </div>
  );
}

function CarouselEquipe() {
  const [isEquipes, setEquipes] = useState(null);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    try {
      const response = await fetch(baseUrl + "/api/equipes?populate=*");
      if (!response.ok) {
        const error = await response.json();
        throw error;
      }
      const responseParse = await response.json();
      setEquipes(responseParse.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={isMobile ? 1 : "auto"}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      autoplay={{
        delay: isMobile ? 4000 : 2000,
        disableOnInteraction: true,
      }}
      speed={800}
      transitionEffect="fade"
      pagination={{ el: ".swiper-pagination", clickable: true }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
      className="swiper_container"
      onInit={(swiper) => {
        if (isMobile) {
          swiper.autoplay.start();
        }
      }}
    >
      {isEquipes ? (
        isEquipes.map((equipe) => (
          <SwiperSlide key={equipe.id}>
            <Profil
              imgSrc={equipe.attributes.Personnel.data.attributes.url}
              alt={equipe.attributes.Personnel.data.attributes.name}
              loading="lazy"
            ></Profil>
          </SwiperSlide>
        ))
      ) : (
        <SwiperSlide>
          <ImageLoader></ImageLoader>
        </SwiperSlide>
      )}

      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  );
}

export default function Equipe() {
  const calque6 = "/assets/Calque6.svg";
  return (
    <div className="layout-equipe">
      <motion.img
        className="illustration"
        width={60}
        src={calque6}
        alt="illustration"
        whileInView={{ rotate: 360, x: [0, -100, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        style={{ position: "absolute", top: -40, right: 200 }}
      ></motion.img>
      <motion.img
        className="illustration"
        width={60}
        src={calque6}
        alt="illustration"
        whileInView={{ rotate: 360, x: [0, 100, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        style={{ position: "absolute", top: -40, left: 200 }}
      ></motion.img>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        className="introduction"
        style={{fontSize : '23px', paddingBottom : '10px'}}
      >
        Rencontrez nos experts
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        className="equipe-title"
      >
        Notre team
      </motion.h1>
      <CarouselEquipe></CarouselEquipe>
      <motion.img
        className="illustration"
        width={60}
        src={calque6}
        alt="illustration"
        whileInView={{ rotate: 360, x: [0, -100, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        style={{ position: "absolute", bottom: 0, right: 200 }}
      ></motion.img>
      <motion.img
        className="illustration"
        width={60}
        src={calque6}
        alt="illustration"
        whileInView={{ rotate: 360, x: [0, 100, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        style={{ position: "absolute", bottom: 0, left: 200 }}
      ></motion.img>
    </div>
  );
}
