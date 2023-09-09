import React, { useContext, useMemo, useState } from "react"
import { useLoaderData } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";
import StarRating from "../starRating";
import { CartContext } from "../../context/cart";
import { MAX_QUANTITY_ITEMS } from "../../constants/cart";
import { showWithPoints } from "../../utils/numbers";
import wordings from "../../wordings";
import "./styles.scss";
import classNames from "classnames";

const ProductDetail = () => {
  const productDetail = useLoaderData();

  const { addProductToCart } = useContext(CartContext);
  const { product: { addButtom, quantity, description: descriptionLabel, assessment, price: priceLabel } } = wordings;
  const { id, title, price, description, image, rating } = productDetail;

  const [countItem, setCountItem] = useState(1);
  const disableRemoveButon = useMemo(() => countItem < 2, [countItem]);
  const disableAddButon = useMemo(() => countItem >= MAX_QUANTITY_ITEMS , [countItem]);
  const disableCartButon = useMemo(() => countItem === MAX_QUANTITY_ITEMS , [countItem]);

  const addCountItem = () => {
    if (disableAddButon) return;
    setCountItem(countItem + 1);
  };

  const substraCountItem = () => {
    if (disableRemoveButon) return;
    setCountItem(countItem - 1);
  };

  const addItemCart = () => addProductToCart({ id, title, price, image, quantity: countItem });

  return (
    <main className="product-detail">
      <img src={image} alt={title} className="product-detail__image" />
      <div className="product-detail__information">
        <h1 className="product-detail__information-title">{title}</h1>
        <div className="product-detail__information-price-rating">
          <p className="product-detail__information-price">{priceLabel} {showWithPoints(price)}</p>
          <StarRating title={assessment} {...rating} className="product-detail__information-rating"/>
        </div>
        <div className="product-detail__information-cart">
          <div className="product-detail__information-cart__units">
            <p className="product-detail__information-cart__units-quantity">{quantity}</p>
            <div className="product-detail__information-cart__units-counter">
              <button
                onClick={substraCountItem}
                disabled={disableRemoveButon}
                className={
                  classNames(
                    "product-detail__information-cart__units-counter-button",
                    { "disabled": disableRemoveButon }
                  )
                }
              >
                  -
              </button>
              <input type="number" min="0" max="6" className="product-detail__information-cart__units-counter-input" value={countItem} readOnly />
              <button
                onClick={addCountItem}
                disabled={disableAddButon}
                className={
                  classNames(
                    "product-detail__information-cart__units-counter-button",
                    { "disabled": disableAddButon }
                  )
                }
              >
                +
              </button>
            </div>
          </div>
          <button
            onClick={addItemCart}
            disabled={disableCartButon}
            className={
              classNames(
                "product-detail__information-cart-button",
                { "disabled": disableCartButon }
              )
            }
          >
            {addButtom} <RiShoppingCartLine className="product-detail__information-cart-button-icon"/>
          </button>
        </div>
        <div className="product-detail__information-description">
          <h2 className="product-detail__information-description-title">{descriptionLabel}</h2>
          <p className="product-detail__information-description-text">{description}</p>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
