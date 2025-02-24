import React, { useEffect, useState } from "react";
import { getProductsByCategory } from "../utils/storeProducts";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ProductList = ({ category, onAddToCart }) => {
  const [categoryData, setCategoryData] = useState({ description: "", items: [] });
  const [searchQuery, setSearchQuery] = useState(""); // Store search input

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

  // Handle search input within the current category
  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // Filter products within the current category based on search query
  const filteredProducts = categoryData.items.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );

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
                onClick={() => onAddToCart({ ...product, category })} 
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
