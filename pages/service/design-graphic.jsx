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
                <p className={style.avantage_description}>Les avantages de l&apos;utilisation des services de notre agence de digitalisation sont nombreux :</p>

                <div className={style.avantage_block_layout}>
                    <Block titre={"Amélioration de l'expérience client"} color="#F6AA06">  La digitalisation permet de proposer des services en ligne, de faciliter les transactions et d&apos;offrir une expérience client plus fluide et personnalisée.</Block>
                    <Block titre={"Augmentation de l'efficacité opérationnelle "} color="#F6AA06"> La digitalisation permet d&apos;automatiser des processus, de réduire les tâches manuelles et d&apos;améliorer l&apos;efficacité globale de l&apos;entreprise.</Block>
                    <Block titre={"Accès à de nouvelles opportunités de croissance "} color="#F6AA06">  La digitalisation ouvre de nouvelles possibilités commerciales, telles que la vente en ligne, le marketing numérique et l&apos;expansion sur de nouveaux marchés.</Block>
                    <Block titre={"Collecte et analyse de données "} color="#F6AA06">  La digitalisation permet de collecter et d&apos;analyser des données précieuses sur les clients, les opérations et les performances, ce qui permet de prendre des décisions plus éclairées.</Block>
                    
                </div>

                <div className={style.avantage_conclusion}>En utilisant notre service d&apos;impression sur tout support, vous pouvez obtenir des supports imprimés de haute qualité, personnalisés et adaptés à vos besoins, tout en vous libérant du temps et de l&apos;effort nécessaires pour les produire vous-même.</div>
                
            </div> 


            <div className={style.processus}>
                <h1 className={style.processus_titre} style={{marginTop: '100px', marginBottom: '50px'}}>Processus d&apos;utlisation</h1>   

                <div className={style.processus_block_layout}>
                    <Block titre={"Évaluation des besoins  "} color="#0F8383CF"> Vous discutez avec nous de vos objectifs, de vos défis et de vos besoins spécifiques en matière de digitalisation.</Block>
                    <Block titre={"Analyse et planification"} color="#0F8383CF"> Nous analysons vos processus existants, identifions les opportunités d&apos;amélioration et élaborons un plan de digitalisation adapté à votre entreprise.</Block>
                    <Block titre={"Formation et support "} color="#0F8383CF"> Nous formons votre équipe à l&apos;utilisation des nouveaux outils et assurons un support technique continu pour garantir une transition réussie vers la digitalisation.</Block>
                    <Block titre={"Développement et mise en œuvre"} color="#0F8383CF"> Nous développons les solutions numériques nécessaires, telles que des applications, des plateformes en ligne ou des outils de gestion, et les mettons en œuvre dans votre entreprise.</Block>
                    <Block titre={"Suivi et optimisation "} color="#0F8383CF">Nous surveillons les performances de vos nouveaux services numériques, recueillons des données et apportons des ajustements pour optimiser leur efficacité.</Block>
                </div>
                
            </div>

           
            <Offre></Offre>
            

            <ContatezNous></ContatezNous>
            
            <Footer></Footer>
        </div>
    )
}

