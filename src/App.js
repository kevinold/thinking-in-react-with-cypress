import React, { useReducer } from "react";
import FilterableProductTable from "./components/FilterableProductTable";
import "./App.css";

/* prettier-ignore */
const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

const initialState = {
  products: PRODUCTS
};

const reducer = (state, action) => {
  switch (action) {
    default:
      return state;
  }
};

const App = () => {
  const [state] = useReducer(reducer, initialState);
  if (window.Cypress) {
    window.__app__ = state;
  }
  return <FilterableProductTable products={state.products} />;
};

export default App;
