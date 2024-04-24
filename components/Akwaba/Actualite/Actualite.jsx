import style from "@/styles/Actualite.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";

function Actualité({img, imgAlt, titre, children}){
    return(
        <div className={style.actualite}>
            <div className={style.img_actualite}>
                <img src={img} alt={imgAlt}></img>
            </div>
            <div style={{color:'white'}}>
                ezfzefjezifzfzfnn
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
                    <Actualité img={"/assets/site version web/actualité_1.jpg"}></Actualité>
                    
                    <Actualité img={"/assets/site version web/actualité_2.jpg"}></Actualité>  

                    <Actualité img={"/assets/site version web/actualité_3.jpg"}></Actualité>
                </div>

                <div className={style.layout_section}>
                    <Actualité></Actualité>
                    
                    <Actualité></Actualité>  

                    <Actualité></Actualité>
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
                
                <Actualité></Actualité>
                    
                <Actualité></Actualité>  

                <Actualité></Actualité>

                <Actualité></Actualité>

                <Actualité></Actualité>
                    
                <Actualité></Actualité>  

                <Actualité></Actualité>
                
                  
            </Carousel>


            
            </div>
        </>
        
    )
}