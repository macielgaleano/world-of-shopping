import React, { useEffect, useReducer } from 'react';
import { CartContext, cartReducer } from '.';
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';
import {
  CART_KEY,
  LOAD_CART_FROM_STORAGE,
  REMOVE_PRODUCT_IN_CART,
  UPDATE_PRODUCTS_IN_CART,
} from '../../constants/cart';

const CART_INITIAL_STATE = {
  isLoaded: false,
  cart: {},
}

export const CartProvider = ({ children, value = {} }) => {
  const [state, dispatch] = useReducer( cartReducer , CART_INITIAL_STATE );

  useEffect(() => {
    try {
      const storageProducts = getLocalStorage(CART_KEY);
      dispatch({ type: LOAD_CART_FROM_STORAGE, payload: storageProducts });
    } catch (error) {
      dispatch({ type: LOAD_CART_FROM_STORAGE, payload: {} });
    }
  }, []);
  
  useEffect(() => {
    setLocalStorage(CART_KEY, state.cart)
  }, [state.cart]);

  const addProductToCart = ( product ) => {
    dispatch({ type: UPDATE_PRODUCTS_IN_CART, payload: { ...product } });
  }

  const removeCartProduct = ( id ) => {
    const newState = { ...state.cart };
    delete newState[id]

    dispatch({ type: REMOVE_PRODUCT_IN_CART, payload: newState });
  }

  return (
    <CartContext.Provider value={{
      ...state,
      addProductToCart,
      removeCartProduct,
      ...value,
    }}>
      { children }
    </CartContext.Provider>
  )
};
