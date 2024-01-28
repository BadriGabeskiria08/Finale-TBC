import React, { useState } from "react";
import "./Slider.css";
import sldimg1 from "./SliderImg/sld1.webp";
import sldimg2 from "./SliderImg/sld2.webp";
import sldimg3 from "./SliderImg/sld3.webp";
import sldimg4 from "./SliderImg/sld4.webp";
import sldimg5 from "./SliderImg/sld5.webp";
import sldimg6 from "./SliderImg/sld6.webp";

function Slider() {
  const images = [sldimg1, sldimg2, sldimg3, sldimg4, sldimg5, sldimg6];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 3 + images.length) % images.length
    );
  };

  return (
    <div className="slider">
      <button onClick={handlePrev}>&lt;</button>
      <div className="image-container">
        {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <img key={index} src={image} alt={`sld-${currentIndex + index + 1}`} />
        ))}
      </div>
      <button onClick={handleNext}>&gt;</button>
    </div>
  );
}

export default Slider;