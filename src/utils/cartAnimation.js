export const handleFlyingImage = (event, product, category, onAddToCart) => {
    const productImage = event.target.closest(".product-card").querySelector("img");
    const cartIcon = document.querySelector(".cart-icon i");
  
    if (!productImage || !cartIcon) return;
  
    const flyingImage = productImage.cloneNode(true);
    flyingImage.classList.add("flying-image");
    document.body.appendChild(flyingImage);
  
    const productRect = productImage.getBoundingClientRect();
    const cartRect = cartIcon.getBoundingClientRect();
  
    flyingImage.style.position = "fixed";
    flyingImage.style.left = `${productRect.left}px`;
    flyingImage.style.top = `${productRect.top}px`;
    flyingImage.style.width = `${productRect.width}px`;
    flyingImage.style.height = `${productRect.height}px`;
  
    const offsetX = cartRect.left + cartRect.width / 2 - productRect.left - productRect.width / 2;
    const offsetY = cartRect.top + cartRect.height / 2 - productRect.top - productRect.height / 2;
  
    setTimeout(() => {
      flyingImage.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(0.2)`;
      flyingImage.style.opacity = "0";
    }, 50);
  
    setTimeout(() => {
      document.body.removeChild(flyingImage);
      onAddToCart({ ...product, category });
    }, 1000);
  };
  