import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductList from "../productList";
import "./styles.scss";

const PageMain = () => {
  const productByCategory = useLoaderData();

  return (
    <div className="page-main">
      {
        Object.keys(productByCategory).map(category => (
          <ProductList
            key={category}
            title={category}
            productList={productByCategory[category]}
          />
        ))
      }
    </div>
  );
}

export default PageMain