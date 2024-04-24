import Header from "../components/Header"
import Head from "next/head"
import styleServcie from '../styles/Services/Services.module.css'
import Footer from "../components/Footer"
import ProgressBar from "../components/ProgressBar"
import Image from "next/image"
import {motion, useAnimate} from "framer-motion"
import { SectionDomaineCompetence } from "./presentation"
import SendProject from "@/components/SendProject"
import SectionOffre, { Offre } from "@/components/offre"

import {useEffect, useState} from "react"



export function Banner() {

    const formation = ["Conseils en communication 360", "Publicité", "Marketing Digital", "Developpement d'appli Web et Mobile", "Design graphic", "Digitalisation des Services", "Production Audio Visuelle", "Events", "Impression tout support" ]
    const [isNumFormation, setNumFormation] = useState(0)
    const [scopes,animate] = useAnimate()

    useEffect(()=>{
       const time = setInterval(()=>{
            if(isNumFormation >= 8){
                setNumFormation(0)
            }

            else {
                setNumFormation(isNumFormation+1)
            }
            
            animate(scopes.current, {opacity: [0,1] ,transition:{
                duration:0.6
            }})
       },2000)

       return () => clearInterval(time)
    })

    return (
        <div className={styleServcie.Banner}>
            <div className={styleServcie.Banner_title}>Découvrez<br></br>ce que nous faisons<br></br><motion.span ref={scopes} initial={{opacity:0, y:5}} animate={{opacity:1,y:0}} transition={{duration:0.6}} style={{color:'#F6AA06'}}>{formation[isNumFormation]}</motion.span></div>
        </div>
    )
}

function SectionService() {
    const dataService = [
        {
            titleService: 'Conseils en communication 360',
            descriptionService: 'Nous vous conseillons sur des stratégies qui mettent à profit tous les canaux de communication disponibles entre vous et votre cible.',
            link: "/service/communication"

        },

        {
            titleService: 'Publicité',
            descriptionService: "Nous develeppons des pubs dans le but d’influencer le consommateur vis-à-vis de votre marque, votre produit ou de vos services afin d’ augmenter votre notoriété, de développer l’image, inciter à l’achat.",
            link: "/service/publicite"
        },

        {
            titleService: 'Marketing digital',
            descriptionService: "Nous avons la stratégie marketing indéniable qu’il vous faut pour vendre vos produits et promouvoir votre marque auprès des consommateurs",
            link: "/service/marketing"
        },

        {
            titleService: "Developpement d'appli web et mobile",
            descriptionService: "Nous concevons des applications web et mobiles sur mésure dans des designs épurés et pour de meilleurs expériences utilisateurs.",
            link: "/service/developpement"
        },

        {
            titleService: 'Design Graphique',
            descriptionService: "Nous sommes les concepteurs visuels des solutions de communication :  nous intervenons dans l’élaboration des supports de communication variés (identité visuelle d’entreprise ou d’un produit, affiches, livres, revues, brochures…)",
            link: "/service/design-graphic"
        },

        {
            titleService: 'Digitalisation des Services',
            descriptionService: "Nous sommes des  intégrateurs de technologies numériques dans les processus commerciaux/sociaux, dans le but de les améliorer et de faire performer les entreprises.",
            link: "/service/digitalisation"
        },

        {
            titleService: 'Production Audiovisuelle',
            descriptionService: "Cadrage , montage video , animation 2D et 3D , assistance en réalisation , direction en photographie , pose de voix off , redaction de script , couverture médiatique d’event.",
            link: "/service/audio-visuel"
        },
        {
            titleService: 'Events',
            descriptionService: "DNous vous conseillons sur des stratégies qui mettent à profit tous les canaux de communication disponibles entre vous et votre cible.",
            link: "/service/events"
        },
        {
            titleService: 'Impression sur tout support',
            descriptionService: "Parce que vos réalisations mérittent d’etre imprimés sur des supports de qualité , nous gérons la production de tout type de support de communication.",
            link: "/service/impression"
        },

    ]

    const animLayoutService = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.3,
                delay: 0.1,
                when:"beforeChildren",
                delayChildren: 0.1,
                staggerChildren: 0.3

            }
        }
    }

    const animIllustration = {
        hidden: {
            opacity: 0,
            y: 100
        },

        visible: {
            opacity: 1,
            y:0,
            transition: {
                duration: 0.3
               
            }
        }
    }


    const animDivService = {
        hidden: {
            opacity: 0,
            y: 100
        },

        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        } 
    }

    const illustrationRond = "/assets/Ellipse151.svg"
    const illustrationCroixVert = "/assets/Group136.svg"
    const illustrationCroixOrange = "/assets/Group135.svg"
    return (
        <motion.div variants={animLayoutService} whileInView="visible" initial="hidden" viewport={{once:true}} className={styleServcie.layout_section_service}>
            <motion.h1 variants={animIllustration} className={styleServcie.section_service_title}>
                Nos <span>Services</span>
            </motion.h1 >
            <motion.p variants={animIllustration} className={styleServcie.section_service_description}>Découvrez l`ensemble de nos services</motion.p>

            <motion.div variants={animDivService} className={styleServcie.layout_services}>
                <ServiceDiv logo={'/assets/logos_service/communication.svg'} serviceTitle={dataService[0].titleService} link={dataService[0].link}>{dataService[0].descriptionService}</ServiceDiv>

                <ServiceDiv logo={'/assets/logos_service/publicité.svg'} serviceTitle={dataService[1].titleService} link={dataService[1].link}>{dataService[1].descriptionService}</ServiceDiv>

                <ServiceDiv logo={'/assets/logos_service/marketing.svg'} serviceTitle={dataService[2].titleService} link={dataService[2].link}>{dataService[2].descriptionService}</ServiceDiv>

                <ServiceDiv logo={'/assets/logos_service/dev.svg'} serviceTitle={dataService[3].titleService} link={dataService[3].link}>{dataService[3].descriptionService}</ServiceDiv>

                <ServiceDiv logo={'/assets/logos_service/design.svg'} serviceTitle={dataService[4].titleService} link={dataService[4].link}>{dataService[4].descriptionService}</ServiceDiv>

                <ServiceDiv logo={'/assets/logos_service/digital.svg'} serviceTitle={dataService[5].titleService} link={dataService[5].link}>{dataService[5].descriptionService}</ServiceDiv>

                <ServiceDiv logo={'/assets/logos_service/visuelle.svg'} serviceTitle={dataService[6].titleService} link={dataService[6].link}>{dataService[6].descriptionService}</ServiceDiv>

                <ServiceDiv logo={'/assets/logos_service/evenement.svg'} serviceTitle={dataService[7].titleService} link={dataService[7].link}>{dataService[7].descriptionService}</ServiceDiv>

                <ServiceDiv logo={'/assets/logos_service/impression.svg'} serviceTitle={dataService[8].titleService} link={dataService[8].link}>{dataService[8].descriptionService}</ServiceDiv>

            </motion.div>


            <motion.img loading="lazy" variants={animIllustration} className={styleServcie.illustrationRond} width={25} alt="illustration" src={illustrationRond}></motion.img>
            <motion.img loading="lazy" variants={animIllustration} className={styleServcie.illustrationCroixOrange} width={25} alt="illustration" src={illustrationCroixOrange}></motion.img>
            <motion.img loading="lazy" variants={animIllustration} className={styleServcie.illustrationCroixVert} width={25} alt="illustration" src={illustrationCroixVert}></motion.img>
            <motion.img loading="lazy" variants={animIllustration} className={styleServcie.illustrationRond1} width={25} alt="illustration" src={illustrationRond}></motion.img>
            <motion.img loading="lazy" variants={animIllustration} className={styleServcie.illustrationCroixOrange1} width={25} alt="illustration" src={illustrationCroixOrange}></motion.img>
            <motion.img loading="lazy" variants={animIllustration}className={styleServcie.illustrationCroixVert1} width={25} alt="illustration" src={illustrationCroixVert}></motion.img>
            <motion.img loading="lazy" variants={animIllustration} className={styleServcie.illustrationRond2} width={25} alt="illustration" src={illustrationRond}></motion.img>
            <motion.img loading="lazy" variants={animIllustration} className={styleServcie.illustrationCroixOrange2} width={25} alt="illustration" src={illustrationCroixOrange}></motion.img>
            <motion.img loading="lazy" variants={animIllustration} className={styleServcie.illustrationCroixVert2} width={25} alt="illustration" src={illustrationCroixVert}></motion.img>
            <motion.img loading="lazy" variants={animIllustration} className={styleServcie.illustrationRond3} width={25} alt="illustration" src={illustrationRond}></motion.img>
            <motion.img loading="lazy" variants={animIllustration} className={styleServcie.illustrationCroixOrange3} width={25} alt="illustration" src={illustrationCroixOrange}></motion.img>
            <motion.img loading="lazy" variants={animIllustration} className={styleServcie.illustrationCroixVert3} width={25} alt="illustration" src={illustrationCroixVert}></motion.img>
            <motion.img loading="lazy" variants={animIllustration} className={styleServcie.illustrationRond4} width={25} alt="illustration" src={illustrationRond}></motion.img>
            <motion.img loading="lazy" variants={animIllustration} className={styleServcie.illustrationCroixOrange4} width={25} alt="illustration" src={illustrationCroixOrange}></motion.img>
            <motion.img loading="lazy" variants={animIllustration} className={styleServcie.illustrationCroixVert4} width={25} alt="illustration" src={illustrationCroixVert}></motion.img>
        </motion.div>
    )
}


function ServiceDiv({serviceTitle,children,link,logo}){
    const img = "/assets/ampoule.svg"
    const group3 = "/assets/Group132.svg"

    function handleDiv(link){
        document.location.href = link
    }
    return (
        <div className={styleServcie.layout_service} onClick={ () => handleDiv(link)}>
            <div className={styleServcie.enteteService}>
                <div style={{position:'relative', height:'60px', width:'60px'}} className={styleServcie.ampoule}><Image loading="lazy" fill  alt="ampoule d'idée" src={logo}></Image></div>
                <h1 className={styleServcie.service_title}>{serviceTitle}</h1>
            </div>
            <div className={styleServcie.group3} style={{width:'45px', height:'4px'}}><Image loading="lazy" fill alt="illustration" src={group3}></Image></div>
            <p>{children}</p>
        </div>
    )
}

export default function Service(){
    return (
        <>
        <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <title>Agence MOSES ART</title>
        </Head>
        <motion.div initial={{opacity: 0, y:300}} animate={{opacity:1, y:0}} transition={{ duration: 1 }}>
        
            <motion.div initial={{y:200, opacity:0}} animate={{y:0, opacity: 1}} transition={{duration:0.8}}><Header service={true} headerColor={'black'}></Header>
            <ProgressBar></ProgressBar>
            <Banner></Banner></motion.div>
            <SectionService></SectionService>
            <SendProject></SendProject>
            <Footer></Footer>
        </motion.div>
            
        </>
    )
}