import stylesHeader from '../../styles/Header.module.css'
import Link from 'next/link'
import { useScroll, useAnimate, useMotionValueEvent,motion} from 'framer-motion'
import ProgressBar from '../ProgressBar'
import Image from 'next/image'
import { useState } from 'react'
import logoagence from '../../public/logoagence.jpg'


export default function Header({akwaba = false, presentation = false, service = false, formation = false, studio=false, contact = false, projet = false, headerColor = '#0F8383', scroll}) {

        const [scopes, animate] = useAnimate()
        const [scopes_1, animate_1] = useAnimate()
        const {scrollY, scrollYProgress} = useScroll()

        const [isOpen, setOpen] = useState(false)

        useMotionValueEvent(scrollY ,"change", (latest)=> {
            if(latest > 97) {
                animate(scopes.current, {backgroundColor: scroll})
                animate_1(scopes_1.current, {borderBottom: '2px solid #F6AA06'}, {duration: 0} )
            }
            else if (latest === 0) {
                animate(scopes.current, {backgroundColor: headerColor})
                animate_1(scopes_1.current, {borderBottom: 'none'}, {duration: 0} )
            }
            
        })


        const logo = '../../public/logoagence.jpg'
        const styleHeader = {
            backgroundColor: headerColor
        }
        
        const stylePageActif = {
            color: '#F6AA06',
        }

        const stylePageInactif = {
            color: '#FFF'
        }



        const menu = '/assets/Group181.svg'
        const closeMenu = '/assets/Group182.svg'
    return (
        <motion.div layout className={isOpen ? stylesHeader.conteneurOpen : stylesHeader.conteneur } style={{ overflowX: 'hidden' }}>
            <div ref={scopes} className={isOpen ? stylesHeader.layoutHearderOpen : stylesHeader.layoutHearder} style={styleHeader}>
                <Image loading='lazy' className={stylesHeader.logo} alt="Agence Moses Art" src={logoagence} width={160} height={50} />
                <nav className={isOpen ? stylesHeader.navOpen :stylesHeader.nav }>
                    <ul className={isOpen ? stylesHeader.ulOpen : stylesHeader.ul}>
                        <li ref={ akwaba ? scopes_1 : null} className={isOpen ? stylesHeader.liOpen : stylesHeader.li}><Link className={stylesHeader.link} href="/" style={akwaba ? stylePageActif : stylePageInactif}>Akwaba</Link></li>
                        <li ref={ presentation ? scopes_1 : null} className={isOpen ? stylesHeader.liOpen : stylesHeader.li}><Link className={stylesHeader.link} href="/presentation" style={presentation ? stylePageActif : stylePageInactif}>Presentation</Link></li>
                        <li ref={ service ? scopes_1 : null} className={isOpen ? stylesHeader.liOpen : stylesHeader.li}><Link className={stylesHeader.link} href="/services" style={service ? stylePageActif : stylePageInactif}>Services</Link></li>
                        <li ref={ projet ? scopes_1 : null} className={isOpen ? stylesHeader.liOpen : stylesHeader.li}><Link className={stylesHeader.link} href="/projets" style={projet ? stylePageActif : stylePageInactif}>Projets</Link></li>
                        {/* <li ref={ formation ? scopes_1 : null} className={isOpen ? stylesHeader.liOpen : stylesHeader.li}><Link className={stylesHeader.link} href="/formation" style={formation ? stylePageActif : stylePageInactif}>Formation</Link></li> */}
                        {/* <li ref={ studio ? scopes_1 : null} className={isOpen ? stylesHeader.liOpen : stylesHeader.li}><Link className={stylesHeader.link} href="/studio" style={studio ? stylePageActif : stylePageInactif}>Studio</Link></li> */}
                        <li ref={ contact ? scopes_1 : null} className={isOpen ? stylesHeader.liOpen : stylesHeader.li}><Link className={stylesHeader.link} href="/contact" style={contact ? stylePageActif : stylePageInactif}>Contact</Link></li>
                        
                        
                    </ul>
                       
                    <button className={isOpen ? stylesHeader.toogle_menu_close : stylesHeader.hidden} onClick={()=> {setOpen(false)}} ><Image loading='lazy' alt="menu" src={closeMenu} width={26} height={27}></Image></button>
                </nav>

                <div className={isOpen ? stylesHeader.layout_whatsappOpen : stylesHeader.layout_whatsapp}>
                        <div><Image loading='lazy' alt='logo whatsapp' width={25} height={25} src={"/assets/logo_whatsapp.svg"}></Image></div>
                        <Link style={{textDecoration:'none'}} href={"https://wa.me/2250787444029"} target='blank'><div className={stylesHeader.numero_whatsapp}>+2250787444029</div></Link>
    </div>
                <button className={isOpen ? stylesHeader.hidden : stylesHeader.toogle_menu} onClick={()=> {setOpen(true)}} ><Image loading='lazy' alt="menu" src={menu} width={36} height={19}></Image></button>
            </div>
            <ProgressBar></ProgressBar>
        </motion.div>
            
            
        )  
    }
   