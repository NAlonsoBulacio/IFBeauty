import React, { useState } from "react";
import Registro2 from "../Registro/Registro2";
import Registro3 from "../Registro/Registro3";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./YoutubePlayer.css";
import { useHistory } from "react-router-dom";
import { block } from "million/react";

const VideoPlayer = block(({ landingVideo }) => {
  const history = useHistory();
  const [showForm, setShowform] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleShowForm = () => {
    setShowform(!showForm);
    if (!landingVideo) {
      setShowVideo(true);
    }
  };
  const actualizarEstadoPadre = (estado) => {
    if (estado === true) {
      setShowform(!showForm);
      setShowVideo(true);
      toast.success("Subscription submitted!");
    }
  };
  const handleClick = (click) => {
    setShowform(click);
  };

  return (
    <div className="w-full flex flex-wrap justify-center px-0 lg:px-4 space-y-3">
      <div className="w-full">
        <p className="font-light text-balance text-3xl lg:text-5xl px-0 mx-0 lg:mx-20 font-podium text-gray-50 uppercase">
          With more than 30 years experience as an Anti Aging and Wellness
          Educator I reveal the Truth behind the most effective and famous
          skincare brands and what is best for your Skin.
        </p>
      </div>
      <div
        className={` ${
          landingVideo ? "h-[320px]" : "h-[360px]"
        } w-full lg:w-[640px] relative`}
      >
        <video
          width="100%"
          height="315"
          controls
          src="https://cdn.shopify.com/videos/c/o/v/f706a4ee74e94756b2ffa21601f2dc66.mp4"
          title="Video player"
        ></video>
      </div>
      {showForm && (
        <>
          <div
            className="fixed inset-0 bg-gray-800 opacity-50 z-40"
            onClick={() => handleClick(false)}
          ></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              {landingVideo ? (
                <Registro3
                  actualizarEstado={actualizarEstadoPadre}
                  handleShowRegistro={handleShowForm}
                />
              ) : (
                <Registro2
                  actualizarEstado={actualizarEstadoPadre}
                  handleShowRegistro={handleShowForm}
                />
              )}
            </div>
          </div>
        </>
      )}
      {showVideo === false ? (
        <div
          className="absolute w-full h-full z-30 bg-transparent cursor-pointer"
          onClick={() => setShowform(true)}
        ></div>
      ) : (
        ""
      )}
      <ToastContainer />
    </div>
  );
});

export default VideoPlayer;
