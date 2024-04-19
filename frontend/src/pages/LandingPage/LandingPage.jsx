import React, { useState, useEffect } from "react";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BeforeAfterReviews from "../../components/BeforeAfterReviews/BeforeAfterReviews";
import DescriptionPercentage from "../../components/DescrptionPercentage/DescriptionPercentage";
import BenefitsandVideo from "../../components/BenefitsAndvideo/BenefitsandVideo";
import CalendlyFooter from "../../components/CalendlyFooter/CalendlyFooter";
import ImageDescription from "../../components/ImageDescription/ImageDescription";
import Reviews from "../../components/Reviews/Reviews";
const LandingPage = () => {
  const [homeVariant, setHomeVariant] = useState(2);
const [variantPrice, setVariantPrice] = useState(35)
  const handleHomeVariant = (variant, price) => {
    setHomeVariant(variant);
    setVariantPrice(price)
  };
  return (
    <div>
      <Header />
      <div className="px-4 lg:px-10 xl:px-20 bg-white space-y-20">
        <ProductDetail homeVariant={homeVariant} handleVariantDetail={handleHomeVariant} variantPrice={variantPrice}/>
        <BenefitsandVideo />
        <DescriptionPercentage />
        <BeforeAfterReviews />
        <ImageDescription />
        <Reviews />
      </div>
      <CalendlyFooter handleVariantFooter={handleHomeVariant} homeVariant={homeVariant} variantPrice={variantPrice}/>
      <Footer />
    </div>
  );
};

export default LandingPage;
