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
            <Banner titre={'Developpement web et mobile'} imgService={'/assets/detail_logos_service/dev.png'}> Votre <span>application web et mobile*</span> <br></br> sur-mesure, conçue par des experts</Banner>

            <Description>Notre équipe de professionnels expérimentés vous accompagne à chaque étape de votre projet, de l&quot;idée à la publication.Nous vous proposons une approche collaborative et transparente pour vous garantir une application qui réponde à vos besoins et à ceux de vos utilisateurs</Description>

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

