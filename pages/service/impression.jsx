import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import style from "@/styles/Marketing.module.css";
import ContatezNous from "@/components/Akwaba/ContactezNous";
import Image from "next/image";
import { Fade, Zoom } from "react-awesome-reveal";


export default function Marketing() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <title>Agence MOSES ART</title>
      </Head>

      <Header headerColor="black" service scroll={"black"}></Header>
      <ProgressBar></ProgressBar>

      <Fade triggerOnce>
        <div className={style.layoutBaner}>
          <div className={style.titleBaner}>BANNIERE</div>
        </div>
      </Fade>

      <div className={style.sectionLayout}>
        <Zoom triggerOnce cascade damping={0.1}>
          <div
            className={style.blockLayout}
            style={{ backgroundColor: "#FFC403" }}
          >
            <h1 className={style.titleBlock}>Qualité professionnelle</h1>
            <p className={style.paragraphe}>
              Nous disposons des équipements et des compétences nécessaires pour
              produire des impressions de haute qualité, avec une attention aux
              détails et une finition professionnelle.
            </p>
          </div>
          <div className={style.layoutIcone}>
            <Image
              width={100}
              height={100}
              src={"/assets/IconeService/1446546.png"}
            ></Image>
          </div>
          <div className={style.layoutIcone}>
            <Image
              width={100}
              height={100}
              src={"/assets/IconeService/4298590.png"}
            ></Image>
          </div>
          <div
            className={style.blockLayout}
            style={{ backgroundColor: "#076965", color: "white" }}
          >
            <h1 className={style.titleBlock}>Option de personnalisation</h1>
            <p className={style.paragraphe}>
              Vous pouvez personnaliser vos supports imprimés selon vos besoins
              et préférences, que ce soit en termes de design, de taille, de
              couleur ou de matériau. Cela vous permet de créer des supports
              uniques et adaptés à votre marque ou événement.
            </p>
          </div>
          <div
            className={style.blockLayout}
            style={{ backgroundColor: "#FFC403" }}
          >
            <h1 className={style.titleBlock}>Large gamme de supports</h1>
            <p className={style.paragraphe}>
              Nous vous offrons une variété de choix en termes de supports
              d'impression, que ce soit du papier, du textile, du métal, du
              plastique, etc. Vous pouvez choisir le support qui convient le
              mieux à votre projet.
            </p>
          </div>
          <div className={style.layoutIcone}>
            <Image
              width={100}
              height={100}
              src={"/assets/IconeService/1268053.png"}
            ></Image>
          </div>
          <div className={style.layoutIcone}>
            <Image
              width={100}
              height={100}
              src={"/assets/IconeService/1134590.png"}
            ></Image>
          </div>
          <div
            className={style.blockLayout}
            style={{ backgroundColor: "#076965", color: "white" }}
          >
            <h1 className={style.titleBlock}>Gain de temps</h1>
            <p className={style.paragraphe}>
              Externaliser vos besoins d'impression à notre agence vous permet
              de vous concentrer sur d'autres aspects de votre entreprise ou de
              votre événement, car nous nous chargeons de la gestion de la
              production et de la livraison des supports imprimés.
            </p>
          </div>

          <div
            className={style.blockLayout}
            style={{ backgroundColor: "#FFC403" }}
          >
            <h1 className={style.titleBlock}>Expertise et conseil</h1>
            <p className={style.paragraphe}>
              Nous avons une connaissance approfondie des différentes techniques
              d'impression et nous pouvons vous conseiller sur les meilleures
              options en fonction de vos besoins et de votre budget.
            </p>
          </div>
          <div className={style.layoutIcone}>
            <Image
              width={100}
              height={100}
              src={"/assets/IconeService/3938366.png"}
            ></Image>
          </div>
          <div className={style.layoutIcone}>
            <Image
              width={100}
              height={100}
              src={"/assets/IconeService/5062832.png"}
            ></Image>
          </div>
          <div
            className={style.blockLayout}
            style={{ backgroundColor: "#076965", color: "white" }}
          >
            <h1 className={style.titleBlock}>Service clé en main</h1>
            <p className={style.paragraphe}>
              De la conception à la livraison, nous gérons l'ensemble du
              processus pour vous, en vous offrant un service complet et
              pratique.
            </p>
          </div>
          <div
            className={style.blockLayout}
            style={{ backgroundColor: "#FFC403" }}
          >
            <h1 className={style.titleBlock}>Impression à grande échelle</h1>
            <p className={style.paragraphe}>
              Si vous avez besoin d'une grande quantité d'impressions, nous
              répondons à vos besoins et nous vous offrons des tarifs avantageux
              pour les commandes en gros.
            </p>
          </div>
          <div className={style.layoutIcone}>
            <Image
              width={100}
              height={100}
              src={"/assets/IconeService/39898.png"}
            ></Image>
          </div>
        </Zoom>
      </div>
      <ContatezNous></ContatezNous>

      <Footer></Footer>
    </div>
  );
}
