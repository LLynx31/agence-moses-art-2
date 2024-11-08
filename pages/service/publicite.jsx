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
        baseUrl + "/api/banniere-service-pub?populate=*"
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
            <h1 className={style.titleBlock}>Stratégie publicitaire</h1>
            <p className={style.paragraphe}>
              Nous travaillons en étroite collaboration avec les clients pour
              comprendre leurs objectifs commerciaux et développer une stratégie
              publicitaire efficace.
            </p>
          </div>

          <div className={style.layoutIcone}>
            <Image style={{ margin: "auto", maxWidth: "100%", height: "auto" }}
              width={100}
              height={100}
              src={"/assets/IconeService/99999999.png"}
            ></Image>
          </div>
          <div className={style.layoutIcone}>
            <Image style={{ margin: "auto", maxWidth: "100%", height: "auto" }}
              width={100}
              height={100}
              src={"/assets/IconeService/1087886.png"}
            ></Image>
          </div>

          <div
            className={style.blockLayout}
            style={{ backgroundColor: "#076965", color: "white" }}
          >
            <h1 className={style.titleBlock}>Création publicitaire</h1>
            <p className={style.paragraphe}>
              Nous concevons des publicités percutantes et attrayantes, que ce
              soit des annonces imprimées, des spots télévisés, des publicités
              en ligne ou d&apos;autres formes de publicité.
            </p>
          </div>

          <div
            className={style.blockLayout}
            style={{ backgroundColor: "#FFC403" }}
          >
            <h1 className={style.titleBlock}>Planification média</h1>
            <p className={style.paragraphe}>
              Nous identifions les meilleurs canaux de communication pour
              atteindre le public cible de l&apos;entreprise et planifions
              l&apos;allocation des dépenses publicitaires en conséquence.
            </p>
          </div>
          <div className={style.layoutIcone}>
            <Image style={{ margin: "auto", maxWidth: "100%", height: "auto" }}
              width={100}
              height={100}
              src={"/assets/IconeService/567014.png"}
            ></Image>
          </div>
          <div className={style.layoutIcone}>
            <Image style={{ margin: "auto", maxWidth: "100%", height: "auto" }}
              width={100}
              height={100}
              src={"/assets/IconeService/2856934.png"}
            ></Image>
          </div>

          <div
            className={style.blockLayout}
            style={{ backgroundColor: "#076965", color: "white" }}
          >
            <h1 className={style.titleBlock}>Achat média</h1>
            <p className={style.paragraphe}>
              Nous négocions et achetions des espaces publicitaires dans les
              médias sélectionnés, tels que les journaux, les magazines, la
              télévision, la radio, les sites web, les réseaux sociaux, etc.
            </p>
          </div>
          <div
            className={style.blockLayout}
            style={{ backgroundColor: "#FFC403" }}
          >
            <h1 className={style.titleBlock}>Suivi et évaluation</h1>
            <p className={style.paragraphe}>
              Nous mesurons l&apos;efficacité des campagnes publicitaires en
              suivant les performances, en analysant les données et en
              fournissant des rapports détaillés à nos clients.
            </p>
          </div>
        </Zoom>
      </div>

      <ContatezNous></ContatezNous>

      <Footer></Footer>
    </div>
  );
}
