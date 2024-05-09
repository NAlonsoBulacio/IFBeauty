import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./QuestionsAnswersHome.css";
const QuestionsAnswersEnd = ({ landing }) => {
  const [answer, setAnswer] = useState("");

  const handleAnswer = (answerId) => {
    setAnswer((prevAnswer) => (prevAnswer === answerId ? "" : answerId));
  };

  const QAs = [
    {
      question: "Should I combine my Collagen Boost and Sun damage Repair with other IF Products?",
      answer:
        "Yes, for the best results, you should combine your wrinkle cream with other IF products based on your routine.Pro tip: Collagen Boost and Sun damage Repair works best with Bright Eyes Peptide Complex Eye Gel",
      answer_id: "1",
    },
    {
      question: "How long will it take to see results?",
      answer:" While you will notice softer, smoother, and instantly hydrated skin, it's important to know that changing your anti-aging routine will take a few weeks to show more permanent results.",
      answer_id: "2",
    },
    {
      question: "Can I use Collagen Boost and Sun damage Repair at night?",
      answer:
        "You can use the product during the day and during the night, but for best results, we recommend you Golden Glycolic 10% Glycolic Night Serum",
      answer_id: "3",
    },
    {
      question: "How long will Collagen Boost and Sun damage Repair last?",
      answer:
        "To ensure you have enough product for at least 30 days.",
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

export default QuestionsAnswersEnd;
