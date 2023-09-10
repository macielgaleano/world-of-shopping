import React from "react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { CartProvider } from "../../context/cart";;
import { CART, CART_CONTEXT } from "../../mocks/cart";
import wordings from "../../wordings"
import ProductCard from ".";

const basicProps = CART["1"];

const renderCardProduct = () =>(
  render(
    <CartProvider value={CART_CONTEXT}>
      <ProductCard { ...basicProps } />
    </CartProvider>
    , { wrapper: BrowserRouter }
  )
);

describe('ProductCard />', () => {
  test('renders ProductCard correctly', () => {
    renderCardProduct();
  
    const titleElement = screen.getByText(basicProps.title);
    expect(titleElement).toBeInTheDocument();
  });

  test('when clicking the add button executes the function to add to the context', () => {
    renderCardProduct();
  
    const addButton = screen.getByRole('button', { name: wordings.cart.addButton });
    userEvent.click(addButton);
  
    expect(CART_CONTEXT.addProductToCart).toHaveBeenCalled()
  });
  
  test('when clicking the title executes redirect', () => {
    renderCardProduct();
  
    const titleLink = screen.getByRole('link', { name: basicProps.title });
    expect(titleLink.getAttribute('href')).toBe(`/product/${basicProps.id}`);
  });
});
