import Header from "@/components/Header";
import Head from "next/head";
import { motion } from "framer-motion";
import styleBanner from "@/styles/Marketing.module.css";
import { Fade } from "react-awesome-reveal";
import Projet from "../components/Akwaba/Projet";
import Footer from "@/components/Footer";

export default function PageProjets() {
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
          <div className={styleBanner.layoutBaner}>
            <div className={styleBanner.titleBaner}>BANNIERE</div>
          </div>
        </Fade>

        <Projet></Projet>
      </motion.div>

      <Footer></Footer>
    </>
  );
}
