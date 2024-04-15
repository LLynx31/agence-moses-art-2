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
            <Banner titre={'Events'} imgService={'/assets/detail_logos_service/events.png'}> Créons ensemble un <span>événement*</span> <br></br> inoubliable.</Banner>

            <Description>Nous vous aidons à créer des événements uniques et marquants.Notre équipe de professionnels vous accompagne dans la conception, l&pos;organisation et la réalisation de votre événement.</Description>

            <div className={style.avantage}>
                <h1 className={style.avantage_titre}>Nos avantages</h1>  
                <p className={style.avantage_description}>Les avantages de faire appel à notre agence événementielle sont les suivants :</p>

                <div className={style.avantage_block_layout}>
                    <Block titre={"Expertise professionnelle"} color="#F6AA06"> Nous disposons d&apos;une expertise et d&apos;une expérience approfondies dans la planification et l&apos;organisation d&apos;événements. Nous connaissons les meilleures pratiques, les tendances du marché et les fournisseurs fiables, ce qui garantit la qualité et le succès de votre événement.</Block>
                    <Block titre={"Gain de temps et d'énergie"} color="#F6AA06"> Organiser un événement demande beaucoup de temps, d&apos;énergie et de ressources. En confiant cette tâche à notre agence, vous pouvez vous concentrer sur d&apos;autres aspects importants de votre vie personnelle ou professionnelle, tout en ayant l&apos;assurance que votre événement est entre de bonnes mains.</Block>
                    <Block titre={"Gestion du budget"} color="#F6AA06">Nous sommes habitués à travailler avec des budgets spécifiques et nous pouvons vous aider à optimiser vos dépenses pour obtenir le meilleur rapport qualité-prix. Nous avons également des relations établies avec des fournisseurs et pouvons négocier des tarifs préférentiels pour vous.</Block>
                    <Block titre={"Créativité et innovation "} color="#F6AA06"> Nous sommes réputées pour notre créativité et notre capacité à concevoir des événements uniques et mémorables. Nous apportons des idées novatrices, des concepts originaux et des solutions personnalisées pour répondre à vos besoins et impressionner vos invités.</Block>
                    <Block titre={"Gestion logistique "} color="#F6AA06">  L&apos;organisation d&apos;un événement implique de nombreux détails logistiques tels que la réservation de lieux, la coordination des horaires, la gestion des fournisseurs, la logistique du transport, etc.</Block>
                    
                </div>
                
            </div> 


            <div className={style.processus}>
                <h1 className={style.processus_titre} style={{marginTop: '100px', marginBottom: '50px'}}>Processus d&apos;utlisation</h1>   
                <p className={style.avantage_description}>Le processus d&apos;utilisation de notre agence événementielle :</p>

                <div className={style.processus_block_layout}>
                    <Block titre={"Etape 1"} color="#0F8383CF">Vous nous faites part de vos besoins et objectifs pour l&apos;événement.</Block>
                    <Block titre={"Etape 2"} color="#0F8383CF">  Vous nous rencontrez pour discuter de vos attentes et obtenir un devis. </Block>
                    <Block titre={"Etape 3"} color="#0F8383CF"> Vous signez un contrat avec nous et payez les frais convenus.</Block>
                    <Block titre={"Etape 4"} color="#0F8383CF">Vous collaborez avec nous pour affiner les détails de l&apos;événement, comme le thème, la logistique et les activités.</Block>
                    <Block titre={"Etape 5"} color="#0F8383CF">Vous nous laissez gérer la planification, la coordination et l&apos;exécution de l&apos;événement.</Block>
                    <Block titre={"Etape 6"} color="#0F8383CF"> Vous profitez de votre événement sans vous soucier des détails, sachant que nous nous occupons de tout.</Block>
                    <Block titre={"Etape 7"} color="#0F8383CF">Après l&apos;événement, vous évaluez notre prestation et nous donnez des commentaires pour améliorer les futurs événements.</Block>
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

