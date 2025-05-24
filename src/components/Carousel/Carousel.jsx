import React from 'react';
import './Carousel.css';
import Gul from "../../assets/Gul.svg";

function Carousel() {
    return <>
        <div className="carousel">
            <div className="container">
                <div className="carousel_inner">
                    <div className="carousel-content">
                        <strong className='carousel-subtitle'>
                            Welcome to GreenShop
                        </strong>
                        <h1 className="carousel-title">
                            LET'S MAKE A <br /> BETTER<span className="highlight"> PLANET</span>
                        </h1>
                        <p className="carousel-text">
                            We are an online plant shop offering a wide range of cheap and trendy plants.
                            Use our plants to create a unique Urban Jungle. Order your favorite plants!
                        </p>
                        <button className="carousel-button">SHOP NOW</button>
                    </div>
                    <div className="carousel-image">
                        <img src={Gul} />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Carousel;
