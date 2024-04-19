import React from "react";
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
  return (
    <div>
      <Header />
      <div className="px-4 lg:px-10 xl:px-20 bg-white space-y-20">
        <ProductDetail />
        <BenefitsandVideo />
        <DescriptionPercentage />
        <BeforeAfterReviews />
        <ImageDescription />
        <Reviews />
      </div>
      <CalendlyFooter />
      <Footer />
    </div>
  );
};

export default LandingPage;
