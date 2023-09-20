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
            <Banner titre={'Publicite'} imgService={'/assets/detail_logos_service/publicite.png'}> Faites connaître votre entreprise à <br></br> l&apos;aide de nos stratégies de <span>publicité*</span> efficaces.</Banner>

            <Description>Moses Art vous accompagne dans votre stratégie publicitaire pour atteindre vos objectifs.Nos experts vous proposent des campagnes publicitaires efficaces, adaptées à votre budget et à vos objectifs.Nous vous accompagnons dans la création de supports publicitaires (affiches, flyers, vidéos, etc.), la diffusion de vos campagnes sur différents supports (print, web, télévision, radio, etc.) et le suivi et l&apos;analyse des résultats de vos campagnes.</Description>

            <AvantPropos></AvantPropos>

           <div className={style.service}>
                <Service>Suivi et analyse des résultats de vos campagnes</Service>
                <Service>Création de logo, de charte graphique et d&apos;identité visuelle</Service>
                <Service>Diffusion de vos campagnes sur différents supports (print, web, télévision, radio, etc.)</Service>

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

