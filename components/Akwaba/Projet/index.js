import styleProjet from "../../../styles/Akwaba/Projet.module.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { baseUrl } from "@/config/config";
import ImageLoader from "@/components/loading/ImageLoader";
import Link from "next/link";

function Projet({ titre, arriereplan,id }) {
  return (
    <div
      className={styleProjet.layout_projet}
      style={{ backgroundImage: `url(${baseUrl + arriereplan})` }}
    >
      <div>
        <h1>{titre}</h1>
        <Link href={`/projet/${id}`}>détails </Link>
      </div>
    </div>
  );
}

export default function SectionProjet() {
  const [isProjets, setProjets] = useState(null);

  useEffect(() => {
    getProjets();
  }, []);

  async function getProjets() {
    try {
      const response = await fetch(baseUrl + "/api/projets?populate=*");
      if (!response.ok) {
        const error = await response.json();
        throw error;
      }
      const responseParse = await response.json();
      setProjets(responseParse.data);
      //console.log(responseParse.data)
    } catch (error) {
      console.log(error);
    }
  }

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
      <motion.div variants={animQuiz}  style={{textAlign:'center', fontFamily:'Montserrat'}} >
        QU’EST CE QUE NOUS FAISONS ?
      </motion.div>
      <motion.h1 variants={animTitre} style={{textAlign:'center', fontSize:'40px'}} >
        NOS PROJETS RECENTS 
      </motion.h1>

      <motion.div variants={animProjetLR} className={styleProjet.projet_range1}>
        {isProjets ? (
          isProjets.map((projet) => (
            <Projet id={projet.id} key={projet.attributes.Banniere_Projet.data?.attributes.url} titre={projet.attributes.Titre} arriereplan={projet.attributes.Banniere_Projet.data?.attributes.url}></Projet>
          ))
        ) : (
          <>
            <ImageLoader></ImageLoader>
            <ImageLoader></ImageLoader>
            <ImageLoader></ImageLoader>
            <ImageLoader></ImageLoader>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
