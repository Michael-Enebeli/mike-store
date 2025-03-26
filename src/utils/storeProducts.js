const productsData = {
  jewelry: {
    description: "Explore our premium jewelry collection...",
    items: [
      { id: 1, name: "Necklace", price: 50, stock: 8, brand: "Tiffany & Co.", material: "18K Gold", durability: "5 Years Warranty", rating: "4.7", image: "/images/necklace.webp", description: "A stunning 18K gold necklace from Tiffany & Co., perfect for adding elegance to any outfit." },
      { id: 2, name: "Ring", price: 30, stock: 5, brand: "Cartier", material: "Sterling Silver", durability: "3 Years Warranty", rating: "4.5", image: "/images/ring.jpg", description: "A timeless sterling silver ring by Cartier, designed for sophistication and durability." },
      { id: 3, name: "Earrings", price: 100, stock: 7, brand: "Swarovski", material: "Platinum", durability: "Lifetime", rating: "4.8", image: "/images/earring.jpg", description: "Exquisite platinum earrings from Swarovski, crafted to sparkle for a lifetime." },
      { id: 4, name: "Bracelet", price: 40, stock: 3, brand: "David Yurman", material: "14K Gold", durability: "4 Years Warranty", rating: "4.6", image: "/images/bracelet.jpg", description: "A luxurious 14K gold bracelet by David Yurman, blending style and durability." },
      { id: 5, name: "Pendant", price: 70, stock: 3, brand: "Tiffany & Co.", material: "Diamond", durability: "Lifetime", rating: "4.9", image: "/images/pendant.webp", description: "A dazzling diamond pendant from Tiffany & Co., perfect for special occasions." },
      { id: 6, name: "Watch", price: 150, stock: 4, brand: "Rolex", material: "Titanium", durability: "10 Years Warranty", rating: "5.0", image: "/images/watch.webp", description: "A premium titanium watch by Rolex, combining precision engineering with timeless design." },
      { id: 7, name: "Anklet", price: 25, stock: 5, brand: "Pandora", material: "Silver", durability: "3 Years", rating: "4.4", image: "/images/anklet.webp", description: "A delicate silver anklet from Pandora, perfect for adding a touch of charm to your look." },
      { id: 8, name: "Brooch", price: 80, stock: 6, brand: "Chopard", material: "Crystal & Gold", durability: "5 Years", rating: "4.7", image: "/images/brooch.jpg", description: "A luxurious crystal and gold brooch by Chopard, ideal for elevating any outfit." },
      { id: 9, name: "Sapphire", price: 90, stock: 7, brand: "Bvlgari", material: "Pure Sapphire", durability: "Lifetime", rating: "4.8", image: "/images/sapphire.jpg", description: "A breathtaking pure sapphire piece from Bvlgari, crafted for timeless elegance." },
      { id: 10, name: "Ruby", price: 120, stock: 5, brand: "Chopard", material: "Pure Ruby", durability: "Lifetime", rating: "4.9", image: "/images/ruby.webp", description: "A vibrant pure ruby accessory by Chopard, designed to make a bold statement." },
      { id: 11, name: "Emerald", price: 110, stock: 6, brand: "Graff", material: "Emerald Stone", durability: "Lifetime", rating: "4.8", image: "/images/emerald.webp", description: "A stunning emerald stone piece from Graff, perfect for adding a touch of luxury." },
      { id: 12, name: "Opal", price: 95, stock: 8, brand: "Tiffany & Co.", material: "Opal Stone", durability: "Lifetime", rating: "4.7", image: "/images/opal.webp", description: "A mesmerizing opal stone accessory from Tiffany & Co., crafted for elegance." }
    ]
  },
  clothing: {
    description: "Browse our latest fashion styles...",
    items: [
      { id: 13, name: "T-Shirt", price: 20, stock: 5, brand: "H&M", material: "100% Cotton", durability: "2 Years", rating: "4.3", image: "/images/t-shirt.jpg", description: "A comfortable and stylish 100% cotton T-shirt from H&M, perfect for casual wear." },
      { id: 14, name: "Jeans", price: 40, stock: 8, brand: "Levi's", material: "Denim", durability: "3 Years", rating: "4.6", image: "/images/jeans.jpg", description: "Classic denim jeans by Levi's, offering both comfort and durability for everyday wear." },
      { id: 15, name: "Jacket", price: 60, stock: 5, brand: "The North Face", material: "Leather", durability: "5 Years", rating: "4.8", image: "/images/jacket.jpg", description: "A premium leather jacket from The North Face, designed for style and longevity." },
      { id: 16, name: "Sweater", price: 35, stock: 8, brand: "Gap", material: "Wool", durability: "3 Years", rating: "4.5", image: "/images/sweater.jpg", description: "A cozy wool sweater from Gap, perfect for staying warm in style." },
      { id: 17, name: "Shorts", price: 25, stock: 3, brand: "Nike", material: "Cotton", durability: "2 Years", rating: "4.2", image: "/images/shorts.jpg", description: "Lightweight cotton shorts from Nike, ideal for active and casual wear." },
      { id: 18, name: "Dress", price: 50, stock: 5, brand: "Zara", material: "Silk", durability: "5 Years", rating: "4.9", image: "/images/dress.jpg", description: "An elegant silk dress from Zara, perfect for formal occasions." },
      { id: 19, name: "Skirt", price: 30, stock: 6, brand: "Forever 21", material: "Polyester", durability: "2 Years", rating: "4.1", image: "/images/skirt.jpg", description: "A trendy polyester skirt from Forever 21, great for casual outings." },
      { id: 20, name: "Hoodie", price: 45, stock: 5, brand: "Champion", material: "Cotton Blend", durability: "3 Years", rating: "4.4", image: "/images/hoodie.jpg", description: "A comfortable cotton blend hoodie from Champion, perfect for lounging." },
      { id: 21, name: "Blazer", price: 70, stock: 4, brand: "Hugo Boss", material: "Wool Blend", durability: "4 Years", rating: "4.7", image: "/images/blazer.jpg", description: "A sophisticated wool blend blazer from Hugo Boss, ideal for professional settings." },
      { id: 22, name: "Coat", price: 85, stock: 3, brand: "Burberry", material: "Wool", durability: "5 Years", rating: "4.8", image: "/images/coat.jpg", description: "A luxurious wool coat from Burberry, designed for both warmth and style." },
      { id: 23, name: "Tank", price: 18, stock: 7, brand: "American Eagle", material: "Cotton", durability: "2 Years", rating: "4.3", image: "/images/tank.jpg", description: "A simple and comfortable cotton tank top from American Eagle." },
      { id: 24, name: "Cardigan", price: 55, stock: 5, brand: "Uniqlo", material: "Cashmere Blend", durability: "3 Years", rating: "4.5", image: "/images/cardigan.jpg", description: "A soft cashmere blend cardigan from Uniqlo, perfect for layering." }
    ]
  },
  accessories: {
    description: "Find the perfect accessories to match your style...",
    items: [
      { id: 25, name: "Wallet", price: 30, stock: 5, brand: "Coach", material: "Genuine Leather", durability: "5 Years", rating: "4.8", image: "/images/wallet.webp", description: "A sleek genuine leather wallet from Coach, combining style and functionality." },
      { id: 26, name: "Sunglasses", price: 25, stock: 2, brand: "Ray-Ban", material: "Polycarbonate", durability: "2 Years", rating: "4.5", image: "/images/sunglasses.webp", description: "Classic polycarbonate sunglasses from Ray-Ban, offering UV protection and style." },
      { id: 27, name: "Cap", price: 15, stock: 2, brand: "New Era", material: "Cotton", durability: "2 Years", rating: "4.3", image: "/images/cap.webp", description: "A comfortable cotton cap from New Era, perfect for casual outings." },
      { id: 28, name: "Scarf", price: 18, stock: 4, brand: "Burberry", material: "Wool", durability: "3 Years", rating: "4.6", image: "/images/scarf.jpg", description: "A luxurious wool scarf from Burberry, designed for warmth and style." },
      { id: 29, name: "Backpack", price: 50, stock: 6, brand: "JanSport", material: "Nylon", durability: "4 Years", rating: "4.7", image: "/images/backpack.jpg", description: "A durable nylon backpack from JanSport, perfect for everyday use." },
      { id: 30, name: "Handbag", price: 70, stock: 5, brand: "Michael Kors", material: "Leather", durability: "5 Years", rating: "4.8", image: "/images/handbag.jpg", description: "A chic leather handbag from Michael Kors, ideal for both casual and formal occasions." },
      { id: 31, name: "Belt", price: 20, stock: 5, brand: "Gucci", material: "Leather", durability: "5 Years", rating: "4.7", image: "/images/belt.jpg", description: "A premium leather belt from Gucci, perfect for adding a touch of luxury to your outfit." },
      { id: 32, name: "Gloves", price: 22, stock: 4, brand: "The North Face", material: "Fleece", durability: "3 Years", rating: "4.5", image: "/images/glove.jpg", description: "Warm fleece gloves from The North Face, designed for cold weather comfort." },
      { id: 33, name: "Watch", price: 100, stock: 3, brand: "Fossil", material: "Stainless Steel", durability: "3 Years", rating: "4.4", image: "/images/watch.webp", description: "A stylish stainless steel watch from Fossil, combining functionality and elegance." },
      { id: 34, name: "Shoe", price: 28, stock: 3, brand: "Nike", material: "Mesh & Rubber", durability: "2 Years", rating: "4.6", image: "/images/shoe.jpg", description: "Lightweight mesh and rubber shoes from Nike, perfect for active lifestyles." },
      { id: 35, name: "Tie", price: 24, stock: 6, brand: "Hugo Boss", material: "Silk", durability: "3 Years", rating: "4.5", image: "/images/tie.jpg", description: "A sleek silk tie from Hugo Boss, ideal for formal occasions." },
      { id: 36, name: "Bracelet", price: 32, stock: 7, brand: "Pandora", material: "Sterling Silver", durability: "3 Years", rating: "4.6", image: "/images/bracelet.jpg", description: "A beautiful sterling silver bracelet from Pandora, perfect for accessorizing." }
    ]
  },
  food: {
    description: "Shop for fresh and delicious food items...",
    items: [
      { id: 37, name: "Cake", price: 25, stock: 5, brand: "Entenmann's", ingredients: "Flour, Sugar, Eggs", shelfLife: "2 Days Fresh", rating: "4.6", image: "/images/cake.jpg", description: "A delicious cake from Entenmann's, perfect for celebrations and desserts." },
      { id: 38, name: "Burger", price: 10, stock: 5, brand: "McDonald's", ingredients: "Beef, Bun, Cheese", shelfLife: "1 Day Fresh", rating: "4.4", image: "/images/burger.jpg", description: "A classic beef burger from McDonald's, made with fresh ingredients." },
      { id: 39, name: "Pizza", price: 20, stock: 3, brand: "Domino's", ingredients: "Dough, Cheese, Tomato Sauce", shelfLife: "1 Day Fresh", rating: "4.7", image: "/images/pizza.jpg", description: "A mouthwatering pizza from Domino's, topped with cheese and tomato sauce." },
      { id: 40, name: "Pasta", price: 15, stock: 6, brand: "Barilla", ingredients: "Durum Wheat, Water", shelfLife: "3 Days Fresh", rating: "4.5", image: "/images/pasta.jpg", description: "High-quality pasta from Barilla, perfect for a variety of dishes." },
      { id: 41, name: "Salad", price: 12, stock: 2, brand: "Fresh Express", ingredients: "Lettuce, Tomato, Cucumber", shelfLife: "1 Day Fresh", rating: "4.3", image: "/images/salad.jpg", description: "A fresh and healthy salad from Fresh Express, made with crisp vegetables." },
      { id: 42, name: "Sushi", price: 35, stock: 5, brand: "Benihana", ingredients: "Rice, Fish, Seaweed", shelfLife: "1 Day Fresh", rating: "4.8", image: "/images/sushi.jpg", description: "Delicious sushi from Benihana, crafted with fresh fish and premium ingredients." },
      { id: 43, name: "Ice Cream", price: 8, stock: 6, brand: "Ben & Jerry's", ingredients: "Milk, Sugar, Flavorings", shelfLife: "2 Weeks", rating: "4.7", image: "/images/ice-cream.jpg", description: "Creamy and flavorful ice cream from Ben & Jerry's, perfect for dessert lovers." },
      { id: 44, name: "Juice", price: 5, stock: 5, brand: "Tropicana", ingredients: "Fresh Fruit", shelfLife: "7 Days", rating: "4.5", image: "/images/juice.jpg", description: "Refreshing juice from Tropicana, made with fresh fruit for a natural taste." },
      { id: 45, name: "Sandwich", price: 12, stock: 4, brand: "Jimmy John's", ingredients: "Bread, Meat, Veggies", shelfLife: "1 Day Fresh", rating: "4.4", image: "/images/sandwich.jpg", description: "A tasty sandwich from Jimmy John's, packed with fresh ingredients." },
      { id: 46, name: "Taco", price: 9, stock: 4, brand: "Taco Bell", ingredients: "Beef, Lettuce, Cheese", shelfLife: "1 Day Fresh", rating: "4.3", image: "/images/taco.jpg", description: "A flavorful taco from Taco Bell, filled with beef, lettuce, and cheese." },
      { id: 47, name: "Cookies", price: 11, stock: 3, brand: "Nabisco", ingredients: "Flour, Sugar, Butter", shelfLife: "1 Month", rating: "4.5", image: "/images/cookies.jpg", description: "Delicious cookies from Nabisco, perfect for snacking or dessert." },
      { id: 48, name: "Fries", price: 6, stock: 6, brand: "McDonald's", ingredients: "Potatoes, Oil, Salt", shelfLife: "Same Day", rating: "4.6", image: "/images/fries.jpg", description: "Crispy and golden fries from McDonald's, a classic side dish." }
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