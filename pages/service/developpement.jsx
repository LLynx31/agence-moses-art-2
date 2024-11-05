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
        baseUrl + "/api/banniere-service-dev?populate=*"
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
    <div className={style.container}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <title>Agence MOSES ART</title>
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
          <div className={style.layoutIcone}>
            <Image
              style={{ margin: "auto" }}
              width={150}
              height={150}
              src={"/assets/IconeService/4599811.png"}
            ></Image>
          </div>
          <div
            className={style.blockLayout}
            style={{ backgroundColor: "#076965", color: "white" }}
          >
            <h1 className={style.titleBlock}>Conception et developpement</h1>
            <p className={style.paragraphe}>
              Nous créons une interface utilisateur attrayante et conviviale,
              tout en développant les fonctionnalités et les caractéristiques de
              l'application.
            </p>
          </div>
          <div
            className={style.blockLayout}
            style={{ backgroundColor: "#FFC403" }}
          >
            <h1 className={style.titleBlock}>Programmation et codage</h1>
            <p className={style.paragraphe}>
              Nous utilisons des langages de programmation et des outils de
              développement pour coder l'application et la rendre fonctionnelle.
            </p>
          </div>
          <div className={style.layoutIcone}>
            <Image
              style={{ margin: "auto" }}
              width={150}
              height={150}
              src={"/assets/IconeService/1336494.png"}
            ></Image>
          </div>
          <div className={style.layoutIcone}>
            <Image
              style={{ margin: "auto" }}
              width={150}
              height={150}
              src={"/assets/IconeService/1541504.png"}
            ></Image>
          </div>
          <div
            className={style.blockLayout}
            style={{ backgroundColor: "#076965", color: "white" }}
          >
            <h1 className={style.titleBlock}>Tests et deboguages</h1>
            <p className={style.paragraphe}>
              Nous effectuons des tests rigoureux pour nous assurer que
              l'application fonctionne correctement, corrigeons les erreurs et
              les bugs éventuels.
            </p>
          </div>

          <div
            className={style.blockLayout}
            style={{ backgroundColor: "#FFC403" }}
          >
            <h1 className={style.titleBlock}>Déploiement</h1>
            <p className={style.paragraphe}>
              Nous déployons l'application sur les plateformes web et mobiles
              appropriées (comme iOS, Android, etc.) et assurons la maintenance
              continue de l'application pour garantir sa performance et sa
              sécurité.
            </p>
          </div>
          <div className={style.layoutIcone}>
            <Image
              style={{ margin: "auto" }}
              width={150}
              height={150}
              src={"/assets/IconeService/6822231.png"}
            ></Image>
          </div>
        </Zoom>
      </div>
      <ContatezNous></ContatezNous>

      <Footer></Footer>
    </div>
  );
}
