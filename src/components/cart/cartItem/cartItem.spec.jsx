import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { CartProvider } from "../../../context/cart";
import { CART, CART_CONTEXT } from "../../../mocks/cart";
import CartItem from ".";

const basicProps = CART["1"];

const renderCartItem = () => (
  render(
    <CartProvider value={CART_CONTEXT}>
      <CartItem {...basicProps} />
    </CartProvider>
  )
);

describe('<CartItem />', () => {
  test('basic render', () => {
    renderCartItem();
  });

  test('shows the original price and the final one', () => {
    renderCartItem();

    const priceText = screen.getByTestId('price');
    expect(priceText.textContent).toContain("109,95");
  });

  test('when the delete button is clicked, it executes the update of the state', () => {
    renderCartItem();

    const removeBtn = screen.getByRole('button');
    userEvent.click(removeBtn);

    expect(CART_CONTEXT.removeCartProduct).toHaveBeenCalledWith(basicProps.id);
  });
});
