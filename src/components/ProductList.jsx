import React, { useEffect, useState, useMemo } from "react";
import { getProductsByCategory } from "../utils/storeProducts";
import { initializeGSAPAnimation } from "../utils/gsapAnimations";
import { handleFlyingImage } from "../utils/cartAnimation";
import CustomDropdown from "../utils/CustomDropdown";
import ProductComparison from "./ProductComparison";
import "../styles/ProductList.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FullScreenProductPanel from "./FullScreenProductPanel";


const ProductList = ({ category, onAddToCart }) => {
  // Restore searchQuery from sessionStorage (or default to "")
  const [searchQuery, setSearchQuery] = useState(() => sessionStorage.getItem("searchQuery") || "");
  const [categoryData, setCategoryData] = useState({ description: "", items: [] });
  const [sortedProducts, setSortedProducts] = useState([]); // Final products after sorting
  const [loading, setLoading] = useState(true);
  const [isComparing, setIsComparing] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Load selected products on mount
  useEffect(() => {
    const storedProducts = sessionStorage.getItem("selectedProducts");
    if (storedProducts) {
      setSelectedProducts(JSON.parse(storedProducts));
    }
  }, []);

  // Persist searchQuery whenever it changes
  useEffect(() => {
    sessionStorage.setItem("searchQuery", searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    initializeGSAPAnimation(loading);
  }, [loading]);

  // Fetch new products when category changes
  useEffect(() => {
    const fetchUpdatedProducts = () => {
      setLoading(true);
      setTimeout(() => {
        const data = getProductsByCategory(category);
        setCategoryData(data);
        setLoading(false);
      }, 500);
    };

    fetchUpdatedProducts();
    window.addEventListener("storage", fetchUpdatedProducts);
    return () => window.removeEventListener("storage", fetchUpdatedProducts);
  }, [category]);

  // Compute products filtered by search query on every render.
  const searchFilteredProducts = useMemo(() => {
    return categoryData.items.filter((product) =>
      product.name.toLowerCase().includes(searchQuery)
    ).slice(0, 12);
  }, [categoryData.items, searchQuery]);

  // When searchFilteredProducts or sorting changes in CustomDropdown,
  // CustomDropdown calls setSortedProducts. That state is what we render.
  // (If no sort is applied, CustomDropdown should simply pass back the searchFilteredProducts.)

  // Handle search input changes
  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // For comparison feature
  const handleCheckboxChange = (product) => {
    setSelectedProducts((prev) => {
      let updatedSelection;
      if (prev.find((p) => p.id === product.id)) {
        updatedSelection = prev.filter((p) => p.id !== product.id);
      } else if (prev.length < 2) {
        updatedSelection = [...prev, product];
      } else {
        alert("You can only compare 2 items at a time.");
        return prev;
      }
      sessionStorage.setItem("selectedProducts", JSON.stringify(updatedSelection));
      return updatedSelection;
    });
  };
  const handleProductClick = (product) => {
    setSelectedProduct(product); // Set the clicked product
  };

  const closeProductPanel = () => {
    setSelectedProduct(null);  // Close the panel by setting selectedProduct to null
  };
  const discountPercentage = 20;
  const calculateOriginalPrice = (price) =>
    Math.round(price / (1 - discountPercentage / 100));

  return (
    <div>
      <div className="controls-container">
        <div className="search-bar">
          <input
            type="search"
            id="all-product"
            placeholder={categoryData.description || "Search products..."}
            value={searchQuery}
            onChange={handleSearch}
          />
          <i className="fas fa-search"></i>
        </div>

        {/* Pass the search-filtered products to the dropdown.
            The dropdown will sort them and update sortedProducts via its setFilteredProducts prop. */}
        <div className="controls">
          <CustomDropdown
            products={searchFilteredProducts}
            setFilteredProducts={setSortedProducts}
          />
        </div>

        <div className="controls">
          <ProductComparison
            products={sortedProducts}
            isComparing={isComparing}
            setIsComparing={setIsComparing}
            selectedProducts={selectedProducts}
          />
        </div>
      </div>

      <main>
        <div className="product-grid">
          {loading ? (
            [...Array(8)].map((_, index) => (
              <div key={index} className="product-card">
                <div className="skeleton skeleton-image"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text small"></div>
                <div className="product-footer">
                  <div className="price-container">
                    <div className="skeleton price-text"></div>
                  </div>
                  <div className="skeleton skeleton-button"></div>
                </div>
              </div>
            ))
          ) : sortedProducts.length > 0 ? (
            sortedProducts.map((product) => {
              const originalPrice = calculateOriginalPrice(product.price);
              return (
                <div key={product.id} className={`product-card loaded ${isComparing ? "comparing" : ""}`}>
                  {isComparing && (
                    <ProductComparison.Checkbox
                      product={product}
                      selectedProducts={selectedProducts}
                      handleCheckboxChange={handleCheckboxChange}
                    />
                  )}
                <img 
                    src={product.image} 
                    alt={product.name} 
                    onClick={() => handleProductClick(product)}  // When image clicked, set selected product
                  />
                  <h3>{product.name}</h3>
                  <p>{product.stock} currently available</p>
                  <div className="product-footer">
                    <div className="price-container">
                      <span className="original-price">${originalPrice}</span>
                      <span className="discounted-price">${product.price}</span>
                    </div>
                    <button
                      onClick={(event) => handleFlyingImage(event, product, category, onAddToCart)}
                      disabled={product.stock <= 0}
                      style={{
                        opacity: product.stock <= 0 ? 0.75 : 1,
                        cursor: product.stock <= 0 ? "not-allowed" : "pointer",
                      }}
                    >
                      {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="no-product">No products found.</p>
          )}
        </div>
      </main>
      <FullScreenProductPanel
        product={selectedProduct}
        onClose={closeProductPanel}
      />
    </div>
  );
};

export default ProductList;
