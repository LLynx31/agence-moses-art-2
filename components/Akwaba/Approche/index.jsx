/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import style from "@/styles/Approche.module.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { baseUrl } from "@/config/config";
import ImageLoader from "@/components/loading/ImageLoader";

export default function SectionApproche() {
  const [isApproche, setApproche] = useState(null);
  useEffect(() => {
    getApproche();
  }, []);

  async function getApproche() {
    try {
      const response = await fetch(baseUrl + "/api/approche?populate=*");
      if (!response.ok) {
        const error = await response.json();
        throw error;
      }
      const responseParse = await response.json();
      //console.log(responseParse.data.attributes.Image_Approche.data.attributes.url)
      setApproche(responseParse.data.attributes.Image_Approche.data.attributes.url)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={style.layout_section}>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        style={{
          fontFamily: "montserrat",
          textAlign: "center",
          marginTop: "60px",
          fontSize: "40px",
        }}
      >
        NOTRE APPROCHE
      </motion.h1>
      <div>
        { isApproche ?<img
          loading="lazy"
          className={style.img}
          src={baseUrl + isApproche}
          alt="approche commerciale"
        ></img> : <ImageLoader></ImageLoader>}
      </div>
    </div>
  );
}
