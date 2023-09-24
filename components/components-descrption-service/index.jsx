import style from "@/styles/components-service.module.css"
import Image from "next/image"


export function Banner({titre, children, imgService, imgAlt}){
    
/* <div className={style.banner_right}> 
                <div className={style.layout_img_service}><Image className={style.img_banner} src={imgService} alt={imgAlt} width={150} height={150}></Image></div>
            </div>*/
    return(
        <div className={style.banner}>
            <div className={style.banner_left}>
                <div className={style.layout_titre_banner}><div className={style.rectangle}></div><h1 className={style.titre_banner}>{titre}</h1></div>
                <p className={style.description_banner}>{children}</p>
            </div>

            
        </div>
    )
}

export function Service({children}){
    return(
        <div className={style.service}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 49 49" fill="none">
                <path d="M24.5 12.25C17.738 12.25 12.25 17.738 12.25 24.5C12.25 31.262 17.738 36.75 24.5 36.75C31.262 36.75 36.75 31.262 36.75 24.5C36.75 17.738 31.262 12.25 24.5 12.25ZM24.5 0C10.976 0 0 10.976 0 24.5C0 38.024 10.976 49 24.5 49C38.024 49 49 38.024 49 24.5C49 10.976 38.024 0 24.5 0ZM24.5 44.1C13.671 44.1 4.9 35.329 4.9 24.5C4.9 13.671 13.671 4.9 24.5 4.9C35.329 4.9 44.1 13.671 44.1 24.5C44.1 35.329 35.329 44.1 24.5 44.1Z" fill="black"/>
            </svg>
            <div className={style.service_name}>{children}</div>
        </div>
    )
}

export function Offre({children, offre_head}){
    return(
        <div className={style.offre}>
            <div className={style.offre_head}>{offre_head}</div>
        </div>
    )
}

export function AvantPropos(){
    return (
        <div className={style.avant_propos}>
            <div className={style.avant_propos_1}>
                Nos experts vous proposeront les solutions adaptées <br></br> à votre entreprise et à vos besoins.
            </div>

            <div className={style.avant_propos_2}>
                Voici quelques exemples de ce que nous pouvons faire pour vous
            </div>
        </div>
    )
}

export function Description({children}){
    return(
        <div className={style.description}>
            <h1 className={style.titre_description}>chez <span>l&apos;Agence MOSES ART,</span></h1>
            <p className={style.description_description}>{children}</p>
        </div>
    )
}

export function Block({titre,children,color=""}){
    return (
        <div className={style.block}>
            <div className={style.block_top} style={{backgroundColor: color}}></div>
            <div className={style.block_text}>
                <h1 className={style.block_titre}>{titre}</h1>
                <p className={style.block_description}>{children}</p>
            </div>
            
        </div>
    )
}