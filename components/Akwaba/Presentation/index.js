import stylePresentation from '../../../styles/Akwaba/Description.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'



const animLayout = {
        hidden: {
            opacity: 0,
            y: 100
        },
        
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1,
                staggerChildren: 0.3,
                when: "beforeChildren"
                
            }
        }
    }

    const animQuiz = {
        hidden: {
            opacity: 0,
            y: 50
        },
        
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                
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
                duration: 0.3,
                
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
                duration: 0.3,
                
            }
        }
    }
    
const animImg = {
    hidden: {
        opacity: 0,
        y: 200
    },

    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 0.5
        }
    }
}

const animIllustration = {
    animate: {
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
    }
}





function Presentation() {
    

    
    return(
        <motion.div variants={animLayout} whileInView="visible" initial="hidden" viewport={{once: true}} className={stylePresentation.layout_presentation}>
            <motion.div variants={animQuiz} className={stylePresentation.quiz}>QUI SOMMES NOUS ?</motion.div>
            <motion.h1 variants={animTitre} className={stylePresentation.title}>Nous vous offrons des solutions digitales innovantes et efficaces.</motion.h1>  
            <motion.p variants={animP} className={stylePresentation.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</motion.p>
        </motion.div>
        
    )
}




export default function SectionPresenattion (){
    const image = 'assets/imagePresentation.png'
    const illustration1 = '/assets/Calque7.svg'
    const illustration2 = '/assets/Calque81.svg'
    const illustration3 = '/assets/Calque61.svg'

    return (
        <div className={stylePresentation.layout_section}>
            <motion.img variants={animImg} initial= "hidden" whileInView="visible" viewport={{once:true}} width={500} height={500} className={stylePresentation.image} src={image} alt='Femme sur son telephone'></motion.img>
            <Presentation></Presentation>
            <div className={stylePresentation.div_btn}><motion.button onClick={() => document.location.href = '#contact'} whileHover={{scale: 1.1}} className={stylePresentation.button_contact}>Contactez Nous</motion.button></div>
            <motion.img variants={animIllustration} animate="animate" initial="hidden" alt='illustration' width={40} height={40} className={stylePresentation.illustration1} src={illustration1}></motion.img>
            <motion.img  variants={animIllustration} animate="animate" initial="hidden" alt='illustration' width={50} height={50} className={stylePresentation.illustration2} src={illustration2}></motion.img>
            <motion.img variants={animIllustration} animate="animate" initial="hidden" alt='illustration' width={60} height={60} className={stylePresentation.illustration3} src={illustration3}></motion.img>
        </div>
        
    )
}