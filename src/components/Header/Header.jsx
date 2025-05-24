import React, { useState } from 'react';
import Logo from "../../assets/Logo.svg";
import { Link } from 'react-router-dom';
import './Header.css';
import './Modal.css';


function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRegister, setIsRegister] = useState(false);

    return (
        <header className="header">
            <div className="container">
                <div className="header_inner">
                    <a href="/" className="logo">
                        <img src={Logo} alt="Greenshop Logo" />
                    </a>
                    <nav className="nav-links">
                        <ul>
                            <li><Link to="/single">Shop</Link></li>
                        </ul>
                    </nav>
                    <div className="header-actions">
                        <svg className='search__icon' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.5726 16.0029C10.5755 19.1865 4.988 18.3056 2.02842 14.6542C-0.828088 11.129 -0.64944 6.04347 2.44943 2.82482C5.65137 -0.500594 10.6854 -0.944524 14.3346 1.78337C15.642 2.76051 16.6183 4.00364 17.2542 5.50838C17.8938 7.02186 18.0881 8.59654 17.8663 10.2205C17.6452 11.837 17 13.2775 15.9499 14.6217C16.0349 14.6773 16.1254 14.7173 16.1904 14.7822C17.3448 15.9311 18.4947 17.0843 19.6491 18.2331C19.9227 18.5054 20.0589 18.8225 19.9776 19.2047C19.8165 19.9651 18.9108 20.2586 18.3298 19.7366C18.0575 19.4925 17.807 19.2234 17.5484 18.9649C16.6002 18.0177 15.6526 17.0699 14.7044 16.1227C14.665 16.0853 14.6238 16.0503 14.5726 16.0029ZM15.9605 8.98677C15.9705 5.12689 12.8529 2.00627 8.98261 2.00065C5.12292 1.99503 2.00781 5.09068 1.99094 8.94806C1.97408 12.8173 5.08544 15.9467 8.96762 15.9648C12.8117 15.9829 15.9505 12.8504 15.9605 8.98677Z" fill="#3D3D3D" />
                        </svg>
                        <Link to='/cart' className="icon-button"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.1558 20.25H9.89066C6.78905 20.25 4.26569 17.7267 4.26569 14.6251V8.85947C4.26569 5.97621 2.82861 3.30739 0.421544 1.72031C-0.0107343 1.43531 -0.130077 0.853876 0.154921 0.421598C0.439919 -0.0107278 1.02131 -0.130118 1.45368 0.154974C2.82776 1.06097 3.94254 2.2559 4.73969 3.63167C4.91195 3.82466 6.30104 5.29699 8.57821 5.29699H19.3738C22.3191 5.24191 24.6245 8.19769 23.8544 11.0406L22.6117 15.9939C21.9829 18.4998 19.7394 20.25 17.1558 20.25V20.25ZM5.90415 6.64234C6.06001 7.36238 6.14068 8.10483 6.14068 8.85947V14.6251C6.14068 16.6928 7.82292 18.375 9.89066 18.375H17.1558C18.8782 18.375 20.3739 17.2082 20.793 15.5376L22.0358 10.5844C22.4933 8.89509 21.1233 7.13931 19.3738 7.17198H8.57816C7.54828 7.17198 6.65185 6.94993 5.90415 6.64234V6.64234ZM9.42191 22.8281C9.42191 22.1809 8.89724 21.6563 8.25004 21.6563C6.69511 21.7182 6.69647 23.9387 8.25004 24C8.89724 24 9.42191 23.4753 9.42191 22.8281ZM18.75 22.8281C18.75 22.1809 18.2253 21.6563 17.5781 21.6563C16.0232 21.7182 16.0245 23.9387 17.5781 24C18.2253 24 18.75 23.4753 18.75 22.8281ZM20.3113 9.98446C20.3113 9.46668 19.8916 9.04697 19.3738 9.04697H8.95316C7.7093 9.09647 7.71023 10.8729 8.95316 10.922H19.3738C19.8916 10.922 20.3113 10.5022 20.3113 9.98446Z" fill="#3D3D3D" />
                        </svg></Link>
                        <button className="login-button" onClick={() => setIsModalOpen(true)}>Login</button>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-button" onClick={() => setIsModalOpen(false)}>×</button>
                        <div className="modal-header">
                            <span className={!isRegister ? "active" : ""} onClick={() => setIsRegister(false)}>Login</span> |
                            <span className={isRegister ? "active" : ""} onClick={() => setIsRegister(true)}> Register</span>
                        </div>
                        {!isRegister ? (
                            <div className="login-form">
                                <input type="text" placeholder="Enter your username or email" />
                                <input type="password" placeholder="Password" />
                                <button className="login-btn">Login</button>
                                <p className="forgot-password">Forgot Password?</p>
                                <p className="social-login">Or login with</p>
                                <button className="google-btn">Login with Google</button>
                                <button className="facebook-btn">Login with Facebook</button>
                            </div>
                        ) : (
                            <div className="register-form">
                                <input type="text" placeholder="Username" />
                                <input type="email" placeholder="Enter your email address" />
                                <input type="password" placeholder="Password" />
                                <input type="password" placeholder="Confirm Password" />
                                <button className="register-btn">Register</button>
                                <p className="social-login">Or register with</p>
                                <button className="google-btn">Continue with Google</button>
                                <button className="facebook-btn">Continue with Facebook</button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
