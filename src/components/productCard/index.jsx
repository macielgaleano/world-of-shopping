import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart";
import wordings from "../../wordings";
import "./styles.scss";

const ProductCard = ({ image, title, id, price }) => {
  const { addProductToCart, cart } = useContext(CartContext);
  
  const calculateQuantity = cart[id]?.quantity || 0;

  const addItemCart = () => {
    addProductToCart({
      id,
      title,
      image,
      price,
      quantity: calculateQuantity + 1
    })
  };

  return (
    <article className="product-card" data-testid="product">
      <img src={image} alt={title} className="product-card__image" />
      <Link to={`product/${id}`} className="product-card__title">
        <h3>{title}</h3>
      </Link>
      <p className="product-card__price">{wordings.product.price} {price}</p>
      <button
        onClick={addItemCart}
        className="product-card__button"
      >
        {wordings.cart.addButton}
      </button>
    </article>
  );
};

export default ProductCard;
