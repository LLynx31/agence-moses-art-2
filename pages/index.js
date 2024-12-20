import Banner from "../components/Akwaba/Banner";
import Presentation from "../components/Akwaba/Presentation";
import Service from "@/components/Service";
import Projet from "../components/Akwaba/Projet";
import Header from "../components/Header";
import Temoignage from "../components/Akwaba/Temoignage";
import NosPartenaire from "../components/NosPartenaire";
import ContactezNous from "../components/Akwaba/ContactezNous";
import Equipe from "../components/Akwaba/Equipe";
import Footer from "../components/Footer";
import Head from "next/head";
import { motion } from "framer-motion";
import SectionActualite from "@/components/Akwaba/Actualite/Actualite";
import SectionApproche from "@/components/Akwaba/Approche";
import stylePresentation from "@/styles/Presentation/Presentation.module.css";


function App() {
  return (
    <div className="contain">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <title>Agence MOSES ART</title>
      </Head>
      <Header akwaba={true} headerColor={"black"} scroll={"black"} />

      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Banner />
      </motion.div>
      <Presentation />
      <div
        style={{
          height: 50,
          backgroundColor: "transparent",
          width: "100%",
          margin: "15px 0px 100px 0px",
          opacity: 0,
        }}
      ></div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        className={`${stylePresentation.section_service_title} `}
        style={{
          fontFamily: "AsgardTrial,Montserrat",
          fontSize: "40px",
          textAlign:'center'
        }}
      >
        <span style={{ display: 'block' }}>Nos</span> <span>Services</span>
      </motion.h1>
      <Service></Service>
      <div
        style={{
          height: 50,
          backgroundColor: "transparent",
          width: "100%",
          margin: "15px 0px 0px",
          opacity: 0,
        }}
      ></div>
      <SectionApproche></SectionApproche>
 
      <Projet></Projet>
      <div
        style={{
          height: 50,
          backgroundColor: "transparent",
          width: "100%",
          margin: "20px 0px",
          opacity: 0,
        }}
      ></div>
      <Equipe></Equipe>
      <div
        style={{
          height: 50,
          backgroundColor: "transparent",
          width: "100%",
          margin: "15px 0px",
          opacity: 0,
        }}
      ></div>

      <Temoignage></Temoignage>

      <div
        style={{
          height: 50,
          backgroundColor: "transparent",
          width: "100%",
          marginBottom: "50px",
          marginTop: "80px",
          opacity: 0,
        }}
      ></div>

      <SectionActualite></SectionActualite>

 

      <NosPartenaire></NosPartenaire>

      <ContactezNous title={'Prenez rendez-vous'} contactMessage={
        <>
        {"Contactez nous aujourd'hui pour "} <br/>
        {'concrétiser votre idée de projet'}
        </>
      } 
></ContactezNous>

      <Footer></Footer>
    </div>
  );
}

export default App;
