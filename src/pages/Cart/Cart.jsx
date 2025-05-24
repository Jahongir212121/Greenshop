import React, { useState } from "react";
import { useCart } from "../../context/CartContext/CartContext";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Related from "../../components/Related/Related";
import './Cart.css';
import Image from '../../assets/Gul.svg';
import { Link } from "react-router-dom";

const Cart = () => {
    const { cartItems, updateQuantity, removeItem } = useCart(); // Make sure these methods exist in your context
    const [coupon, setCoupon] = useState("");
    const [discount, setDiscount] = useState(0);

    const handleCouponApply = () => {
        const code = coupon.trim().toLowerCase();
        if (code === "greenery" || code === "presentation") {
            setDiscount(0.10);
        } else {
            setDiscount(0);
        }
    };

    const handleQuantityChange = (id, delta) => {
        const item = cartItems.find(item => item.id === id);
        if (item) {
            const newQuantity = item.quantity + delta;
            if (newQuantity > 0) {
                updateQuantity(id, newQuantity);
            }
        }
    };

    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const couponDiscount = subtotal * discount;
    const shipping = 16;
    const total = subtotal - couponDiscount + shipping;

    return (
        <div className="cart-container">
            <Header />
            <div className="cart-content">
                <div className="cart-items">
                    {cartItems.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={Image} className="product-image" alt="product" />
                            <div className="item-details">
                                <div className="po">
                                    <h3>{item.name}</h3>
                                    <p className="sku">SKU: {item.id}</p>
                                </div>
                                <p className="price">Price: ${item.price.toFixed(2)}</p>
                                <div className="quantity-control">
                                    <button className="quantity-button" onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button className="quantity-button" onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                                </div>
                                <p className="total-price">
                                    Total: ${(item.price * item.quantity).toFixed(2)}
                                </p>
                            </div>
                            <button className="delete-button" onClick={() => removeItem(item.id)}>🗑️</button>
                        </div>
                    ))}
                </div>

                <div className="cart-summary">
                    <h3>Cart Totals</h3>
                    <div className="coupon-section">
                        <input
                            type="text"
                            placeholder="Enter coupon code here..."
                            className="coupon-input"
                            value={coupon}
                            onChange={(e) => setCoupon(e.target.value)}
                        />
                        <button className="apply-button" onClick={handleCouponApply}>Apply</button>
                    </div>
                    <div className="totals">
                        <p>
                            <span>Subtotal:</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </p>
                        <p>
                            <span>Coupon Discount:</span>
                            <span>(${couponDiscount.toFixed(2)})</span>
                        </p>
                        <p>
                            <span>Shipping:</span>
                            <span>${shipping.toFixed(2)}</span>
                        </p>
                        <p className="total-amount">
                            <span>Total:</span>
                            <span>${total.toFixed(2)}</span>
                        </p>
                    </div>
                    <Link to='/checkout'>
                        <button className="checkout-button">Proceed To Checkout</button>
                    </Link>
                    <Link to='/single'>
                        <button className="continue-shopping-button">Continue Shopping</button>
                    </Link>
                </div>
            </div>
            <Related />
            <Footer />
        </div>
    );
};

export default Cart;
