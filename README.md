# 🏬 Myke-Store | E-commerce App 

Myke Store is a simplified e-commerce web application that offers essential shopping features, including cart management, product comparison, filtering, and search functionality for a smooth user experiences. 

## 🚀 Live Demo  
🔗 [Visit the Site](https://myke-store.vercel.app)

## ⚠️ Note  
This app does not sell products, it's only a demonstration of basic e-commerce features and functionality

## Project Overview
## 🛍️ Product Listing
* Each product card displays the product image, name, price, and an "Add to Cart" button.
Product details (name, price, description, stock availability, brand, material, durability, and image) are stored in local storage to simulate backend functionality.
* Clicking "Add to Cart" adds the item with a clear visual effect.
* Users can add as many items to their cart as they want.

## 🛒 Cart Functionality
* The cart shows the total number of items and their quantities.
* Users can adjust quantities (increase or decrease) and remove items from the cart.
* The total price is automatically updated in real-time when items are added, removed, or quantity is changed.
* Clicking "Checkout" processes the selected items and updates the UI with real-time stock availability.
* If a user attempts to add more items than are available, they receive an immediate alert about the stock issue.
* Once an item runs out of stock, the "Add to Cart" button changes to "Out of Stock" and becomes disabled.

##  🔍 Filter and Search
* Users can quickly search for products with real-time updates as they type, providing instant feedback.
* Products can be filtered by price (highest to lowest, lowest to highest) and by earliest arrivals.
* Both search and filter selections persist across categories and even after a page reload, so users don’t lose progress.
* Clicking on a product image opens a detailed view, including options to Add the item to a wishlist, Share the product, Download the product image or Chat directly with the seller via WhatsApp

## ⚖️ Product Comparison
* Users can compare two products side-by-side, making it easier to decide between similar items.
* A notification appears if the user tries to select more than two products for comparison.
* Selected products stay saved across categories and page reloads.
* The comparison table is dynamically generated with details from the selected products.L me know if you'd like me to format the comparison table explanation more technically or visually.

## 🔹 Technologies Used
* React (with Vite)
* CSS for styling
* LocalStorage (for handling product details)
* GSAP (For animation)

## 🚀 Challenges & Solutions
### 1️⃣ Visual Cue when an item is added to cart
* **Problem:** when an item is added to cart especially on desktop screen, users may not realize an item has been added
* **Solution:** Used GSAP animation to clone the image of the item added to cart and gave it a visual cue of it added to cart

### 2️⃣ Performance Optimization
* **Problem:** Product images takes longer to load when between categories. 
* **Solution:** Compressed image snd used GSAP skeleton animation to switch smoothly


## 🚀 Challenges & Solutions
###  1️⃣ Visual Cue When Adding to Cart
* **Challenge:** On larger screens, users might not immediately notice when an item is added to the cart.
* **Solution:** Implemented a GSAP animation that clones the product image and animates it into the cart area, providing a clear and satisfying visual cue.

### 2️⃣ Performance Optimization
* **Challenge:** Product images were slow to load when switching between categories, affecting both user experience & user interface
* **Solution:** Optimized images for faster load times and added a smooth GSAP-powered skeleton animation to create a seamless transition between content.


# 📧 Developed by [Michael Enebeli](https://www.michaelenebeli.com.ng/)
