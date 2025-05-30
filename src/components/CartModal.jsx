import React, { useState } from "react";
import "../styles/CartModal.css"; 
import "@fortawesome/fontawesome-free/css/all.min.css";

const CartModal = ({ cart, onClose, onRemoveFromCart, onDecreaseQuantity, setCart }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [checkoutTimeout, setCheckoutTimeout] = useState(null);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setIsProcessing(true);

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

    const timeout = setTimeout(() => {
      cart.forEach((cartItem) => {
        const categoryData = storedProducts[cartItem.category];
        if (categoryData) {
          const productIndex = categoryData.items.findIndex((p) => p.id === cartItem.id);
          if (productIndex !== -1) {
            categoryData.items[productIndex].stock -= cartItem.quantity;
            if (categoryData.items[productIndex].stock < 0) {
              categoryData.items[productIndex].stock = 0;
            }
          }
        }
      });

      localStorage.setItem("products", JSON.stringify(storedProducts));

      setIsProcessing(false);
      setIsSuccess(true);
      setCart([]);

      window.dispatchEvent(new Event("storage"));
    }, 3500);

    setCheckoutTimeout(timeout);
  };

  const handleClose = () => {
    if (isProcessing) {
      clearTimeout(checkoutTimeout);
      setIsProcessing(false);
      setIsSuccess(false);
    }
    onClose();
  };

  const increaseQuantity = (itemId) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === itemId) {
          if (item.quantity >= item.stock) {
            alert(`Only ${item.stock} ${item.name} are available in stock.`);
            return item;
          }
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  };
  
  

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" title="Close" onClick={handleClose}>&times;</button>

        {isProcessing ? (
          <div className="processing-text">Processing</div>
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
                    <button onClick={() => onDecreaseQuantity(item.id)} 
                     title="Decrease Quantity"> <i className="fas fa-minus"></i> </button>
                    <button onClick={() => increaseQuantity(item.id)} 
                     title="Increase Quantity"> <i className="fas fa-plus"></i> </button>
                    <button onClick={() => onRemoveFromCart(item.id)} 
                     title="Remove Item"> <i className="fas fa-trash"></i> </button>
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
