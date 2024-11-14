import stylesPatrenaire from "../../styles/NosPartenaire.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { baseUrl } from "@/config/config";
import { useEffect, useState } from "react";
import stylesLoadingImg from "@/styles/Loading/ImageLoading.module.css";

function Partenaire({ imgPartenaire }) {
  return (
    <div className={stylesPatrenaire.div_partenaire}>
      <Image
        loading="lazy"
        className={stylesPatrenaire.logo}
        alt="logo des partenaires"
        src={baseUrl + imgPartenaire}
        width={90}
        height={90}
      ></Image>
    </div>
  );
}

export default function NosPartenaire() {
  const [isPartenaires, setPartenaires] = useState(null);

  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    try {
      const response = await fetch(baseUrl + "/api/partenaires?populate=*");
      if (!response.ok) {
        const error = await response.json();
        throw error;
      }
      const responseParse = await response.json();
      //console.log(responseParse);
      setPartenaires(responseParse.data);
    } catch (error) {
      console.log(error);
    }
  }
  const animSec = {
    hidden: {
      opacity: 0,
      y: 200,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const animPartenaire = {
    hidden: {
      opacity: 0,
      x: -50,
    },

    visible: {
      opacity: 1,
      x: 0,
      duration: 0.3,
    },
  };
  return (
    <motion.div
      variants={animSec}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={stylesPatrenaire.layout_nos_partenaire}
    >
      <h1 className={stylesPatrenaire.nos_partenaire_title}  style={{
          fontFamily: "AsgardTrial,Montserrat",
          textAlign: "center",
          marginTop: "60px",
          fontSize: "40px",
        }}>
        Ils nous font confiance{" "}
      </h1>

      <div className={stylesPatrenaire.layoutPartenaire}>
        {isPartenaires ? (
          isPartenaires.map((partenaire) => (
            <motion.div key={partenaire.id} variants={animPartenaire}>
              <Partenaire
                imgPartenaire={
                  partenaire.attributes?.Logo_Partenaire?.data?.attributes?.url || partenaire.attributes?.Logo_Partenaire?.data?.attributes?.fallbackUrl
                }
              ></Partenaire>
            </motion.div>
          ))
        ) : (
          <>
            <div
              className={stylesLoadingImg.imageLoaderContent}
              style={{ width: 90, height: 90 }}
            ></div>

            <div
              className={stylesLoadingImg.imageLoaderContent}
              style={{ width: 90, height: 90 }}
            ></div>

            <div
              className={stylesLoadingImg.imageLoaderContent}
              style={{ width: 90, height: 90 }}
            ></div>

            <div
              className={stylesLoadingImg.imageLoaderContent}
              style={{ width: 90, height: 90 }}
            ></div>
            <div
              className={stylesLoadingImg.imageLoaderContent}
              style={{ width: 90, height: 90 }}
            ></div>
            <div
              className={stylesLoadingImg.imageLoaderContent}
              style={{ width: 90, height: 90 }}
            ></div>
            <div
              className={stylesLoadingImg.imageLoaderContent}
              style={{ width: 90, height: 90 }}
            ></div>
            <div
              className={stylesLoadingImg.imageLoaderContent}
              style={{ width: 90, height: 90 }}
            ></div>
            <div
              className={stylesLoadingImg.imageLoaderContent}
              style={{ width: 90, height: 90 }}
            ></div>
            <div
              className={stylesLoadingImg.imageLoaderContent}
              style={{ width: 90, height: 90 }}
            ></div>
            <div
              className={stylesLoadingImg.imageLoaderContent}
              style={{ width: 90, height: 90 }}
            ></div>
            <div
              className={stylesLoadingImg.imageLoaderContent}
              style={{ width: 90, height: 90 }}
            ></div>
            <div
              className={stylesLoadingImg.imageLoaderContent}
              style={{ width: 90, height: 90 }}
            ></div>
            <div
              className={stylesLoadingImg.imageLoaderContent}
              style={{ width: 90, height: 90 }}
            ></div>
            <div
              className={stylesLoadingImg.imageLoaderContent}
              style={{ width: 90, height: 90 }}
            ></div>
            <div
              className={stylesLoadingImg.imageLoaderContent}
              style={{ width: 90, height: 90 }}
            ></div>
             <div
              className={stylesLoadingImg.imageLoaderContent}
              style={{ width: 90, height: 90 }}
            ></div>
             <div
              className={stylesLoadingImg.imageLoaderContent}
              style={{ width: 90, height: 90 }}
            ></div>
          </>
        )}
      </div>
    </motion.div>
  );
}
