/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import style from "@/styles/Approche.module.css"


export default function SectionApproche(){
    return(
        <div className={style.layout_section}>
            <div>
                <img className={style.img} src="/assets/Image_Akwaba/Notre_approche.png" alt="approche commerciale"  srcSet="/assets/Image_Akwaba/Notre_approche.png 1000w, /assets/version_mobile/notre_approche.jpg 640w" sizes="(max-width:640px)" ></img>
            </div>
        </div>
    )
}