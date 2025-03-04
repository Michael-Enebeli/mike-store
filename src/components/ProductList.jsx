import React, { useEffect, useState } from "react";
import { getProductsByCategory } from "../utils/storeProducts";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ProductList = ({ category, onAddToCart }) => {
  const [categoryData, setCategoryData] = useState({ description: "", items: [] });
  const [searchQuery, setSearchQuery] = useState("");

  const fetchUpdatedProducts = () => {
    const data = getProductsByCategory(category);
    setCategoryData(data);
  };

  useEffect(() => {
    fetchUpdatedProducts();
    window.addEventListener("storage", fetchUpdatedProducts);

    return () => {
      window.removeEventListener("storage", fetchUpdatedProducts);
    };
  }, [category]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredProducts = categoryData.items.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );

  const handleAddToCart = (event, product) => {
    const productImage = event.target.closest(".product-card").querySelector("img");
    const cartIcon = document.querySelector(".cart-icon i"); // Target the cart icon inside the div

    if (!productImage || !cartIcon) return;

    // Clone the image for animation
    const flyingImage = productImage.cloneNode(true);
    flyingImage.classList.add("flying-image");
    document.body.appendChild(flyingImage);

    // Get positions for animation
    const productRect = productImage.getBoundingClientRect();
    const cartRect = cartIcon.getBoundingClientRect();

    flyingImage.style.position = "fixed";
    flyingImage.style.left = `${productRect.left}px`;
    flyingImage.style.top = `${productRect.top}px`;
    flyingImage.style.width = `${productRect.width}px`;
    flyingImage.style.height = `${productRect.height}px`;

    // Target center of cart icon
    const offsetX = cartRect.left + cartRect.width / 2 - productRect.left - productRect.width / 2;
    const offsetY = cartRect.top + cartRect.height / 2 - productRect.top - productRect.height / 2;

    setTimeout(() => {
      flyingImage.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(0.2)`;
      flyingImage.style.opacity = "0";
    }, 10);

    // Remove image after animation and then update the cart count
    setTimeout(() => {
      document.body.removeChild(flyingImage);
      onAddToCart({ ...product, category }); // Cart updates only after animation
    }, 1000);
  };

  return (
    <div>
      <div className="search-bar">
        <input 
          type="search" 
          placeholder={categoryData.description || "Search products..."} 
          value={searchQuery} 
          onChange={handleSearch} 
        />
        <i className="fas fa-search"></i>
      </div>
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <p>Stock: {product.stock}</p>
              <button 
                onClick={(event) => handleAddToCart(event, product)} 
                disabled={product.stock <= 0} 
                style={{ opacity: product.stock <= 0 ? 0.75 : 1, cursor: product.stock <= 0 ? "not-allowed" : "pointer" }}
              >
                {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
              </button>
            </div>
          ))
        ) : (
          <p className="no-product">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
