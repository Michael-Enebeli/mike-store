import React, { useState, useEffect, useRef } from "react";
import "../styles/ProductList.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const CustomDropdown = ({ products, setFilteredProducts }) => {
  const [sortOrder, setSortOrder] = useState(() => sessionStorage.getItem("sortOrder") || "");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sortedProducts, setSortedProducts] = useState(products);
  const dropdownRef = useRef(null); 

  useEffect(() => {
    setSortedProducts(sortProducts(products, sortOrder));
  }, [products, sortOrder]);

  useEffect(() => {
    setFilteredProducts(sortedProducts);
  }, [sortedProducts, setFilteredProducts]);

  const sortProducts = (products, order) => {
    switch (order) {
      case "price-low":
        return [...products].sort((a, b) => a.price - b.price);
      case "price-high":
        return [...products].sort((a, b) => b.price - a.price);
      case "newest":
        return [...products].sort((a, b) => b.id - a.id);
      default:
        return products;
    }
  };

  const handleSortSelection = (order) => {
    setSortOrder(order);
    sessionStorage.setItem("sortOrder", order);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <button className="dropdown-btn" onClick={() => setDropdownOpen((prev) => !prev)}>
        <span>
          {sortOrder === "price-low"
            ? "Lowest Price First"
            : sortOrder === "price-high"
            ? "Highest Price First"
            : sortOrder === "newest"
            ? "Newest Arrivals"
            : "Sort by"}
        </span>
        <i className={`fas fa-chevron-down ${dropdownOpen ? "open" : ""}`}></i>
      </button>
      <div className={`dropdown-menu ${dropdownOpen ? "open" : ""}`}>
        <div onClick={() => handleSortSelection("")}>None</div>
        <div onClick={() => handleSortSelection("price-low")}>Lowest Price First</div>
        <div onClick={() => handleSortSelection("price-high")}>Highest Price First</div>
        <div onClick={() => handleSortSelection("newest")}>Newest Arrivals</div>
      </div>
    </div>
  );
};

export default CustomDropdown;
