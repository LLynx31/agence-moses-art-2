
import { useEffect } from 'react'
import styleProjet from '../../../styles/Akwaba/Projet.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {useState, useRef} from 'react'


function Projet({titre, arriereplan, changeDetail}){
    return(
        <div className={styleProjet.layout_projet} style={{backgroundImage: arriereplan}} >
            <div>
                <h1>{titre}</h1>
                <a href='#' onClick={changeDetail}>détail</a>
            </div>
                    
        </div>
    )
}

function DetailProjet({description, client, photo}){
    return(
        <div className={styleProjet.layout_detail}>
            <div className={styleProjet.detail_text}>
                <h1>Description</h1>
                <p>{description}</p>
                <h1>client</h1>
                <p className={styleProjet.client}>{client}</p>
            </div>
            <div className={styleProjet.detail_img} style={{backgroundImage: photo}}>
                
            </div>
            
        </div>
    )
}
export default function SectionProjet() {
    const projet1 = {
        arrierePlan: "url('/assets/Inkedpage7.jpg')",
        image: "url('/assets/Inkedpage7.jpg')",
        description: "",
        client: ""
    } 
    const projet2 = {
        arrierePlan: "url('/assets/Inkedpage14.jpg')",
        image: "url('/assets/Inkedpage14.jpg')",
        description: "",
        client: "enfefre"
    } 
    const projet3 = {
        arrierePlan: "url('/assets/Inkedpage18.jpg')",
        image: "",
        description: "url('/assets/Inkedpage18.jpg')",
        client: ""
    } 
    const projet4 = {
        arrierePlan: "url('/assets/Inkedpage13.jpg')",
        image: "url('/assets/Inkedpage13.jpg')",
        description: "",
        client: ""
    }
    const projet5 = {
        arrierePlan: "url('/assets/Inkedpage10.jpg')",
        image: "url('/assets/Inkedpage10.jpg')",
        description: "",
        client: ""
    } 
    const projet6 = {
        arrierePlan: "url('/assets/Inkedpage9.jpg')",
        image: "url('/assets/Inkedpage9.jpg')",
        description: "",
        client: ""
    } 
    const projet7 = {
        arrierePlan: "url('/assets/Inkedpage19.jpg')",
        image: "url('/assets/Inkedpage19.jpg')",
        description: "",
        client: ""
    } 
    const projet8 = {
        arrierePlan: "url('/assets/sirus_capital.jpg')",
        image: "url('/assets/sirus_capital.jpg')",
        description: "",
        client: "Sirus_capital"
    }
    const projet9 = {
        arrierePlan: "url('/assets/Inkedpage11.jpg')",
        image: "url('/assets/Inkedpage11.jpg')",
        description: "",
        client: ""
    } 
    
    const illustration = '/assets/LeftArrow.svg'
    const illustration1 = '/assets/Calque5.svg'

    const [dataDetail,setDataDetail] = useState(projet1)
    const refDetailProjet = useRef(null)

    function afficheDetail(data){
        setDataDetail(data)
    }

    const animSectProjet = {
        hidden: {
            opacity: 0,
            y: 100
        },

        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1,
                duration: 0.5
            }
        }

    }


    const animQuiz = {
        hidden: {
            x: -100,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.3,
                duration: 0.8,
            }
        }
    }


    const animTitre = {
        hidden: {
            y: 100,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.6,
                duration: 1,
            }
        }
    }
    const animProjetLR = {
        hidden: {
            opacity: 0,
            y:100
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: 1
            }
            
        }

    }


    const animProjetM = {
        hidden: {
            opacity: 0,
            y:-100
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: 1
            }
            
        }

    }


    return(
        <motion.div variants={animSectProjet} initial="hidden" whileInView="visible" viewport={{once: true}} className={styleProjet.layout_section_projets}>
            <motion.img animate={{
                x: [0, 10, 0, -10, 0, -20, 0, 20,0],
                y: [0, 10, 0, -10, 0, -20, 0, 20,0]
            }} transition={{repeat:Infinity, duration:16, delay: 1}} className={styleProjet.illustration1} src={illustration1} width={50} height={50}></motion.img>
            <motion.div variants={animQuiz}  className={styleProjet.quiz}>QU’EST CE QUE NOUS FAISONS ?</motion.div>
            <motion.h1 variants={animTitre}  className={styleProjet.section_title}>Nos Projets Récents</motion.h1>
           <div className={styleProjet.projet_range}>
                <motion.div variants={animProjetLR} className={styleProjet.projet_range1}>
                    <Projet titre={'Titre'} arriereplan={projet1.arrierePlan} changeDetail={(e) => {
                        e.preventDefault()
                        refDetailProjet.current.scrollIntoView({behavior: 'smooth'})
                        setDataDetail(projet1)
                    }}></Projet>
                    <Projet titre={'Titre'} arriereplan={projet2.arrierePlan} changeDetail={(e) => {
                        e.preventDefault()
                        refDetailProjet.current.scrollIntoView({behavior: 'smooth'})
                        setDataDetail(projet2)
                    }}></Projet>
                    <Projet titre={'Titre'} arriereplan={projet3.arrierePlan} changeDetail={(e) => {
                        e.preventDefault()
                        refDetailProjet.current.scrollIntoView({behavior: 'smooth'})
                        setDataDetail(projet3)
                    }}></Projet>
                </motion.div>

                <motion.div variants={animProjetM} className={styleProjet.projet_range2}>
                    <Projet titre={'Titre'} arriereplan={projet4.arrierePlan} changeDetail={(e) => {
                        e.preventDefault()
                        refDetailProjet.current.scrollIntoView({behavior: 'smooth'})
                        setDataDetail(projet4)
                    }}></Projet>
                    <Projet titre={'Titre'} arriereplan={projet5.arrierePlan} changeDetail={(e) => {
                        e.preventDefault()
                        refDetailProjet.current.scrollIntoView({behavior: 'smooth'})
                        setDataDetail(projet5)
                    }}></Projet>
                    <Projet titre={'Titre'} arriereplan={projet6.arrierePlan} changeDetail={(e) => {
                        e.preventDefault()
                        refDetailProjet.current.scrollIntoView({behavior: 'smooth'})
                        setDataDetail(projet6)
                    }}></Projet>
                </motion.div>

                <motion.div variants={animProjetLR} className={styleProjet.projet_range3}>
                    <Projet titre={'Titre'} arriereplan={projet7.arrierePlan} changeDetail={(e) => {
                        e.preventDefault()
                        refDetailProjet.current.scrollIntoView({behavior: 'smooth'})
                        setDataDetail(projet7)
                    }}></Projet>
                    <Projet titre={'Titre'} arriereplan={projet8.arrierePlan} changeDetail={(e) => {
                        e.preventDefault()
                        refDetailProjet.current.scrollIntoView({behavior: 'smooth'})
                        setDataDetail(projet8)
                    }}></Projet>
                    <Projet titre={'Titre'} arriereplan={projet9.arrierePlan} changeDetail={(e) => {
                        e.preventDefault()
                        refDetailProjet.current.scrollIntoView({behavior: 'smooth'})
                        setDataDetail(projet9)
                    }}></Projet>
                </motion.div>
            </div> 

            
            <div ref={refDetailProjet}><DetailProjet client={dataDetail.client} description={dataDetail.description} photo={dataDetail.image}></DetailProjet></div>
        </motion.div>
    )
}