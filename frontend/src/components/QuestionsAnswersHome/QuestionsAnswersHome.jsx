import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./QuestionsAnswersHome.css";
const QuestionsAnswersHome = ({ landing }) => {
  const [answer, setAnswer] = useState("");

  const handleAnswer = (answerId) => {
    setAnswer((prevAnswer) => (prevAnswer === answerId ? "" : answerId));
  };

  const QAs = [
    {
      question: "How it works",
      answer:
        "Using Nano-Crystalline technology, Bleame™ Crystal Hair Eraser allows the hair to clump and break from the surface when rubbed gently on the skin. This process also helps exfoliate, revealing baby smooth skin after use 💜",
      answer_id: "1",
    },
    {
      question: "Instructions",
      answer:
        "Prep Your Skin Exfoliate your skin no less than 24 hours before use. If you have sensitive skin, exfoliate no less than 48 hours before use.",
      answer_id: "2",
    },
    {
      question: "Shipping",
      answer:
        "Order processing takes 1-3 business days before shipment. Once your item/s is dispatched, the estimated delivery time is",
      answer_id: "3",
    },
    {
      question: "Return & Refund Policy",
      answer:
        "We love our Bleame™ Crystal Hair Eraser and we're confident you will too! In case things don't go as planned, our return and refund policy is designed to make things as easy as possible for you. Click here to learn more about how we can help.",
      answer_id: "4",
    },
  ];

  return (
    <div
      id="q&a"
      className={`w-full flex flex-wrap justify-center items-center gap-y-12 ${
        landing ? "py-10" : "py-0"
      }`}
    >
      {landing ? (
        <div className="w-full flex flex-wrap justify-center">
          <h1 className="w-full text-center  text-yellow-700 font-sans-400 text-xl">
            Respuestas a tus preguntas
          </h1>
          <p className="w-full text-center text-gray-900 font-sans-500 text-4xl">
            Preguntas frecuentes
          </p>
        </div>
      ) : (
        ""
      )}
      <div className="w-full flex flex-wrap justify-start items-center space-y-2 max-w-[800px]">
        {QAs?.map((qa) => (
          <>
            <div className="w-full">
              <button
                className="w-full flex justify-between items-center space-x-2 text-gray-200"
                onClick={() => {
                  answer !== qa.answer_id
                    ? handleAnswer(qa.answer_id)
                    : handleAnswer("");
                }}
              >
                <span className="w-3/4 flex-grow text-left font-sans-400 text-gray-700 text-md lg:text-lg">
                  {qa.question}
                </span>
                <IoIosArrowDown
                  className="w-1/4 md:w-auto text-gray-700"
                  style={{
                    transform: `rotate(${
                      answer === qa.answer_id ? 180 : 0
                    }deg)`,
                    transition: "transform 0.5s",
                  }}
                />
              </button>
            </div>
            <div
              className={`w-full answer text-left ${
                answer === qa.answer_id ? "show" : ""
              }`}
            >
              <span className="flex-grow text-left font-sans-300 text-gray-500 text-md lg:text-lg">
                {qa.answer}
              </span>
            </div>
            <div className="w-full flex justify-center ">
              <div className="w-full">
                <hr className=" border-[0.5pxrem] border-gray-400" />
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default QuestionsAnswersHome;
