import { Banner, Description, AvantPropos, Service  } from "@/components/components-descrption-service"
import Head from "next/head"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import style from "@/styles/Marketing.module.css"
import ContatezNous from "@/components/Akwaba/ContactezNous"
import Offre from "@/components/offre"


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
            <Banner titre={'Design graphic'} imgService={'/assets/detail_logos_service/design.png'}>Créez une image qui parle <br></br> d&apos;elle-même avec des <span>designs</span> de qualité.</Banner>

            <Description>Le design graphique, c&apos;est la clé de votre réussite digitale.Moses Art vous accompagne dans votre stratégie de design graphique pour créer une image de marque forte, attirer l&apos;attention de votre public et améliorer vos résultats marketing.</Description>

            <AvantPropos></AvantPropos>

           <div className={style.service}>
                <Service>Création de logo, de charte graphique et d&apos;identité visuelle</Service>
                <Service>Réalisation de supports de communication print et digital</Service>
                <Service>Design d&apos;applications mobiles et web</Service>
                <Service>Création de contenu visue</Service>

            </div> 

           
            <Offre></Offre>
            

            <ContatezNous></ContatezNous>
            
            <Footer></Footer>
        </div>
    )
}

