import Head from "next/head"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import style from "@/styles/Marketing.module.css"
import ContatezNous from "@/components/Akwaba/ContactezNous"
import Image from "next/image"

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
            <div className={style.layoutBaner}>
                <div className={style.titleBaner}>BANNIERE</div>
            </div>
            <div className={style.sectionLayout}>
                <div className={style.blockLayout} style={{backgroundColor:'#FFC403'}}>
                    <h1 className={style.titleBlock}>Exper</h1>
                    <p className={style.paragraphe}>Nous disposons d'une expertise et d'une expérience approfondies dans la planification et l'organisation d'événements. Nous connaissons les meilleures pratiques, les tendances du marché et les fournisseurs fiables, ce qui garantit la qualité et le succès de votre événement.</p>
                </div>
                <div className={style.layoutIcone}><Image width={200} height={200} src={"/assets/IconeService/1446546.png"}></Image></div>
                <div className={style.layoutIcone}><Image width={200} height={200} src={"/assets/IconeService/1134590.png"}></Image></div>
                <div className={style.blockLayout} style={{backgroundColor:'#076965',color:'white'}}>
                    <h1 className={style.titleBlock}>Gain de temps et energie</h1>
                    <p className={style.paragraphe}>Organiser un événement demande beaucoup de temps, d'énergie et de ressources. En confiant cette tâche à notre agence, vous pouvez vous concentrer sur d'autres aspects importants de votre vie personnelle ou professionnelle, tout en ayant l'assurance que votre événement est entre de bonnes mains.</p>
                </div>
                <div className={style.blockLayout} style={{backgroundColor:'#FFC403'}}>
                    <h1 className={style.titleBlock}>Gestion du budget</h1>
                    <p className={style.paragraphe}>Nous sommes habitués à travailler avec des budgets spécifiques et nous pouvons vous aider à optimiser vos dépenses pour obtenir le meilleur rapport qualité-prix. Nous avons également des relations établies avec des fournisseurs et pouvons négocier des tarifs préférentiels pour vous.</p>
                </div>
                <div className={style.layoutIcone}><Image width={200} height={200} src={"/assets/IconeService/1865652.png"}></Image></div>
                <div className={style.layoutIcone}><Image width={200} height={200} src={"/assets/IconeService/1126453.png"}></Image></div>
                <div className={style.blockLayout} style={{backgroundColor:'#076965',color:'white'}}>
                    <h1 className={style.titleBlock}>Créativité et innovation</h1>
                    <p className={style.paragraphe}>Nous sommes réputées pour notre créativité et notre capacité à concevoir des événements uniques et mémorables. Nous apportons des idées novatrices, des concepts originaux et des solutions personnalisées pour répondre à vos besoins et impressionner vos invités.</p>
                </div>    
                <div className={style.blockLayout} style={{backgroundColor:'#FFC403'}}>
                    <h1 className={style.titleBlock}>Gestion logistique</h1>
                    <p className={style.paragraphe}>L'organisation d'un événement implique de nombreux détails logistiques tels que la réservation de lieux, la coordination des horaires, la gestion des fournisseurs, la logistique du transport, etc.</p>
                </div>
                <div className={style.layoutIcone}><Image width={200} height={200} src={"/assets/IconeService/3938366.png"}></Image></div>            
            </div>
            <ContatezNous></ContatezNous>
            
            <Footer></Footer>
        </div>
    )
}

