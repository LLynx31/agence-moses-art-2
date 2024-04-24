import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

import { motion } from "framer-motion"

function Profil({imgSrc, alt}){
    return(
        <div className="layout-profil">
            <Image loading='lazy' src={imgSrc} alt={alt} width={400} height={500}></Image>
        </div>
    )
}

function CarouselEquipe(){
    return (
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}

        
        autoplay= {{
            delay: 2000,
        }}

        speed={1500}
        pagination={{ el: '.swiper-pagination', clickable: false }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
      >
        <SwiperSlide>
            <Profil imgSrc={'/assets/Image_Equipe/Moise_yapo.jpg'} alt="Moise Yapo"></Profil>
        </SwiperSlide>
        <SwiperSlide>
            <Profil imgSrc={'/assets/Image_Equipe/yves_pascal_niamba.jpg'} alt="Yves Pascal Niamba"></Profil>
        </SwiperSlide>
        <SwiperSlide >
            <Profil imgSrc={'/assets/Image_Equipe/Abibata_Camara.jpg'} alt="Abibata_Camara"></Profil>
        </SwiperSlide>
        <SwiperSlide>
            <Profil imgSrc={'/assets/Image_Equipe/christian_sagoe.jpg'} alt="Christian Sagoe"></Profil> 
        </SwiperSlide>
        <SwiperSlide>
            <Profil imgSrc={'/assets/Image_Equipe/clarisse_molou.jpg'} alt="clarisse molou"></Profil>        
        </SwiperSlide>
        <SwiperSlide>
            <Profil imgSrc={'/assets/Image_Equipe/fatima_kone.jpg'} alt="Fatima Kone"></Profil>       
        </SwiperSlide>
        <SwiperSlide>
            <Profil imgSrc={"/assets/Image_Equipe/lionnel_n'da.jpg"} alt="Lionnel N'da"></Profil>        
        </SwiperSlide>
        <SwiperSlide>
            <Profil imgSrc={'/assets/Image_Equipe/pacome_brou.jpg'} alt="Pacome Brou"></Profil>        
        </SwiperSlide>
        <SwiperSlide >
            <Profil imgSrc={'/assets/Image_Equipe/URIELLE_KOUAKOU.jpg'} alt="URIELLE KOUAKOU"></Profil>        
        </SwiperSlide>

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
    )
}

export default function Equipe() {
    const calque6 = '/assets/Calque6.svg'
    return (
        <div className="layout-equipe">
            <motion.img className='illustration' width={60} src={calque6} alt='illustration' whileInView={{ rotate: 360, x: [0, -100, 0] }} transition={{ duration: 20, repeat: Infinity }} style={{ position: "absolute", top: -40, right: 200 }}></motion.img>
            <motion.img className='illustration'width={60} src={calque6} alt='illustration' whileInView={{rotate:360, x:[0,100,0]}} transition={{duration: 20, repeat:Infinity}} style={{position: "absolute", top: -40, left: 200}}></motion.img>
            <div className="introduction">Rencontrez nos experts</div>
           <h1 className="equipe-title">Notre team</h1> 
            <CarouselEquipe></CarouselEquipe>
            <motion.img className='illustration'width={60} src={calque6} alt='illustration' whileInView={{ rotate: 360, x: [0, -100, 0] }} transition={{ duration: 20, repeat: Infinity }} style={{ position: "absolute", bottom: 0, right: 200 }}></motion.img>
            <motion.img className='illustration'width={60} src={calque6} alt='illustration' whileInView={{rotate:360, x:[0,100,0]}} transition={{duration: 20, repeat:Infinity}} style={{position: "absolute", bottom: 0, left: 200}}></motion.img>
        </div>
    )
}