import { Banner, Description, AvantPropos, Service, Offre  } from "@/components/components-descrption-service"
import Head from "next/head"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import style from "@/styles/Marketing.module.css"
import ContatezNous from "@/components/Akwaba/ContactezNous"

export default function Marketing(){
    return (
        <div>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <title>Agence MOSES ART</title>
            </Head>

            <Header headerColor="black" service scroll={'black'}></Header>
            <ProgressBar></ProgressBar>
            <Banner titre={'Digitalisation des services'} imgService={'/assets/details_logos_service/digitalisation.png'}> <span>Digitalisez*</span> vos services et <br></br> restez compétitif.</Banner>

            <Description>Nous vous accompagnons dans votre transformation digitale pour améliorer votre efficacité, votre productivité et votre satisfaction client.Nos experts vous proposent des solutions adaptées à votre secteur d&quot;activité et à vos besoins.</Description>

            <AvantPropos></AvantPropos>

           <div className={style.service}>
                <Service>Définition de votre stratégie marketing digitale</Service>
                <Service>Définition de votre stratégie marketing digitale</Service>
                <Service>Définition de votre stratégie marketing digitale</Service>
                <Service>Définition de votre stratégie marketing digitale</Service>
                <Service>Définition de votre stratégie marketing digitale</Service>
                <Service>Définition de votre stratégie marketing digitale</Service>
                <Service>Définition de votre stratégie marketing digitale</Service>

            </div> 

            <div className={style.layout_offre}>
                <div className={style.offre}>
                    <Offre offre_head={"standard"}></Offre>
                    <Offre offre_head={"standard"}></Offre>
                    <Offre offre_head={"standard"}></Offre>
                </div>
            </div>

            <ContatezNous></ContatezNous>
            
            <Footer></Footer>
        </div>
    )
}

