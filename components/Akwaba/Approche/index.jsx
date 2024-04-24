/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import style from "@/styles/Approche.module.css"


export default function SectionApproche(){
    return(
        <div className={style.layout_section}>
            <h1 style={{fontFamily:'montserrat', textAlign:"center", marginTop:'60px', fontSize:'40px'}}>NOTRE APPROCHE</h1>
            <div>
                <img loading="lazy" className={style.img} src="/assets/site version web/Notre_approche_version_.jpg" alt="approche commerciale"  ></img>
            </div>
        </div>
    )
}