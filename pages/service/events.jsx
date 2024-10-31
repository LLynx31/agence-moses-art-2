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
        baseUrl + "/api/banniere-service-event?populate=*"
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
              backgroundSize: 'cover',
              height: '200px',
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
          style={{ backgroundColor: "#FFC403", padding: '10px' }}
        >
          <h1 className={style.titleBlock}>Expertise</h1>
          <p className={style.paragraphe}>
            Nous disposons d'une expertise et d'une expérience approfondies dans
            la planification et l'organisation d'événements. Nous connaissons
            les meilleures pratiques, les tendances du marché et les
            fournisseurs fiables, ce qui garantit la qualité et le succès de
            votre événement.
          </p>
        </div>
        <div className={style.layoutIcone}>
          <Image
            width={100}
            height={100}
            src={"/assets/IconeService/1446546.png"}
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
          style={{ backgroundColor: "#076965", color: "white", padding: '10px' }}
        >
          <h1 className={style.titleBlock}>Gain de temps et energie</h1>
          <p className={style.paragraphe}>
            Organiser un événement demande beaucoup de temps, d'énergie et de
            ressources. En confiant cette tâche à notre agence, vous pouvez vous
            concentrer sur d'autres aspects importants de votre vie personnelle
            ou professionnelle, tout en ayant l'assurance que votre événement
            est entre de bonnes mains.
          </p>
        </div>
        <div
          className={style.blockLayout}
          style={{ backgroundColor: "#FFC403", padding: '10px' }}
        >
          <h1 className={style.titleBlock}>Gestion du budget</h1>
          <p className={style.paragraphe}>
            Nous sommes habitués à travailler avec des budgets spécifiques et
            nous pouvons vous aider à optimiser vos dépenses pour obtenir le
            meilleur rapport qualité-prix. Nous avons également des relations
            établies avec des fournisseurs et pouvons négocier des tarifs
            préférentiels pour vous.
          </p>
        </div>
        <div className={style.layoutIcone}>
          <Image
            width={100}
            height={100}
            src={"/assets/IconeService/1865652.png"}
          ></Image>
        </div>
        <div className={style.layoutIcone}>
          <Image
            width={100}
            height={100}
            src={"/assets/IconeService/1126453.png"}
          ></Image>
        </div>
        <div
          className={style.blockLayout}
          style={{ backgroundColor: "#076965", color: "white", padding: '10px' }}
        >
          <h1 className={style.titleBlock}>Créativité et innovation</h1>
          <p className={style.paragraphe}>
            Nous sommes réputées pour notre créativité et notre capacité à
            concevoir des événements uniques et mémorables. Nous apportons des
            idées novatrices, des concepts originaux et des solutions
            personnalisées pour répondre à vos besoins et impressionner vos
            invités.
          </p>
        </div>
        <div
          className={style.blockLayout}
          style={{ backgroundColor: "#FFC403", padding: '10px' }}
        >
          <h1 className={style.titleBlock}>Gestion logistique</h1>
          <p className={style.paragraphe}>
            L'organisation d'un événement implique de nombreux détails
            logistiques tels que la réservation de lieux, la coordination des
            horaires, la gestion des fournisseurs, la logistique du transport,
            etc.
          </p>
        </div>
        <div className={style.layoutIcone}>
          <Image
            width={100}
            height={100}
            src={"/assets/IconeService/3938366.png"}
          ></Image>
        </div>
        </Zoom></div>
      <ContatezNous></ContatezNous>

      <Footer></Footer>
    </div>
  );
}
