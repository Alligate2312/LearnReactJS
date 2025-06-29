import React from "react";
import { useReducer } from "react";

const PRODUCTS = [
  { id: 1, name: "Laptop", price: 999.99, category: "electronics" },
  { id: 2, name: "Headphones", price: 199.99, category: "electronics" },
  { id: 3, name: "Coffee Mug", price: 12.99, category: "home" },
  { id: 4, name: "Notebook", price: 4.99, category: "office" },
  { id: 5, name: "Wireless Mouse", price: 29.99, category: "electronics" },
];

function ShoppingCartLab() {
  // TODO: Define initial state
  const initialCartState = {
    // What should go here?
    cardItems: [],
    subTotal: 0,
    discount: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  };

  const ADD_ITEM = "ADD_ITEM";
  const REMOVE_ITEM = "REMOVE_ITEM";
  const UPDATE_QUANTITY = "UPDATE_QUANTITY";
  const APPLY_DISCOUNT = "APPLY_DISCOUNT";
  const CLEAR_CART = "CLEAR_CART";
  const CALCULATE_TOTALS = "CALCULATE_TOTALS";

  // TODO: Define cart reducer
  const cartReducer = (state, action) => {
    // What should go here?
    switch (action.type) {
      case ADD_ITEM: {
        const newItems = [...state.item, action.item];
        const subTotal = newItems.reduce((total, cardItems) => {
          total + cardItems.price * cardItems.quantity;
        }, 0);
        const shipping = 0; //free ship
        const tax = subTotal * 0.1; //10% tax
        const total = subTotal + shipping + tax - state.discount;
        return {
          ...state,
          cardItems: newItems,
          subTotal: subTotal,
          shipping: shipping,
          tax: tax,
          total: total,
        };
      }
      case REMOVE_ITEM: {
        return;
      }
      case UPDATE_QUANTITY: {
        return;
      }
      case APPLY_DISCOUNT: {
        return;
      }
      case CLEAR_CART: {
        return;
      }
      case CALCULATE_TOTALS: {
        return;
      }
      default:
        return state;
    }
  };

  function ShoppingCartLab() {
    // TODO: Use useReducer
    const { cartState, dispatch } = useReducer(cartReducer, initialCartState);

    const addItem = (item) => {
      dispatch({ type: ADD_ITEM, item });
    };

    return (
      <div className="shopping-cart-lab">
        <h2>Shopping Cart Manager</h2>
        {/* TODO: Add cart interface */}
      </div>
    );
  }
}

export default ShoppingCartLab;
