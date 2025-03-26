import React, { useState, useEffect } from "react";
import "../styles/ProductComparison.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ProductComparison = ({ isComparing, setIsComparing, selectedProducts }) => {
  const [showComparison, setShowComparison] = useState(false);
  const [buttonClass, setButtonClass] = useState("compare-toggle");
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    if (isComparing && selectedProducts.length === 2) {
      setButtonClass("compare-toggle active");
    } else {
      setButtonClass("compare-toggle");
    }
  }, [isComparing, selectedProducts.length]);

  const handleButtonClick = () => {
    if (!isComparing) {
      setIsComparing(true);
    } else {
      if (selectedProducts.length === 2) {
        setShowComparison(true);
      } else {
        setIsComparing(false);
      }
    }
  };

  const clearSelectedItems = () => {
    setIsComparing(false);
    setShowComparison(false);
    selectedProducts.length = 0;
    setShowOptions(false);
    sessionStorage.removeItem("selectedProducts");
  };

  const toggleOptionsMenu = (e) => {
    e.stopPropagation();
    setShowOptions((prev) => !prev);
  };

  return (
    <div className="comparison-container">
      <button className={buttonClass} onClick={handleButtonClick}>
        {isComparing
          ? selectedProducts.length === 2
            ? "View Comparison"
            : "Disable Comparison"
          : "Enable Comparison"}

        <i
          className={`fas fa-ellipsis-v settings-icon ${isComparing && selectedProducts.length === 2 ? "visible" : "hidden"}`}
          onClick={toggleOptionsMenu}
        ></i>
      </button>

      <div className={`options-dropdown ${showOptions && selectedProducts.length === 2 ? "visible" : "hidden"}`}>
        <button className={`clear-button ${showOptions && selectedProducts.length === 2 ? "visible" : "hidden"}`} onClick={clearSelectedItems}>
          Clear All
        </button>
      </div>

      {showComparison && selectedProducts.length === 2 && (
        <div className="comparison-modal">
          <div className="comparison-modal-content">
            <div className="modal-header">
              <h2>
                Product Comparison <i className="fas fa-columns"></i>
              </h2>
              <button className="compare-close-modal" title="Close" onClick={() => setShowComparison(false)}>
                &times;
              </button>
            </div>

            <div className="comparison-table-container">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Material</th>
                    <th>Durability</th>
                    <th>Ingredients</th>
                    <th>Shelf&nbsp;Life</th>
                    <th>Price</th>
                    <th>Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedProducts.map((product) => (
                    <tr key={product.id}>
                      <td>
                        <img src={product.image} alt={product.name} className="comparison-image" />
                      </td>
                      <td>{product.name}</td>
                      <td>{product.brand || "-"}</td>
                      <td>{product.material || "-"}</td>
                      <td>{product.durability || "-"}</td>
                      <td>{product.ingredients || "-"}</td>
                      <td>{product.shelfLife || "-"}</td>
                      <td className="discounted-price">${product.price}</td>
                      <td className="rating">{product.rating ? `${product.rating} ★` : "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ProductComparison.Checkbox = ({ product, selectedProducts, handleCheckboxChange }) => {
  const handleChange = () => {
    if (selectedProducts.some((p) => p.id === product.id)) {
      handleCheckboxChange(product);
    } else if (selectedProducts.length < 2) {
      handleCheckboxChange(product);
    } else {
      alert("You can only compare 2 items at a time.");
    }
  };

  return (
    <input
      type="checkbox"
      className="compare-checkbox"
      checked={selectedProducts.some((p) => p.id === product.id)}
      onChange={handleChange}
    />
  );
};

export default ProductComparison;
