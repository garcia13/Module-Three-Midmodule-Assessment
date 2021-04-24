import React from "react";
import productData from "../data/productData";
import Inventory from "./Inventory";
import "../styles/Products.css";

const Products = ({ addToCart }) => {
  const products = productData.map((product) => {
    return (
      <Inventory key={product.id} product={product} addToCart={addToCart} />
    );
  });

  return (
    <section>
      <h3>My Garage Sale</h3>
      <ul className="Products">{products}</ul>
    </section>
  );
};

export default Products;
