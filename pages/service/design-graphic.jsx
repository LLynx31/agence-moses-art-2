import { Banner, Description, Block  } from "@/components/components-descrption-service"
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

            <div className={style.avantage}>
                <h1 className={style.avantage_titre}>Nos avantages</h1>  
                <p className={style.avantage_description}>Quelques avantages de l&apos;utilisation des services de notre agence de design graphique :</p>

                <div className={style.avantage_block_layout}>
                    <Block titre={"Créativité et expertise"} color="#F6AA06"> Nous avons une équipe de designers talentueux et créatifs qui sont experts dans l&apos;utilisation des principes de design pour créer des visuels accrocheurs et esthétiquement plaisants.</Block>
                    <Block titre={"Image de marque cohérente"} color="#F6AA06"> Nous aidons à créer une identité visuelle cohérente pour votre entreprise, en utilisant des éléments de design tels que des couleurs, des typographies et des logos, ce qui renforce la reconnaissance de la marque.</Block>
                    <Block titre={"Professionnalisme et qualité "} color="#F6AA06"> Nous avons l&apos;expérience et les compétences nécessaires pour fournir des designs de haute qualité qui répondent aux normes professionnelles. Cela donne une image positive de votre entreprise et renforce sa crédibilité.</Block>
                    <Block titre={"Gain de temps  "} color="#F6AA06"> En confiant le travail de design à notre agence spécialisée, votre entreprise peut économiser du temps et se concentrer sur ses activités principales, tandis que les designers se chargent de créer des designs percutants.</Block>
                    <Block titre={"Adaptation aux tendances"} color="#F6AA06">Nous sommes au courant des dernières tendances en matière de design et nous pouvons créer des visuels modernes et à la pointe de la technologie qui captent l&apos;attention du public.</Block>
                    
                </div>

                <div className={style.avantage_conclusion}>Le processus d&apos;utilisation de notre agence de design graphique se déroule en plusieurs étapes :</div>
                
            </div> 


            <div className={style.processus}>
                <h1 className={style.processus_titre} style={{marginTop: '100px', marginBottom: '50px'}}>Processus d&apos;utlisation</h1>   

                <div className={style.processus_block_layout}>
                    <Block titre={"Briefing"} color="#0F8383CF"> Vous nous rencontrez pour discuter de vos besoins, objectifs et attentes en matière de design. Vous partagez des informations sur votre entreprise, votre public cible et vos idées créatives.</Block>
                    <Block titre={"Recherche et analyse"} color="#0F8383CF"> Nous effectuons des recherches sur votre secteur d&apos;activité, votre concurrence et les tendances actuelles du design afin de mieux comprendre votre environnement et de proposer des concepts pertinents.</Block>
                    <Block titre={"Concept et création"} color="#0F8383CF"> Les designers de notre agence commencent à travailler sur des concepts de design en tenant compte des informations recueillies lors du briefing. Ils créent des maquettes et des prototypes pour vous présenter leurs idées.</Block>
                    <Block titre={"Révisions et feedback"} color="#0F8383CF"> Vous examinez les concepts proposés et vous nous donnez votre feedback. Vous pouvez demander des modifications ou des ajustements pour vous assurer que le design correspond à vos attentes.</Block>
                    <Block titre={"Finalisation et livraison "} color="#0F8383CF"> Une fois que vous êtes satisfait du design, nous finalisons les fichiers et nous vous les livrons dans les formats appropriés pour une utilisation dans différents supports de communication.</Block>
                </div>
                <div className={style.avantage_conclusion}>En utilisant les services de notre agence de design graphique, votre entreprise bénéficie d&apos;un design professionnel et attrayant qui renforce son image de marque, attire l&apos;attention du public et communique efficacement son message.</div>
            </div>

           
            <Offre></Offre>
            

            <ContatezNous></ContatezNous>
            
            <Footer></Footer>
        </div>
    )
}

