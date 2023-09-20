import { Banner, Description, AvantPropos, Service } from "@/components/components-descrption-service"
import Head from "next/head"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import style from "@/styles/Marketing.module.css"
import ContatezNous from "@/components/Akwaba/ContactezNous"
import Offre  from "@/components/offre"


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
            <Banner titre={'Marketing Digital'} imgService={'/assets/detail_logos_service/marketing.png'}> Développez votre activité grâce au <br></br><span>Marketing Digital*</span>.</Banner>

            <Description>Le marketing digital, c&apos;est la clé de votre succès.Moses Art vous accompagne dans votre stratégie digitale pour développer votre présence en ligne, améliorer votre notoriété et atteindre vos objectifs commerciaux.Nos experts vous proposeront les solutions adaptées à votre entreprise et à vos besoins.</Description>

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

            <Offre></Offre>

            <ContatezNous></ContatezNous>
            
            <Footer></Footer>
        </div>
    )
}

