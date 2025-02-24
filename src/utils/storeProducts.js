const productsData = {
  jewelry: {
    description: "Explore our premium jewelry collection...",
    items: [
      { id: 1, name: "Necklace", price: 50, stock: 8, image: "/images/necklace.webp" },
      { id: 2, name: "Ring", price: 30, stock: 5, image: "/images/ring.jpg" },
      { id: 3, name: "Earrings", price: 100, stock: 7, image: "/images/earring.jpg" },
      { id: 4, name: "Bracelet", price: 40, stock: 3, image: "/images/bracelet.jpg" },
      { id: 5, name: "Pendant", price: 70, stock: 3, image: "/images/pendant.webp" },
      { id: 6, name: "Watch", price: 150, stock: 4, image: "/images/watch.webp" },
      { id: 7, name: "Anklet", price: 25, stock: 5, image: "/images/anklet.webp" },
      { id: 8, name: "Brooch", price: 80, stock: 6, image: "/images/brooch.jpg" },
      { id: 9, name: "Sapphire", price: 90, stock: 7, image: "/images/sapphire.jpg" },
      { id: 10, name: "Ruby", price: 120, stock: 5, image: "/images/ruby.webp" },
      { id: 11, name: "Emerald", price: 110, stock: 6, image: "/images/emerald.webp" },
      { id: 12, name: "Opal", price: 95, stock: 8, image: "/images/opal.webp" }
    ]
  },
  clothing: {
    description: "Browse our latest fashion styles...",
    items: [
      { id: 13, name: "T-Shirt", price: 20, stock: 5, image: "/images/t-shirt.jpg" },
      { id: 14, name: "Jeans", price: 40, stock: 8, image: "/images/jeans.jpg" },
      { id: 15, name: "Jacket", price: 60, stock: 5, image: "/images/jacket.jpg" },
      { id: 16, name: "Sweater", price: 35, stock: 8, image: "/images/sweater.jpg" },
      { id: 17, name: "Shorts", price: 25, stock: 3, image: "/images/shorts.jpg" },
      { id: 18, name: "Dress", price: 50, stock: 5, image: "/images/dress.jpg" },
      { id: 19, name: "Skirt", price: 30, stock: 6, image: "/images/skirt.jpg" },
      { id: 20, name: "Hoodie", price: 45, stock: 5, image: "/images/hoodie.jpg" },
      { id: 21, name: "Blazer", price: 70, stock: 4, image: "/images/blazer.jpg" },
      { id: 22, name: "Coat", price: 85, stock: 3, image: "/images/coat.jpg" },
      { id: 23, name: "Tank", price: 18, stock: 7, image: "/images/tank.jpg" },
      { id: 24, name: "Cardigan", price: 55, stock: 5, image: "/images/cardigan.jpg" }
    ]
  },
  accessories: {
    description: "Find the perfect accessories to match your style...",
    items: [
      { id: 25, name: "Wallet", price: 30, stock: 5, image: "/images/wallet.webp" },
      { id: 26, name: "Sunglasses", price: 25, stock: 2, image: "/images/sunglasses.webp" },
      { id: 27, name: "Cap", price: 15, stock: 2, image: "/images/cap.webp" },
      { id: 28, name: "Scarf", price: 18, stock: 4, image: "/images/scarf.jpg" },
      { id: 29, name: "Backpack", price: 50, stock: 6, image: "/images/backpack.jpg" },
      { id: 30, name: "Handbag", price: 70, stock: 5, image: "/images/handbag.jpg" },
      { id: 31, name: "Belt", price: 20, stock: 5, image: "/images/belt.jpg" },
      { id: 32, name: "Gloves", price: 22, stock: 4, image: "/images/glove.jpg" },
      { id: 33, name: "Watch", price: 100, stock: 3, image: "/images/watch.webp" },
      { id: 34, name: "Shoe", price: 28, stock: 3, image: "/images/shoe.jpg" },
      { id: 35, name: "Tie", price: 24, stock: 6, image: "/images/tie.jpg" },
      { id: 36, name: "Bracelet", price: 32, stock: 7, image: "/images/bracelet.jpg" }
    ]
  },
  food: {
    description: "Shop for fresh and delicious food items...",
    items: [
      { id: 37, name: "Cake", price: 25, stock: 5, image: "/images/cake.jpg" },
      { id: 38, name: "Burger", price: 10, stock: 5, image: "/images/burger.jpg" },
      { id: 39, name: "Pizza", price: 20, stock: 3, image: "/images/pizza.jpg" },
      { id: 40, name: "Pasta", price: 15, stock: 6, image: "/images/pasta.jpg" },
      { id: 41, name: "Salad", price: 12, stock: 2, image: "/images/salad.jpg" },
      { id: 42, name: "Sushi", price: 35, stock: 5, image: "/images/sushi.jpg" },
      { id: 43, name: "Ice Cream", price: 8, stock: 6, image: "/images/ice-cream.jpg" },
      { id: 44, name: "Juice", price: 5, stock: 5, image: "/images/juice.jpg" },
      { id: 45, name: "Sandwich", price: 12, stock: 4, image: "/images/sandwich.jpg" },
      { id: 46, name: "Taco", price: 9, stock: 4, image: "/images/taco.jpg" },
      { id: 47, name: "Cookies", price: 11, stock: 3, image: "/images/cookies.jpg" },
      { id: 48, name: "Fries", price: 6, stock: 6, image: "/images/fries.jpg" }
    ]
  }
};
export const initializeLocalStorage = () => {
  if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify(productsData));
  }
};

export const getProductsByCategory = (category) => {
  const storedProducts = JSON.parse(localStorage.getItem("products")) || {};
  return storedProducts[category] || { description: "", items: [] };
};
