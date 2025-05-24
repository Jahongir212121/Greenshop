import React from 'react';
import './Cards.css';
import Image from '../../assets/Gul.svg';
const cardsData = [
    {
        title: `SUMMER CACTUS & SUCCULENTS`,
        subtitle: "We are an online plant shop offering a wide range of cheap and trendy plants.",
        image: Image
    },
    {
        title: `SUMMER CACTUS & SUCCULENTS`,
        subtitle: "We are an online plant shop offering a wide range of cheap and trendy plants.",
        image: Image
    }
];

const Cards = () => {
    return (
        <div className="card">
            <div className="large-container">
                {cardsData.map((card, index) => (
                    <div className="card-inner" key={index}>
                        <img src={card.image} alt="Plant" className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">{card.title}</h3>
                            <p className="card-subtitle">{card.subtitle}</p>
                            <button className="card-button">Find More →</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;
