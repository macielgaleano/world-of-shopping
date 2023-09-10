import React, { useContext, useEffect, useMemo, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import CartItem from "../cartItem";
import { CartContext } from "../../../context/cart/CartContex";
import { showWithPoints } from "../../../utils/numbers";
import wordings from "../../../wordings";
import classNames from "classnames";
import "./styles.scss";

const CartCollapse = () => {
  const { cart } = useContext(CartContext);
  const { navbar, cart: { total, finishOrder } } = wordings;

  const [isOpen, setIsOpen] = useState(false);
  const [alert, setAlert] = useState(false)

  const itemsCart = useMemo(() => Object.values(cart), [cart]);

  const calculateTotalPrice = itemsCart.reduce((acc, current) => (
    acc + (current.price * current.quantity)
  ), 0);

  const totalItems = itemsCart.reduce((acc, current) => acc + current.quantity, 0);

  const handleClick = () => setIsOpen(!isOpen);

  useEffect(() => {
    if(itemsCart) {
      setAlert(true)
      setTimeout(() => {
        setAlert(false)
      }, 300);
    }
  }, [itemsCart])
  

  return (
    <div className="cart">
      <button
        type="button"
        className="cart__open-button"
        aria-label="Open Cart"
        onClick={handleClick}
        aria-expanded={isOpen}
      >
        <FiShoppingCart alt={navbar.cart} className="cart__open-button-icon"/>
        <span className={
          classNames(
            "cart__open-button-badge",
            { "active": alert }
          )
        }>
          {totalItems}
        </span>
      </button>

      <div
        role="dialog"
        className={
          classNames(
            "cart__collapse",
            { "cart__collapse--open": isOpen },
          )
        }
        open={isOpen}
        aria-labelledby="cart-collapse-title"
      >
        <div className="cart-content">
          <button
            className="cart__close-button"
            onClick={handleClick}
            aria-label="Close Cart"
          >x</button>
          <h3 className="cart-content__title">{navbar.cart}</h3>   

          <div className="cart-content__items">
            { 
              Object.values(cart).map(item => (
                <CartItem {...item} key={item.id} />
              ))
            }
          </div>

          <div className="cart-content__footer">
            <div className="cart-content__footer-price">
              <p className="cart-content__footer-price-text">{total}</p>
              <p className="cart-content__footer-price-quantity" data-testid="final-cart-price">{showWithPoints(calculateTotalPrice)}</p>
            </div>
            <button className="cart-content__footer-order-button">{finishOrder}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCollapse;
