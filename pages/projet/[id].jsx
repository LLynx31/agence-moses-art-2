import Header from "@/components/Header";
import Footer from "@/components/Footer";
import style from "@/styles/projet.module.css";
import { register } from "swiper/element/bundle";
import { useRouter } from "next/router";
import styleBanner from "@/styles/Marketing.module.css";

register();

import ProgressBar from "@/components/ProgressBar";
import { Fade } from "react-awesome-reveal";
import { useEffect, useRef, useState } from "react";
import { baseUrl } from "@/config/config";
import BannerLoader from "@/components/loading/BannerLoader";
import TextLoader from "@/components/loading/TextLoader";
import CarouselLoader from "@/components/loading/CarrouselLoader";

export default function page() {
  const router = useRouter();
  const [isProjet, setProjet] = useState(null);
  const [isIdProjet, setIdProjet] = useState(null);

  useEffect(() => {
    if (router.query.id) {
      setIdProjet(router.query.id);
    }
  }, [router.query.id]);

  useEffect(() => {
    if (isIdProjet) {
      getData();
    }
  }, [isIdProjet]);

  async function getData() {
    console.log(isIdProjet);
    try {
      const response = await fetch(
        baseUrl + `/api/projets/${isIdProjet}?populate=*`
      );
      if (!response.ok) {
        const error = await response.json();
        throw error;
      }
      const responseParse = await response.json();
      console.log(responseParse);
      setProjet(responseParse);
    } catch (error) {
      console.log(error);
    }
  }

  const swiperRef = useRef(null);

  useEffect(() => {
    Object.assign(swiperRef.current, {
      speed: 500,
      cssMode: true,
      pagination: {
        clickable: true,
      },
      freeMode: {
        enable: true,
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
  return (
    <>
      <Header headerColor="black" projet scroll={"black"}></Header>
      <ProgressBar></ProgressBar>
      <Fade triggerOnce>
        {isProjet ? (
          <div
            style={{
              backgroundImage: `url(${
                baseUrl +
                isProjet.data.attributes.Banniere_Projet.data?.attributes.url
              })`,
            }}
            className={styleBanner.layoutBaner}
          ></div>
        ) : (
          <BannerLoader></BannerLoader>
        )}
      </Fade>

      <div className={style.layoutDetailProjet}>
        <h1 className={style.titleDetailProjet}>Le client</h1>
        <hr></hr>
        {isProjet ? (
          <p className={style.paragraphDetailProjet}>
            {isProjet.data.attributes.Description_Client}
          </p>
        ) : (
          <TextLoader lineCount={5}></TextLoader>
        )}
      </div>

      <div className={style.layoutDetailProjet}>
        <h1 className={style.titleDetailProjet}>Le projet</h1>
        <hr></hr>
        {isProjet ? (
          <p className={style.paragraphDetailProjet}>
            {isProjet.data.attributes.Description_Projet}
          </p>
        ) : (
          <TextLoader lineCount={5}></TextLoader>
        )}
      </div>
      <div style={{ marginLeft: 30, marginRight: 30 }}>
        <swiper-container
          init="false"
          free-mode="true"
          infinit-loop="true"
          ref={swiperRef}
        >
          {isProjet
            ? isProjet.data.attributes.Images_Projet.data.map((image) => (
                <swiper-slide key={`${image.attributes.url.name}`}>
                  <img
                    style={{ width: "100%" }}
                    loading="lazy"
                    src={baseUrl + image.attributes.url}
                  ></img>
                </swiper-slide>
              ))
            : <div style={{display:"flex",width:"100%", alignItems:"center", justifyContent:"center"}}><CarouselLoader></CarouselLoader></div>}
        </swiper-container>
      </div>

      <div className={style.layoutCommentaireClient}>
        
      </div>

      <div className={style.layoutContact}>
        <div
          className={style.layoutContactBloc}
          style={{ backgroundColor: "#11868A", color: "white" }}
        >
          <div>j'ai un projet également</div>
          <button
            onClick={() => router.push("/contact#formContact")}
            style={{ color: "black", backgroundColor: "#EDEDED" }}
          >
            soumettre
          </button>
        </div>
        <div
          className={style.layoutContactBloc}
          style={{ backgroundColor: "#EDEDED", color: "black" }}
        >
          <div>voir d'autres projets</div>
          <button
            onClick={() => router.push("/projets")}
            style={{ color: "white", backgroundColor: "#11868A" }}
          >
            voir +
          </button>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
