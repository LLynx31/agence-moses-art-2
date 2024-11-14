import style from "@/styles/Actualite.module.css";
import { useEffect, useState, useRef } from "react";
import { baseUrl } from "@/config/config";
import "react-responsive-carousel/lib/styles/carousel.css";
import { register } from "swiper/element/bundle";
import { motion } from "framer-motion";
import ImageLoader from "@/components/loading/ImageLoader";

register();

function Actualité({ img, imgAlt, children }) {
  return (
    <div className={style.actualite}>
      <div className={style.divImg}>
        <img src={baseUrl + img} alt={imgAlt}></img>
      </div>

      <div
        style={{
          color: "black",
          width: 300,
          margin: "auto",
          fontFamily:'Montserrat',
          
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default function SectionActualite() {
  const [isActualites, setActualites] = useState(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    Object.assign(swiperRef.current, {
      speed: 500,
      cssMode: true,
      pagination: {
        clickable: true,
      },
      freeMode:{
        enable: true
      },
      navigation: true,
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
    });

    return swiperRef.current.initialize();
  });

  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    try {
      const response = await fetch(baseUrl + "/api/actualites?populate=*");
      if (!response.ok) {
        const error = await response.json();
        throw error;
      }
      const responseParse = await response.json();
      //console.log(responseParse);
      setActualites(responseParse.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        className={style.section_titre}
        style={{
          fontFamily: "AsgardTrial,Montserrat",
          textAlign: "center",
          marginTop: "60px",
          fontSize: "40px",
        }}
      >
        Nos <span>Actualités</span>
      </motion.h1>

      <div className={style.section}>
        <div style={{ marginLeft: 10, marginRight: 10 }}>
          <swiper-container init="false" free-mode="true" infinit-loop="true" ref={swiperRef}>
            {isActualites ? (
              isActualites.map((actualite) => (
                <swiper-slide key={actualite.id}>
                  <Actualité
                    imgAlt={
                      actualite.attributes.Image_Actualite.data.attributes.name
                    }
                    img={
                      actualite.attributes.Image_Actualite.data.attributes.url
                    }
                  >
                    {actualite.attributes.Description_Actualite}
                  </Actualité>
                </swiper-slide>
              ))
            ) : (
              <>
                <swiper-slide>
                  <ImageLoader></ImageLoader>
                </swiper-slide>
                <swiper-slide>
                  <ImageLoader></ImageLoader>
                </swiper-slide>
                <swiper-slide>
                  <ImageLoader></ImageLoader>
                </swiper-slide>
              </>
            )}
          </swiper-container>
        </div>
      </div>
    </>
  );
}
