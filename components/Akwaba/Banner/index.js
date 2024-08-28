import stylesBanner from "../../../styles/Akwaba/Banner.module.css";
import { useState, useEffect } from "react";
import BannerLoader from "@/components/loading/BannerLoader";
import { baseUrl } from "@/config/config";

export default function Banner() {
  const [isBanner, setBanner] = useState(null);

  useEffect(() => {
    getBanner();
  }, []);

  async function getBanner() {
    try {
      const response = await fetch(baseUrl + "/api/akwaba?populate=*", {
        mode: "cors",
      });
      if (!response.ok) {
        const error = await response.json();
        throw error;
      }
      const responseParse = await response.json();

      setBanner(responseParse.data.attributes.Video.data.attributes.url);
    } catch (error) {
      console.log(error);
    }
  }

  return isBanner ? (
    <div className={stylesBanner.layoutBanner}>
      <video
        autoPlay
        preload="metadata"
        muted
        playsInline
        loop
        style={{
          backgroundColor: "#000",
          width: "100%",
          marginTop: 0,
          marginBottom: 0,
        }}
      >
        <source src={baseUrl + isBanner} type="video/mp4"></source>
      </video>
    </div>
  ) : (
    <BannerLoader></BannerLoader>
  );
}
