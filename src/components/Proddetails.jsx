import React from "react";

function ProductDetails({ product, onClose }) {
  return (
    <div className="product-details-overlay">
      <div className="product-details">
        <div className="Prod_title">
        <h2 className="product-title">{product.title}</h2>
        {/* Close Button */}
        <button className="close-button" onClick={onClose}>
          &times;
        </button>

        </div>
      
        {/* Product Content */}
        
        <img className="product-image" src={product.imgSrc} alt={product.title} />
        <p className="product-price"><strong>Price:</strong> Rs.{product.price}</p>
        <p className="product-size"><strong>Size:</strong> {product.size}</p>
        <p className="product-color"><strong>Color:</strong> {product.color}</p>
        <p className="product-description">
          <strong>Description:</strong> {product.description}
        </p>

        {/* Action Buttons */}
        <div className="product-buttons">
          <button className="add-to-cart-button">Add to Cart</button>
          <button className="buy-now-button">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
