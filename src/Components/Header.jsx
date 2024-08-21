import React from "react";
import '../App.css';
import './Header.css';

export default function HeaderTop() {
    return (
        <>

            <header className="header" data-header>
                <div className="overlay" data-overlay></div>
                <div className="header-top">
                    <div className="container">
                        <ul className="header-top-list">
                            <li>
                                <a href="" className="header-top-link"></a><a href="" className="header-top-link">
                                    <ion-icon name="mail-outline"></ion-icon>
                                    <span>info@homeverse.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="" className="header-top-link"></a><a href="" className="header-top-link">
                                    <ion-icon name="location-outline"></ion-icon>
                                    <address>15/A, Nest Tower, NYC</address>
                                </a>
                            </li>
                        </ul>

                        <div className="wrapper">
                            <ul className="header-top-social-list">
                                <li>
                                    <a href="" className="header-top-social-link">
                                        <ion-icon name="logo-facebook"></ion-icon>
                                    </a>
                                </li>

                                <li>
                                    <a href="" className="header-top-social-link">
                                        <ion-icon name="logo-twitter"></ion-icon>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="header-top-social-link">
                                        <ion-icon name="logo-instagram"></ion-icon>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="header-top-social-link">
                                        <ion-icon name="logo-pinterest"></ion-icon>
                                    </a>
                                </li>
                            </ul>
                            
                            <button className="header-top-btn">Add Listing</button>
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="container">
                        <a href="#" className="logo">
                            <img src="" alt="" />
                        </a>
                        <nav className="navbar" data-navbar>
                            <div className="navbar-top">
                                <a href="#">
                                    <img src="" alt="" />
                                </a>
                                <button className="nav-close-btn" data-nav-close-btn aria-label="Clsoe Menu">
                                    <ion-icon name="cloes-outline"></ion-icon>
                                </button>
                            </div>

                            <div className="navbar-bottom">
                                <ul className="navbar-list">
                                    <li><a href="#home" className="navbar-link">Home</a></li>
                                    <li><a href="#about" className="navbar-link">About</a></li>
                                    <li><a href="#service" className="navbar-link">Service</a></li>
                                    <li><a href="#property" className="navbar-link">Property</a></li>
                                    <li><a href="#blog" className="navbar-link">Blog</a></li>
                                    <li><a href="#contact" className="navbar-link">Contact</a></li>
                                </ul>
                            </div>
                        </nav>

                        <div className="header-bottom-actions">
                            <button className="header-bottom-actions-btn" aria-label="Seach">
                                <ion-icon name="search-outline"></ion-icon>
                                <span>Search</span>    
                            </button>
                            
                            <button className="header-bottom-actions-btn" aria-label="Profile">
                                <ion-icon name="person-outline"></ion-icon>
                                <span>Profile</span>
                            </button>

                            <button className="header-bottom-actions-btn">
                                <ion-icon name="cart-outline"></ion-icon>
                                <span>Cart</span>
                            </button>

                            <button className="header-bottom-actions-btn">
                                <ion-icon name="menu-outline"></ion-icon>
                                <span>Menu</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}