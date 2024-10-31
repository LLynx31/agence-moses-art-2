import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import style from "@/styles/Marketing.module.css";
import ContatezNous from "@/components/Akwaba/ContactezNous";
import Image from "next/image";
import { Fade, Zoom } from "react-awesome-reveal";
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
        baseUrl + "/api/banniere-service-marketing?populate=*"
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
        <style>
          {`
            @media (max-width: 768px) {
              .${style.layoutBaner} {
                height: 200px; // Ajustez la hauteur pour les petits écrans
                background-size: cover; // Assurez-vous que l'image couvre le conteneur
              }
              .${style.sectionLayout} {
                padding: 10px; // Ajoutez un peu de padding
              }
              .${style.blockLayout} {
                margin: 10px 0; // Ajoutez un margin pour espacer les blocs
                padding: 15px; // Ajoutez du padding pour le texte
              }
              .${style.titleBlock} {
                font-size: 1.5rem; // Réduisez la taille de la police
              }
              .${style.paragraphe} {
                font-size: 1rem; // Réduisez la taille de la police
              }
              .${style.layoutIcone} {
                display: flex; // Utilisez flex pour centrer les icônes
                justify-content: center; // Centrez les icônes
                margin: 10px 0; // Ajoutez un margin pour espacer
              }
            }
          `}
        </style>
      </Head>

      <Header headerColor="black" service scroll={"black"}></Header>
      <ProgressBar></ProgressBar>

      <Fade triggerOnce>
        {isBanner ? (
          <div
            style={{
              backgroundImage: `url(${baseUrl + isBanner})`,
            }}
            className={style.layoutBaner}
          ></div>
        ) : (
          <BannerLoader></BannerLoader>
        )}
      </Fade>

      <div className={style.sectionLayout}>
        <Zoom triggerOnce cascade damping={0.1}>
          <div
            className={style.blockLayout}
            style={{ backgroundColor: "#FFC403" }}
          >
            <h1 className={style.titleBlock}>Marketing Digital</h1>
            <p className={style.paragraphe}>
              Nous disposons d'une expertise approfondie dans le domaine du
              marketing en ligne. Nous connaissons les meilleures pratiques, les
              tendances actuelles et les stratégies efficaces pour atteindre les
              objectifs de croissance en ligne.
            </p>
          </div>
          <div className={style.layoutIcone}>
            <Image
              width={100}
              height={100}
              src={"/assets/IconeService/a.png"}
            ></Image>
          </div>
          <div className={style.layoutIcone}>
            <Image
              width={100}
              height={100}
              src={"/assets/IconeService/1134590.png"}
            ></Image>
          </div>
          <div
            className={style.blockLayout}
            style={{ backgroundColor: "#076965", color: "white" }}
          >
            <h1 className={style.titleBlock}>Gain de temps et energie</h1>
            <p className={style.paragraphe}>
              Nous disposons d'une expertise approfondie dans le domaine du
              marketing en ligne. Nous connaissons les meilleures pratiques, les
              tendances actuelles et les stratégies efficaces pour atteindre les
              objectifs de croissance en ligne.
            </p>
          </div>
          <div
            className={style.blockLayout}
            style={{ backgroundColor: "#FFC403" }}
          >
            <h1 className={style.titleBlock}>
              Accès à des outils et des ressources avancés{" "}
            </h1>
            <p className={style.paragraphe}>
              Nous avons accès à des outils et des ressources spécialisés qui
              peuvent améliorer l'efficacité et les résultats de vos campagnes
              en ligne.
            </p>
          </div>
          <div className={style.layoutIcone}>
            <Image
              width={100}
              height={100}
              src={"/assets/IconeService/a.png"}
            ></Image>
          </div>
          <div className={style.layoutIcone}>
            <Image
              width={100}
              height={100}
              src={"/assets/IconeService/2646177.png"}
            ></Image>
          </div>
          <div
            className={style.blockLayout}
            style={{ backgroundColor: "#076965", color: "white" }}
          >
            <h1 className={style.titleBlock}>Flexibilité et adaptation</h1>
            <p className={style.paragraphe}>
              Nous sommes capables de nous adapter rapidement aux changements de
              l'environnement en ligne et aux besoins de votre entreprise. Nous
              ajustons des stratégies en fonction des résultats et des nouvelles
              opportunités.
            </p>
          </div>

          <div
            className={style.blockLayout}
            style={{ backgroundColor: "#FFC403" }}
          >
            <h1 className={style.titleBlock}>Mesure des resultats </h1>
            <p className={style.paragraphe}>
              Nous utilisons des outils d'analyse pour mesurer les performances
              de vos campagnes en ligne. Cela vous permet de suivre vos progrès,
              d'identifier ce qui fonctionne et d'apporter des ajustements si
              nécessaire.
            </p>
          </div>
          <div className={style.layoutIcone}>
            <Image
              width={100}
              height={100}
              src={"/assets/IconeService/3515255.png"}
            ></Image>
          </div>
        </Zoom>
      </div>
      <ContatezNous></ContatezNous>

      <Footer></Footer>
    </div>
  );
}
