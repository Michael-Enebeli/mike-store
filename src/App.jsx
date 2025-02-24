import { useEffect, useState } from "react";
import { initializeLocalStorage } from "./utils/storeProducts";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = sessionStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    initializeLocalStorage();
  }, []);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <Router>
      <Header 
        cart={cart} 
        onRemoveFromCart={removeFromCart} 
        onDecreaseQuantity={decreaseQuantity} 
        setCart={setCart} // Pass setCart to header
      />
      <Routes>
        <Route path="/" element={<Navigate to="/jewelry" />} />
        <Route path="/jewelry" element={<ProductList category="jewelry" onAddToCart={addToCart} />} />
        <Route path="/clothing" element={<ProductList category="clothing" onAddToCart={addToCart} />} />
        <Route path="/accessories" element={<ProductList category="accessories" onAddToCart={addToCart} />} />
        <Route path="/food" element={<ProductList category="food" onAddToCart={addToCart} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
