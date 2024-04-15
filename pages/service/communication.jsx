import { Banner, Description, Block, Offre  } from "@/components/components-descrption-service"
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

           <div className={style.avantage}>
                <h1 className={style.avantage_titre}>Nos avantages</h1>  
                <p className={style.avantage_description}>Voici quelques-uns des services que notre <br></br>agence de conseil en communication 360 vous offre :</p>

                <div className={style.avantage_block_layout}>
                    <Block titre={"Stratégie de communication"} color="#F6AA06"> Nous développons une stratégie globale de communication qui aligne tous les canaux de communication de l&apos;entreprise pour atteindre vos objectifs.</Block>
                    <Block titre={"Relations publiques "} color="#F6AA06">Nous gérons les relations avec les médias et les influenceurs pour obtenir une couverture médiatique positive et renforcer la réputation de votre entreprise.</Block>
                    <Block titre={"Marketing digital"} color="#F6AA06"> Nous créons et gérons des campagnes de marketing en ligne, y compris la publicité en ligne, le référencement, les médias sociaux, le marketing par e-mail, etc.</Block>
                    <Block titre={"Création de contenu "} color="#F6AA06">Nous produisons du contenu de qualité, qu&apos;il s&apos;agisse d&apos;articles de blog, de vidéos, de graphiques ou d&apos;autres formes de contenu, pour attirer et engager l&apos;audience de votre entreprise.</Block>
                    <Block titre={"Design et branding "} color="#F6AA06"> Nous créons des designs visuels attrayants et cohérents pour renforcer l&apos;identité de marque de votre entreprise.</Block>
                    <Block titre={"Événements et activations "} color="#F6AA06">Nous organisons des événements et des activations pour promouvoir votre entreprise et créer des expériences mémorables pour le public cible.</Block>
                    <Block titre={"Communication interne  "} color="#F6AA06"> Nous aidons à améliorer la communication interne au sein de votre entreprise, en veillant à ce que tous les employés soient alignés sur les messages clés de l&apos;entreprise.</Block>
                </div>
                <div className={style.avantage_conclusion}>En travaillant avec notre agence de publicité, une entreprise peut bénéficier de l&apos;expertise et de l&apos;expérience de professionnels du marketing pour créer des campagnes publicitaires percutantes et atteindre efficacement son public cible.</div>
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

