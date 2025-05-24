import React, { useState } from 'react';
import './Categories.css';

const Categories = () => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(3000);

    const handlePriceChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (e.target.name === 'min') {
            if (value <= maxPrice) setMinPrice(value);
        } else {
            if (value >= minPrice) setMaxPrice(value);
        }
    };

    return (
        <div className="categories">
            <h2>Categories</h2>
            <ul>
                <li className='size-item size-title'>House Plants <span className='size-span'>(33)</span></li>
                <li className='size-item size-title'>Potter Plants <span className='size-span'>(12)</span></li>
                <li className='size-item size-title'>Seeds <span className='size-span'>(65)</span></li>
                <li className='size-item size-title'>Small Plants <span className='size-span'>(29)</span></li>
                <li className='size-item size-title'>Big Plants <span className='size-span'>(19)</span></li>
                <li className='size-item size-title'>Succulents <span className='size-span'>(17)</span></li>
                <li className='size-item size-title'>Terrariums <spa className='size-span' n>(9)</spa></li>
                <li className='size-item size-title'>Gardening <span className='size-span'>(13)</span></li>
                <li className='size-item size-title'>Accessories <span className='size-span'>(18)</span></li>
            </ul>
            <div className="price-range">
                <h3 className="price-heading">Price Range</h3>
                <div className="price-slider">
                    <input
                        type="range"
                        name="min"
                        min="0"
                        max="3000"
                        value={minPrice}
                        onChange={handlePriceChange}
                        className="slider-input"
                    />
                    <input
                        type="range"
                        name="max"
                        min="0"
                        max="3000"
                        value={maxPrice}
                        onChange={handlePriceChange}
                        className="slider-input"
                    />
                </div>
                <p className="price-values">Price: ${minPrice} – ${maxPrice}</p>
                <button className="filter-btn">Filter</button>
            </div>
            <div className="size-filter">
                <h3 className='size-heading'>Size</h3>
                <ul>
                    <li className='size-item size-title'>Small <span className='size-span'>(119)</span></li>
                    <li className='size-item size-title'>Medium <span className='size-span'>(86)</span></li>
                    <li className='size-item size-title'>Large <span className='size-span'>(78)</span></li>
                </ul>
            </div>
        </div>
    );
};

export default Categories;
