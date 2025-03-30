import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom"; // Import useLocation
import "../styles/Header.css"; 
import "@fortawesome/fontawesome-free/css/all.min.css";
import CartModal from "./CartModal";

const Header = ({ cart, onRemoveFromCart, onDecreaseQuantity, setCart }) => {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const [isModalOpen, setModalOpen] = useState(false);

  const location = useLocation(); // Get the current route

  // Background images for each category
  const backgroundImages = {
  "/": "/images/anklet.webp",
    "/jewelry": "/images/anklet.webp",
    "/clothing": "/images/t-shirt.jpg",
    "/accessories": "/images/scarf.jpg",
    "/food": "/images/taco.jpg",
  };

  // Get the background image based on the current route
  const backgroundImage = backgroundImages[location.pathname] || backgroundImages["/"];

  const cartTitle = cartCount === 0 
    ? "Your cart is empty" 
    : `${cartCount} item(s) in cart`;

  const scrollToProducts = () => {
    const allProductsSection = document.getElementById("all-product");
    if (allProductsSection) {
      allProductsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="navbar">
        <ul className="nav-links">
          <li><NavLink to="/jewelry">Jewelry</NavLink></li>
          <li><NavLink to="/clothing">Clothing</NavLink></li>
          <li><NavLink to="/accessories">Accessories</NavLink></li>
          <li><NavLink to="/food">Food Items</NavLink></li>
        </ul>
        <div className="cart-icon" onClick={() => setModalOpen(true)} title={cartTitle}>
          <i className="fas fa-shopping-cart"></i>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </div>
      </nav>
      
      {isModalOpen && (
        <CartModal 
          cart={cart} 
          onClose={() => setModalOpen(false)} 
          onRemoveFromCart={onRemoveFromCart} 
          onDecreaseQuantity={onDecreaseQuantity} 
          setCart={setCart}
        />
      )}

      {/* Hero Section with Dynamic Background */}
      <div 
        className="hero-section" 
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <h1>Discover the Perfect Item for Every Occasion!</h1>
        <p>From elegant jewelry to stylish clothing, must-have accessories, and delicious food items all in one place.</p>
        <button className="shop-now-btn" onClick={scrollToProducts}>Shop Now</button>
      </div>
    </>
  );
};

export default Header;
