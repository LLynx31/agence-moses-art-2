import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import style from "@/styles/Marketing.module.css";
import ContatezNous from "@/components/Akwaba/ContactezNous";
import { Fade, Zoom } from "react-awesome-reveal";
import Image from "next/image";
import { useEffect, useState } from "react";
import { baseUrl } from "@/config/config";
import BannerLoader from "@/components/loading/BannerLoader";


export default function Marketing() {
  const [isBanner, setBanner] = useState(null);

  useEffect(() => {
    getBanner();
  }, []);

  async function getBanner() {
    try {
      const response = await fetch(
        baseUrl + "/api/banniere-service-design?populate=*"
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
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <title>Agence MOSES ART</title>
      </Head>

      <Header headerColor="black" service scroll={"black"}></Header>
      <ProgressBar></ProgressBar>

      <Fade triggerOnce>
        {isBanner? <div
          style={{
            backgroundImage:
              `url(${baseUrl + isBanner})`,
          }}
          className={style.layoutBaner}
        ></div> : <BannerLoader></BannerLoader>}
      </Fade>

      <div className={style.sectionLayout}>
        <Zoom triggerOnce cascade damping={0.1}>
          <div
            className={style.blockLayout}
            style={{ backgroundColor: "#FFC403" }}
          >
            <h1 className={style.titleBlock}>Créaticité et expertise</h1>
            <p className={style.paragraphe}>
              Nous avons une équipe de designers talentueux et créatifs qui sont
              experts dans l'utilisation des principes de design pour créer des
              visuels accrocheurs et esthétiquement plaisants.
            </p>
          </div>
          <div className={style.layoutIcone}>
            <Image
              style={{ margin: "auto" }}
              width={150}
              height={150}
              src={"/assets/IconeService/1126453.png"}
            ></Image>
          </div>
          <div className={style.layoutIcone}>
            <Image
              style={{ margin: "auto" }}
              width={150}
              height={150}
              src={"/assets/IconeService/6351302.png"}
            ></Image>
          </div>
          <div
            className={style.blockLayout}
            style={{ backgroundColor: "#076965", color: "white" }}
          >
            <h1 className={style.titleBlock}>Image de marque cohérente</h1>
            <p className={style.paragraphe}>
              Nous aidons à créer une identité visuelle cohérente pour votre
              entreprise, en utilisant des éléments de design tels que des
              couleurs, des typographies et des logos, ce qui renforce la
              reconnaissance de la marque.
            </p>
          </div>
          <div
            className={style.blockLayout}
            style={{ backgroundColor: "#FFC403" }}
          >
            <h1 className={style.titleBlock}>Professionnalisme et qualité</h1>
            <p className={style.paragraphe}>
              Nous avons l'expérience et les compétences nécessaires pour
              fournir des designs de haute qualité qui répondent aux normes
              professionnelles. Cela donne une image positive de votre
              entreprise et renforce sa crédibilité.
            </p>
          </div>
          <div className={style.layoutIcone}>
            <Image
              style={{ margin: "auto" }}
              width={150}
              height={150}
              src={"/assets/IconeService/1892654.png"}
            ></Image>
          </div>
          <div className={style.layoutIcone}>
            <Image
              style={{ margin: "auto" }}
              width={150}
              height={150}
              src={"/assets/IconeService/1134590.png"}
            ></Image>
          </div>
          <div
            className={style.blockLayout}
            style={{ backgroundColor: "#076965", color: "white" }}
          >
            <h1 className={style.titleBlock}>Gain de temps</h1>
            <p className={style.paragraphe}>
              En confiant le travail de design à notre agence spécialisée, votre
              entreprise peut économiser du temps et se concentrer sur ses
              activités principales, tandis que les designers se chargent de
              créer des designs percutants.
            </p>
          </div>
          <div
            className={style.blockLayout}
            style={{ backgroundColor: "#FFC403" }}
          >
            <h1 className={style.titleBlock}>Adaptation aux tendances</h1>
            <p className={style.paragraphe}>
              Nous sommes au courant des dernières tendances en matière de
              design et nous pouvons créer des visuels modernes et à la pointe
              de la technologie qui captent l'attention du public.
            </p>
          </div>
          <div className={style.layoutIcone}>
            <Image
              style={{ margin: "auto" }}
              width={150}
              height={150}
              src={"/assets/IconeService/5398428.png"}
            ></Image>
          </div>
        </Zoom>
      </div>
      <ContatezNous></ContatezNous>

      <Footer></Footer>
    </div>
  );
}
