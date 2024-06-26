import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import ProductDetailAcne from "../../components/ProductDetail/ProductDetailAcne";
import BeforeAfterReviews from "../../components/BeforeAfterReviews/BeforeAfterReviews";
import DescriptionPercentage from "../../components/DescrptionPercentage/DescriptionPercentage";
import BenefitsandVideo from "../../components/BenefitsAndvideo/BenefitsandVideo";
import CalendlyFooter from "../../components/CalendlyFooter/CalendlyFooter";
import ImageDescription from "../../components/ImageDescription/ImageDescription";
import Reviews from "../../components/Reviews/Reviews";
import HeaderProduct from "../../components/Header/HeaderProduct";
import QuestionsAnswersEnd from "../../components/QuestionsAnswersHome/QuestionsAnswersEnd";
import { block } from 'million/react';

const LandingPageAcne = 
 block(
  () => {
  const [homeVariant, setHomeVariant] = useState(2);
  const handleHomeVariant = (variant) => {
    setHomeVariant(variant);
  };

const acne = {
  title: "Acne Detox Liquid Niacinamide + Squalane Vit A",
  subtitle: "If you're tired of acne products that don't deliver the results you expect, our Acne Detox is for you!",
  items: [
    "Eliminates breakouts and improves appearance, boosting your confidence.",
    " Calms redness, so you can socialize without worrying about your skin.",
    "Achieve smooth and clear skin.",
  "Clinically proven ingredients that enhance your skin."  ],
  questions: [
    "How does it work?",

  ]
}

  return (
    <div>
      <HeaderProduct />
      <div className="px-4 lg:px-10 xl:px-20 bg-white space-y-6 lg:space-y-20 py-4 overflow-hidden">
        <ProductDetailAcne
          homeVariant={homeVariant}
          handleVariantDetail={handleHomeVariant}
        />
        <BenefitsandVideo acne={"Acne"} />
        <DescriptionPercentage />
        <BeforeAfterReviews acne={"acne"} />
        <ImageDescription />
        <Reviews acne={"acne"}  />
        <QuestionsAnswersEnd acne={"acne"} />
      </div>
      <CalendlyFooter
        handleVariantFooter={handleHomeVariant}
        homeVariant={homeVariant}
      />
      <Footer />
    </div>
  );
}
 );

export default LandingPageAcne;
