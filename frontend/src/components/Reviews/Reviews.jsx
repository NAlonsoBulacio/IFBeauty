import React, { useState, useEffect } from "react";
import Stars from "./Stars";
import star from "../../assets/star.svg";
import { reviews, acne_reviews } from "./AllReviews";

const Reviews = ({acne}) => {
  const [visibleReviews, setVisibleReviews] = useState(3);
  const maxVisibleReviews = 3; // Máximo número de reviews visibles
const [fullReviews, setFullReviews] = useState("");

useEffect(() => {
  if (acne) {
   setFullReviews(acne_reviews)
  } else {
    setFullReviews(reviews)
  }
}, [acne_reviews, reviews]);


  const handleShowMore = () => {
    if (visibleReviews + 3 <= reviews.length) {
      setVisibleReviews(visibleReviews + 3);
    }
  };

  const handleShowLess = () => {
    if (visibleReviews > maxVisibleReviews) {
      setVisibleReviews(visibleReviews - 3);
    }
  };

  return (
    <div>
      <div>
        <div className="w-full flex justify-center py-4">
          <h1 className="text-gray-700 text-4xl mx-2">4.8</h1>
          <div className="flex h-8">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </div>
        </div>
        <div className="space-y-10">
          {reviews.slice(0, visibleReviews).map((review, index) => (
            <div
              key={index}
              className="space-y-2 border-b-[1px] border-gray-400 py-2"
            >
              <div className="flex gap-x-2">
                <h1 className="font-sans-600">{review.name}</h1>
                <h1 className="text-green-600 font-sans-500">Verified Buyer</h1>
              </div>
              <div> 
                <Stars starsRate={review.starRate === "4" ? true : false}/>
              </div>
              <div>
                <h1 className="text-left text-lg font-sans-600">
                  {review.title}
                </h1>
              </div>
              <div>
                <h1 className="font-sans-400 text-gray-600 text-left">
                  {review.review}
                </h1>
              </div>
            </div>
          ))}
          {reviews.length > maxVisibleReviews && (
            <div className="text-center">
              <button
                onClick={handleShowLess}
                className="text-blue-600 font-sans-600 underline"
              >
                Show Less
              </button>
              {" | "}
              <button
                onClick={handleShowMore}
                className="text-blue-600 font-sans-600 underline"
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
