import Header from "@/components/Header";
import Footer from "@/components/Footer";
import style from "@/styles/projet.module.css";
import { register } from "swiper/element/bundle";
import { useRouter } from "next/router";
import styleBanner from "@/styles/Marketing.module.css";

register();

import ProgressBar from "@/components/ProgressBar";
import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import { baseUrl } from "@/config/config";

export default function page() {
  const router = useRouter();

  const [isProjet, setProjet] = useState(null);

  useEffect(() => {
    getData();
    console.log(router.query)
  }, []);

  async function getData() {
    try {
      const response = await fetch(
        baseUrl + `/api/projets/${router.query.id}?populate=*`
      );
      if (!response.ok) {
        const error = await response.json();
        throw error;
      }
      const responseParse = await response.json();
      console.log(responseParse.data.attributes.Image.data.attributes.url);
      setProjet(responseParse.data.attributes.Image.data.attributes.url);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Header headerColor="black" akwaba scroll={"black"}></Header>
      <ProgressBar></ProgressBar>
      <Fade triggerOnce>
        <div
          style={{
            backgroundImage: "url('/assets/projet/Fond.jpg')",
          }}
          className={styleBanner.layoutBaner}
        ></div>
      </Fade>

      <div className={style.layoutDetailProjet}>
        <h1 className={style.titleDetailProjet}>Le client</h1>
        <hr></hr>
        <p className={style.paragraphDetailProjet}>
          3D Supply Chain est une entreprise basée à Guingamp, France,
          spécialisée dans la vente et la distribution de produits frais, secs
          et surgelés, avec une volonté d'exporter des produits « Made in Africa
          » vers le marché européen et la diaspora.
        </p>
      </div>

      <div className={style.layoutDetailProjet}>
        <h1 className={style.titleDetailProjet}>Le projet</h1>
        <hr></hr>
        <p className={style.paragraphDetailProjet}>
          3D Supply Chain a exprimé le désir de digitaliser son activité pour la
          rendre accessible à un public plus large. Nous avons donc été chargés
          de réaliser un site mettant en avant toute la gamme de leurs produits,
          facilitant ainsi les achats en ligne avec des fonctionnalités telles
          que l'inscription et la création de compte, l'achat et la validation
          du panier, le suivi de commande, l'historique des commandes, la
          livraison à domicile, et bien d'autres.
        </p>
      </div>
      <div style={{ marginLeft: 30, marginRight: 30 }}>
        <swiper-container
          slides-per-view="3"
          speed="500"
          infinit-loop="true"
          css-mode="true"
          space-between={30}
          pagination={true}
          navigation={true}
        >
          <swiper-slide>
            <img
              style={{ width: "100%" }}
              loading="lazy"
              src="assets/projet/slide 1.jpg"
            ></img>
          </swiper-slide>
          <swiper-slide>
            <img
              style={{ width: "100%" }}
              loading="lazy"
              src="assets/projet/slide 2.jpg"
            ></img>
          </swiper-slide>
          <swiper-slide>
            <img
              style={{ width: "100%" }}
              loading="lazy"
              src="assets/projet/slide 3.jpg"
            ></img>
          </swiper-slide>
          <swiper-slide>
            <img
              style={{ width: "100%" }}
              loading="lazy"
              src="assets/projet/slide 4.jpg"
            ></img>
          </swiper-slide>
        </swiper-container>
      </div>

      <div className={style.layoutCommentaireClient}>
        <h1 className={style.titleCommentaireClient}>commentaire du client</h1>
        <p className={style.paragraphCommentaireClient}>
          Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem lorem
          ipsum dolor sit amt ejfjl fgri elfiroei ad vitam eternam hrkfui hd
          Lorem ipsum ffjru
        </p>
      </div>

      <div className={style.layoutContact}>
        <div
          className={style.layoutContactBloc}
          style={{ backgroundColor: "#11868A", color: "white" }}
        >
          <div>j'ai un projet également</div>
          <button
            onClick={() => router.push("/contact#formContact")}
            style={{ color: "black", backgroundColor: "#EDEDED" }}
          >
            soumettre
          </button>
        </div>
        <div
          className={style.layoutContactBloc}
          style={{ backgroundColor: "#EDEDED", color: "black" }}
        >
          <div>voir d'autres projets</div>
          <button
            onClick={() => router.push("/projets")}
            style={{ color: "white", backgroundColor: "#11868A" }}
          >
            voir +
          </button>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
