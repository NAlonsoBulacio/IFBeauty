import React from 'react'
import star from "../../assets/star.svg";
const Stars = (height) => {
  return (
    <div className={`flex ${height === "layout" ? "h-8" : "h-4"}`}>
    <img src={star} alt="star" />
    <img src={star} alt="star" />
    <img src={star} alt="star" />
    <img src={star} alt="star" />
    <img src={star} alt="star" />
  </div>
  )
}

export default Stars
