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
            <Banner titre={'Digitalisation des services'} imgService={'/assets/details_logos_service/digitalisation.png'}> <span>Digitalisez*</span> vos services et <br></br> restez compétitif.</Banner>

            <Description>Nous vous accompagnons dans votre transformation digitale pour améliorer votre efficacité, votre productivité et votre satisfaction client.Nos experts vous proposent des solutions adaptées à votre secteur d&quot;activité et à vos besoins.</Description>

            <div className={style.avantage}>
                <h1 className={style.avantage_titre}>Nos avantages</h1>  
                <p className={style.avantage_description}>Les avantages de l&apos;utilisation des services de notre agence de digitalisation sont nombreux :</p>

                <div className={style.avantage_block_layout}>
                    <Block titre={"Amélioration de l'expérience client"} color="#F6AA06"> La digitalisation permet de proposer des services en ligne, de faciliter les transactions et d&apos;offrir une expérience client plus fluide et personnalisée.</Block>
                    <Block titre={"Augmentation de l'efficacité opérationnelle"} color="#F6AA06"> La digitalisation permet d&apos;automatiser des processus, de réduire les tâches manuelles et d&apos;améliorer l&apos;efficacité globale de l&apos;entreprise.</Block>
                    <Block titre={"Accès à de nouvelles opportunités de croissance "} color="#F6AA06"> La digitalisation ouvre de nouvelles possibilités commerciales, telles que la vente en ligne, le marketing numérique et l&apos;expansion sur de nouveaux marchés.</Block>
                    <Block titre={"Collecte et analyse de données "} color="#F6AA06"> La digitalisation permet de collecter et d&apos;analyser des données précieuses sur les clients, les opérations et les performances, ce qui permet de prendre des décisions plus éclairées.</Block>
                </div>
                
            </div> 


            <div className={style.processus}>
                <h1 className={style.processus_titre} style={{marginTop: '100px', marginBottom: '50px'}}>Processus d&apos;utlisation</h1>   

                <div className={style.processus_block_layout}>
                    <Block titre={"Évaluation des besoins "} color="#0F8383CF">Vous discutez avec nous de vos objectifs, de vos défis et de vos besoins spécifiques en matière de digitalisation.</Block>
                    <Block titre={"Analyse et planification"} color="#0F8383CF"> Nous analysons vos processus existants, identifions les opportunités d&apos;amélioration et élaborons un plan de digitalisation adapté à votre entreprise.</Block>
                    <Block titre={"Formation et support "} color="#0F8383CF"> Nous formons votre équipe à l&apos;utilisation des nouveaux outils et assurons un support technique continu pour garantir une transition réussie vers la digitalisation.</Block>
                    <Block titre={"Développement et mise en œuvre"} color="#0F8383CF"> Nous développons les solutions numériques nécessaires, telles que des applications, des plateformes en ligne ou des outils de gestion, et les mettons en œuvre dans votre entreprise.</Block>
                    <Block titre={"Suivi et optimisation "} color="#0F8383CF">Nous surveillons les performances de vos nouveaux services numériques, recueillons des données et apportons des ajustements pour optimiser leur efficacité.</Block>
                </div>
                
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

