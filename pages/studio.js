import Head from "next/head";
import Header from "../components/Header";
import styleStudio from "../styles/Formation/Formation.module.css";
import Footer from "../components/Footer";
import ContatezNous from "@/components/Akwaba/ContactezNous";
import ProgressBar from "../components/ProgressBar";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import BannerLoader from "@/components/loading/BannerLoader";
import { baseUrl } from "@/config/config";

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
        baseUrl + "/api/banniere-studio?populate=*"
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
        baseUrl + "/api/banniere-studio-mobile?populate=*"
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
      className={styleStudio.Banner}
    >
      <div className={styleStudio.Banner_title}>
     
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.8 }}
        style={{ textAlign: 'left', paddingRight: '500px', textShadow: '1px 1px 4px #000000' }}
        >
          Réserver <br></br> votre séance <br></br> chez nous !
        </motion.div>
      </div>
    </div>
  ) : (
    <BannerLoader></BannerLoader>
  );
}

function Projet({ image, titre, lien }) {
  const router = useRouter();
  function handleDiv() {
    router.push(lien);
  }
  return (
    <div className={styleStudio.layoutProjet}>
      <div
        className={styleStudio.img_projet}
        alt="image projet"
        src={image}
        onClick={handleDiv}
        style={{ backgroundImage: image }}
      ></div>
      <div className={styleStudio.type_projet}>Type de création</div>
      <h1 className={styleStudio.titre_projet}>{titre}</h1>
    </div>
  );
}

function SectionProjet() {
  const projets = [
    {
      key: 0,
      img: "url('/assets/IMG-20230813-WA0098.jpg')",
      titre: "CORPORATE",
      lien: "/studio/corporate",
    },
    {
      key: 1,
      img: "url('/assets/IMG-20230813-WA0101.jpg')",
      titre: "PORTRAIT",
      lien: "/studio/portrait",
    },
    {
      key: 2,
      img: "url('/assets/IMG-20230813-WA0080.jpg')",
      titre: "MODE",
      lien: "/studio/mode",
    },
    {
      key: 3,
      img: "url('/assets/IMG-20230813-WA0051.jpg')",
      titre: "ANNIVERSAIRE",
      lien: "/studio/anniversaire",
    },

    {
      key: 4,
      img: "url('/assets/IMG-20230813-WA0105.jpg')",
      titre: "SHOOT",
      lien: "/studio/shoot",
    },
  ];

  let list_Projet = projets.map((projet) => (
    <Projet
      key={projet.key}
      image={projet.img}
      titre={projet.titre}
      lien={projet.lien}
    ></Projet>
  ));

  return <div className={styleStudio.layout_section_projet}>{list_Projet}</div>;
}

export function SectionContact() {
  return (
    <div className={styleStudio.layout_contact}>
      <h1 className={styleStudio.section_titre}>
        Démarrer un projet avec nous
      </h1>
      <p>
        Nous allons faire de votre idée quelque <br></br>chose de vraiment
        spécial.
      </p>
      <button className={styleStudio.btn_section_contact}>
        <Link href="/contact">Contact</Link>
      </button>
    </div>
  );
}
export default function Studio() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <title>Agence MOSES ART</title>
      </Head>
      <Header studio={true} headerColor={"black"} scroll={"black"} />
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <ProgressBar></ProgressBar>
        <Banner></Banner>
        {/*<SectionProjet></SectionProjet>*/}
        <ContatezNous></ContatezNous>
        {/*<SectionRealisation></SectionRealisation>*/}
        <SectionContact></SectionContact>
        <Footer></Footer>
      </motion.div>
    </>
  );
}
