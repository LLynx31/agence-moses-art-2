import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import style from "@/styles/Marketing.module.css";
import ContatezNous from "@/components/Akwaba/ContactezNous";
import { Fade, Zoom } from "react-awesome-reveal";
import Image from "next/image";

export default function Marketing() {
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
        <div className={style.layoutBaner}>
          <div className={style.titleBaner}>BANNIERE</div>
        </div>
      </Fade>

      <div className={style.sectionLayout}>
        <Zoom triggerOnce cascade damping={0.1}>
          <div
            className={style.blockLayout}
            style={{ backgroundColor: "#FFC403" }}
          >
            <h1 className={style.titleBlock}>Stratégie de communication</h1>
            <p className={style.paragraphe}>
              Nous développons une stratégie globale de communication qui aligne
              tous les canaux de communication de l&apos;entreprise pour
              atteindre vos objectifs.
            </p>
          </div>

          <div className={style.layoutIcone}>
            <Image style={{margin:"auto"}}
              width={150}
              height={150}
              src={"/assets/IconeService/STRATEGIE.jpg"}
            ></Image>
          </div>
          <div className={style.layoutIcone}>
            <Image style={{margin:"auto"}}
              width={150}
              height={150}
              src={"/assets/IconeService/Communication interne.jpg"}
            ></Image>
          </div>

          <div
            className={style.blockLayout}
            style={{ backgroundColor: "#076965", color: "white" }}
          >
            <h1 className={style.titleBlock}>Marketing digital</h1>
            <p className={style.paragraphe}>
              Nous créons et gérons des campagnes de marketing en ligne, y
              compris la publicité en ligne, le référencement, les médias
              sociaux, le marketing par e-mail, etc.
            </p>
          </div>

          <div
            className={style.blockLayout}
            style={{ backgroundColor: "#FFC403" }}
          >
            <h1 className={style.titleBlock}>Création de contenu</h1>
            <p className={style.paragraphe}>
              Nous produisons du contenu de qualité, qu&apos;il s&apos;agisse
              d&apos;articles de blog, de vidéos, de graphiques ou d&apos;autres
              formes de contenu, pour attirer et engager l&apos;audience de
              votre entreprise.
            </p>
          </div>

          <div className={style.layoutIcone}>
            <Image style={{margin:"auto"}}
              width={150}
              height={150}
              src={"/assets/IconeService/CONTENT CREATOR.jpg"}
            ></Image>
          </div>
          <div className={style.layoutIcone}>
            <Image style={{margin:"auto"}}
              width={150}
              height={150}
              src={"/assets/IconeService/design & branding.jpg"}
            ></Image>
          </div>

          <div
            className={style.blockLayout}
            style={{ backgroundColor: "#076965", color: "white" }}
          >
            <h1 className={style.titleBlock}>Design et branding </h1>
            <p className={style.paragraphe}>
              Nous créons des designs visuels attrayants et cohérents pour
              renforcer l&apos;identité de marque de votre entreprise.
            </p>
          </div>
          <div
            className={style.blockLayout}
            style={{ backgroundColor: "#FFC403" }}
          >
            <h1 className={style.titleBlock}>Événements et activations</h1>
            <p className={style.paragraphe}>
              Nous organisons des événements et des activations pour promouvoir
              votre entreprise et créer des expériences mémorables pour le
              public cible.
            </p>
          </div>
          <div className={style.layoutIcone}>
            <Image style={{margin:"auto"}}
              width={150}
              height={150}
              src={"/assets/IconeService/event.png"}
            ></Image>
          </div>
          <div className={style.layoutIcone}>
            <Image style={{margin:"auto"}}
              width={150}
              height={150}
              src={"/assets/IconeService/Communication interne.jpg"}
            ></Image>
          </div>
          <div
            className={style.blockLayout}
            style={{ backgroundColor: "#076965", color: "white" }}
          >
            <h1 className={style.titleBlock}>Communication interne </h1>
            <p className={style.paragraphe}>
              Nous aidons à améliorer la communication interne au sein de votre
              entreprise, en veillant à ce que tous les employés soient alignés
              sur les messages clés de l&apos;entreprise.
            </p>
          </div>


        </Zoom>
      </div>
      <ContatezNous></ContatezNous>

      <Footer></Footer>
    </div>
  );
}
