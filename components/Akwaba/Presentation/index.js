import TextLoader from "@/components/loading/TextLoader";
import stylePresentation from "../../../styles/Akwaba/Description.module.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { baseUrl } from "@/config/config";
import ImageAkwabaDescriptionLoader from "@/components/loading/ImageAkwabaDescriptionLoader";
import ReactMarkdown from "react-markdown";

const animLayout = {
  hidden: {
    opacity: 0,
    y: 100,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};

const animQuiz = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const animTitre = {
  hidden: {
    opacity: 0,
    x: 50,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const animP = {
  hidden: {
    opacity: 0,
    x: -50,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const animImg = {
  hidden: {
    opacity: 0,
    y: 200,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

const animIllustration = {
  animate: {
    x: [0, 10, 0, -10, 0],
    y: [0, 10, 0, -10, 0],
    opacity: [8, 9, 10],
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 8,
    },
  },

  hidden: {
    opacity: 0,
  },
};

function Presentation({ isPresentationData }) {
  return (
    <motion.div
      variants={animLayout}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
      className={stylePresentation.layout_presentation}
    >
      <motion.div variants={animQuiz} className={stylePresentation.quiz}>
        {isPresentationData ? (
          <ReactMarkdown>{isPresentationData.Titre}</ReactMarkdown>
        ) : (
          <TextLoader lineCount={1} width="100px"></TextLoader>
        )}
      </motion.div>

      <motion.div variants={animP} className={stylePresentation.description}>
        {isPresentationData ? (
          <ReactMarkdown>{isPresentationData.Text}</ReactMarkdown>
        ) : (
          <TextLoader lineCount={3} width="300px"></TextLoader>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function SectionPresenattion() {
  const image = "assets/site version web/acceuil.jpg";
  const illustration1 = "/assets/Calque7.svg";
  const illustration2 = "/assets/Calque81.svg";
  const illustration3 = "/assets/Calque61.svg";

  const [isPresentationData, setPresentationData] = useState(null);

  useEffect(() => {
    getPresentationData();
  }, []);
  async function getPresentationData() {
    try {
      const response = await fetch(
        baseUrl + "/api/description-page-akwaba?populate=*"
      );
      if (!response.ok) {
        const error = await response.json();
        throw error;
      }
      const responseParse = await response.json();
      //console.log(responseParse);
      setPresentationData({
        Titre: responseParse.data.attributes.Titre,
        Sous_Titre: responseParse.data.attributes.Sous_Titre,
        Text: responseParse.data.attributes.Text,
        ImageName: responseParse.data.attributes.Image.data.attributes.name,
        ImageUrl: responseParse.data.attributes.Image.data.attributes.url,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={stylePresentation.layout_section}>
      {isPresentationData ? (
        <motion.img
          loading="lazy"
          variants={animImg}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          width={450}
          height={450}
          className={stylePresentation.image}
          src={baseUrl + isPresentationData.ImageUrl}
          alt="Femme sur son telephone"
        ></motion.img>
      ) : (
        <ImageAkwabaDescriptionLoader></ImageAkwabaDescriptionLoader>
      )}

      <Presentation isPresentationData={isPresentationData}></Presentation>
      <div className={stylePresentation.div_btn}>
        <motion.button
          onClick={() => (document.location.href = "#contact")}
          whileHover={{ scale: 1.1 }}
          className={stylePresentation.button_contact}
        >
          Contactez Nous
        </motion.button>
      </div>
      <motion.img
        loading="lazy"
        variants={animIllustration}
        animate="animate"
        initial="hidden"
        alt="illustration"
        width={40}
        height={40}
        className={stylePresentation.illustration1}
        src={illustration1}
      ></motion.img>
      <motion.img
        loading="lazy"
        variants={animIllustration}
        animate="animate"
        initial="hidden"
        alt="illustration"
        width={40}
        height={40}
        className={stylePresentation.illustration2}
        src={illustration2}
      ></motion.img>
      <motion.img
        loading="lazy"
        variants={animIllustration}
        animate="animate"
        initial="hidden"
        alt="illustration"
        width={60}
        height={60}
        className={stylePresentation.illustration3}
        src={illustration3}
      ></motion.img>
    </div>
  );
}
