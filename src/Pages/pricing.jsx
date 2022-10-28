import React from "react";
import priceOne from "../Assets/images/price-one.jpg";
import priceTwo from "../Assets/images/price-two.jpg";
import priceThree from "../Assets/images/price-three.jpg";
import priceFour from "../Assets/images/price-four.jpg";

export const Pricing = () => {
  return (
    <div className="pricing">
      <h1>Pricing</h1>
      <div className="pricing-cards">
        <div className="pricing-card">
          <img src={priceOne} alt="price one"  className="probot"/>
          <h2>$400</h2>
          <button className="price-btn">Buy Now</button>
        </div>
        <div className="pricing-card">
          <img src={priceTwo} alt="price two"  className="probot"/>
          <h2>$350</h2>
          <button className="price-btn">Buy Now</button>
        </div>
        <div className="pricing-card">
          <img src={priceThree} alt="price three"  className="probot"/>
          <h2>$500</h2>
          <button className="price-btn">Buy Now</button>
        </div>     
        <div className="pricing-card">
          <img src={priceFour} alt="price four"  className="probot"/>
          <h2>$350</h2>
          <button className="price-btn">Buy Now</button>
        </div> 
      </div>
    </div>
  );
};