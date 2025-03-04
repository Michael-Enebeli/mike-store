import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CartModal from "./CartModal";

const Header = ({ cart, onRemoveFromCart, onDecreaseQuantity, setCart }) => {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const [isModalOpen, setModalOpen] = useState(false);

  const cartTitle = cartCount === 0 
    ? "Your cart is empty" 
    : `${cartCount} item(s) in cart`;

  return (
    <>
      <header>
        <h1 className="logo">My E-Commerce</h1>
      </header>
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
    </>
  );
};

export default Header;
