import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { CartProvider } from "../../../context/cart";
import { CART, CART_CONTEXT } from "../../../mocks/cart";
import CartCollapse from ".";

const renderCartCollapse = () => (
  render(
    <CartProvider value={CART_CONTEXT}>
      <CartCollapse />
    </CartProvider>
  )
);

describe('<CartCollapse />', () => {
  test('basic render', () => {
    renderCartCollapse();
  });

  test('renders an item per box key of the cart object', () => {
    renderCartCollapse();
  
    const totalItems = Object.keys(CART).length;

    const itemsCart = screen.getAllByTestId("cart-item");
    expect(itemsCart).toHaveLength(totalItems);
  });

  test('shows the total cost of all items', () => {
    renderCartCollapse();

    const finalPrice = screen.getByTestId("final-cart-price");
    expect(finalPrice.textContent).toContain("2.345,22");
  });

  test('when the delete button is clicked, it executes the update of the state', async() => {
    renderCartCollapse();
  
    const totalItems = Object.keys(CART).length;

    const cartItems = screen.getAllByTestId('cart-item');
    expect(cartItems).toHaveLength(totalItems);

    const removeBtn = screen.getAllByTestId('btn-remove')[0];
    userEvent.click(removeBtn);

    expect(CART_CONTEXT.removeCartProduct).toHaveBeenCalled();
  });
});
