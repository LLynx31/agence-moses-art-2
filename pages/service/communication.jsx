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
            <Banner titre={'Conseil en communication 360'} imgService={'/assets/detail_logos_service/communication.png'}> Une <span>communication*</span> efficace sur <br></br> tous les canaux, pour atteindre vos objectifs.</Banner>

            <Description>Nous vous  aidons à créer une communication forte et efficace pour toucher votre cible et atteindre vos objectifs.Nos solutions vous permettent de vous démarquer de la concurrence et de gagner en visibilité.</Description>

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

