import Header from "../components/Header"
import Head from "next/head"
import Footer from "../components/Footer"
import styleContact from "../styles/Contact/Contact.module.css"
import Image from "next/image"
import Link from "next/link"
import ContatezNous from "../components/Akwaba/ContactezNous"
import { color, motion } from "framer-motion"



function Info({srcImage,altImage, text,detail}) {
    const Parent = {
        animate:{
            y:[0,-100, 0],
            transition:{
                duration:0.6, 
                when: "beforeChildren",
            }
        }
        
    }

    const enfant = {
        animate:{
            scale:[1,1.5,1],
            transition:{
                duration:0.6, 
                repeat:Infinity, 
                repeatDelay:2,
                when: "beforeChildren",
            }
        }
    }
    return(
        <motion.div variants={Parent} whileInView="animate" className={styleContact.layout_info}>
            <motion.div className={styleContact.div_Image_info}><motion.div variants={enfant} animate="animate" ><Image loading="lazy" alt="illustration" src={srcImage} width={50} height={50}></Image></motion.div></motion.div> 
            <div className={styleContact.text_info}>{text}</div>
            <div style={{fontSize:'15px', fontWeight:'regular', color:'#5C5C5D', textAlign:'center'}} className={styleContact.text_detail}>{detail}</div>     
        </motion.div>
    )
}

export default function Contact() {
    const rectangleOrange = 'assets/RectangleOrangeContact.svg'
    const ellispseOrange = 'assets/EllipseOrangeContact.svg'
    const illustartionEmail = '/assets/EmailContact.png'
    const imgEmail = '/assets/Vector.svg'
    const imgTelephone = '/assets/appel-telephonique1.svg'
    const imgLocalisation = '/assets/marqueur1.svg'
    const illustrationPageContact = '/assets/illustrationPageContact.png'
    const ellipse = '/assets/Ellipse140.svg'
    const groupe105 = '/assets/Group105.svg'



    const animContact = {
        hidden: {
            opacity: 0,
            y: -200
        },
        visible: {
            opacity: 0,
            y: 0,
            transition: {
                duration: 0.2,
                delay: 0.2,
                when: "beforeChildren",
                staggerChildren: 0.3,
            }
        }
    }
    
    const animContactText = {
        hidden:  {
            opacity: 0,
            x: -100,
        },
    
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3
            }
        }
    }
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <title>Agence MOSES ART</title>
            </Head>
            <Header contact={true} headerColor="black" scroll={'black'}></Header>
            <div className={styleContact.contain}>
                <section style={{marginBottom:'2px'}} className={styleContact.section_contact}>
                    <motion.div className={styleContact.section_conatct_text}>
                        <motion.h1 initial={{opacity:0,x:-100}} whileInView={{opacity:1, x: 0}} transition={{delay:0.2, duration:0.3}}  viewport={{once:true}} style={{fontFamily:'AsgardTrial', padding:'0'}}  className={styleContact.section_title}>Contact</motion.h1>

                        <motion.h2 initial={{opacity:0,x:-100}} animate={{opacity:1, x: 0,scale:1.06, rotate:[0,30,0]}} transition={{delay:0.6, duration:1.3}} style={{fontFamily:'AsgardTrial', padding:'0'}}  className={styleContact.contact_title}>Prenez contact avec nous !</motion.h2>
                        <motion.p initial={{opacity:0,x:-100}} whileInView={{opacity:1, x: 0}} transition={{delay:1, duration:0.3}}  viewport={{once:true}} style={{lineHeight: '1.8', margin: '10px 0'}} >Découvrez comment nous pouvons vous aider à atteindre vos objectifs. Nous sommes impatients de discuter de vos projets et de vos ambitions.</motion.p>
                        <motion.div  initial={{opacity:0}} animate={{opacity:1}} whileInView={{scale:[1,1.1,1], transition:{delay:1.4, duration:0.6, repeat:Infinity, repeatDelay:5}}} transition={{delay:1.4, duration:0.3}} className={styleContact.layout_link_contact}>
                            <Link className={styleContact.link_contact_img} href ='#formContact'><Image loading="lazy" alt="homme au telephone" src={illustartionEmail} width={30} height={30}></Image></Link> 
                            <Link href ='#formContact' className={styleContact.link_contact_text}>Ecrivez nous</Link> 
                        </motion.div>

                        <motion.h2 initial={{opacity:0,x:-100}} whileInView={{opacity:1, x: 0}} transition={{delay:1.8, duration:0.3}} viewport={{once:true}} style={{fontFamily:'AsgardTrial', padding:'0', fontSize:'40px'}} >Où<br></br> nous trouver ?</motion.h2>
                    </motion.div>

                    <motion.div initial={{opacity:0, y:300}} whileInView={{opacity:1, y:0}} transition={{delay:1.8, duration:0.6}} viewport={{once:true}}  className={styleContact.section_contact_illustration}>
                        <Image loading="lazy" alt="illustration" src={illustrationPageContact} width={420} height={420}></Image>
                    </motion.div>
                
                    
                </section>

               
                    <Image loading="lazy" alt="illustration" src={groupe105} width={100} height={20} className={styleContact.Group105_1 }></Image>
                    <Image loading="lazy" alt="illustration" src={groupe105} className={styleContact.Group105_2} width={100} height={20}></Image>
                
                

                <section className={styleContact.section_info}>
                <Image loading="lazy" alt="illustration" src={ellipse} className={styleContact.ellipse1} width={320} height={320}></Image>
                <Image loading="lazy" alt="illustration" src={ellipse} className={styleContact.ellipse2} width={420} height={320}></Image>
                <motion.div animate = {{x: [0, 10,0,-10,0],y: [0, 10, 0, -10, 0],opacity: [8,9,10,10],transition: {repeat: Infinity,duration: 20}}}><Image loading="lazy" alt="illustration" src={ellipse} className={styleContact.ellipse3} width={320} height={320}></Image></motion.div>
                        <Info srcImage={imgEmail} text={'Email'} altImage={'logo Email'} detail={<><span style={{display: 'yes',textTransform:'lowercase'}}>mosesart00@gmail.com</span> <br/><span style={{display:'none'}}>aa</span></>}></Info>
                        <Info srcImage={imgTelephone} text={'Telephone'} altImage={'logo telephone'} detail= <>{'+225 27 21 52 35 70'}<br style={{marginBottom: '0px'}}/>{'+225 07 87 44 40 29'}
                        </>></Info>
                        <Info srcImage={imgLocalisation} text={'localisation'} altImage={'logo localisation'} detail= <>{'Abidjan koumassi,'}<br/>{'Bd camp commando'}
                        </> ></Info>
                </section>
            </div>
            


           
               <motion.img loading="lazy" whileInView={{x:[0,-300,0]}} transition={{repeat:Infinity, duration:5, repeatDelay:5 }} alt="illustration" src={groupe105} className={styleContact.Group105_3}  width={100} height={20}></motion.img>
               <motion.img loading="lazy" whileInView={{x:[0,-300,0]}} transition={{repeat:Infinity, duration:5, repeatDelay:10}} alt="illustration" src={groupe105} className={styleContact.Group105_4} width={100} height={20}></motion.img>   
                <motion.img loading="lazy" whileInView={{x:[0,-300,0]}} transition={{repeat:Infinity, duration:5, repeatDelay:15}} alt="illustration" src={groupe105} className={styleContact.Group105_5} width={100} height={20}></motion.img>
            
                
            <div id="formContact"><ContatezNous title={'Prener rendez-vous'}></ContatezNous></div>
            <div className={styleContact.map}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.8553089345855!2d-3.963455826470727!3d5.285262194692955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ef5ea512a9f5%3A0xa9fd57d7eb0e72a!2sAgence%20Moses%20Art!5e0!3m2!1sfr!2sci!4v1690559368873!5m2!1sfr!2sci" width="600" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Footer></Footer>
        </>
    )
}