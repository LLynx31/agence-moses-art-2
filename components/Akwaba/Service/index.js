import styleService from '../../../styles/Akwaba/Service.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'
function Service({titre, children}){
    return(
        <div className={styleService.layout_service}>
            <h1 className={styleService.titre_service}>{titre}</h1>
            <p className={styleService.description_service}>{children}</p>
        </div>
    )
}

function NosService({number, children}){
    return(
        <div className={styleService.layout_nos_services}>
            <div className={styleService.number}>{number}</div>
            <div className={styleService.nos_service}>
                <ul>
                    {children}
                </ul>
            </div>
        </div>
    )
}
export default function SectionService() {
    const illustration1 = '/assets/Group101.svg'
    const illustration2 = '/assets/laplume.svg'

    const animSec = {
        hidden: {
            opacity: 0,
            y: 200,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                delay: 0.1,
                when: "beforeChildren",
                delayChildren: 0.2,
                staggerChildren: 0.3
            }
        }
    }


    const animTop = {
        hidden: {
            opacity: 0,
            x: 50
        },

        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6
            }
        }

    }


    const animService = {
        hidden: {
            opacity: 0,
            x: -100
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
            }
        }
    }
    return (
        <motion.div variants={animSec} initial="hidden" whileInView="visible" viewport={{once: true}} className={styleService.layout_section}>
            <Image loading='lazy' className={styleService.illustration1} alt='illustration' src={illustration1} width={250} height={250}></Image>
            <Image loading='lazy' className={styleService.illustration2} alt='illustration' src={illustration2} width={500} height={500}></Image>
            <motion.div variants={animTop} className={styleService.layout_top}>
                <motion.div className={styleService.section_introduction}
                 style={{
                    fontFamily: "AsgardTrial,Montserrat",
                    fontSize: "40px",
                  }} >Nos services</motion.div>
                <h1 className={styleService.section_title}>Nos différents Services</h1>
                <p className={styleService.description_section}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</p>
            </motion.div>
            
            <motion.div className={styleService.layout_bottom}>
                    <motion.div variants={animService} viewport={{once: true}}  className={styleService.layout_bottom_div}>
                    <Service titre={'Marketing Digital'}>
                    Nous avons la stratégie marketing indéniable qu’il vous faut pour vendre vos produits et promouvoir votre marque auprès des consommateurs 
                    </Service>
                    <NosService number={'01'}>
                        <li>SEO</li>
                        <li>SEA</li>
                        <li>E-mailing</li>
                    </NosService>
                    </motion.div>
                    <motion.div variants={animService}  viewport={{once: true}}  className={styleService.layout_bottom_div}>
                    <Service titre={'Developpement d’appli web et mobile'}>
                    Nous concevons des applications web et
                    mobiles sur mésure dans des designs épurés et pour de meilleurs expériences utilisateurs
                    </Service>
                    <NosService number={'02'}>
                        <li>Interface Mobile</li>
                        <li>Interface web</li>
                    </NosService>
                    </motion.div>
                    <motion.div variants={animService} viewport={{once: true}}  className={styleService.layout_bottom_div}>
                    <Service titre={'Conseil communication 360'}>
                    Nous vous conseillons sur des  stratégies qui mettent à profit tous les canaux de communication disponibles entre vous et votre cible.
                    </Service>
                    <NosService number={'03'}>
                        <li>Relation publiques</li>
                        <li>Marketing numéring</li>
                        <li>Campagne publicitaire</li>
                    </NosService>
                    </motion.div>
                    <motion.div variants={animService} viewport={{once: true}} className={styleService.layout_bottom_div}>
                    <Service titre={'Design Graphique'}>
                    Nous sommes les concepteurs visuels des solutions de communication :  nous intervenons dans l&quot;élaboration des supports de communication variés (identité visuelle d&quot;entreprise ou d&quot;un produit, affiches, livres, revues, brochures…)
                    </Service>
                    <NosService number={'04'}>
                        <li>Illustration</li>
                        <li>Motion design 2D, 3D</li>
                    </NosService>
                    </motion.div> 
                    <motion.div variants={animService} viewport={{once: true}}  className={styleService.layout_bottom_div}>

                    </motion.div>

                    <motion.div variants={animService} viewport={{once: true}}  className={styleService.layout_bottom_div}>
                    <Service titre={'Digitalisation des services'}>
                    Nous sommes les concepteurs visuels des solutions de communication :  nous intervenons dans l&quot;élaboration des supports de communication variés (identité visuelle d&quot;entreprise ou d&quot;un produit, affiches, livres, revues, brochures…)
                    </Service>
                    <NosService number={'05'}>
                        <li>Numérisation</li>
                        <li>Automatisation des processus</li>
                    </NosService>
                    </motion.div>

                    <motion.div variants={animService} viewport={{once: true}}  className={styleService.layout_bottom_div}>
                    <Service titre={'Production Audiovisuelle'}>
                    Cadrage , montage video , animation 2D et 3D , assistance en réalisation , direction en photographie , pose de voix off , redaction de script , couverture médiatique d’event.
                    </Service>
                    <NosService number={'06'}>
                        <li>Storyboard</li>
                        <li>Montage</li>
                    </NosService>
                    </motion.div>

                    <motion.div variants={animService} viewport={{once: true}}  className={styleService.layout_bottom_div}>
                    <Service titre={'Publicité'}>
                    Nous develeppons des pubs dans le but d&quot;influencer le consommateur vis-à-vis de votre marque, votre produit ou de vos services afin d’ augmenter votre notoriété,de développer l&quot;image, inciter à l&quot;achat. 
                    </Service>
                    <NosService number={'07'}>
                        <li>Promotion</li>
                        <li>Campagne</li>
                    </NosService>
                    </motion.div>

                    <motion.div variants={animService} viewport={{once: true}}  className={styleService.layout_bottom_div}>
                    <Service titre={'Events'}>
                    De la conception jusqu’a l’implementation de votre évènement en passant par sa promotion  sur les canaux online et ofline.
                    </Service>
                    <NosService number={'08'}>
                        <li>Organisateur</li>
                        <li>Décoration</li>
                    </NosService>
                    </motion.div>

                    <motion.div variants={animService} viewport={{once: true}}  className={styleService.layout_bottom_div}>
                    <Service titre={'Impression sur tout support'}>
                    Parce que vos réalisations mérittent d’etre imprimés sur des supports de qualité , nous gérons la production de tout type de support de communication
                    </Service>
                    <NosService number={'09'}>
                        <li>Catalogue</li>
                        <li>Dépliant</li>
                    </NosService>
                    </motion.div>
                    
                    
                    
                    
                    
                    
            </motion.div>
        </motion.div> 
    )
}