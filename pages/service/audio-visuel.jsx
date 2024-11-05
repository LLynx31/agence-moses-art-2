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

export default function page() {
  const [isBanner, setBanner] = useState(null);

  useEffect(() => {
    getBanner();
  }, []);

  async function getBanner() {
    try {
      const response = await fetch(
        baseUrl + "/api/banniere-service-audiovisuel?populate=*"
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
        {isBanner ? <div
          style={{
            backgroundImage:
              `url(${baseUrl + isBanner})`,
            backgroundSize: 'cover',
            height: '200px',
          }}
          className={style.layoutBaner}
        ></div> : <BannerLoader></BannerLoader>}
      </Fade>


      <div className={style.sectionLayout}>
        <Zoom triggerOnce cascade damping={0.1}>
       
          <div className={style.layoutIcone}>
            <Image
              width={100}
              height={100}
              src={"/assets/IconeService/1126453.png"}
            ></Image>
          </div>
          <div
            className={style.blockLayout}
            style={{ backgroundColor: "#076965", color: "white" }}
          >
            <h1 className={style.titleBlock}>Créativité</h1>
            <p className={style.paragraphe}>
              Nous sommes composés de professionnels créatifs qui apportent des
              idées originales et innovantes à vos projets, en les rendant plus
              attrayants et mémorables.
            </p>
          </div>
          <div
            className={style.blockLayout}
            style={{ backgroundColor: "#FFC403" }}
          >
            <h1 className={style.titleBlock}>
              Cohérence et professionnalisme de la marque
            </h1>
            <p className={style.paragraphe}>
              Nous vous aidons à créer une identité visuelle cohérente et
              professionnelle pour votre marque, en alignant vos contenus vidéo
              avec votre image de marque et vos objectifs marketing.
            </p>
          </div>
          <div className={style.layoutIcone}>
            <Image
              width={100}
              height={100}
              src={"/assets/IconeService/6351302.png"}
            ></Image>
          </div>
          <div className={style.layoutIcone}>
            <Image
              width={100}
              height={100}
              src={"/assets/IconeService/6386311.png"}
            ></Image>
          </div>
          <div
            className={style.blockLayout}
            style={{ backgroundColor: "#076965", color: "white" }}
          >
            <h1 className={style.titleBlock}>Large diffusion</h1>
            <p className={style.paragraphe}>
              Nous pouvons également vous aider à diffuser vos contenus sur
              différentes plateformes, telles que les réseaux sociaux, les sites
              web, la télévision, etc., pour atteindre un public plus large et
              maximiser l'impact de vos vidéos.
            </p>
          </div>

          <div
            className={style.blockLayout}
            style={{ backgroundColor: "#FFC403" }}
          >
            <h1 className={style.titleBlock}>Equipement de pointe </h1>
            <p className={style.paragraphe}>
              Nous disposons d'équipements et de technologies de pointe pour
              capturer et produire des vidéos de haute qualité, offrant une
              expérience visuelle immersive à votre public.
            </p>
          </div>
          <div className={style.layoutIcone}>
            <Image
              width={100}
              height={100}
              src={"/assets/IconeService/5062832.png"}
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
            <h1 className={style.titleBlock}>Gain de temps et d'efforts</h1>
            <p className={style.paragraphe}>
              En confiant la production de vos contenus audiovisuels à notre
              agence, vous pouvez vous concentrer sur d'autres aspects de votre
              entreprise, tandis que nous gerons tous les aspects techniques et
              créatifs.
            </p>
          </div>
        </Zoom>
      </div>


      <ContatezNous></ContatezNous>

      <Footer></Footer>
    </div>
  );
}
