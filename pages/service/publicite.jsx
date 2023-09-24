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
            <Banner titre={'Publicite'} imgService={'/assets/detail_logos_service/publicite.png'}> Faites connaître votre entreprise à <br></br> l&apos;aide de nos stratégies de <span>publicité*</span> efficaces.</Banner>

            <Description>Moses Art vous accompagne dans votre stratégie publicitaire pour atteindre vos objectifs.Nos experts vous proposent des campagnes publicitaires efficaces, adaptées à votre budget et à vos objectifs.Nous vous accompagnons dans la création de supports publicitaires (affiches, flyers, vidéos, etc.), la diffusion de vos campagnes sur différents supports (print, web, télévision, radio, etc.) et le suivi et l&apos;analyse des résultats de vos campagnes.</Description>

            <div className={style.avantage}>
                <h1 className={style.avantage_titre}>Nos avantages</h1>  
                <p className={style.avantage_description}>Voici quelques-unes des principales activités
                de notre agence de publicité :</p>

                <div className={style.avantage_block_layout}>
                    <Block titre={"Stratégie publicitaire"} color="#F6AA06">Nous travaillons en étroite collaboration avec les clients pour comprendre leurs objectifs commerciaux et développer une stratégie publicitaire efficace.</Block>
                    <Block titre={"Création publicitaire"} color="#F6AA06"> Nous concevons des publicités percutantes et attrayantes, que ce soit des annonces imprimées, des spots télévisés, des publicités en ligne ou d&apos;autres formes de publicité.</Block>
                    <Block titre={"Planification média"} color="#F6AA06"> Nous identifions les meilleurs canaux de communication pour atteindre le public cible de l&apos;entreprise et planifions l&apos;allocation des dépenses publicitaires en conséquence.</Block>
                    <Block titre={"Achat média"} color="#F6AA06">. Nous négocions et achetions des espaces publicitaires dans les médias sélectionnés, tels que les journaux, les magazines, la télévision, la radio, les sites web, les réseaux sociaux, etc.</Block>
                    <Block titre={"Suivi et évaluation"} color="#F6AA06"> Nous mesurons l&apos;efficacité des campagnes publicitaires en suivant les performances, en analysant les données et en fournissant des rapports détaillés à nos clients.</Block>
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

