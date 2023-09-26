import Image from "next/image"
import style from "@/styles/Approche.module.css"


export default function SectionApproche(){
    return(
        <div className={style.layout_section}>
            <div>
                <Image className={style.img} src="/assets/Notreapproche.jpg" alt="approche commerciale" width={1150} height={1287} ></Image>
            </div>
        </div>
    )
}