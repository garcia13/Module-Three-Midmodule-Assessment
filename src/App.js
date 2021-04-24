import "./App.css";
import "./components/Products";
import Products from "./components/Products";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart"
import React from "react";

class App extends React.Component {
  state = { cart: [] };

  addToCart = (product) => {
    this.setState((prevState) => {
      return { cart: [product, ...prevState.cart] };
    });
  };

  render() {
    const { cart } = this.state;
    let subtotal = 0;
    let tax = 0;
    let total = 0;
    cart.forEach(product => (subtotal += product.price));
    tax = subtotal * .05;
    total = subtotal + tax

    console.log(this.state)
    return (
      <div className="main">
        <Products addToCart={this.addToCart} />
        <Checkout items={cart} total={total} />
        <Cart cart= {cart} subtotal={subtotal} tax={tax} total={total} />
      </div>
    );
  }
}

export default App;
