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
                    <h1 className={style.titleBlock}>Marketing Digital</h1>
                    <p className={style.paragraphe}>Nous disposons d'une expertise approfondie dans le domaine du marketing en ligne. Nous connaissons les meilleures pratiques, les tendances actuelles et les stratégies efficaces pour atteindre les objectifs de croissance en ligne.</p>
                </div>
                <div></div>
                <div></div>
                <div className={style.blockLayout} style={{backgroundColor:'#076965',color:'white'}}>
                    <h1 className={style.titleBlock}>Gain de temps et energie</h1>
                    <p className={style.paragraphe}>Nous disposons d'une expertise approfondie dans le domaine du marketing en ligne. Nous connaissons les meilleures pratiques, les tendances actuelles et les stratégies efficaces pour atteindre les objectifs de croissance en ligne.</p>
                </div>
                <div className={style.blockLayout} style={{backgroundColor:'#FFC403'}}>
                    <h1 className={style.titleBlock}>Accès à des outils et des ressources avancés </h1>
                    <p className={style.paragraphe}>Nous avons accès à des outils et des ressources spécialisés qui peuvent améliorer l'efficacité et les résultats de vos campagnes en ligne.</p>
                </div>
                <div></div>
                <div></div>
                <div className={style.blockLayout} style={{backgroundColor:'#076965',color:'white'}}>
                    <h1 className={style.titleBlock}>Flexibilité et adaptation</h1>
                    <p className={style.paragraphe}>Nous sommes capables de nous adapter rapidement aux changements de l'environnement en ligne et aux besoins de votre entreprise. Nous ajustons des stratégies en fonction des résultats et des nouvelles opportunités.</p>
                </div>
                
                <div className={style.blockLayout} style={{backgroundColor:'#FFC403'}}>
                    <h1 className={style.titleBlock}>Mesure des resultats </h1>
                    <p className={style.paragraphe}>Nous utilisons des outils d'analyse pour mesurer les performances de vos campagnes en ligne. Cela vous permet de suivre vos progrès, d'identifier ce qui fonctionne et d'apporter des ajustements si nécessaire.</p>
                </div>
                <div></div>
              
            </div>
            <ContatezNous></ContatezNous>
            
            <Footer></Footer>
        </div>
    )
}

