import { Banner, Description, Block } from "@/components/components-descrption-service"
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

            <div className={style.avantage}>
                <h1 className={style.avantage_titre}>Nos avantages</h1>  
                <p className={style.avantage_description}>Voici quelques-uns des services que notre <br></br>agence de conseil en communication 360 vous offre :</p>

                <div className={style.avantage_block_layout}>
                    <Block titre={"Expertise spécialisée"} color="#F6AA06"> Nous disposons d&apos;une expertise approfondie dans le domaine du marketing en ligne. Nous connaissons les meilleures pratiques, les tendances actuelles et les stratégies efficaces pour atteindre les objectifs de croissance en ligne.</Block>
                    <Block titre={"Gain de temps et d'énergie"} color="#F6AA06">Externaliser votre marketing digital à notre agence vous permet de vous concentrer sur d&apos;autres aspects de votre entreprise, tandis que les professionnels s&apos;occupent de vos campagnes de marketing en ligne.</Block>
                    <Block titre={"Accès à des outils et des ressources avancés"} color="#F6AA06">Nous avons accès à des outils et des ressources spécialisés qui peuvent améliorer l&apos;efficacité et les résultats de vos campagnes en ligne.</Block>
                    <Block titre={"Flexibilité et adaptation "} color="#F6AA06">Nous sommes capables de nous adapter rapidement aux changements de l&apos;environnement en ligne et aux besoins de votre entreprise. Nous ajustons des stratégies en fonction des résultats et des nouvelles opportunités.</Block>
                    <Block titre={"Mesure des résultats"} color="#F6AA06"> Nous utilisons des outils d&apos;analyse pour mesurer les performances de vos campagnes en ligne. Cela vous permet de suivre vos progrès, d&apos;identifier ce qui fonctionne et d&apos;apporter des ajustements si nécessaire.</Block>
                </div>
                
            </div> 


            <div className={style.processus}>
                <h1 className={style.processus_titre} style={{marginTop: '100px', marginBottom: '50px'}}>Processus d&apos;utlisation</h1> 

                <div className={style.processus_block_layout}>
                    <Block titre={" Évaluation des besoins"} color="#0F8383CF">Vous discutez de vos objectifs commerciaux avec nous et déterminez les services de marketing en ligne dont vous avez besoin.</Block>
                    <Block titre={"Planification de la stratégie "} color="#0F8383CF">Nous développons une stratégie de marketing digital sur mesure pour votre entreprise, en tenant compte de votre marché cible, de vos concurrents et de vos ressources.</Block>
                    <Block titre={"Mise en œuvre des campagnes "} color="#0F8383CF">Nous mettons en place les différentes campagnes de marketing en ligne, telles que la publicité en ligne, le référencement, les médias sociaux, etc. Nous créons également des contenus pertinents pour attirer votre public cible.</Block>
                    <Block titre={"Optimisation et suivi "} color="#0F8383CF">Nous surveillons les performances de vos campagnes en ligne à l&apos;aide d&apos;outils d&apos;analyse. Nous ajustons les stratégies en fonction des résultats et des tendances du marché pour maximiser les résultats.</Block>
                    <Block titre={"Rapports et analyses"} color="#0F8383CF">Nous vous fournissons des rapports réguliers sur les performances de vos campagnes en ligne. Ces rapports vous permettent de suivre vos progrès et de prendre des décisions éclairées pour l&apos;avenir.</Block>
                    <Block titre={"Collaboration continue"} color="#0F8383CF">Vous travaillez en étroite collaboration avec nous pour apporter des ajustements, explorer de nouvelles opportunités et optimiser vos efforts de marketing en ligne.</Block>
                </div>
                
            </div> 

            <Offre></Offre>

            <ContatezNous></ContatezNous>
            
            <Footer></Footer>
        </div>
    )
}

