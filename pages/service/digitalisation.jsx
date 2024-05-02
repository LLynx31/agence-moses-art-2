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
            <div className={style.layoutBaner}>
                <div className={style.titleBaner}>BANNIERE</div>
            </div>
            <div className={style.sectionLayout}>
                <div className={style.blockLayout} style={{backgroundColor:'#FFC403'}}>
                    <h1 className={style.titleBlock}>Amélioration de l'expertise client</h1>
                    <p className={style.paragraphe}>La digitalisation permet de proposer des services en ligne, de faciliter les transactions et d'offrir une expérience client plus fluide et personnalisée.</p>
                </div>
                <div></div>
                <div></div>
                <div className={style.blockLayout} style={{backgroundColor:'#076965',color:'white'}}>
                    <h1 className={style.titleBlock}>Augmentation de l'efficacité operationnelle</h1>
                    <p className={style.paragraphe}>La digitalisation permet d'automatiser des processus, de réduire les tâches manuelles et d'améliorer l'efficacité globale de l'entreprise.</p>
                </div>
                <div className={style.blockLayout} style={{backgroundColor:'#FFC403'}}>
                    <h1 className={style.titleBlock}>Accès à de nouvelles opportunités de croissance</h1>
                    <p className={style.paragraphe}>La digitalisation ouvre de nouvelles possibilités commerciales, telles que la vente en ligne, le marketing numérique et l'expansion sur de nouveaux marchés.</p>
                </div>
                <div></div>
                <div></div>
                <div className={style.blockLayout} style={{backgroundColor:'#076965',color:'white'}}>
                    <h1 className={style.titleBlock}>Collecte et analyse de données</h1>
                    <p className={style.paragraphe}>Nous effectuons des tests rigoureux pour nous assurer que l'application fonctionne correctement, corrigeons les erreurs et les bugs éventuels.</p>
                </div>                
            </div>
            <ContatezNous></ContatezNous>
            
            <Footer></Footer>
        </div>
    )
}

