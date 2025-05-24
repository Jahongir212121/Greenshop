import React from 'react';
import './Sale.css';
import Image from '../../assets/Gul.svg';
import SuperSale from '../../assets/SuperSale.png'
const Sale = () => {
    return (
        <div className="sale">
            <img className='sale-img' src={SuperSale} />
            <div className="sale-text">
                <p className='sale-subtitle'>UP TO 75% OFF</p>
                <img src={Image} className='sale-image' />
            </div>
        </div>
    );
};

export default Sale;
