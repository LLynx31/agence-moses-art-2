import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

import { motion } from "framer-motion"

function Profil({children}){
    return(
        <div className="layout-profil">
            {children}
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
            <Profil>1</Profil>
        </SwiperSlide>
        <SwiperSlide>
            <Profil>2</Profil>
        </SwiperSlide>
        <SwiperSlide>
            <Profil>3</Profil>
        </SwiperSlide>
        <SwiperSlide>
            <Profil>4</Profil> 
        </SwiperSlide>
        <SwiperSlide>
            <Profil>5</Profil>        
        </SwiperSlide>
        <SwiperSlide>
            <Profil>6</Profil>       
        </SwiperSlide>
        <SwiperSlide>
            <Profil>7</Profil>        
        </SwiperSlide>
        <SwiperSlide>
            <Profil>8</Profil>        
        </SwiperSlide>
        <SwiperSlide>
            <Profil>9</Profil>        
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