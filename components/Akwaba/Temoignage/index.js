import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import styleTemoignage from '../../../styles/Akwaba/Temoignage.module.css'
import Image from "next/image";
import { motion } from "framer-motion";

function TemoignageClient ({text, name, groupe}) {
    const illustrationTemoignage = 'assets/illustrationTemoignage.svg'
   return( <div className={styleTemoignage.layout_temoignage_client}>
            <Image alt="trait orange penché" src={illustrationTemoignage} width={'50'} height={'50'}></Image>
            <p className={styleTemoignage.text}>
                {text}
            </p>
        <div className={styleTemoignage.info_client}>
            <div className={styleTemoignage.name}>{name}</div>
            <div className={styleTemoignage.groupe}>{groupe}</div>
        </div>
    </div>)
}


function CarouselTemoignage () {
    return (
            <Carousel className="caroussel"
            autoPlay={true}
            infiniteLoop={true}
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            interval={3000}
            transitionTime={1200}
            >
            
                <TemoignageClient text ={ "Nous sommes très heureux d’avoir travailler avec l’agence Moses Art, une agence très professionnelleavec une équipe dynamique et éfficace" } name={'Jean François'} groupe={'PDG Oracle Groupe'}>
                </TemoignageClient>

                <TemoignageClient text ={ "Nous sommes très heureux d’avoir travailler avec l’agence Moses Art, une agence très professionnelleavec une équipe dynamique et éfficace" } name={'Jean François'} groupe={'PDG Oracle Groupe'}>
                </TemoignageClient>

                <TemoignageClient text ={ "Nous sommes très heureux d’avoir travailler avec l’agence Moses Art, une agence très professionnelleavec une équipe dynamique et éfficace" } name={'Jean François'} groupe={'PDG Oracle Groupe'}>
                </TemoignageClient>


                <TemoignageClient text ={ "Nous sommes très heureux d’avoir travailler avec l’agence Moses Art, une agence très professionnelleavec une équipe dynamique et éfficace" } name={'Jean François'} groupe={'PDG Oracle Groupe'}>
                </TemoignageClient>


                <TemoignageClient text ={ "Nous sommes très heureux d’avoir travailler avec l’agence Moses Art, une agence très professionnelleavec une équipe dynamique et éfficace" } name={'Jean François'} groupe={'PDG Oracle Groupe'}>
                </TemoignageClient>

                <TemoignageClient text ={ "Nous sommes très heureux d’avoir travailler avec l’agence Moses Art, une agence très professionnelleavec une équipe dynamique et éfficace" } name={'Jean François'} groupe={'PDG Oracle Groupe'}>
                </TemoignageClient>

            </Carousel>
    )
}


function Description(){
    const illustration1 = '/assets/temoignageIllustration.png'
    const illustration2 = '/assets/Rectangle115.svg'
    const illustration3 = '/assets/Rectangle116.svg'
    const illustration4 = '/assets/Calque4.svg'
    const animSec = {
        hidden: {
            opacity: 0,
            y: 200
        },

        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3,
                duration: 0.3,
                when: "beforeChildren",
                staggerChildren: 0.3
            }
        }
    }

    const animTitre = {
        hidden: {
            opacity: 0,
            x: 50
        },

        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration:0.3
            }
        }
    }

    const animP = {
        hidden: {
            opacity: 0,
            x: -50
        },

        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration:0.3
            }
            
        }
    }

    const animBtn = {

        hidden: {
            opacity: 0,
            y: 100
        },

        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration:0.3
            }
        },

        onHover: {
            scale: 1.1,
            cursor: "pointer",
            transition: {
                duration: 0.3
            }
        }
        
        }

        
    const animIllustration = {
        whileInView: {
            x: [0, 10,0,-10,0],
            y: [0, 10, 0, -10, 0],
            opacity: [8,9,10],
            rotate: 360,
            transition: {
                repeat: Infinity,
                duration: 8
            }
        },

        hidden: {
            opacity: 0
        },

        
    }

    return(
        <motion.div variants={animSec} whileInView="visible" initial="hidden" viewport={{once: true}} className={styleTemoignage.layout_description} >
            <div className={styleTemoignage.layout_left}>
                <motion.h1 variants={animTitre} className={styleTemoignage.description_title}>Rejoignez La Meilleur Agence <br></br>360 Pour Une Expérience <br></br>100% Créative</motion.h1>

                <motion.p variants={animP}>Si vous êtes à la recherche d’une agence de communication 360 qui peut vous aider à atteindre vos objectifs commerciaux contactez-nous dès aujourd’hui !</motion.p>

                <motion.button variants={animBtn} whileHover="onHover">Contactez Nous</motion.button>
            </div>
            <div className={styleTemoignage.layout_right}>
                <Image alt="illustration" src={illustration1} className={styleTemoignage.illustration_1} width={400}
                height={449}></Image>
                <Image alt="illustration" src={illustration2} className={styleTemoignage.illustration_2} width={400}
                height={400}></Image>
                <Image alt="illustration" src={illustration3} className={styleTemoignage.illustration_3} width={300}
                height={300}></Image>
            </div>
            <motion.img src={illustration4} variants={animIllustration} whileInView="whileInView" alt="illustration" className={styleTemoignage.illustration_4} width={60} height={60}></motion.img>
            <motion.img src={illustration4} variants={animIllustration} whileInView="whileInView" alt="illustration" className={styleTemoignage.illustration_5} width={60} height={60}></motion.img>
        </motion.div>
    )
}

export default function Temoignage() {

    const img_1 = 'assets/img-1.png'
    const img_2 = 'assets/img-2.png'
    const img_3 = 'assets/img-3.png'
    const img_4 = 'assets/img-4.png'
  
    const illustration = '/assets/Calque8.svg'

    const animIllustration = {
        whileInView: {
            x: [0, 10,0,-10,0],
            y: [0, 10, 0, -10, 0],
            opacity: [8,9,10],
            rotate: 360,
            transition: {
                repeat: Infinity,
                duration: 8
            }
        },

        hidden: {
            opacity: 0
        },

        
    }
    
    return(
        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{duration:1, delay:0.3}}>
        
            <div className={styleTemoignage.section}>
                <motion.img variants={animIllustration} initial="hidden" whileInView="whileInView"  alt="illustration" className={styleTemoignage.illustration} src={illustration} width={100} height={100}></motion.img>
                <motion.img variants={animIllustration} initial="hidden" whileInView="whileInView" alt="illustration" className={styleTemoignage.illustration2} src={illustration} width={100} height={100}></motion.img>
                <div className={styleTemoignage.introduction}>Nos Partenaires</div>
                <h1 className={styleTemoignage.titre_section}>Ce Qu’ils Pensent <br></br> De Nous</h1>
            </div>
            <div className={styleTemoignage.layout_temoignage}>
                <h1 className={styleTemoignage.temoignage_title}><span className={styleTemoignage.span}>Témoignages</span><br></br>de nos clients</h1>
                <CarouselTemoignage></CarouselTemoignage>
                <motion.img whileInView={{x: [0,2,4,6,4,2,0,-2,-4,-6,-4,-2,0]}} transition={{duration:10}} className={styleTemoignage.img_1} src={img_1}  alt="personne en mignature"  ></motion.img>
                <motion.img whileInView={{x: [0,2,4,6,4,2,0,-2,-4,-6,-4,-2,0]}} transition={{duration:10}} className={styleTemoignage.img_2} src={img_1}  alt="personne en mignature" ></motion.img>
                <motion.img whileInView={{x: [0,2,4,6,4,2,0,-2,-4,-6,-4,-2,0]}} transition={{duration:10}} className={styleTemoignage.img_3} src={img_2}  alt="personne en mignature" ></motion.img>
                <motion.img whileInView={{x: [0,2,4,6,4,2,0,-2,-4,-6,-4,-2,0]}} transition={{duration:10}} className={styleTemoignage.img_4} src={img_2}  alt="personne en mignature" ></motion.img>
                <motion.img whileInView={{x: [0,2,4,6,4,2,0,-2,-4,-6,-4,-2,0]}} transition={{duration:10}} className={styleTemoignage.img_5} src={img_3}  alt="personne en mignature" ></motion.img>
                <motion.img whileInView={{x: [0,2,4,6,4,2,0,-2,-4,-6,-4,-2,0]}} transition={{duration:10}} className={styleTemoignage.img_6} src={img_4}  alt="personne en mignature"  ></motion.img>
            </div>

            <Description></Description>
        </motion.div>
        

    )
}