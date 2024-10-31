import Header from "@/components/Header";
import Head from "next/head";
import { motion } from "framer-motion";
import styleBanner from "@/styles/Marketing.module.css";
import { Fade } from "react-awesome-reveal";
import Projet from "../components/Akwaba/Projet";
import Footer from "@/components/Footer";
import { baseUrl } from "@/config/config";
import { useEffect, useState } from "react";
import BannerLoader from "@/components/loading/BannerLoader";

export default function PageProjets() {
  const [isBanner, setBanner] = useState(null);

  useEffect(() => {
    getBanner();
  }, []);

  async function getBanner() {
    try {
      const response = await fetch(
        baseUrl + "/api/banniere-projet?populate=*"
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
      <Header projet={true} headerColor="black" scroll={"black"}></Header>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Fade triggerOnce>
        {isBanner? <div
          style={{
            backgroundImage:
              `url(${baseUrl + isBanner})`,
            marginBottom:20
          }}
          className={styleBanner.layoutBaner}
        ></div> : <BannerLoader></BannerLoader>}
        </Fade>

        <Projet></Projet>
      </motion.div>

      <Footer></Footer>
    </>
  );
}
