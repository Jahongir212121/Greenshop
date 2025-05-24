import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";
import { useCart } from "../../context/CartContext/CartContext";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Image from '../../assets/Gul.svg';
import Cards from '../../assets/CardT.svg';
import Thank from '../../assets/thank-you.png';
import './ModalCh.css'
const Checkout = () => {
    const { cartItems } = useCart();
    const [paymentMethod, setPaymentMethod] = useState("paypal");
    const [orderPlaced, setOrderPlaced] = useState(false);

    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const shipping = 16;
    const total = subtotal + shipping;

    return (
        <div className="container">
            <Header />
            <div className="checkout-content">
                <div className="billing-address">
                    <h2 className="checkout-title">Billing Address</h2>
                    <form className="checkout-form">
                        <div className="row">
                            <input type="text" placeholder="First Name *" required />
                            <input type="text" placeholder="Last Name *" required />
                        </div>
                        <div className="row">
                            <select required>
                                <option>Select a country / region *</option>
                            </select>
                            <input type="text" placeholder="Town / City *" required />
                        </div>
                        <input type="text" className="street-adress" placeholder="Street Address *" required />
                        <div className="row">
                            <select required>
                                <option>Select a state *</option>
                            </select>
                            <input type="text" placeholder="Zip *" required />
                        </div>
                        <div className="row">
                            <input type="email" placeholder="Email Address *" required />
                            <input type="text" placeholder="Phone Number *" required />
                        </div>
                        <label className="checkbox-label">
                            <input type="checkbox" /> Ship to a different address?
                        </label>
                        <textarea className="checkout-textarea" placeholder="Order notes (optional)"></textarea>
                    </form>
                </div>

                <div className="order-summary">
                    <h2>Your Order</h2>
                    <div className="order-items">
                        {cartItems.map((item, index) => (
                            <div key={index} className="order-item">
                                <img src={Image} className="order-image" alt={item.name} />
                                <div>
                                    <p>{item.name}</p>
                                    <p>(x {item.quantity})</p>
                                </div>
                                <p className="order-price">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        ))}
                    </div>
                    <div className="totals">
                        <p><span>Subtotal:</span><span>${subtotal.toFixed(2)}</span></p>
                        <p><span>Coupon Discount:</span><span>($0.00)</span></p>
                        <p><span>Shipping:</span><span>${shipping.toFixed(2)}</span></p>
                        <p className="total-amount"><span>Total:</span><span>${total.toFixed(2)}</span></p>
                    </div>
                    <h3>Payment Method</h3>
                    <div className="payment-options">
                        <label>
                            <input type="radio" name="payment" checked={paymentMethod === "paypal"} onChange={() => setPaymentMethod("paypal")} />
                            <img src={Cards} alt="Payment Method" />
                        </label>
                        <label>
                            <input type="radio" name="payment" checked={paymentMethod === "bank"} onChange={() => setPaymentMethod("bank")} />
                            Direct Bank Transfer
                        </label>
                        <label>
                            <input type="radio" name="payment" checked={paymentMethod === "cod"} onChange={() => setPaymentMethod("cod")} />
                            Cash on Delivery
                        </label>
                    </div>
                    <button className="place-order-button" onClick={() => setOrderPlaced(true)}>Place Order</button>
                </div>
            </div>
            <Footer />

            {orderPlaced && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-button" onClick={() => setOrderPlaced(false)}>×</button>
                        <img src={Thank} alt="Thank you" className="thank-you-image" />
                        <h2>Your order has been received</h2>
                        <div className="order-details">
                            <p><strong>Order Number:</strong> 1958687</p>
                            <p><strong>Date:</strong> 15 Sep, 2021</p>
                            <p><strong>Total:</strong> ${total.toFixed(2)}</p>
                            <p><strong>Payment Method:</strong> {paymentMethod === "cod" ? "Cash on delivery" : paymentMethod}</p>
                        </div>
                        <h3>Order Details</h3>
                        {cartItems.map((item, index) => (
                            <div key={index} className="order-item">
                                <img src={Image} className="order-image" alt={item.name} />
                                <div>
                                    <p>{item.name}</p>
                                    <p>SKU: 199571877966</p>
                                </div>
                                <p className="order-quantity">(x {item.quantity})</p>
                                <p className="order-price">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        ))}
                        <p><strong>Shipping:</strong> ${shipping.toFixed(2)}</p>
                        <p className="total-amount"><strong>Total:</strong> ${total.toFixed(2)}</p>
                        <p>Your order is currently being processed. You will receive an order confirmation email shortly.</p>
                        <button className="track-order-button">Track your order</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Checkout;
