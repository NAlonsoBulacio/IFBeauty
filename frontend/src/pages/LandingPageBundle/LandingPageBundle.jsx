import React, { useState } from "react";
import ProductDetail from "../../components/ProductDetail/ProductDetailBundle";
import HeaderProduct from "../../components/Header/HeaderProduct";
import Footer from "../../components/Footer/Footer";
import BeforeAfterReviews from "../../components/BeforeAfterReviews/BeforeAfterReviews";
import DescriptionPercentage from "../../components/DescrptionPercentage/DescriptionPercentage";
import BenefitsandVideo from "../../components/BenefitsAndvideo/BenefitsandVideo";
import CalendlyFooterBundle from "../../components/CalendlyFooter/CalendlyFooterBundle";
import ImageDescription from "../../components/ImageDescription/ImageDescription";
import Reviews from "../../components/Reviews/Reviews";
import QuestionsAnswersEnd from "../../components/QuestionsAnswersHome/QuestionsAnswersEnd";
import VideoPlayer from "../../components/YoutubePlayer/VideoPlayer";
const LandingPageBundle = () => {
  const [homeVariant, setHomeVariant] = useState(2);
  const handleHomeVariant = (variant) => {
    setHomeVariant(variant);
  };
  return (
    <div>
      <HeaderProduct  />
      <div className="px-2 lg:px-10 xl:px-20 bg-slate-600 space-y-6 lg:space-y-20 py-4 lg:pb-12">
        <VideoPlayer  />
      </div>
      <div className="px-4 lg:px-10 xl:px-20 bg-white space-y-6 lg:space-y-20 py-4 overflow-hidden">
        <ProductDetail
          homeVariant={homeVariant}
          handleVariantDetail={handleHomeVariant}
        />
        <BenefitsandVideo />
        <DescriptionPercentage />
        <BeforeAfterReviews />
        <ImageDescription />
        <Reviews />
        <QuestionsAnswersEnd bundle={"bundle"} />
      </div>
      <CalendlyFooterBundle
        handleVariantFooter={handleHomeVariant}
        homeVariant={homeVariant}
      />
      <Footer />
    </div>
  );
};

export default LandingPageBundle;
