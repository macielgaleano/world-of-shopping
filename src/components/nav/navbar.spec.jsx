import React from "react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { CartProvider } from "../../context/cart";
import { CART_CONTEXT } from "../../mocks/cart";
import Navbar from ".";

const renderNavBar = () => (
  render(
    <CartProvider value={CART_CONTEXT}>
      <Navbar />
    </CartProvider>
    , { wrapper: BrowserRouter }
  )
);

describe('<Navbar />', () => {
  test('basic render', () => {
    renderNavBar();

    const navBarElement = screen.getByRole('navigation');
    expect(navBarElement).toBeInTheDocument();
  });

  test('should open and close the cart when clicking the cart button', () => {
    renderNavBar();

    const cartButton = screen.getByRole('button', { name: 'Open Cart' });
    const cartCollapse = screen.getByRole('dialog');

    const ppenCartClass = 'cart__collapse--open';

    expect(cartCollapse.classList.contains(ppenCartClass)).toBeFalsy();

    act(() => userEvent.click(cartButton));
    expect(cartCollapse.classList.contains(ppenCartClass)).toBeTruthy();

    act(() => userEvent.click(cartButton));
    expect(cartCollapse.classList.contains(ppenCartClass)).toBeFalsy();
  });
});
