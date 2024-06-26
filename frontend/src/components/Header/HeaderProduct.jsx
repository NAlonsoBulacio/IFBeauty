import React, { useState } from "react";
import { logo } from "../../assets/index";
const HeaderProduct = ({}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <div
        className={`z-40 top-0 right-0 w-screen bg-white mx-auto flex items-center py-6 justify-center lg:hidden`}
        style={{ maxWidth: "1150px", height: "100px" }}
      >
        <div className="flex items-center ">
          <a href="/">
            <img className="w-[105px] " src={logo} alt="Logo" />
          </a>
        </div>
      </div>
      <div className="hidden lg:flex justify-center items-center  w-screen h-32  shadow-lg lg:px-20 xl:px-36 py-2 z-40">
        <div className="flex justify-center items-center h-full">
          <img className="h-full" src={logo} alt="logo-galindosa" />
        </div>
       
      </div>
    </div>
  );
};

export default HeaderProduct;
