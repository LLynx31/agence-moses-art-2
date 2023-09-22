import stylesPatrenaire from '../../styles/NosPartenaire.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'

function Partenaire({imgPartenaire}){
    
    return (
        <div className={stylesPatrenaire.div_partenaire}>
            <Image className={stylesPatrenaire.logo} alt="logo des partenaires" src={imgPartenaire} width={150} height={150}></Image>
        </div>
        
    )
}


export default function NosPartenaire(){
    const logo1 = '/assets/LOGO1.svg'
    const logo2 = '/assets/LOGO2.svg'
    const logo3 = '/assets/LOGO2-1.svg'
    const logo4 = '/assets/LOGO3.svg'
    const logo5 = '/assets/LOGO4.svg'
    const logo7 = '/assets/LOGO6.svg'
    const logo8 = '/assets/LOGO7.svg'
    const logo9 = '/assets/LOGO8.svg'
    const logo11 = '/assets/LOGO10.svg'
    const logo12 = '/assets/LOGO11.svg'
    const logo13 = '/assets/LOGO12.svg'
    const logo15 = '/assets/LOGO14.svg'
    const logo16 = '/assets/LOGO15.svg'
    const logo17 = '/assets/LOGO16.svg'
    const logo18 = '/assets/LOGO17.svg'
    const logo19 = '/assets/LOGO18.svg'
    const logo20 = '/assets/LOGO19.svg'
    const logo21 = '/assets/LOGO20.svg'

    const animSec = {
        hidden: {
            opacity: 0,
            y: 200
        },

        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.3,
                when: "beforeChildren",
                staggerChildren: 0.3

            }
        }

    }

    const animPartenaire = {
        hidden: {
            opacity: 0,
            x: -50
        },

        visible: {
            opacity: 1,
            x: 0,
            duration:0.3
        }
    }
    return (
        <motion.div variants={animSec} initial="hidden" whileInView="visible" viewport={{once: true}} className={stylesPatrenaire.layout_nos_partenaire}>
            <h1 className={stylesPatrenaire.nos_partenaire_title}>Ils nous font confiance </h1>
            
            <div className={stylesPatrenaire.layoutPartenaire}>
                <motion.div variants={animPartenaire}><Partenaire imgPartenaire={logo1}></Partenaire></motion.div>
                <motion.div variants={animPartenaire}><Partenaire imgPartenaire={logo20}></Partenaire></motion.div>
                <motion.div variants={animPartenaire}><Partenaire imgPartenaire={logo2}></Partenaire></motion.div>
                <motion.div variants={animPartenaire}><Partenaire imgPartenaire={logo3}></Partenaire></motion.div>
                <motion.div variants={animPartenaire}><Partenaire imgPartenaire={logo19}></Partenaire></motion.div>
                <motion.div variants={animPartenaire}><Partenaire imgPartenaire={logo21}></Partenaire></motion.div>
                <motion.div variants={animPartenaire}><Partenaire imgPartenaire={logo4}></Partenaire></motion.div>
                <motion.div variants={animPartenaire}><Partenaire imgPartenaire={logo5}></Partenaire></motion.div>
                <motion.div variants={animPartenaire}><Partenaire imgPartenaire={logo7}></Partenaire></motion.div>
                <motion.div variants={animPartenaire}><Partenaire imgPartenaire={logo8}></Partenaire></motion.div>
                <motion.div variants={animPartenaire}><Partenaire imgPartenaire={logo9}></Partenaire></motion.div>
                <motion.div variants={animPartenaire}><Partenaire imgPartenaire={logo11}></Partenaire></motion.div>
                <motion.div variants={animPartenaire}><Partenaire imgPartenaire={logo12}></Partenaire></motion.div>
                <motion.div variants={animPartenaire}><Partenaire imgPartenaire={logo13}></Partenaire></motion.div>
                <motion.div variants={animPartenaire}><Partenaire imgPartenaire={logo15}></Partenaire></motion.div>
                <motion.div variants={animPartenaire}><Partenaire imgPartenaire={logo16}></Partenaire></motion.div>
                <motion.div variants={animPartenaire}><Partenaire imgPartenaire={logo17}></Partenaire></motion.div>
                <motion.div variants={animPartenaire}><Partenaire imgPartenaire={logo18}></Partenaire></motion.div>
                
                
            </div>
            
        </motion.div>
        
    )
}