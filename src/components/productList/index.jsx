import React from "react";
import ProductCard from "../productCard";
import './styles.scss';

const ProductList = ({ title, productList }) => (
  <section className="product-list">
    <h2 className="product-list__title">{title}</h2>
    <div className="product-list__items">
      {
        productList.map(product => (
          <ProductCard {...product} key={product.title} />
        ))
      }
    </div>
  </section>
);

export default ProductList;
