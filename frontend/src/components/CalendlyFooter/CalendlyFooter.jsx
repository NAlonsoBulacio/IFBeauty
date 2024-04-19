import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

const CalendlyFooter = ({ handleVariantFooter, homeVariant, variantPrice }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(homeVariant);
  const [objectVariant, setObjectVariant] = useState()

  const variants = [
    {
      id: 1,
      variant: "Single",
      price: 23,
      compare_price: 40,
      free_shipping: false,
      save: "Full Price",
    },
    {
      id: 2,
      variant: "2-Pack",
      price: 35,
      compare_price: 60,
      free_shipping: true,
      save: "Save $12",
    },
    {
      id: 3,
      variant: "3-Pack",
      price: 43,
      compare_price: 70,
      free_shipping: true,
      save: "Save $12",
    },
  ];


  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > window.innerHeight * 1) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setSelectedVariant(homeVariant);
  }, [homeVariant]);
  useEffect(() => {
    const foundVariant = variants.find(variant => variant.id === selectedVariant);
    setObjectVariant(foundVariant);
  }, [selectedVariant, variants]);
  
  const handleSelectedVariant = (variant) => {
    handleVariantFooter(variant);
  };
  return (
    <footer
      className={`fixed bottom-0 left-0 w-screen h-[90px]k h-auto bg-slate-200 flex flex-wrap justify-center border-t border-gray-400 items-center transition-all duration-300 rounded-t-2xl z-50 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div
        className="flex  justify-center items-center space-x-3 cursor-pointer h-10 rounded-t-2xl w-full px-8 bg-slate-300"
        onClick={() => setShowOptions(!showOptions)}
      >
       <p>Ver opciones de compra</p> 
        <IoIosArrowDown
          className={` ${
            showOptions ? "rotate-180" : ""
          } transition-transform duration-300 text-lg`}
        />
      </div>
      <div
        className={` ${
          showOptions ? "h-[120px]" : "h-[1px]"
        }   flex space-x-2 transition-height duration-300`}
      >
        {variants?.map((variant) => (
          <div
            className={`${
              variant.id === selectedVariant ? "bg-slate-400" : ""
            } ${
              showOptions ? "block opacity-100" : " opacity-0"
            } relative w-24 h-20 border-slate-500 border-2 rounded-xl my-4 overflow-hidden flex  cursor-pointer transition-opacity duration-400`}
            onClick={() => handleSelectedVariant(variant.id, variant.price)}
          >
              <div className="w-full flex flex-col justify-start items-center">
                <div className="bg-slate-500 w-full h-8 text-gray-200 flex justify-center items-center">
                  {variant.save}
                </div>
                <div className="flex gap-2">
                  <p className="font-sans-600 text-gray-600 text-lg">
                    {variant.variant}
                  </p>
                </div>
              </div>
            </div>
        ))}
      </div>
      <div className="flex justify-center items-center py-2 gap-x-6">
        <h1 className="hidden lg:block text-3xl font-plus-400 text-gray-800">
          Tratamiento Anti-Aging Infalible
        </h1>
        <div>
          <a href="https://ifbeauty.com.au/cart/41854498111663:1">
            <button className="w-full rounded-md bg-slate-600 text-2xl font-sans-500 text-gray-200 px-2 py-4">
            { objectVariant ? ` 👉🏻 ADD TO BAG $${objectVariant.price}` : ""}
            </button>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default CalendlyFooter;
