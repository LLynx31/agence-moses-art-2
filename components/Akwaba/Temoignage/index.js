import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import styleTemoignage from "../../../styles/Akwaba/Temoignage.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { baseUrl } from "@/config/config";
import ImageLoader from "@/components/loading/ImageLoader";
import ReactMarkdown from "react-markdown";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function TemoignageClient({ text, name, groupe }) {
  const illustrationTemoignage = "assets/illustrationTemoignage.svg";
  return (
    <div className={styleTemoignage.layout_temoignage_client}>
      <Image
        loading="lazy"
        alt="trait orange penché"
        src={illustrationTemoignage}
        width={"50"}
        height={"50"}
      ></Image>

      <p className={styleTemoignage.text}>{text}</p>
      <div className={styleTemoignage.info_client}>
        <div className={styleTemoignage.name}>{name}</div>
        <div className={styleTemoignage.groupe}>{groupe}</div>
      </div>
    </div>
  );
}

function CarouselTemoignage() {
  const [isTemoignages, setTemoignage] = useState(null);

  useEffect(() => {
    getPresentationData();
  }, []);
  async function getPresentationData() {
    try {
      const response = await fetch(baseUrl + "/api/temoignages?populate=*");
      if (!response.ok) {
        const error = await response.json();
        throw error;
      }
      const responseParse = await response.json();
      //console.log(responseParse);
      setTemoignage(responseParse.data);
    } catch (error) {
      console.log(error);
    }
  }

  const settings = {
    className: "center",
    centerMode: true,
    speed: 3000,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    dots: false,
    centerPadding: "0px",
    infinite: true,
    autoplay: true,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return <div style={{padding:"50px", paddingBottom :'90px' }}>
          {isTemoignages ? <Slider {...settings}>{
            isTemoignages.map((temoignage) => 
              <TemoignageClient
                key={temoignage.id}
                text={temoignage.attributes.Message}
                name={temoignage.attributes.Nom_Prenoms}
                groupe={temoignage.attributes.Entreprise}
              ></TemoignageClient>)}</Slider>: 
            <div className={styleTemoignage.layout_temoignage_loader}>
              <ImageLoader></ImageLoader>
            </div>}
        </div>

  
}

function Description() {
  const illustration1 = "/assets/Image_Akwaba/temoignage.jpg";
  const illustration2 = "/assets/Rectangle115.svg";
  const illustration3 = "/assets/Rectangle116.svg";
  const illustration4 = "/assets/Calque4.svg";
  const animSec = {
    hidden: {
      opacity: 0,
      y: 200,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const animTitre = {
    hidden: {
      opacity: 0,
      x: 50,
    },

    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const animP = {
    hidden: {
      opacity: 0,
      x: -50,
    },

    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const animBtn = {
    hidden: {
      opacity: 0,
      y: 100,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },

    onHover: {
      scale: 1.1,
      cursor: "pointer",
      transition: {
        duration: 0.3,
      },
    },
  };

  const animIllustration = {
    whileInView: {
      x: [0, 10, 0, -10, 0],
      y: [0, 10, 0, -10, 0],
      opacity: [8, 9, 10],
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 8,
      },
    },

    hidden: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      variants={animSec}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
      className={styleTemoignage.layout_description}
    >
      <div style={{paddingTop:'60px'}} className={styleTemoignage.layout_left}>
        <motion.h1
          variants={animTitre}
          className={styleTemoignage.description_title}
        >
          Rejoignez La Meilleur Agence <br></br>360 Pour Une Expérience{" "}
          <br></br>100% Créative
        </motion.h1>

        <motion.p variants={animP}>
          Si vous êtes à la recherche d’une agence de communication 360 qui peut
          vous aider à atteindre vos objectifs commerciaux contactez-nous dès
          aujourd’hui !
        </motion.p>

        <motion.button
          variants={animBtn}
          whileHover="onHover"
          onClick={() => (document.location.href = "/contact")}
        >
          Rapprochez vous
        </motion.button>
      </div>
      <div style={{paddingTop:'60px'}} className={styleTemoignage.layout_right}>
        <Image
          loading="lazy"
          alt="illustration"
          src={illustration1}
          className={styleTemoignage.illustration_1}
          width={400}
          height={449}
        ></Image>
        <Image
          loading="lazy"
          alt="illustration"
          src={illustration2}
          className={styleTemoignage.illustration_2}
          width={400}
          height={400}
        ></Image>
        <Image
          loading="lazy"
          alt="illustration"
          src={illustration3}
          className={styleTemoignage.illustration_3}
          width={300}
          height={300}
        ></Image>
      </div>
      <motion.img
        loading="lazy"
        src={illustration4}
        variants={animIllustration}
        whileInView="whileInView"
        alt="illustration"
        className={styleTemoignage.illustration_4}
        width={60}
        height={60}
      ></motion.img>
      <motion.img
        loading="lazy"
        src={illustration4}
        variants={animIllustration}
        whileInView="whileInView"
        alt="illustration"
        className={styleTemoignage.illustration_5}
        width={60}
        height={60}
      ></motion.img>
    </motion.div>
  );
}

export default function Temoignage() {
  const illustration = "/assets/Calque8.svg";

  const animIllustration = {
    whileInView: {
      x: [0, 10, 0, -10, 0],
      y: [0, 10, 0, -10, 0],
      opacity: [8, 9, 10],
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 8,
      },
    },

    hidden: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <div className={styleTemoignage.section}>
        <motion.img
          loading="lazy"
          variants={animIllustration}
          initial="hidden"
          whileInView="whileInView"
          alt="illustration"
          className={styleTemoignage.illustration}
          src={illustration}
          width={100}
          height={100}
        ></motion.img>
        <motion.img
          loading="lazy"
          variants={animIllustration}
          initial="hidden"
          whileInView="whileInView"
          alt="illustration"
          className={styleTemoignage.illustration2}
          src={illustration}
          width={100}
          height={100}
        ></motion.img>
        <div style={{fontSize : '23px'}} className={styleTemoignage.introduction}>Nos Partenaires</div>
        <h1 className={styleTemoignage.titre_section}  style={{
          fontFamily: "AsgardTrial, Montserrat",
          textAlign: "center",
          marginTop: "",
          fontSize: "40px",
        }}>
          Ce Qu’ils Pensent <br></br> De Nous
        </h1>
      </div>
      <div className={styleTemoignage.layout_temoignage} style={{paddingBottom : '80px'}}>
        <h1 className={styleTemoignage.temoignage_title}>
          <span className={styleTemoignage.span}>Témoignages</span>
          <br></br>de nos clients
        </h1>
        <CarouselTemoignage></CarouselTemoignage>
      </div>

      <Description></Description>
    </motion.div>
  );
}
