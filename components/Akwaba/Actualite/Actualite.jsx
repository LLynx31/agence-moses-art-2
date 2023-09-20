import style from "@/styles/Actualite.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";

function Actualité({img, imgAlt, titre, children}){
    return(
        <div className={style.actualite}>
            <div className={style.img_actualite}>
                Photo
            </div>
            <div className={style.actualite_text}>
                <h1 className={style.actualite_titre}>{titre}</h1>
                <p className={style.actualite_description}>{children}</p>
            </div>
        </div>
    )
}


export default function SectionActualite(){
    return(

        <>
            <h1 className={style.section_titre}>Nos <span>Actualités</span></h1>
        
            <div className={style.section}>
            <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            interval={3000}
            transitionTime={1200}
            stopOnHover={true}
            >
                <div className={style.layout_section}>
                    <Actualité titre={'Titre'}>Contenue contenue lorem ipsum dolor sit amet dolor sit</Actualité>
                    
                    <Actualité titre={'Titre'}>Contenue contenue lorem ipsum dolor sit amet dolor sit</Actualité>  

                    <Actualité titre={'Titre'}>Contenue contenue lorem ipsum dolor sit amet dolor sit</Actualité>
                </div>

                <div className={style.layout_section}>
                    <Actualité titre={'Titre'}>Contenue contenue lorem ipsum dolor sit amet dolor sit</Actualité>
                    
                    <Actualité titre={'Titre'}>Contenue contenue lorem ipsum dolor sit amet dolor sit</Actualité>  

                    <Actualité titre={'Titre'}>Contenue contenue lorem ipsum dolor sit amet dolor sit</Actualité>
                </div>
                    
                
                  
            </Carousel>


            
            </div>

            <div className={style.section_mobile}>
            <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            interval={3000}
            transitionTime={1200}
            stopOnHover={true}
            >
                
                <Actualité titre={'Titre'}>Contenue contenue lorem ipsum dolor sit amet dolor sit</Actualité>
                    
                <Actualité titre={'Titre'}>Contenue contenue lorem ipsum dolor sit amet dolor sit</Actualité>  

                <Actualité titre={'Titre'}>Contenue contenue lorem ipsum dolor sit amet dolor sit</Actualité>

                <Actualité titre={'Titre'}>Contenue contenue lorem ipsum dolor sit amet dolor sit</Actualité>

                <Actualité titre={'Titre'}>Contenue contenue lorem ipsum dolor sit amet dolor sit</Actualité>
                    
                <Actualité titre={'Titre'}>Contenue contenue lorem ipsum dolor sit amet dolor sit</Actualité>  

                <Actualité titre={'Titre'}>Contenue contenue lorem ipsum dolor sit amet dolor sit</Actualité>
                
                  
            </Carousel>


            
            </div>
        </>
        
    )
}