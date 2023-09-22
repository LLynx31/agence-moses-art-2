import { motion } from "framer-motion";
import Image from "next/image";
import stylesService from "@/styles/Service.module.css"


function DivService({img, imgAlt, titre, children}){

    const animImg = {
        hidden: {
            opacity: 0,
            y: 150
        },

        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
            }

        }
    }

    const animText = {
        hidden: {
            opacity: 0,
        },

        visible: {
            opacity: 1,
            transition: {
                duration: 0.2,
            }
        }
    }

    return (
        <div className={stylesService.service}>
            <motion.div variants={animImg}  viewport={{once: true}} className={stylesService.div_img} >
                <Image className={stylesService.img_service} src={img} alt={imgAlt} height={100} width={100}></Image>
            </motion.div>

            <motion.div variants={animText}  viewport={{once: true}}>
                <h1 className={stylesService.titre_service}>
                    {titre}
                </h1>
                <p className={stylesService.description_service}>
                    {children}
                </p>
                <div className={stylesService.barre}></div>
            </motion.div>
            
        </div>
    )
}

export default function Service() {

    const animDiv = {
        hidden: {
           opacity: 0,
           y: 100
        },

        visible: {
            opacity: 1,
            y:0,
            transition: {
                delay:0.1,
                when: "beforeChildren",
                staggerChildren: 0.5,
                duration:0.2
            }
        }
    }

    const animDivService = {
        hidden: {
            opacity: 0
        },

        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                delayChildren: 0.1,
                staggerChildren: 0.5,
            }
        }
    }

    return (

            <motion.div variants={animDiv} initial="hidden" whileInView="visible" viewport={{ once: true }} className={stylesService.layout_services}>
                
                <motion.div variants={animDivService} ><DivService img={'/assets/logos_service/communication.svg'} alt={'logo communication'} titre={'Conseils en communication 360'}>Nous vous conseillons sur des stratégies qui mettent à profit tous les canaux de communication disponibles entre vous et votre cible.</DivService></motion.div>

                <motion.div variants={animDivService}><DivService img={'/assets/logos_service/publicité.svg'} alt={'logo publicité'} titre={'Publicité'}>Nous develeppons des pubs dans le but d’influencer le consommateur vis-à-vis de votre marque, votre produit ou de vos services afin d’ augmenter votre notoriété, de développer l’image, inciter à l’achat. </DivService></motion.div>

                <motion.div variants={animDivService}><DivService img={'/assets/logos_service/marketing.svg'} alt={'logo communication'} titre={'Marketing digital'}>Nous avons la stratégie marketing indéniable qu’il vous faut pour vendre vos produits et promouvoir votre marque auprès des consommateurs </DivService></motion.div>

                <motion.div variants={animDivService}><DivService img={'/assets/logos_service/dev.svg'} alt={"logo developpement"} titre={"Developpement d'appli web et mobile"}>Nous concevons des applications web et mobiles sur mésure dans des designs épurés et pour de meilleurs expériences utilisateurs.</DivService></motion.div>

                <motion.div variants={animDivService}><DivService img={'/assets/logos_service/design.svg'} alt={'logo design'} titre={'Design Graphique'}> Nous sommes les concepteurs visuels des solutions de communication :  nous intervenons dans l’élaboration des supports de communication variés (identité visuelle d’entreprise ou d’un produit, affiches, livres, revues, brochures…)</DivService></motion.div>

                <motion.div variants={animDivService}><DivService img={'/assets/logos_service/digital.svg'} alt={'logo digitalisation'} titre={'Digitalisation des Services'}> Nous sommes des  intégrateurs de technologies numériques dans les processus commerciaux/sociaux, dans le but de les améliorer et de faire performer les entreprises.</DivService></motion.div>

                <motion.div variants={animDivService}><DivService img={'/assets/logos_service/visuelle.svg'} alt={'logo visuelle'} titre={'Production Audiovisuelle'}>Cadrage , montage video , animation 2D et 3D , assistance en réalisation , direction en photographie , pose de voix off , redaction de script , couverture médiatique d’event.</DivService></motion.div>

                <motion.div variants={animDivService}><DivService img={'/assets/logos_service/evenement.svg'} alt={'logo evenement'} titre={'Events'}>Nous vous conseillons sur des stratégies qui mettent à profit tous les canaux de communication disponibles entre vous et votre cible.</DivService></motion.div>

                <motion.div variants={animDivService}><DivService img={'/assets/logos_service/impression.svg'} alt={'logo communication'} titre={'Impression sur tout support'}>Parce que vos réalisations mérittent d’etre imprimés sur des supports de qualité , nous gérons la production de tout type de support de communication.</DivService></motion.div>

                
            </motion.div>
        
    )
    
}