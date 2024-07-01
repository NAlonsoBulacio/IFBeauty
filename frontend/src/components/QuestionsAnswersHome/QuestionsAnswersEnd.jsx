import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./QuestionsAnswersHome.css";

const QuestionsAnswersEnd = ({ landing, acne }) => {
  const [answer, setAnswer] = useState("");

  const handleAnswer = (answerId) => {
    setAnswer((prevAnswer) => (prevAnswer === answerId ? "" : answerId));
  };

  const QAsDefault = [
    {
      question: "Should I combine my Collagen Boost and Sun damage Repair with other IF Products?",
      answer:
        "Yes, for the best results, you should combine your wrinkle serum with other IF products based on your routine.Pro tip: Collagen Boost and Sun damage Repair works best with Bright Eyes Peptide Complex Eye Gel",
      answer_id: "1",
    },
    {
      question: "How long will it take to see results?",
      answer:
        "While you will notice softer, smoother, and instantly hydrated skin, it's important to know that changing your anti-aging routine will take a few weeks to show more permanent results.",
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

  const QAsAcne = [
    {
      question: "How long does it take to see results with Acne Detox?",
      answer:
        "Most of our customers start to see improvements in their skin within 3 days of use. Results may vary depending on skin type and acne severity, but many users report clearer and less inflamed skin within the first month.",
      answer_id: "1",
    },
    {
      question: "Is Acne Detox safe to use on sensitive skin?",
      answer:
        "Yes, Acne Detox is formulated with gentle yet effective ingredients suitable for all skin types, including sensitive skin. If you have any specific concerns, we recommend doing a patch test before applying the product to your entire face.",
      answer_id: "2",
    },
    {
      question: "Can I use Acne Detox with other skincare products?",
      answer:
        "Absolutely. Acne Detox can be easily incorporated into your skincare routine. Be sure to apply it on clean skin and before any moisturizer or sunscreen. If you use other active products, like acids or retinoids, it is advisable to alternate their use to avoid potential irritation.",
      answer_id: "3",
    },
    {
      question: "Is Acne Detox suitable for all ages?",
      answer:
        "Yes, Acne Detox is suitable for both teenagers and adults. Its effective formula helps combat acne at any age and is especially beneficial for those seeking a reliable and safe solution for blemishes and redness.",
      answer_id: "4",
    },
  ];

  // Elegir preguntas basadas en la presencia de la prop 'acne'
  const QAs = acne ? QAsAcne : QAsDefault;

  return (
    <div
      id="q&a"
      className={`w-full flex flex-wrap justify-center items-center gap-y-12 ${
        landing ? "py-10" : "py-0"
      }`}
    >
      {landing && (
        <div className="w-full flex flex-wrap justify-center">
          <h1 className="w-full text-center text-yellow-700 font-sans-400 text-xl">
            Respuestas a tus preguntas
          </h1>
          <p className="w-full text-center text-gray-900 font-sans-500 text-4xl">
            Preguntas frecuentes
          </p>
        </div>
      )}
      <div className="w-full flex flex-wrap justify-start items-center space-y-2 max-w-[800px] pt-4">
        {QAs.map((qa, index) => (
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
                    transform: `rotate(${answer === qa.answer_id ? 180 : 0}deg)`,
                    transition: "transform 0.5s",
                  }}
                />
              </button>
            </div>
            <div
              className={`w-full answer text-left ${answer === qa.answer_id ? "show" : ""}`}
            >
              <span
                className="flex-grow text-left font-sans-300 text-gray-500 text-md lg:text-lg"
                dangerouslySetInnerHTML={{ __html: qa.answer }}
              ></span>
            </div>
            <div className="w-full flex justify-center">
              <div className="w-full">
                <hr className="border-[0.5px] border-gray-400" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsAnswersEnd;
