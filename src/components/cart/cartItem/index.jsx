import React, { useContext } from "react";
import { GoTrash } from "react-icons/go";
import { showWithPoints } from "../../../utils/numbers";
import { CartContext } from "../../../context/cart/CartContex";
import "./styles.scss";

const CartItem = ({ image, title, price, quantity, id }) => {
  const { removeCartProduct } = useContext(CartContext);
  const priceTotalByItem = price * quantity;

  const handleRemoveItem = () => removeCartProduct(id);

  return (
    <article data-testid="cart-item" className="cart-item">
      
      <button
        data-testid="btn-remove"
        onClick={handleRemoveItem}
        className="cart-item__remover-button"
        aria-label={`Remove ${title} from cart`}
      >
        <GoTrash />
      </button>

      <div className="cart-item__main">
        <img src={image} alt={title}  className="cart-item__main-image" />
        <div className="cart-item__main-info">
          <p className="cart-item__main-info-title">{title}</p>
          <div className="cart-item__main-info-price">
            <p className="cart-item__main-info-price-per-unit">{showWithPoints(price)} x {quantity}</p>
            <p className="cart-item__main-info-price-total" data-testid="price">{showWithPoints(priceTotalByItem)}</p>
          </div>
        </div>
      </div>

    </article>
  );
};

export default CartItem;
