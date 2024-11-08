import Header from "../components/Header";
import Head from "next/head";
import styleFormation from "../styles/Formation/Formation.module.css";
import Footer from "../components/Footer";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import ContactezNous from "../components/Akwaba/ContactezNous";
import { motion } from "framer-motion";
import ProgressBar from "../components/ProgressBar";
import Image from "next/image";
import { baseUrl } from "@/config/config";
import BannerLoader from "@/components/loading/BannerLoader";

function Banner() {
  const [isBannerBig, setBannerBig] = useState(null);
  const [isBannerSmall, setBannerSmall] = useState(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const styleBanner = {
    backgroundImage:
      windowWidth > 640
        ? `url(${baseUrl + isBannerBig})`
        : `url(${baseUrl + isBannerSmall})`,
  };

  useEffect(() => {
    getBannerBig();
    getBannerSmall();
  }, []);

  async function getBannerBig() {
    try {
      const response = await fetch(
        baseUrl + "/api/banniere-formation?populate=*"
      );
      if (!response.ok) {
        const error = await response.json();
        throw error;
      }
      const responseParse = await response.json();
      setBannerBig(responseParse.data.attributes.Image.data.attributes.url);
    } catch (error) {
      console.log(error);
    }
  }

  async function getBannerSmall() {
    try {
      const response = await fetch(
        baseUrl + "/api/banniere-formation-mobile?populate=*"
      );
      if (!response.ok) {
        const error = await response.json();
        throw error;
      }
      const responseParse = await response.json();
      setBannerSmall(responseParse.data.attributes.Image.data.attributes.url);
    } catch (error) {
      console.log(error);
    }
  }
  
  return isBannerBig ? (
    <div
      style={styleBanner}
      className={styleFormation.Banner}
    >
      <div className={styleFormation.Banner_title}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.8 }}
          style={{ textAlign: 'left' , paddingRight : '400px',  marginLeft: windowWidth <= 1024 ? '280px' : '0'}}
        >
         Formez-vous<br></br>  en communication <br></br> chez nous !
        </motion.div>
      </div>
    </div>
  ) : (
    <BannerLoader></BannerLoader>
  );
}

function SectionDescription() {
  return (
    <section className={styleFormation.section_description}>
      <Image loading="lazy" alt="image formation"></Image>
      <h1 className={styleFormation.section_title}>
        Découvrez nos <span style={{ color: "#F6AA06" }}>Formations</span>
      </h1>
      <p>
        Pour suivre et accompagner les demandes croissantes de nos clients, nous
        avons mis en place des formations.. Nos formations sont conçues pour
        répondre aux besoins spécifiques de nos clients, et sont animées par des
        formateurs experts dans leur domaine.
      </p>
    </section>
  );
}

function SectionOffre() {
  const dataInfoFormation_1 = [
    {
      title: "APPRENEZ À DOMPTER LES RÉSEAUX SOCIAUX",
      presentation:
        "Comprendre les enjeux des réseaux sociaux (algorithmes, codes, objectifs) etsavoir mettre en place une stratégie de contenu au quotidien en maîtrisant la programmation.",
      listObjectif: [
        {
          text: "Savoir mettre en place une stratégie de community management.",
          key: 0,
        },
        { text: "cibles et ligne éditoriale.", key: 1 },
        {
          text: "Connaître tous les outils actuels pour gérer une présence en ligne.",
          key: 2,
        },
      ],
      listModeFormation: [{ text: "Présentielle", key: 0 }],
      lieu: "Dans nos locaux",
    },
  ];

  const dataInfoFormation_2 = [
    {
      title: "APPRENEZ À DOMPTER LES RÉSEAUX SOC",
      presentation:
        "Comprendre les enjeux des réseaux sociaux (algorithmes, codes, objectifs) etsavoir mettre en place une stratégie de contenu au quotidien en maîtrisant la programmation.",
      listObjectif: [
        {
          text: "Savoir mettre en place une stratégie de community management.",
          key: 0,
        },
        { text: "cibles et ligne éditoriale.", key: 1 },
        {
          text: "Connaître tous les outils actuels pour gérer une présence en ligne.",
          key: 2,
        },
      ],
      listModeFormation: [{ text: "Présentielle", key: 0 }],
      lieu: "Dans nos locaux",
    },
  ];

  const [informationFormation, setInformationFormation] =
    useState(dataInfoFormation_1);
  const refInfoFormation = useRef(null);
  function changeInformationFormation(newInforamtion) {
    setInformationFormation(newInforamtion);
  }

  return (
    <div className={styleFormation.section_ofrre}>
      <div className={styleFormation.intro}>
        Découvrez ci-dessous nos quatre offres de formations{" "}
      </div>
      <div className={styleFormation.layout_formation_div}>
        <motion.div initial={{ x: -100 }} animate={{ x: 0 }}>
          <FormationDiv
            changeInformationFormation={(e) => {
              e.preventDefault();
              refInfoFormation.current.scrollIntoView({ behavior: "smooth" });
              setInformationFormation(dataInfoFormation_1);
            }}
          ></FormationDiv>
        </motion.div>

        <FormationDiv
          colorLink="#0F8383"
          changeInformationFormation={(e) => {
            e.preventDefault();
            refInfoFormation.current.scrollIntoView({ behavior: "smooth" });
            setInformationFormation(dataInfoFormation_1);
          }}
        ></FormationDiv>
        <FormationDiv
          colorLink="#0F8383"
          changeInformationFormation={(e) => {
            e.preventDefault();
            refInfoFormation.current.scrollIntoView({ behavior: "smooth" });
            setInformationFormation(dataInfoFormation_1);
          }}
        ></FormationDiv>
        <FormationDiv
          changeInformationFormation={(e) => {
            e.preventDefault();
            refInfoFormation.current.scrollIntoView({ behavior: "smooth" });
            setInformationFormation(dataInfoFormation_1);
          }}
        ></FormationDiv>
      </div>
      <div ref={refInfoFormation}>
        <InfoFormation info={informationFormation}></InfoFormation>
      </div>
    </div>
  );
}

function FormationDiv({ colorLink = "#F6AA06", changeInformationFormation }) {
  const rectangle96 = "/assets/Rectangle96.svg";
  return (
    <div className={styleFormation.layoutFormation}>
      <div>
        <Image
          loading="lazy"
          className={styleFormation.imageFormation}
          src={rectangle96}
          width={300}
          height={300}
          alt="image des formation"
        ></Image>
      </div>

      <div className={styleFormation.bloc_text}>
        <h1 className={styleFormation.title_formation}>
          Les fondamentaux du marketing digital
        </h1>

        <p className={styleFormation.description_formation}>
          Apprenez à communiquer sur les réseaux sociaux et à mettre en place
          une stratégie de community management
        </p>
      </div>

      <Link
        href=""
        className={styleFormation.link_formation}
        onClick={changeInformationFormation}
        style={{ backgroundColor: colorLink }}
      >
        Decouvrez
      </Link>
    </div>
  );
}

function InfoFormation({ info }) {
  const listObjectif = info[0].listObjectif.map((objectif) => (
    <li key={objectif.key}>{objectif.text}</li>
  ));
  const listModeFormation = info[0].listModeFormation.map((modeFormation) => (
    <li key={modeFormation.key}>{modeFormation.text}</li>
  ));

  return (
    <div className={styleFormation.layout_info_formation}>
      <h1>{info[0].title}</h1>
      <h2>Presentation de la formation</h2>
      <p>{info[0].presentation}</p>
      <h2>Objectif</h2>
      <ul>{listObjectif}</ul>
      <h2>Mode de formation</h2>
      <ul>{listModeFormation}</ul>
      <h2>Lieu de formation</h2>
      <p>{info[0].lieu}</p>
    </div>
  );
}

export default function Formation() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <title>Agence MOSES ART</title>
      </Head>
      <Header formation={true} headerColor="black"></Header>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <ProgressBar></ProgressBar>
        <Banner></Banner>

        {/*<motion.div initial={{opacity:0, x:-300}} animate={{opacity:1, x:0}} transition={{duration:1}}><SectionDescription></SectionDescription></motion.div>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:3}}><SectionOffre></SectionOffre></motion.div>
            <Equipe></Equipe>
    <SendProject background={{first: '#0F8383', second: '#F6AA06'}}>Nous n`attendons que  <span style={{color: '#F6AA06'}}>Vous</span> </SendProject>*/}
        <ContactezNous title={'Prener rendez-vous'} contactMessage={
              <>
              {'N’hésitez pas à nous contacter pour vous '} <br/>
              {'faire former aux metiers du digital'}
              </>
        }></ContactezNous>
        <Footer></Footer>
      </motion.div>
    </>
  );
}
