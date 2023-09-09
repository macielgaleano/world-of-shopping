import React from "react";
import { useLoaderData } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { PRODUCT_DETAIL } from "../../mocks/productDetail";
import { CART, CART_CONTEXT } from "../../mocks/cart";
import { CartProvider } from "../../context/cart";
import wordings from "../../wordings";
import ProductDetail from ".";

jest.mock('react-router-dom', () => ({
  useLoaderData: jest.fn()
}));

beforeEach(() => (useLoaderData).mockReturnValue(PRODUCT_DETAIL));
afterEach(() => jest.clearAllMocks());

const renderProductDetail = () => (
  render(
    <CartProvider value={CART_CONTEXT}>
      <ProductDetail />
    </CartProvider>
  )
);

describe('<ProductDetail />', () => {
  test('correctly render', () => {
    renderProductDetail();

    expect(useLoaderData).toHaveBeenCalled();
  });

  test('renders product details correctly', () => {
    renderProductDetail();

    const titleElement = screen.getByText(PRODUCT_DETAIL.title);
    expect(titleElement).toBeInTheDocument();

    const addButton = screen.getByText(wordings.product.addButtom);
    expect(addButton).toBeInTheDocument();
  });

  test('changes quantity correctly when increase and decrease buttons are clicked', async () => {
    renderProductDetail();
  
    const quantityInput = screen.getByRole('spinbutton');
    expect(quantityInput.value).toBe('1');

    const increaseButton = screen.getByRole('button', { name: '+' });
    const decreaseButton = screen.getByRole('button', { name: '-' });
  
    act(() => userEvent.click(increaseButton));
    act(() => userEvent.click(increaseButton));
    act(() => userEvent.click(increaseButton));
    act(() => userEvent.click(decreaseButton));

    const addButton = screen.getByText(wordings.product.addButtom);
    act(() => { userEvent.click(addButton) });

    expect(CART_CONTEXT.addProductToCart).toBeCalledWith({...CART["1"], quantity: 3 });
  });
});
