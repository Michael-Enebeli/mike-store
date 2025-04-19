import React, { useState } from "react";
import "../styles/FullScreenProductPanel.css";

const FullScreenProductPanel = ({ product, onClose }) => {
  const [wishlist, setWishlist] = useState({}); 

  const toggleWishlist = () => {
    if (!product) return; 

    setWishlist((prev) => ({
      ...prev,
      [product.id]: !prev[product.id],
    }));
  };

  const handleShare = async () => {
    if (navigator.canShare && navigator.share) {
      try {
        await navigator.share({
          title: `${product.name} - Amazing Product!`,
          text: `${product.name}\n${product.description}\nCheck it out here:`,
          url: window.location.href,
        });
        console.log("Shared successfully!");
      } catch (error) {
        console.error("Sharing failed:", error);
      }
    } else {
      alert("Your browser does not support the Web Share API. Try using Chrome or Edge on mobile.");
    }
  };
  
  return (
    <div className={`fullscreen-panel ${product ? "show" : ""}`}>
      <button title="Close" className="close-btn" onClick={onClose}> x </button>
      {product && (
        <>
          <img src={product.image} alt={product.name} className="fullscreen-image" />
          <div className="icon-container">
            <svg
              onClick={toggleWishlist}
              className={`wishlist-icon ${wishlist[product.id] ? "wishlisted" : ""}`}
              viewBox="0 0 24 24"
              width="20"
              height="20"
            > <title>{wishlist[product.id] ? "Remove from Wishlist" : "Add to Wishlist"}</title>
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
            </svg>

            <svg onClick={handleShare} class="share-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#888">
              <title>Share this product</title>
              <circle cx="5" cy="12" r="3" stroke="#888" stroke-width="2" fill="none"></circle>

              <circle cx="5" cy="12" r="2" fill="white"></circle>
              <circle cx="19" cy="5" r="3" stroke="#888" stroke-width="2" fill="none"></circle>

              <circle cx="19" cy="5" r="2" fill="white"></circle>
              <circle cx="19" cy="19" r="3" stroke="#888" stroke-width="2" fill="none"></circle>

              <circle cx="19" cy="19" r="2" fill="white"></circle>
              <line x1="7" y1="12" x2="17" y2="6.5" stroke="#888" stroke-width="2"></line>
              <line x1="7" y1="12" x2="17" y2="17.5" stroke="#888" stroke-width="2"></line>
            </svg>

            <i className="rating">{product.rating ? `${product.rating} ★` : "-"} </i>

            <a
              href={`https://wa.me/2349048543476?text=Hello,%I'm%20interested%20in%20${product.name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span title="Chat with us">
                <i className="fas fa-comment chat-icon"></i>
              </span>

            </a>
            <a
              href={product.image}
              download={`${product.name.replace(/\s+/g, '_')}.jpg`}
              title="Download product image"
            >
              <i className="fas fa-download download-icon"></i>
            </a>
          </div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </>
      )}
    </div>
  );
};

export default FullScreenProductPanel;