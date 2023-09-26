import Header from '../components/Header';
import stylePresentation from '../styles/Presentation/Presentation.module.css'
import Footer from '../components/Footer'
import Service from '../components/Service';
import Head from 'next/head';
import SendProject from '../components/SendProject';
import Image from 'next/image';
import ContactezNous from '../components/Akwaba/ContactezNous'
import { motion } from "framer-motion";
import Equipe from '../components/Akwaba/Equipe'
import ProgressBar from '../components/ProgressBar';
import { useRef, useState, useEffect } from 'react';



function SectionDescription(){
    const illustrationDescriptionOrange = 'assets/illustrationDescriptionOrange.svg'
    const illustrationDescriptionVert = 'assets/illustrationDescriptionVert.svg'
    const subtract = '/assets/Subtract.svg'
    const illustrationRole = '/assets/Image_Presentation/Nous_creons_concevons.jpg'

    const polygon = '/assets/Polygon3.svg'
    //const subtractVert = '/assets/Subtract.png'

    const animSec = {
        hidden: {
            opacity: 0,
            y: 200
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                delay: 0.2,
                when: "beforeChildren",
                staggerChildren: 0.2,
                delayChildren: 0.2

            }
        }
    }

    const animP = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
            }
        }
    }


    const animBallonOrange = {
        hidden: {
            opacity: 0,
            x: -500
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
            }
        }
    }


    const animBallonBleu = {
        hidden: {
            opacity: 0,
            x: 500
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                delay:0.2
            }
        }
    }

    const animRoleH1 = {
        hidden: {
            opacity: 0
        },

        visible: {
            opacity: 1,
            transition: {
                delay: 0.3,
                duration: 0.3
            }
        }
    }

    const animRoleP = {
        hidden: {
            opacity: 0
        },

        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                duration: 0.3
            }
        }
    }

    const animSubtract = {
        hidden: {
            opacity: 0,
            x: -100
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 1.5
                
            }
        }
    }


    const animPolygon = {
        hidden: {
            opacity: 0,
            x: 150,
            y: -75
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                delay: 0.9,
                duration: 0.6
                
            }
        }
    }


    const animImgRole = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 1,
                duration: 0.6
                
            }
        }
    }
        


    return(
        
        <motion.section variants={animSec} initial="hidden" whileInView="visible" viewport={{once:true}} className="section_description">
            <div className={stylePresentation.layout_section_description}>
                <motion.img variants={animBallonOrange}
                width={158}
                height={262} src={illustrationDescriptionOrange} className={stylePresentation.illustrationDescriptionOrange}></motion.img>

                
                <motion.img variants={animBallonBleu} width={158} height={262} src={illustrationDescriptionVert} className={stylePresentation.illustrationDescriptionVert}></motion.img>
                <h1 className={stylePresentation.section_description_title}>Qui sommes nous ?</h1>
                <motion.p variants={animP}>Créée en 2019 dont l’objectif  est d’aider les Petites, Moyennes et Grandes <br></br>entreprises à mieux se faire connaitre et à résoudre l’ensemble de leurs <br></br>besoins et problématiques de communication</motion.p>
            </div>
            
            <div className={stylePresentation.layout_section_description_role}>

                
                <div  className={stylePresentation.layout_section_description_text}>
                    <motion.h1 variants={animRoleH1} initial="hidden" whileInView="visible" viewport={{once:true}} className = {stylePresentation.section_description_role}>NOUS CONCEVONS,CREONS L’IDENTITE
                    VISUELLE DE VOTRE
                    MARQUE.</motion.h1>
                    <motion.p variants={animRoleP} initial="hidden" whileInView="visible" viewport={{once:true}}>Moses Art est une agence de communication 360 qui accompagne
                    ses clients dans le developpement de leur image de marque. Pour
                    cela , elle couvre à la fois la création et le diffusion des campagnes
                    de communication et marketing sur l’ensemble des supports 
                    indispensables à  la prise de contact avec les cibles. Cela prend en
                    compte les canaux online et offline globale.</motion.p> 
                </div>
                    

                <div className={stylePresentation.illustration_role}>
                    <motion.img width={450} height={500} variants={animImgRole} initial="hidden" whileInView="visible" viewport={{once:true}} src={illustrationRole} className={stylePresentation.illustrationRole}></motion.img>

                </div>

                <motion.img variants={animSubtract} viewport={{once:true}} width={80} height={80} src={subtract} alt='subtract' className={stylePresentation.subtract}></motion.img>

                <motion.img variants={animPolygon} viewport={{once:true}} width={40}height={40} src={polygon} alt='polygon' className={stylePresentation.polygon}></motion.img>
            </div>
        </motion.section>
    )
}


function SectionPrincipes (){
    const principeImg1 = '/assets/Image_Presentation/Nos_principes_image1_1.jpg'
    //const carreOrange = '/assets/carreOrange.svg'
    const illustrationRectangle  ='/assets/RectanglePrincipe.svg'
    const principeImg2 = '/assets/Image_Presentation/Nos_principes_image2_2.jpg'
    const carreVert = '/assets/carreVert.svg'
    const ellipse = '/assets/EllipseIllustrationPrincipe.svg'
    const polygon2 = '/assets/Polygon2.svg'

    const animSec = {
        hidden: {
            opacity: 0,
            y: 200
        },

        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                delay: 0.3,
                staggerChildren: 0.3,
                delayChildren: 1,
                staggerDirection: -1

            }
        }
    }

    const animTitre = {
        hidden: {
            opacity: 0,
            x: 100
        },

        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                delay: 0.3
            }
        }
    }

    const animPrincipe1 = {
        hidden: {
            opacity: 0
        },

        visible: {
            opacity: 1,
            duration: 0.6
        }
    }


    const animPrincipe2 = {
        hidden: {
            opacity: 0
        },

        visible: {
            opacity: 1,
            duration: 0.6
        }
    }


    const animPolygon = {
        anim: {
            rotate: [0,1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-8,-7,-6,-5,-4,-3,-2,-1,0],
            transition: {
                repeat: Infinity,
                repeatDelay: 1,
                duration: 5
            }
        }
    }

    return (
        <motion.section variants={animSec} initial="hidden" whileInView="visible" viewport={{once:true}} className={stylePresentation.section_principes}>
            <motion.img variants={animPolygon} animate="anim" width={50} height={50} src={polygon2} className={stylePresentation.polygon2}></motion.img>

            <motion.img variants={animPolygon} animate="anim" width={50} height={50} src={polygon2} className={stylePresentation.polygon_2}></motion.img>
            <Image alt="illustration" width={400} height={40} src={illustrationRectangle} className={stylePresentation.RectanglePrincipe} ></Image>
             <Image alt="illustration"  width={94} height={94} src={ellipse} className={stylePresentation.ellipse} ></Image>
            <motion.h1 variants={animTitre} initial="hidden" whileInView="visible" viewport={{once:true}} className={stylePresentation.title_section_principes}> Nos Principes</motion.h1>
            <div className={stylePresentation.layout_principes}>

                <motion.div variants={animPrincipe1} className={stylePresentation.layout_principe_1}>
                    <Image alt="illustration"  src={principeImg1}
                    width={350} height={350} quality={100} className={stylePresentation.principe_img_1}></Image>
                    {/*<Image 
                    width={94} alt="illustration"  height={94} src={carreOrange} className={stylePresentation.CarreOrange} ></Image>*/}

                    
                    <p>Notre approche est selon laquelle ,les menaces
                        ne doivent plus être perçues comme des 
                        dangers mes plutôt comme des opportunités
                        et des challenges pour mieux affirmer votre
                        présence sur le marché des affaires.</p>
                </motion.div>
                
                <motion.div variants={animPrincipe2} className={stylePresentation.layout_principe_2}>
                    <Image  alt="illustration" width={94} height={94} quality={100} src={carreVert} className={stylePresentation.carreVert} ></Image>

                    <p>Nous pensons qu’il n’existe pas de modèle de
                        communication pret à l’emploi. C’est pourquoi
                        chaque projet est pensé , étudié et adapté à la
                        cible pour susciter le sentiment et faire jaillir les
                        émotions recherchées.</p>
                    <Image alt="illustration"  className={stylePresentation.principe_img_2} width={500} height={500} src={principeImg2}></Image>
                </motion.div>
                
            </div>
        </motion.section>
    )
}


function SectionService() {
    
    const animSec = {
        hidden: {
            opacity: 0,
            y: 200
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: 0.3,
            }
        }
    }
    return (
        <motion.section variants={animSec} initial="hidden" whileInView="visible" viewport={{once:true}} className={stylePresentation.section_service}>
            <h1 className={stylePresentation.section_service_title}>Nos <span>Services</span></h1>
            <div className='section_service_service'><Service></Service> </div>
        </motion.section>
    )
}

function DomaineCompetence({name, img}) {
    return (
        <div className={stylePresentation.domaine}>
            <motion.div whileHover={{rotate: 360, transition:{duration: 0.4}}} className={stylePresentation.img_domaine}>
                <motion.div whileInView={{rotate: -360, transition:{duration: 0.4}}} ><Image className={stylePresentation.img_illustration} alt="illustration"  src={img} width={75} height={75}></Image></motion.div> 
            </motion.div> 
            <div className={stylePresentation.domaine_name}>
                {name}
            </div>
        </div>
        
        
    )
}

export function SectionDomaineCompetence() {
    const illustrationDomaineCompetence = 'assets/illustrationDomaineCompetence.svg'
    const model3D =  '/assets/3DModel.svg'
    const marketing = '/assets/Marketing.svg'
    const movieProjector = '/assets/MovieProjector.svg'
    const pen = '/assets/Pen.svg'
    const photoGallery =  '/assets/PhotoGallery.svg'
    const speaker =  '/assets/Speaker.svg'
    const videoTrimming = '/assets/VideoTrimming.svg'
    const webDesign = '/assets/WebDesign.svg'
    const webSite = '/assets/Website.svg'

    const animSec = {
        hidden: {
            opacity: 0,
            y: 200
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                delay: 0.3,
                when: "beforeChildren",
                staggerChildren: 0.1,
                delayChildren: 0.15
            }
        }
    }


    const animRoleH1 = {
        hidden: {
            opacity: 0
        },

        visible: {
            opacity: 1,
            duration: 0.6,
            transition: {
                delay: 0.3,
                duration: 0.6
            }
        }
    }

    const animDomaine = {
        hidden: {
            opacity:0
        },

        visible: {
            opacity: 1,
            transition: {
                duration: 0.3
            }
        }
    }

    const calque3 = "/assets/Calque3.svg"
    const calque4 = "/assets/Calque4.svg"
    const calque5 = "/assets/Calque5.svg"
    const calque6 = "/assets/Calque6.svg"
    const calque7 = "/assets/Calque7.svg"
    const calque8 = "/assets/Calque8.svg"

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
    
    return (
        <motion.div variants={animSec} initial="hidden" whileInView="visible" viewport={{ once: true }} className={stylePresentation.layout_section_domaine} >
            
            <Image src={illustrationDomaineCompetence} width={96} height={96} 
            alt='illustration_domaine_competence'  className={stylePresentation.illustration_domaine_competence}></Image>
            <motion.div variants={animRoleH1} initial="hidden" whileInView="visible" viewport={{once:true}} className={stylePresentation.domaine_competence_title}
            >Domaines de Compétence
            </motion.div>
            <div className={stylePresentation.layout_domaine_competence}>
                <motion.div variants={animDomaine}  ><DomaineCompetence name={'Print/web'} img={webSite}></DomaineCompetence></motion.div>
                <motion.div variants={animDomaine}  ><DomaineCompetence name={'3D'} img={model3D}></DomaineCompetence></motion.div>
                <motion.div variants={animDomaine}  ><DomaineCompetence name={'Publicité'} img={speaker}></DomaineCompetence></motion.div>
                <motion.div variants={animDomaine}  ><DomaineCompetence name={'Photo'} img={photoGallery}></DomaineCompetence></motion.div>
                <motion.div variants={animDomaine}  ><DomaineCompetence name={'Marketing'} img={marketing}></DomaineCompetence></motion.div>
                <motion.div variants={animDomaine}  ><DomaineCompetence name={'Illustration'} img={pen}></DomaineCompetence></motion.div>
                <motion.div variants={animDomaine}  ><DomaineCompetence name={'Webdesign'} img={webDesign}></DomaineCompetence></motion.div>
                <motion.div variants={animDomaine}  ><DomaineCompetence name={'Spot Vidéo'} img={videoTrimming}></DomaineCompetence></motion.div>
                <motion.div variants={animDomaine}  ><DomaineCompetence name={'Branding'} img={movieProjector}></DomaineCompetence></motion.div>
                
            </div>
        </motion.div>

    )
}
function Realisation({srcImage, titre, number}){
    return(
        <div className={stylePresentation.realisation_projet}>
                <Image alt="illustration"  src={srcImage} width={60} height={60}></Image>
                <div className={stylePresentation.number_realisation}>
                    +{number}
                </div>

                <div className={stylePresentation.realisation_projet_title}>{titre}</div>  
        </div>
    )
}

export function SectionRealisation() {
    const imgProject = '/assets/GroupofProjects.png'
    const imgHandShake = '/assets/Handshake.png'
    const imgOrganizationChartPeople = '/assets/OrganizationChartPeople.png'
    const illustration1 = '/assets/Ellipse104.svg'
    const illustration2 = '/assets/Ellipse106.svg'
    const calque61 = '/assets/Calque61.svg'

    const layoutRealisation = useRef(null)
 

    const animIllustrationEllipse = {
        whileInView: {
            x: [0, 10,0,-10,0],
            y: [0, 10, 0, -10, 0],
            opacity: [8,9,10],
            transition: {
                repeat: Infinity,
                duration: 8
            }
        },

        hidden: {
            opacity: 0
        },
        
    }


    const animIllustration = {
        whileInView: {
            x: [0, 10,0,-10,0],
            y: [0, 10, 0, -10, 0],
            opacity: [8, 9, 10],
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


    const [isInView, setIsInView] = useState(false);
    const [countMembre, setCountMembre] = useState(0);
    const [countProjet, setCountProjet] = useState(0);
    const [countPartenaire, setCountPartenaire] = useState(0);

    // Observer pour détecter quand l'élément entre dans la vue
    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setIsInView(true);
            }
            });
        },
        { threshold: 0.5 } // Déclenche lorsque 50% de l'élément est en vue
        );

        observer.observe(document.getElementById('counter')); // L'élément à observer

        return () => observer.disconnect();
    }, []);


    useEffect(() => {
        if (isInView && countMembre < 30) {
          const interval = setInterval(() => {
            setCountMembre((prevCount) => prevCount + 1);
          }, 40);
    
          return () => clearInterval(interval);
        }
      }, [isInView, countMembre]);


      useEffect(() => {
        if (isInView && countPartenaire < 40) {
          const interval = setInterval(() => {
            setCountPartenaire((prevCount) => prevCount + 1);
          }, 40);
    
          return () => clearInterval(interval);
        }
      }, [isInView, countPartenaire]);



      useEffect(() => {
        if (isInView && countProjet < 100) {
          const interval = setInterval(() => {
            setCountProjet((prevCount) => prevCount + 1);
          }, 30);
    
          return () => clearInterval(interval);
        }
      }, [isInView, countProjet]);

    return(
        <div id="counter" className={stylePresentation.layout_realisation}>
            <motion.img variants={animIllustrationEllipse}  whileInView="whileInView" src={illustration1} alt="illustration" className={stylePresentation.realisation_illustration1} width={200} height={200}></motion.img>
            <motion.img variants={animIllustrationEllipse}  whileInView="whileInView" src={illustration2} alt="illustration" className={stylePresentation.realisation_illustration2} width={600} height={600}></motion.img>
            <motion.img variants={animIllustration}  whileInView="whileInView" src={calque61} className={stylePresentation.realisation_calque61} width={60} height={60}></motion.img>
            <motion.img variants={animIllustration}  whileInView="whileInView"src={calque61} className={stylePresentation.realisation_calque81} width={50} height={50}></motion.img>
            <Realisation srcImage={imgProject} number={countProjet} titre={"Projet"}></Realisation>
            <Realisation srcImage={imgHandShake} number={countPartenaire} titre={"Partenaires"}></Realisation>
            <Realisation srcImage={imgOrganizationChartPeople} number={countMembre} titre={'Membre'}></Realisation>
        </div>
    )
}

export default function Presentation() {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

                <title>Agence MOSES ART</title>
            </Head>
            <motion.div initial={{opacity: 0, y:300}} animate={{opacity:1, y:0}} transition={{ duration: 1 }}>
            <Header presentation={true} headerColor='black' scroll={'black'}></Header>
                <div className={stylePresentation.layout_banner_presentation_presentation}>
                    <div className='Banner_title' >
                        <div className={stylePresentation.t_1}>Agence</div><div className={stylePresentation.t_2}>MOSES ART</div><br /><div className={stylePresentation.t_3}>AGENCE 360</div>
                    </div>      
                </div>
                <SectionDescription></SectionDescription>
                <div style={{height: 50, backgroundColor: '#0F83838C', width: '100%', margin: '100px 0px', opacity:0.5}}></div>
                <SectionPrincipes></SectionPrincipes> 
           
                <SectionService></SectionService>
                <div style={{height: 50, backgroundColor: '#0F83838C', width: '100%', margin: '100px 0px', opacity:0.5}}></div>
                <SectionDomaineCompetence></SectionDomaineCompetence>
                
                <SectionRealisation></SectionRealisation>
                <div style={{height: 50, backgroundColor: '#0F83838C', width: '100%', margin: '100px 0px', opacity:0.5}}></div>
                <Equipe></Equipe>
                <div style={{height: 50, backgroundColor: '#0F83838C', width: '100%', margin: '100px 0px', opacity:0.5}}></div>
                <ContactezNous></ContactezNous>
                
            <Footer></Footer>
            </motion.div>
            
        </>
        
    )
}