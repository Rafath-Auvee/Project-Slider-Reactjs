import React, { useState } from "react";
import { Data } from "./Data.js";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Slide = ({ slides }) => {
  const [current, setCurrnet] = useState(0);
  const length = slides.length;

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" />
      <FaArrowAltCircleRight className="right-arrow" />
      {Data.map((slider, index) => {
        return <img src={slider.image} alt="project x" className="image" />;
      })}
    </section>
  );
};

export default Slide;
