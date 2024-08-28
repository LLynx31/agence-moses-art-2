import styleContactezNous from "../../../styles/ContactezNous.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { baseUrl } from "@/config/config";

function FormContact() {
  const illustrationFormulaire = "/assets/Image_formulaire/formulaire_.jpg";

  const [isFullName, setFullname] = useState("");
  const [isEmail, setEmail] = useState("");
  const [isTelephone, setTelephone] = useState("");
  const [isSecteur, setSecteur] = useState("");
  const [isMessage, setMessage] = useState("");

  useEffect(() => {
    console.log(
      isFullName +
        " " +
        isEmail +
        " " +
        isTelephone +
        " " +
        isSecteur +
        " " +
        isMessage
    );
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseUrl + "/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            NOM_PRENOMS: isFullName,
            Email: isEmail,
            Telephone: isTelephone,
            Secteurs_Activite: isSecteur,
            Preocupation: isMessage,
            Nom_Prenoms: isFullName,
          },
        }),
      });

      if (response.ok) {
        alert("E-mail envoyé avec succès !");
        console.log(response.json());
      } else {
        alert("Une erreur s'est produite lors de l'envoi de l'e-mail.");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Une erreur s'est produite lors de l'envoi de l'e-mail.");
    }
  };

  return (
    <form className={styleContactezNous.formulaire} onSubmit={handleSubmit}>
      <Image
        loading="lazy"
        src={illustrationFormulaire}
        width={450}
        height={500}
        quality={100}
        className={styleContactezNous.illustrationFormulaire}
        alt="femme qui sourit"
      ></Image>

      <div className={styleContactezNous.champ}>
        <input
          type="text"
          name="full_name"
          className={styleContactezNous.full_name}
          onChange={(e) => setFullname(e.target.value)}
          placeholder="Nom & Prenom"
          required
        ></input>

        <input
          type="email"
          name="email"
          className={styleContactezNous.email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        ></input>

        <input
          type="text"
          name="telephone"
          className={styleContactezNous.full_name}
          onChange={(e) => setTelephone(e.target.value)}
          placeholder="Téléphone"
          required
        ></input>

        <input
          type="text"
          name="secteur_activité"
          className={styleContactezNous.full_name}
          onChange={(e) => setSecteur(e.target.value)}
          placeholder="Secteur d'activité"
          required
        ></input>

        <input
          className={styleContactezNous.message}
          type="text"
          name="message"
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <motion.button
          type="submit"
          whileHover={{
            boxShadow: "0px 0px 30px rgba(0,0,0,0.6)",
            scale: 1.1,
            cursor: "pointer",
          }}
          className={styleContactezNous.div_submit}
        >
          Envoyer
        </motion.button>
      </div>
    </form>
  );
}

export default function ContatezNous({ children }) {
  const imgFacebookContactezNous = "/assets/imgFacebookContactezNous.png";
  const imgInstagramContactezNous = "/assets/imgInstagramContactezNous.png";
  const imgLinkedInContactezNous = "/assets/imgLinkedInContactezNous.png";
  const illustration1 = "/assets/Calque51.svg";
  const illustration2 = "/assets/Calque81.svg";

  const facebook = "/assets/FacebookFooter.svg";
  const instagram = "/assets/InstagramFooter.svg";
  const linkedin = "/assets/LinkedInFooter.svg";
  const email = "/assets/EmailFooter.svg";
  const styleReseau = {
    width: "30px",
    height: "30px",
    position: "relative",
    display: "inline-block",
  };

  const animIllustration = {
    whileInView: {
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

  const animSec = {
    hidden: {
      opacity: 0,
      y: 200,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const animTitre = {
    hidden: {
      opacity: 0,
      x: 10,
    },

    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
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
        duration: 0.2,
      },
    },
  };

  const animReseau = {
    hidden: {
      opacity: 0,
      y: -50,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const animForm = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      id="contact"
      variants={animSec}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
      className={styleContactezNous.layout_contactez_nous}
    >
      <motion.img
        loading="lazy"
        variants={animIllustration}
        whileInView="whileInView"
        className={styleContactezNous.illustration1}
        alt="illustration"
        src={illustration1}
        width={80}
        height={80}
      ></motion.img>
      <motion.img
        loading="lazy"
        variants={animIllustration}
        whileInView="whileInView"
        className={styleContactezNous.illustration2}
        alt="illustration"
        src={illustration2}
        width={80}
        height={80}
      ></motion.img>
      <div className={styleContactezNous.back_form}>
        <motion.h1
          variants={animTitre}
          className={styleContactezNous.contactez_nous_title}
        >
          Prenez rendez-vous !!!
        </motion.h1>
        <motion.p variants={animP}>
          N’hésitez pas à nous contacter pour vous <br></br>démarquez des autres
        </motion.p>
        <motion.div variants={animReseau} className={styleContactezNous.reseau}>
          <div style={styleReseau}>
            <a href="">
              <Image
                loading="lazy"
                fill
                alt="facebook"
                className="facebook"
                src={facebook}
              ></Image>
            </a>
          </div>
          <div style={styleReseau}>
            <a href="">
              <Image
                loading="lazy"
                fill
                alt="instagram"
                className="instagram"
                src={instagram}
              ></Image>
            </a>
          </div>
          <div style={styleReseau}>
            <a href="">
              <Image
                loading="lazy"
                fill
                alt="linkedin"
                className="linkedin"
                src={linkedin}
              ></Image>
            </a>
          </div>
          <div style={styleReseau}>
            <a href="">
              <Image
                loading="lazy"
                fill
                alt="Email"
                className="Email"
                src={email}
              ></Image>
            </a>
          </div>
        </motion.div>
      </div>
      <motion.div variants={animForm}>
        <FormContact />
      </motion.div>

      <div className={styleContactezNous.rs}>
        <div className={styleContactezNous.title_rs}>suivez nous</div>
        <div className={styleContactezNous.img_rs}>
          <Image
            loading="lazy"
            alt="illustration"
            src={imgInstagramContactezNous}
            width={25}
            height={25}
          ></Image>
          <Image
            loading="lazy"
            alt="illustration"
            src={imgFacebookContactezNous}
            width={25}
            height={25}
          ></Image>
          <Image
            loading="lazy"
            alt="illustration"
            src={imgLinkedInContactezNous}
            width={25}
            height={25}
          ></Image>
        </div>
      </div>
    </motion.div>
  );
}
