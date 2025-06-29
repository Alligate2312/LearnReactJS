import React, { useState } from "react";
import "./ProductCard.css";

function ProductCard({
  name,
  price,
  description,
  image,
  category,
  onAddToCart,
  onViewDetails,
}) {
  const [count, setCount] = useState(1);
  const [favorite, setFavorite] = useState(false);
  let isDisable = count == 1 ? true : false;
  let btnName = count == 1 ? "product-button-disabled" : "";

  const onToggleFavorite = (name) => {
    if (!favorite) {
      alert(`Add ${name} to favorites`);
    } else {
      alert(`Remove ${name} to favorites`);
    }
    setFavorite(!favorite);
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3 onClick={() => onViewDetails(name)}>{name}</h3>
      <p>{category}</p>
      <p>{price}</p>
      <p>{description}</p>
      <div className="product-quantity">
        <button
          className={btnName}
          disabled={isDisable}
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <button onClick={() => onAddToCart(name)}>Add to Cart</button>
      <button className="favorite" onClick={() => onToggleFavorite(name)}>
        {favorite ? "❤️️" : "🤍"}
      </button>
    </div>
  );
}

export default ProductCard;
