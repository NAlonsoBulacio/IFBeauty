import React, { useState, useEffect } from "react";

const CalendlyFooter = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <footer
      className={`fixed bottom-0 left-0 w-screen h-[90px] bg-gray-200 flex justify-center border-t border-gray-400 items-center transition-all duration-500 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex justify-center items-center gap-x-6">
        <h1 className="hidden lg:block text-3xl font-plus-400 text-gray-800">
        Tratamiento Anti-Aging Infalible
        </h1>
        <div>
        <a href="https://ifbeauty.com.au/cart/41854498111663:1">
            <button className="w-full rounded-md bg-amber-600 text-2xl font-sans-500 text-gray-200 px-2 py-4">
            Comprar - $32.000
            </button>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default CalendlyFooter;
