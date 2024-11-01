import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { baseUrl } from "@/config/config";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import ImageLoader from "@/components/loading/ImageLoader";
import { useMediaQuery } from 'react-responsive';

function Profil({ imgSrc, alt, loading }) {
  return (
    <div style={{width:'100%'}}>
      <img
        style={{width:'100%'}}
        loading="lazy"
        src={baseUrl + imgSrc}
        alt={alt}
      ></img>
    </div>
  );
}

function CarouselEquipe() {
  const [isEquipes, setEquipes] = useState(null);

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

  const settings = {
    className: "center",
    centerMode: true,
    speed: 500,
    slidesToShow: 3,
    dots: true,
    centerPadding: "0px",
    infinite: true,
    autoplay: true,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };


  return <div style={{padding:"50px"}}>
    <Slider {...settings}> {isEquipes && isEquipes.map((equipe) => (
      <Profil
        key={equipe.id}
        imgSrc={equipe.attributes.Personnel.data.attributes.url}
        alt={equipe.attributes.Personnel.data.attributes.name}
        loading="lazy"
      ></Profil>
  ))} </Slider>
  </div>
      
       
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
