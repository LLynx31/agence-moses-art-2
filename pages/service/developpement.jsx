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
            <Banner titre={'Developpement web et mobile'} imgService={'/assets/detail_logos_service/dev.png'}> Votre <span>application web et mobile*</span> <br></br> sur-mesure, conçue par des experts</Banner>

            <Description>Notre équipe de professionnels expérimentés vous accompagne à chaque étape de votre projet, de l&quot;idée à la publication.Nous vous proposons une approche collaborative et transparente pour vous garantir une application qui réponde à vos besoins et à ceux de vos utilisateurs</Description>

            <div className={style.avantage}>
                <h1 className={style.avantage_titre}>Nos avantages</h1>  
                <p className={style.avantage_description}>Voici quelques-unes des principales activités <br></br>de notre agence de développement d&apos;applications web et mobile :</p>

                <div className={style.avantage_block_layout}>
                    <Block titre={"Analyse des besoins "} color="#F6AA06">Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins et leurs objectifs commerciaux afin de développer une application adaptée.</Block>
                    <Block titre={"Conception et développement "} color="#F6AA06"> Nous créons une interface utilisateur attrayante et conviviale, tout en développant les fonctionnalités et les caractéristiques de l&apos;application.</Block>
                    <Block titre={"Programmation et codage"} color="#F6AA06"> Nous utilisons des langages de programmation et des outils de développement pour coder l&apos;application et la rendre fonctionnelle.</Block>
                    <Block titre={"Tests et débogages"} color="#F6AA06"> Nous effectuons des tests rigoureux pour nous assurer que l&apos;application fonctionne correctement, corrigeons les erreurs et les bugs éventuels.</Block>
                    <Block titre={"Déploiement et maintenance"} color="#F6AA06">Nous déployons l&apos;application sur les plateformes web et mobiles appropriées (comme iOS, Android, etc.) et assurons la maintenance continue de l&apos;application pour garantir sa performance et sa sécurité.</Block>
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

