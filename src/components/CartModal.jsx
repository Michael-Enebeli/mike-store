import React, { useState } from "react";
import "./CartModal.css"; 

const CartModal = ({ cart, onClose, onRemoveFromCart, onDecreaseQuantity, setCart }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setIsProcessing(true);

    // Check if any item in the cart exceeds the available stock
    const storedProducts = JSON.parse(localStorage.getItem("products")) || {};
    const itemsWithError = [];

    cart.forEach((cartItem) => {
      const categoryData = storedProducts[cartItem.category];
      if (categoryData) {
        const product = categoryData.items.find((p) => p.id === cartItem.id);
        if (product && cartItem.quantity > product.stock) {
          itemsWithError.push(cartItem.name);
        }
      }
    });

    if (itemsWithError.length > 0) {
      // Build the error message
      let alertMessage = "You’ve selected more items in stock for ";

      if (itemsWithError.length === 1) {
        alertMessage += `${itemsWithError[0]}.`;
      } else if (itemsWithError.length === 2) {
        alertMessage += `${itemsWithError[0]} and ${itemsWithError[1]}.`;
      } else {
        alertMessage += `${itemsWithError.slice(0, -1).join(", ")} and ${itemsWithError[itemsWithError.length - 1]}.`;
      }

      alert(alertMessage);
      setIsProcessing(false);
      return;
    }

    setTimeout(() => {
      // Update stock in local storage for each cart item
      cart.forEach((cartItem) => {
        const categoryData = storedProducts[cartItem.category];
        if (categoryData) {
          const productIndex = categoryData.items.findIndex((p) => p.id === cartItem.id);
          if (productIndex !== -1) {
            // Reduce the stock
            categoryData.items[productIndex].stock -= cartItem.quantity;
            // Ensure stock doesn't drop below zero
            if (categoryData.items[productIndex].stock < 0) {
              categoryData.items[productIndex].stock = 0;
            }
          }
        }
      });

      localStorage.setItem("products", JSON.stringify(storedProducts));

      setIsProcessing(false);
      setIsSuccess(true);

      // Clear the cart
      setCart([]);

      // Optional: trigger a storage event to force other components to update
      window.dispatchEvent(new Event("storage"));
    }, 3500);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>&times;</button>

        {isProcessing ? (
          <div className="processing-text">Processing.</div>
        ) : isSuccess ? (
          <div className="success-message">
            <div className="checkmark-container">
              <div className="checkmark"></div>
            </div>
            <h2>Successful</h2>
          </div>
        ) : (
          <>
            <h2>Cart</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul className="cart-list">
                {cart.map((item) => (
                  <li key={item.id}>
                    <span>
                      {item.name} ({item.quantity}) - ${item.price * item.quantity}
                    </span>
                    <div className="cart-buttons">
                      <button onClick={() => onDecreaseQuantity(item.id)}>➖</button>
                      <button onClick={() => onRemoveFromCart(item.id)}>🗑️</button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <p className="total-price">Total: ${totalPrice}</p>
            <button 
              className="checkout-btn" 
              onClick={handleCheckout} 
              disabled={cart.length === 0} 
              style={{ opacity: cart.length === 0 ? 0.75 : 1, cursor: cart.length === 0 ? "not-allowed" : "pointer" }}
            >
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
