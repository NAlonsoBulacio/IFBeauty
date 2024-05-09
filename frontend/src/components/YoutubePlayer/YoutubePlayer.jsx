import React, { useState } from "react";
import YouTube from "react-youtube";
import Registro2 from "../../components/Registro/Registro2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./YoutubePlayer.css";
// import { block } from 'million/react';

const YoutubePlayer = 
// block(
  ({ youtube_url }) => {
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
      toast.success("Subscription submitted!");
    }
  };
  const handleClick = (click) => {
    setShowform(click);
  };


  const opts = {
    height: "360",
    width: "100%",
    playerVars: {},
  };
  const videoId = youtube_url;
  return (
    <div className="w-full flex flex-wrap justify-center px-0 lg:px-4 space-y-3">
      <div className="w-full">
        <p className="font-light text-balance text-4xl lg:text-5xl px-0 lg:mx-20 font-podium text-gray-50 uppercase">We reveal 3 scientific studies of how to rejuvenate your skin and repair sun damage in 90 days.</p>
      </div>
      <div className="youtube-div relative">
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/x4FsgRb7eEw?si=IMMd6XCV0hm_HpDO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
}
// );

export default YoutubePlayer;
