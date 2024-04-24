import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./QuestionsAnswersHome.css";
import QuestionSvg from "../../utils/QuestionSvg";
import StarSvg from "../../utils/StarSvg";
import ShippingSvg from "../../utils/ShippingSvg";
import ReturnSvg from "../../utils/ReturnSvg";
const QuestionsAnswersHome = ({ landing }) => {
  const [answer, setAnswer] = useState("");

  const handleAnswer = (answerId) => {
    setAnswer((prevAnswer) => (prevAnswer === answerId ? "" : answerId));
  };

  const QAs = [
    {
      question: "How does it work?",
      answer:
        "This light-as-a-feather formula contains Vitamin C, peptides and plant stem cells to stimulate collagen production and repair.Why boost collagen? Collagen is the most common and abundant protein in the body. In our skin, it is responsible for helping skin cells renew and repair themselves and keeps our skin smooth and healthy. As we mature, collagen is naturally depleted. Vitamin C and specific peptides help stimulate collagen production. Sodium PCA, amino acids and plant-derived hyaluronic acid promote skin hydration. A botanical repair serum for every day. A good starting point if you want to begin using specific serums.",
      answer_id: "1",
    },
    {
      question: "How to use?",
      answer:
        "Apply 2-3 pumps to face and neck after cleansing and before your chosen moisturiser. May be used am or pm in conjunction with other serums if required.",
      answer_id: "2",
    },
    {
      question: "How do I ship?",
      answer:
        "Order processing takes 1-3 business days before shipping. Once your items are shipped, estimated delivery time is 2-5 days.",
      answer_id: "3",
    },
    {
      question: "Refund Policy",
      answer:
        "We love our If - Boost skin health and repair and we're sure you will too! In case things don't go as planned, our return and refund policy is designed to make it as easy as possible for you. <a href='/refund-policy' style='text-decoration: underline;' >Click here</a> for more information on how we can help.",
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
        {QAs?.map((qa, index) => (
          <div key={index}>
            <div className="w-full">
              <button
                className="w-full flex justify-between items-center space-x-2 text-gray-200 py-2"
                onClick={() => {
                  answer !== qa.answer_id
                    ? handleAnswer(qa.answer_id)
                    : handleAnswer("");
                }}
              >
                {index === 0 && <QuestionSvg />}
                {index === 1 && <StarSvg />}
                {index === 2 && <ShippingSvg />}
                {index === 3 && <ReturnSvg />}

                <span className="w-3/4 flex-grow text-left font-sans-600 text-gray-800 text-md lg:text-lg">
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
              className={`w-full  answer text-left ${
                answer === qa.answer_id ? "show" : ""
              }`}
            >
              <span
                className="flex-grow text-left font-sans-300 text-gray-500 text-md lg:text-lg"
                dangerouslySetInnerHTML={{ __html: qa.answer }}
              ></span>
            </div>
            <div className="w-full flex justify-center ">
              <div className="w-full">
                <hr className=" border-[0.5pxrem] border-gray-400" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsAnswersHome;
