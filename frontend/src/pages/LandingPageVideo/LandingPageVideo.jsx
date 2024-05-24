import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import YoutubePlayer from "../../components/YoutubePlayer/YoutubePlayer";
import { block } from "million/react";
import { MdAdsClick } from "react-icons/md";
import { useHistory } from "react-router-dom";

const LandingPageVideo = block(() => {
  const history = useHistory();
  const [homeVariant, setHomeVariant] = useState(2);
  const handleHomeVariant = (variant) => {
    setHomeVariant(variant);
  };

  const handleClick = () => {
      history.push("/collagen");
  };

  return (
    <div>
      <Header />
      <div className="px-2 lg:px-10 xl:px-20 bg-slate-600 space-y-0 lg:space-y-2 py-4 lg:pb-12">
        <YoutubePlayer youtube_url="x4FsgRb7eEw" landingVideo={"LandingVideo"} />
        <div>
          <h1 className="font-montserrat-500 text-md lg:text-lg text-gray-200 text-center pb-1">
          If You Want to Boost Your Collagen
          </h1>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
          onClick={handleClick}
            className="z-50 flex justify-center items-center max-w-[700px] bg-gradient-to-r from-[#40b4e5] to-[#09a3e4] text-white text-xl lg:text-2xl py-4 px-6 rounded-xl mb-2 mx-4 my-0 md:my-2 uppercase"
            style={{
              marginBottom: "3rem",
        
              justifyContent: "center",
            }}
          >
            <MdAdsClick />
            Discover Our Product
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
});

export default LandingPageVideo;
