import Header from "../components/Header";
import stylePresentation from "../styles/Presentation/Presentation.module.css";
import Footer from "../components/Footer";
import Service from "../components/Service";
import Head from "next/head";
import Image from "next/image";
import ContactezNous from "../components/Akwaba/ContactezNous";
import { motion } from "framer-motion";
import Equipe from "../components/Akwaba/Equipe";
import { useRef, useState, useEffect } from "react";
import { baseUrl } from "@/config/config";
import TextLoader from "@/components/loading/TextLoader";
import ImageLoader from "@/components/loading/ImageLoader";
import BannerLoader from "@/components/loading/BannerLoader";
import SectionQuiSommesNous from "@/components/QuisommeNous";

function SectionDescription() {
  const illustrationDescriptionOrange =
    "assets/illustrationDescriptionOrange.svg";
  const illustrationDescriptionVert = "assets/illustrationDescriptionVert.svg";
  const subtract = "/assets/Subtract.svg";
  const illustrationRole =
    "/assets/Image_Presentation/Nous_creons_concevons.jpg";

  const polygon = "/assets/Polygon3.svg";
  //const subtractVert = '/assets/Subtract.png'

  const animSec = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const animP = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const animBallonOrange = {
    hidden: {
      opacity: 0,
      x: -500,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const animBallonBleu = {
    hidden: {
      opacity: 0,
      x: 500,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
      },
    },
  };

  const animRoleH1 = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.3,
      },
    },
  };

  const animRoleP = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.3,
      },
    },
  };

  const animSubtract = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1.5,
      },
    },
  };

  const animPolygon = {
    hidden: {
      opacity: 0,
      x: 150,
      y: -75,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: 0.9,
        duration: 0.6,
      },
    },
  };

  const animImgRole = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 0.6,
      },
    },
  };

  const [isDescription1, setDescription1] = useState(null);
  const [isDescription2, setDescription2] = useState(null);
  useEffect(() => {
    getDescription1();
    getDescription2();
  }, []);

  async function getDescription1() {
    try {
      const response = await fetch(
        baseUrl + "/api/description-1-page-presentation?populate=*"
      );
      if (!response.ok) {
        const error = await response.json();
        throw error;
      }
      const responseParse = await response.json();
      //console.log(responseParse.data.attributes.Text)
      setDescription1(responseParse.data.attributes.Text);
    } catch (error) {
      console.log(error);
    }
  }

  async function getDescription2() {
    try {
      const response = await fetch(
        baseUrl + "/api/description-2-page-presentation?populate=*"
      );
      if (!response.ok) {
        const error = await response.json();
        throw error;
      }
      const responseParse = await response.json();
      //console.log(responseParse.data.attributes.Image.data.attributes.url);
      setDescription2(responseParse);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <motion.section
      variants={animSec}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="section_description"
    >
      <div className={stylePresentation.layout_section_description}>
        <motion.img
          loading="lazy"
          variants={animBallonOrange}
          width={158}
          height={262}
          src={illustrationDescriptionOrange}
          className={stylePresentation.illustrationDescriptionOrange}
        ></motion.img>

        <motion.img
          loading="lazy"
          variants={animBallonBleu}
          width={158}
          height={262}
          src={illustrationDescriptionVert}
          className={stylePresentation.illustrationDescriptionVert}
        ></motion.img>
        <div style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflowX: 'hidden' }}>
          <h1 style={{ fontSize: '38px', fontFamily: 'AsgardTrial', textAlign: 'center' }} className={stylePresentation.section_description_title}>
            Qui sommes nous ?
          </h1>
          <p style={{ lineHeight: '1.7', fontWeight: 'regular', fontSize: '20px' }}>L'AGENCE MOSES ART est une agence de communication 360 créée en 2019 à Abidjan en Côte d'Ivoire. Elle accompagne ses clients dans le développement de leur image de marque en couvrant à la fois la création et la diffusion des campagnes de communication et marketing sur l'ensemble des supports indispensables à la prise de contact avec les cibles. Cela prend en compte les canaux online et offline globale.Nous aidons les Petites, Moyennes et Grandes entreprises à mieux se faire connaitre et à résoudre l'ensemble de leurs besoins et problématiques de communication.</p>
        </div>
      </div>

      <div className={stylePresentation.layout_section_description_role}>
        <div className={stylePresentation.layout_section_description_text}>
          <motion.h1
            variants={animRoleH1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={stylePresentation.section_description_role}
            style={{ fontFamily: 'AsgardTrial' }}
          >

            NOUS CONCEVONS,CREONS DES STARTEGIES DE COMMUNICATION ADAPTEES.
          </motion.h1>
          <motion.div
            variants={animRoleP}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {isDescription2 ? (
              <p>{isDescription2.data.attributes.Text}</p>
            ) : (
              <TextLoader lineCount={8}></TextLoader>
            )}
          </motion.div>
        </div>

        <div className={stylePresentation.illustration_role}>
          {isDescription2 && (
            <motion.img
              loading="lazy"
              width={450}
              height={500}
              variants={animImgRole}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              src={
                baseUrl +
                isDescription2.data.attributes.Image.data.attributes.url
              }
              className={stylePresentation.illustrationRole}
            ></motion.img>
          )}
        </div>

        <motion.img
          loading="lazy"
          variants={animSubtract}
          viewport={{ once: true }}
          width={80}
          height={80}
          src={subtract}
          alt="subtract"
          className={stylePresentation.subtract}
        ></motion.img>

        <motion.img
          loading="lazy"
          variants={animPolygon}
          viewport={{ once: true }}
          width={40}
          height={40}
          src={polygon}
          alt="polygon"
          className={stylePresentation.polygon}
        ></motion.img>
      </div>
    </motion.section>
  );
}

function SectionPrincipes() {
  const principeImg1 =
    "/assets/site version web/presentation_version_mobile_et_web.jpg";
  //const carreOrange = '/assets/carreOrange.svg'
  const illustrationRectangle = "/assets/RectanglePrincipe.svg";
  const principeImg2 = "/assets/Image_Presentation/Nos_principes_image2_2.jpg";
  const carreVert = "/assets/carreVert.svg";
  const ellipse = "/assets/EllipseIllustrationPrincipe.svg";
  const polygon2 = "/assets/Polygon2.svg";

  const animSec = {
    hidden: {
      opacity: 0,
      y: 200,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.3,
        staggerChildren: 0.3,
        delayChildren: 1,
        staggerDirection: -1,
      },
    },
  };

  const animTitre = {
    hidden: {
      opacity: 0,
      x: 20,
    },

    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.3,
      },
    },
  };

  const animPrincipe1 = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      duration: 0.6,
    },
  };

  const animPrincipe2 = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      duration: 0.6,
    },
  };

  const animPolygon = {
    anim: {
      rotate: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4,
        -5, -6, -7, -8, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0,
      ],
      transition: {
        repeat: Infinity,
        repeatDelay: 1,
        duration: 5,
      },
    },
  };

  const [isPrincipe1, setPrincipe1] = useState(null);
  const [isPrincipe2, setPrincipe2] = useState(null);
  useEffect(() => {
    getPrincipe1();
    getPrincipe2();
  }, []);

  async function getPrincipe1() {
    try {
      const response = await fetch(
        baseUrl + "/api/principe-1-page-presentation?populate=*"
      );
      if (!response.ok) {
        const error = await response.json();
        throw error;
      }
      const responseParse = await response.json();
      //console.log(responseParse.data.attributes.Text);
      setPrincipe1(responseParse);
    } catch (error) {
      console.log(error);
    }
  }

  async function getPrincipe2() {
    try {
      const response = await fetch(
        baseUrl + "/api/principe-2-page-presentation?populate=*"
      );
      if (!response.ok) {
        const error = await response.json();
        throw error;
      }
      const responseParse = await response.json();
      //console.log(responseParse.data.attributes.Image.data.attributes.url);
      setPrincipe2(responseParse);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <motion.section
      variants={animSec}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={stylePresentation.section_principes}
    >
      <motion.img
        loading="lazy"
        variants={animPolygon}
        animate="anim"
        width={50}
        height={50}
        src={polygon2}
        className={stylePresentation.polygon2}
      ></motion.img>

      <motion.img
        loading="lazy"
        variants={animPolygon}
        animate="anim"
        width={50}
        height={50}
        src={polygon2}
        className={stylePresentation.polygon_2}
      ></motion.img>
      <Image
        loading="lazy"
        alt="illustration"
        width={400}
        height={40}
        src={illustrationRectangle}
        className={stylePresentation.RectanglePrincipe}
      ></Image>
      <Image
        loading="lazy"
        alt="illustration"
        width={94}
        height={94}
        src={ellipse}
        className={stylePresentation.ellipse}
      ></Image>
      <motion.h1
        variants={animTitre}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={stylePresentation.title_section_principes}
      >
        {" "}
        Nos Principes
      </motion.h1>
      <div className={stylePresentation.layout_principes}>
        <motion.div
          variants={animPrincipe1}
          className={stylePresentation.layout_principe_1}
        >
          {isPrincipe1 ? (
            <Image
              alt="illustration"
              loading="lazy"
              src={isPrincipe1.data?.attributes?.Image?.data?.attributes?.url}
              width={350}
              height={350}
              quality={100}
              className={stylePresentation.principe_img_1}
            ></Image>
          ) : (
            <ImageLoader></ImageLoader>
          )}
          {/*<Image loading='lazy'  
                    width={94} alt="illustration"  height={94} src={carreOrange} className={stylePresentation.CarreOrange} ></Image>*/}

          {isPrincipe1 ? (
            <p>{isPrincipe1.data.attributes.Text}</p>
          ) : (
            <TextLoader lineCount={7}></TextLoader>
          )}
        </motion.div>

        <motion.div
          variants={animPrincipe2}
          className={stylePresentation.layout_principe_2}
        >
          <Image
            loading="lazy"
            alt="illustration"
            width={94}
            height={94}
            quality={100}
            src={carreVert}
            className={stylePresentation.carreVert}
          ></Image>

          {isPrincipe2 ? (
            <p>{isPrincipe2.data.attributes.Text}</p>
          ) : (
            <div style={{ marginLeft: 20 }}>
              <TextLoader lineCount={7}></TextLoader>
            </div>
          )}
          {isPrincipe2 ? (
            <Image
              loading="lazy"
              alt="illustration"
              className={stylePresentation.principe_img_2}
              width={500}
              height={500}
              src={isPrincipe2.data?.attributes?.Image?.data?.attributes?.url}
            ></Image>
          ) : (
            <div style={{ marginLeft: 20 }}>
              <ImageLoader></ImageLoader>
            </div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}

function SectionService() {
  const animSec = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
      },
    },
  };
  return (
    <motion.section
      variants={animSec}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={stylePresentation.section_service}
    >
      <h1 className={stylePresentation.section_service_title} style={{
        fontFamily: 'AsgardTrial,Montserrat',
        fontSize: '40px',
        textAlign:'center'
      }}>
        Nos <span>Services</span>
      </h1>
      <div className="section_service_service">
        <Service></Service>{" "}
      </div>
    </motion.section>
  );
}

function DomaineCompetence({ name, img }) {
  return (
    <div className={stylePresentation.domaine}>
      <motion.div
        whileHover={{ rotate: 360, transition: { duration: 0.4 } }}
        className={stylePresentation.img_domaine}
      >
        <motion.div
          whileInView={{ rotate: -360, transition: { duration: 0.4 } }}
        >
          <Image
            loading="lazy"
            className={stylePresentation.img_illustration}
            alt="illustration"
            src={img}
            width={75}
            height={75}
          ></Image>
        </motion.div>
      </motion.div>
      <div className={stylePresentation.domaine_name}>{name}</div>
    </div>
  );
}

export function SectionDomaineCompetence() {
  const illustrationDomaineCompetence =
    "assets/illustrationDomaineCompetence.svg";
  const model3D = "/assets/3DModel.svg";
  const marketing = "/assets/Marketing.svg";
  const movieProjector = "/assets/MovieProjector.svg";
  const pen = "/assets/Pen.svg";
  const photoGallery = "/assets/PhotoGallery.svg";
  const speaker = "/assets/Speaker.svg";
  const videoTrimming = "/assets/VideoTrimming.svg";
  const webDesign = "/assets/WebDesign.svg";
  const webSite = "/assets/Website.svg";

  const animSec = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const animRoleH1 = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      duration: 0.6,
      transition: {
        delay: 0.3,
        duration: 0.6,
      },
    },
  };

  const animDomaine = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const calque3 = "/assets/Calque3.svg";
  const calque4 = "/assets/Calque4.svg";
  const calque5 = "/assets/Calque5.svg";
  const calque6 = "/assets/Calque6.svg";
  const calque7 = "/assets/Calque7.svg";
  const calque8 = "/assets/Calque8.svg";

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
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={stylePresentation.layout_section_domaine}
    >
      <Image
        loading="lazy"
        src={illustrationDomaineCompetence}
        width={96}
        height={96}
        alt="illustration_domaine_competence"
        className={stylePresentation.illustration_domaine_competence}
      ></Image>
      <motion.div
        variants={animRoleH1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={stylePresentation.domaine_competence_title}
      >
        Domaines de Compétence
      </motion.div>
      <div className={stylePresentation.layout_domaine_competence}>
        <motion.div variants={animDomaine}>
          <DomaineCompetence
            name={"Print/web"}
            img={webSite}
          ></DomaineCompetence>
        </motion.div>
        <motion.div variants={animDomaine}>
          <DomaineCompetence name={"3D"} img={model3D}></DomaineCompetence>
        </motion.div>
        <motion.div variants={animDomaine}>
          <DomaineCompetence
            name={"Publicité"}
            img={speaker}
          ></DomaineCompetence>
        </motion.div>
        <motion.div variants={animDomaine}>
          <DomaineCompetence
            name={"Photo"}
            img={photoGallery}
          ></DomaineCompetence>
        </motion.div>
        <motion.div variants={animDomaine}>
          <DomaineCompetence
            name={"Marketing"}
            img={marketing}
          ></DomaineCompetence>
        </motion.div>
        <motion.div variants={animDomaine}>
          <DomaineCompetence
            name={"Illustration"}
            img={pen}
          ></DomaineCompetence>
        </motion.div>
        <motion.div variants={animDomaine}>
          <DomaineCompetence
            name={"Webdesign"}
            img={webDesign}
          ></DomaineCompetence>
        </motion.div>
        <motion.div variants={animDomaine}>
          <DomaineCompetence
            name={"Spot Vidéo"}
            img={videoTrimming}
          ></DomaineCompetence>
        </motion.div>
        <motion.div variants={animDomaine}>
          <DomaineCompetence
            name={"Branding"}
            img={movieProjector}
          ></DomaineCompetence>
        </motion.div>
      </div>
    </motion.div>
  );
}
function Realisation({ srcImage, titre, number }) {
  return (
    <div className={stylePresentation.realisation_projet}>
      <Image
        loading="lazy"
        alt="illustration"
        src={srcImage}
        width={60}
        height={60}
      ></Image>
      <div className={stylePresentation.number_realisation}>+{number}</div>

      <div className={stylePresentation.realisation_projet_title}>{titre}</div>
    </div>
  );
}

export function SectionRealisation() {
  const imgProject = "/assets/GroupofProjects.png";
  const imgHandShake = "/assets/Handshake.png";
  const imgOrganizationChartPeople = "/assets/OrganizationChartPeople.png";
  const illustration1 = "/assets/Ellipse104.svg";
  const illustration2 = "/assets/Ellipse106.svg";
  const calque61 = "/assets/Calque61.svg";

  const layoutRealisation = useRef(null);

  const animIllustrationEllipse = {
    whileInView: {
      x: [0, 10, 0, -10, 0],
      y: [0, 10, 0, -10, 0],
      opacity: [8, 9, 10],
      transition: {
        repeat: Infinity,
        duration: 8,
      },
    },

    hidden: {
      opacity: 0,
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

  const [isInView, setIsInView] = useState(false);
  const [countMembre, setCountMembre] = useState(0);
  const [countProjet, setCountProjet] = useState(0);
  const [countPartenaire, setCountPartenaire] = useState(0);

  // Observer pour détecter quand l'élément entre dans la vue
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.5 } // Déclenche lorsque 50% de l'élément est en vue
    );

    observer.observe(document.getElementById("counter")); // L'élément à observer

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView && countMembre < 30) {
      const interval = setInterval(() => {
        setCountMembre((prevCount) => prevCount + 1);
      }, 40);

      return () => clearInterval(interval);
    }
  }, [isInView, countMembre]);

  useEffect(() => {
    if (isInView && countPartenaire < 40) {
      const interval = setInterval(() => {
        setCountPartenaire((prevCount) => prevCount + 1);
      }, 40);

      return () => clearInterval(interval);
    }
  }, [isInView, countPartenaire]);

  useEffect(() => {
    if (isInView && countProjet < 100) {
      const interval = setInterval(() => {
        setCountProjet((prevCount) => prevCount + 1);
      }, 30);

      return () => clearInterval(interval);
    }
  }, [isInView, countProjet]);

  return (
    <div id="counter" className={stylePresentation.layout_realisation}>
      <motion.img
        loading="lazy"
        variants={animIllustrationEllipse}
        whileInView="whileInView"
        src={illustration1}
        alt="illustration"
        className={stylePresentation.realisation_illustration1}
        width={200}
        height={200}
      ></motion.img>
      <motion.img
        loading="lazy"
        variants={animIllustrationEllipse}
        whileInView="whileInView"
        src={illustration2}
        alt="illustration"
        className={stylePresentation.realisation_illustration2}
        width={600}
        height={600}
      ></motion.img>
      <motion.img
        loading="lazy"
        variants={animIllustration}
        whileInView="whileInView"
        src={calque61}
        className={stylePresentation.realisation_calque61}
        width={60}
        height={60}
      ></motion.img>
      <motion.img
        loading="lazy"
        variants={animIllustration}
        whileInView="whileInView"
        src={calque61}
        className={stylePresentation.realisation_calque81}
        width={50}
        height={50}
      ></motion.img>
      <Realisation
        srcImage={imgProject}
        number={countProjet}
        titre={"Projet"}
      ></Realisation>
      <Realisation
        srcImage={imgHandShake}
        number={countPartenaire}
        titre={"Partenaires"}
      ></Realisation>
      <Realisation
        srcImage={imgOrganizationChartPeople}
        number={countMembre}
        titre={"Membre"}
      ></Realisation>
    </div>
  );
}

export default function Presentation() {
  const [isBanner, setBanner] = useState(null);

  useEffect(() => {
    getBanner();
  }, []);

  async function getBanner() {
    try {
      const response = await fetch(
        baseUrl + "/api/banniere-presentation?populate=*"
      );
      if (!response.ok) {
        const error = await response.json();
        throw error;
      }
      const responseParse = await response.json();
      //console.log(responseParse.data.attributes.Image.data.attributes.url);
      setBanner(responseParse.data.attributes.Image.data.attributes.url);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

        <title>Agence MOSES ART</title>
      </Head>
      <Header presentation={true} headerColor="black" scroll={"black"}></Header>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {isBanner ? (
          <div
            style={{ backgroundImage: `url(${baseUrl + isBanner})` }}
            className={
              stylePresentation.layout_banner_presentation_presentation
            }
          >
            <div className="Banner_title">
              <div className={stylePresentation.t_1}>Agence</div>
              <div className={stylePresentation.t_2}>MOSES ART</div>
              <br />
              <div className={stylePresentation.t_3}>AGENCE 360</div>
            </div>
          </div>
        ) : (
          <BannerLoader></BannerLoader>
        )}

        <SectionQuiSommesNous />
        <SectionPrincipes></SectionPrincipes>

        <SectionService></SectionService>

        <SectionDomaineCompetence></SectionDomaineCompetence>

        <SectionRealisation></SectionRealisation>
        <div
          style={{
            height: 50,
            backgroundColor: "#FFFFFF",
            width: "100%",
            margin: "10px 0px",
            opacity: 0,
          }}
        ></div>
        <Equipe></Equipe>

        <ContactezNous  title={'Prener rendez-vous'}></ContactezNous>

        <Footer></Footer>
      </motion.div>
    </>
  );
}
