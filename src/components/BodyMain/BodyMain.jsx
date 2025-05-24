import React from 'react';
import './BodyMain.css';
import Categories from '../Categories/Categories';
import Sale from '../Sale/Sale';
import Plants from '../Plants/Plants';

const BodyMain = () => {
    return (
        <div className="body-main">
            <div className="main-body">
                <Categories />
                <div className="main-inner">
                    <Plants />
                </div>
                <Sale />
            </div>
        </div>
    );
};

export default BodyMain;
