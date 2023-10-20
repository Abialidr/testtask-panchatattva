"use client";
import React, { useState } from "react";
import "./Carousel.css";
import styles from "./pagecopy.module.css";
const images = [
  "/image 4.png",
  "/Group 1000001859.png",
  "/Group 1000001871.png",
  "/Group 1000001872.jpg",
];
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
function Carousel() {
  
  return (
    <div style={{ marginTop: "200px" }}>
      
      <div className="carousel">
        <div
          className="images"
          style={{
            transform: `translateX(${translateX}px)`,
            transition: "transform 0.3s",
          }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              style={{ width: "400px", height: "400px" }}
            />
          ))}
        </div>

        <div className="dots">
          {images.map((image, index) => (
            <span
              key={index}
              className={`dot ${index === activeDot ? "active" : ""}`}
              onClick={() => goToImage(index)}>
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                style={{
                  width: index === activeDot ? "50px" : "40px",
                  height: index === activeDot ? "50px" : "40px",
                }}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
