import React, { useState } from "react";
import YouTube from "react-youtube";
import Registro2 from "../../components/Registro/Registro2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./YoutubePlayer.css";
const YoutubePlayer = ({ youtube_url }) => {
  const [showForm, setShowform] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleShowForm = () => {
    setShowform(!showForm);
    setShowVideo(true);
  };
  const actualizarEstadoPadre = (estado) => {
    if (estado === true) {
      setShowform(!showForm);
      setShowVideo(true);
      toast.success("¡Mensaje enviado exitosamente!");
    }
  };
  const handleClick = (click) => {
    setShowform(click);
  };

  // const handleVideoStart = () => {
  //   window.fbq("trackCustom", "VideoViewed");
  // };

  const opts = {
    height: "360",
    width: "100%",
    playerVars: {},
  };
  const videoId = youtube_url;
  return (
    <div className="w-full flex flex-wrap justify-center px-0 lg:px-4 space-y-3">
      <div className="w-full">
        <h1 className="text-3xl font-robotoCon-500 text-gray-300">See how more than 10,000 clients rejuvenated their skin by 10 to 15 years with our frmula and repairing sun damage.</h1>
      </div>
      <div className="youtube-div relative">
        <YouTube
          videoId={videoId}
          opts={opts}
         
        />
      </div>
      {showForm && (
        <>
          <div
            className="fixed inset-0 bg-gray-800 opacity-50 z-40"
            onClick={() => handleClick(false)}
          ></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <Registro2
                actualizarEstado={actualizarEstadoPadre}
                handleShowRegistro={handleShowForm}
              />
            </div>
          </div>
        </>
      )}
      {showVideo === false ? (
        <div
          className="absolute youtube-div z-30 bg-transparent cursor-pointer"
          onClick={() => setShowform(true)}
        ></div>
      ) : (
        ""
      )}
      <ToastContainer />
    </div>
  );
};

export default YoutubePlayer;
