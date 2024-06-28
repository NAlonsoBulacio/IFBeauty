import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./QuestionsAnswersHome.css";
import QuestionSvg from "../../utils/QuestionSvg";
import StarSvg from "../../utils/StarSvg";
import ShippingSvg from "../../utils/ShippingSvg";
import ReturnSvg from "../../utils/ReturnSvg";

const QuestionsAnswersBundle = ({ landing }) => {
  const [answer, setAnswer] = useState("");

  const handleAnswer = (answerId) => {
    setAnswer((prevAnswer) => (prevAnswer === answerId ? "" : answerId));
  };

  const QAs = [
    {
      question: "What’s Included in the Bundle:",
      answer: `
        <strong>Active Enzyme Cleanser - Fermented Pomegranate</strong><br>
        <strong>Price:</strong> $34.95 AUD<br><br>
        A 2-in-1 foaming cleanser with fermented pomegranate enzymes that gently exfoliates your skin and prepares it for optimal absorption of the Collagen Boost and Repair Serum.<br><br>
        <strong>Collagen Boost and Repair - Vitamin C, Peptides, Stem Cells</strong><br>
        <strong>Price:</strong> $41.50 AUD<br><br>
        This featherlight formula is powered by Vitamin C, peptides, and plant stem cells to boost collagen production and repair. It helps the skin cells to renew and repair themselves, keeping your skin plump and healthy. Sodium PCA, amino acids, and botanical hyaluronic acid support skin hydration.<br><br>
        <strong>Biomimetic Daily Moisturiser - CoQ10 + Resveratrol</strong><br>
        <strong>Price:</strong> $57.95 AUD<br><br>
        The perfect follow-up to the Collagen Boost and Repair Serum, this daily moisturizer locks in hydration, reduces fine lines and wrinkles, brightens your complexion, and combats skin inflammation.<br><br>
        <strong>Bundle Offer:</strong><br>
        <strong>Total Retail Price:</strong> $134.40 AUD<br>
        <strong>Opening Offer:</strong> $100.80 AUD (25% Discount)
      `,
      answer_id: "1",
    },
    {
      question: "How Does It Work?",
      answer: `
        Our bundle combines three powerful products designed to work together to enhance your skin's health and appearance:<br><br>
        1. <strong>Cleanse:</strong> Start with the Active Enzyme Cleanser to remove impurities and prepare your skin for maximum serum absorption.<br>
        2. <strong>Repair:</strong> Follow with the Collagen Boost and Repair Serum to stimulate collagen production and repair your skin.<br>
        3. <strong>Moisturize:</strong> Finish with the Biomimetic Daily Moisturiser to lock in moisture and provide added protection and hydration.
      `,
      answer_id: "2",
    },
    {
      question: "How to Use the Bundle:",
      answer: `
        1. <strong>Step 1: Cleanse</strong><br>
           - Apply the Active Enzyme Cleanser to damp skin, massage gently, and rinse thoroughly.<br><br>
        2. <strong>Step 2: Boost and Repair</strong><br>
           - Apply 2-3 pumps of the Collagen Boost and Repair Serum to your face and neck after cleansing, before moisturizing. Use in the morning and evening for best results.<br><br>
        3. <strong>Step 3: Moisturize</strong><br>
           - Follow with the Biomimetic Daily Moisturiser to lock in the serum and provide added hydration and protection.
      `,
      answer_id: "3",
    },
    {
      question: "How Do I Ship?",
      answer: `
        Order processing takes 1-3 business days before shipping. Once your items are shipped, estimated delivery time is 2-5 days.
      `,
      answer_id: "4",
    },
    {
      question: "Refund Policy",
      answer: `
        We love our Professional Skincare Bundle and we're sure you will too! In case things don't go as planned, our return and refund policy is designed to make it as easy as possible for you. Click <a href='#' style='text-decoration: underline;'>here</a> for more information on how we can help.
      `,
      answer_id: "5",
    },
    {
      question: "Our Facts",
      answer: `
        <strong>Should I combine my Collagen Boost and Repair Bundle with other IF Products?</strong><br>
        Yes, for the best results, you should combine your skincare routine with other IF products based on your routine.<br><br>
        <strong>How long will it take to see results?</strong><br>
        While you will notice softer, smoother, and instantly hydrated skin, it's important to know that changing your skincare routine will take a few weeks to show more permanent results.<br><br>
        <strong>Can I use the products at night?</strong><br>
        Yes, the products can be used both day and night. For optimal results, combine them with our Golden Glycolic 10% Glycolic Night Serum.<br><br>
        <strong>How long will the products last?</strong><br>
        Each product in the bundle is designed to last for at least 30 days with regular use.<br><br>
        <strong>Unlock the full potential of your skin with our Professional Skincare Bundle. Order now and experience the transformation!</strong>
      `,
      answer_id: "6",
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
          <h1 className="w-full text-center text-yellow-700 font-sans-400 text-xl">
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
              className={`w-full answer text-left ${
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
                <hr className="border-[0.5pxrem] border-gray-400" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsAnswersBundle;
