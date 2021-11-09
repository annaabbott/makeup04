import React, { createContext, useReducer } from "react";

const initialState = { items: [], totalAmount: 0, addToCartHandler: item => {}, removeFromCartHandler: id => {} };

const CartContext = createContext(initialState);

const cartReducer = (state, action) => {
    return initialState;
};

export function CartProvider(props) {
    const [state, dispatchCartAction] = useReducer(cartReducer, initialState); // eslint-disable-line
    const items= [];
    const totalAmount= 0;
   
    const addToCartHandler = item => {};

    const removeFromCartHandler = id => {};

    return (
        <CartContext.Provider value={{ items, totalAmount, addToCartHandler, removeFromCartHandler }}>
          {props.children}
        </CartContext.Provider>
      );
};

export default CartContext;