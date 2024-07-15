import styleProjet from "../../../styles/Akwaba/Projet.module.css";
import { motion } from "framer-motion";
function Projet({ titre, arriereplan, changeDetail }) {
  return (
    <div
      className={styleProjet.layout_projet}
      style={{ backgroundImage: arriereplan }}
    >
      <div>
        <h1>{titre}</h1>
        <a href="/projet/3dsupplychain">détails</a>
      </div>
    </div>
  );
}

export default function SectionProjet() {
  const projet1 = {
    arrierePlan: "url('/assets/Inkedpage7.jpg')",
    image: "url('/assets/Inkedpage7.jpg')",
  };
  const projet2 = {
    arrierePlan: "url('/assets/Inkedpage14.jpg')",
    image: "url('/assets/Inkedpage14.jpg')",
  };
  const projet3 = {
    arrierePlan: "url('/assets/Inkedpage18.jpg')",
    image: "url('/assets/Inkedpage18.jpg')",
  };
  const projet4 = {
    arrierePlan: "url('/assets/Inkedpage13.jpg')",
    image: "url('/assets/Inkedpage13.jpg')",
  };
  const projet5 = {
    arrierePlan: "url('/assets/Inkedpage10.jpg')",
    image: "url('/assets/Inkedpage10.jpg')",
  };
  const projet6 = {
    arrierePlan: "url('/assets/Inkedpage9.jpg')",
    image: "url('/assets/Inkedpage9.jpg')",
  };
  const projet7 = {
    arrierePlan: "url('/assets/Inkedpage19.jpg')",
    image: "url('/assets/Inkedpage19.jpg')",
  };
  const projet8 = {
    arrierePlan: "url('/assets/sirus_capital.jpg')",
    image: "url('/assets/sirus_capital.jpg')",
  };
  const projet9 = {
    arrierePlan: "url('/assets/Inkedpage11.jpg')",
    image: "url('/assets/Inkedpage11.jpg')",
  };

  //const illustration = '/assets/LeftArrow.svg'
  const illustration1 = "/assets/Calque5.svg";

  const animSectProjet = {
    hidden: {
      opacity: 0,
      y: 100,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
      },
    },
  };

  const animQuiz = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.8,
      },
    },
  };

  const animTitre = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.6,
        duration: 1,
      },
    },
  };
  const animProjetLR = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 1,
      },
    },
  };

  const animProjetM = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 1,
      },
    },
  };

  return (
    <motion.div
      variants={animSectProjet}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={styleProjet.layout_section_projets}
    >
      <motion.img
        loading="lazy"
        animate={{
          x: [0, 10, 0, -10, 0, -20, 0, 20, 0],
          y: [0, 10, 0, -10, 0, -20, 0, 20, 0],
        }}
        transition={{ repeat: Infinity, duration: 16, delay: 1 }}
        className={styleProjet.illustration1}
        src={illustration1}
        width={50}
        height={50}
      ></motion.img>
      <motion.div variants={animQuiz} className={styleProjet.quiz}>
        QU’EST CE QUE NOUS FAISONS ?
      </motion.div>
      <motion.h1 variants={animTitre} className={styleProjet.section_title}>
        Nos Projets Récents
      </motion.h1>

        <motion.div
          variants={animProjetLR}
          className={styleProjet.projet_range1}
        >
          <Projet
            titre={"Titre"}
            arriereplan={projet1.arrierePlan}
            
          ></Projet>
          <Projet
            titre={"Titre"}
            arriereplan={projet2.arrierePlan}
            
          ></Projet>
          <Projet
            titre={"Titre"}
            arriereplan={projet3.arrierePlan}
            
          ></Projet>

          <Projet
            titre={"Titre"}
            arriereplan={projet4.arrierePlan}
      
          ></Projet>
          <Projet
            titre={"Titre"}
            arriereplan={projet5.arrierePlan}
     
          ></Projet>
          <Projet
            titre={"Titre"}
            arriereplan={projet6.arrierePlan}
         
          ></Projet>

          <Projet
            titre={"Titre"}
            arriereplan={projet7.arrierePlan}
           
          ></Projet>
          <Projet
            titre={"Titre"}
            arriereplan={projet8.arrierePlan}
           
          ></Projet>
          <Projet
            titre={"Titre"}
            arriereplan={projet9.arrierePlan}
           
          ></Projet>
        </motion.div>
    </motion.div>
  );
}
