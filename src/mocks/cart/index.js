export const CART = {
  "1": {
    id: "1",
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    image: "http://imag-test-1.jpeg",
    price: 109.95,
    quantity: 1,
  },
  "2": {
    id: "2",
    title: "Mens Casual Premium Slim Fit T-Shirts",
    image: "http://imag-test-2.jpeg",
    price: 22.3,
    quantity: 1,
  },
  "3": {
    id: "3",
    title: "Mens Cotton Jacket",
    image: "http://imag-test-3.jpeg",
    price: 55.99,
    quantity: 2,
  },
  "4": {
    id: "4",
    title: "Mens Casual Slim Fit",
    image: "http://imag-test-4.jpeg",
    price: 15.99,
    quantity: 1,
  },
  "5": {
    id: "5",
    title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    image: "http://imag-test-5.jpeg",
    price: 695,
    quantity: 3,
  },
};

export const CART_CONTEXT = {
  addProductToCart: jest.fn((props) => props),
  removeCartProduct: jest.fn((props) => props),
  cart: CART,
};
