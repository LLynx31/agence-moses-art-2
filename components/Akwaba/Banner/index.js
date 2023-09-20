import {motion} from "framer-motion"
import stylesBanner from '../../../styles/Akwaba/Banner.module.css'
export default function Banner() {
    const logoFacebook = 'assets/Facebook.svg'
    const logoLinkedin = 'assets/LinkedIn.svg'
    const logoEmail = 'assets/Email.svg'
    

    const variantsT_1 = {
        hidden: {
            opacity: 0,
            x: 100
        },
        visible: {
            opacity: 1,
            x: 0,
            rotate: [0,-1],
            transition: {
                duration: 1,
                delay: 0.8,
                type: 'spring',
                stiffness: 100
                
            }
        }
    }


    const variantsT_2 = {
        hidden: {
            opacity: 0,
            x: -100,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                delay: 0.8,
                type: 'spring',
                stiffness: 100
                
            }
        }
    }


    const variantsT_3 = {
        hidden: {
            opacity: 0,
            y: -100
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 1.5,
                type: 'spring',
                stiffness: 300
                
            }
        }
    }


    return (
        
    <div className={stylesBanner.layoutBanner}>
        <video autoPlay preload="metadata" muted playsInline loop style={{backgroundColor: '#000', width:'100%', marginTop: 0, marginBottom: 0}}>
          <source src='/assets/videos/AGENCE_MOSES _ART.mp4' type='video/mp4'></source>
        </video>
    </div>
      )
  }