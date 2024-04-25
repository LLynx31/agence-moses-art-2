/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import style from "@/styles/Approche.module.css"
import { motion } from "framer-motion"


export default function SectionApproche(){
    return(
        <div className={style.layout_section}>
            <motion.h1 initial={{opacity:0,y:100}} viewport={{once:true}} whileInView={{opacity:1,y:0, transition:{duration:0.3}}} style={{fontFamily:'montserrat', textAlign:"center", marginTop:'60px', fontSize:'40px'}}>NOTRE APPROCHE</motion.h1>
            <div>
                <img loading="lazy" className={style.img} src="/assets/site version web/Notre_approche_version_.jpg" alt="approche commerciale"  ></img>
            </div>
        </div>
    )
}