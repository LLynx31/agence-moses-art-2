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
            <Banner titre={'Production audiovisuelle'} imgService={'/assets/detail_logos_service/audio_visuelle.png'}>Racontez votre histoire de manière unique et captivante.</Banner>

            <Description>Notre équipe de professionnels expérimentés vous accompagne à chaque étape de votre projet, de l&apos;écriture au montage.Nous vous proposons des solutions adaptées à votre budget et à vos objectifs.</Description>

            <div className={style.avantage}>
                <h1 className={style.avantage_titre}>Nos avantages</h1>  
                <p className={style.avantage_description}>Les avantages de l&apos;utilisation de notre agence de production audiovisuelle sont nombreux :</p>

                <div className={style.avantage_block_layout}>
                    <Block titre={"Professionnalisme"} color="#F6AA06"> Nous disposons des compétences et de l&apos;expertise nécessaires pour produire des contenus de haute qualité, avec une attention aux détails et une esthétique visuelle soignée.</Block>
                    <Block titre={"Créativité"} color="#F6AA06">Nous sommes composés de professionnels créatifs qui apportent des idées originales et innovantes à vos projets, en les rendant plus attrayants et mémorables.</Block>
                    <Block titre={"Équipement de pointe "} color="#F6AA06"> Nous disposons d&apos;équipements et de technologies de pointe pour capturer et produire des vidéos de haute qualité, offrant une expérience visuelle immersive à votre public.</Block>
                    <Block titre={"Gain de temps et d'efforts "} color="#F6AA06">En confiant la production de vos contenus audiovisuels à notre agence, vous pouvez vous concentrer sur d&apos;autres aspects de votre entreprise, tandis que nous gerons tous les aspects techniques et créatifs.</Block>
                    <Block titre={"Cohérence et professionnalisme de la marque "} color="#F6AA06"> Nous vous aidons à créer une identité visuelle cohérente et professionnelle pour votre marque, en alignant vos contenus vidéo avec votre image de marque et vos objectifs marketing.</Block>
                    <Block titre={"Large diffusion"} color="#F6AA06">Nous pouvons également vous aider à diffuser vos contenus sur différentes plateformes, telles que les réseaux sociaux, les sites web, la télévision, etc., pour atteindre un public plus large et maximiser l&apos;impact de vos vidéos.</Block>
                </div>
                
            </div> 


            <div className={style.processus}>
                <h1 className={style.processus_titre} style={{marginTop: '100px', marginBottom: '50px'}}>Processus d&apos;utlisation</h1>   
                <p className={style.avantage_description}>Le processus d&apos;utilisation de notre agence de production audiovisuelle peut varier en fonction de vos besoins spécifiques, mais généralement, il suit les étapes suivantes :</p>

                <div className={style.processus_block_layout}>
                    <Block titre={"Définition des besoins "} color="#0F8383CF">Vous discutez avec nous de vos objectifs, de votre message, de votre public cible et de vos attentes pour le projet audiovisuel.</Block>
                    <Block titre={"Élaboration du concept "} color="#0F8383CF"> Nous travaillons avec vous pour développer un concept créatif et une stratégie de production qui répondent à vos besoins et à vos objectifs.</Block>
                    <Block titre={"Pré-production "} color="#0F8383CF">Cette étape implique la planification détaillée du projet, y compris la sélection des lieux de tournage, le casting des acteurs (si nécessaire), l&apos;élaboration d&apos;un scénario ou d&apos;un storyboard, la création d&apos;un planning de production, etc.</Block>
                    <Block titre={" Production"} color="#0F8383CF"> C&apos;est le moment où les tournages ont lieu. Nous gérons la logistique, la direction artistique, la captation des images, l&apos;enregistrement du son, etc., en utilisant nos équipements professionnels.</Block>
                    <Block titre={"Post-production "} color="#0F8383CF">Après le tournage, nous procédons au montage vidéo, à l&apos;ajout d&apos;effets spéciaux, à l&apos;étalonnage des couleurs, à l&apos;enregistrement de la voix off, à l&apos;ajout de musique et à d&apos;autres étapes de post-production pour donner vie à votre projet.</Block>
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

