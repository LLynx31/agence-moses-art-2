import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import style from "@/styles/projet.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from "next/router";

import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';


export default function page(){

    const router  = useRouter()
    return(
        <>
            <Header headerColor="black" akwaba scroll={'black'}></Header>
            <div className={style.baner}>
                <Image className={style.imageBaner} width={100} height={500} alt="3d supply chain" loading="lazy" ></Image>
            </div>

            <div className={style.layoutDetailProjet}>
                <h1 className={style.titleDetailProjet}>Le client</h1>
                <hr></hr>
                <p className={style.paragraphDetailProjet}>
                    Lorem ipsum dolor sit amet  lorem ipsum dolor sit amet lorem
                    lorem ipsum dolor sit amt ejfjl fgri elfiroei ad vitam eternam hrkfui hd
                    Lorem ipsum ffjru
                </p>
            </div>

            <div className={style.layoutDetailProjet}>
                <h1 className={style.titleDetailProjet}>Le projet</h1>
                <hr></hr>
                <p className={style.paragraphDetailProjet}>
                    Lorem ipsum dolor sit amet  lorem ipsum dolor sit amet lorem
                    lorem ipsum dolor sit amt ejfjl fgri elfiroei ad vitam eternam hrkfui hd
                    Lorem ipsum ffjru 
                </p>
            </div>
            

            <Swiper
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                slidesPerView={1}
                autoplay={true}
                className="mySwiper">
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>

             <div className={style.layoutCommentaireClient}>
                <h1 className={style.titleCommentaireClient}>commentaire du client</h1>
                <p className={style.paragraphCommentaireClient}>
                    Lorem ipsum dolor sit amet  lorem ipsum dolor sit amet lorem
                    lorem ipsum dolor sit amt ejfjl fgri elfiroei ad vitam eternam hrkfui hd
                    Lorem ipsum ffjru 
                </p>
            </div>
            
            <div className={style.layoutContact}>
                <div className={style.layoutContactBloc} style={{backgroundColor:'#11868A', color:'white'}}>
                    <div>j'ai un projet également</div>
                    <button onClick={()=>router.push('/contact#formContact')} style={{color:'black', backgroundColor:'#EDEDED'}}>soumettre</button>
                </div>
                <div className={style.layoutContactBloc} style={{backgroundColor:'#EDEDED', color:'black'}}>
                    <div>voir d'autres projets</div>
                    <button onClick={()=>router.push('/projets')} style={{color:'white', backgroundColor:'#11868A'}}>voir +</button>
                </div>
            </div>

            <Footer></Footer>
        </>
    )
}