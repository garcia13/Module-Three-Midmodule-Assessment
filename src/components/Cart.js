import React from "react";

const Cart = ({ cart, subtotal, tax, total }) => {
    return (
        <section>
            <h3>Cart</h3>
                <h5>Subtotal: ${subtotal.toFixed(2)}</h5>
                <h5>Tax: ${tax.toFixed(2)}</h5>
                <h5>Total: ${total.toFixed(2)}</h5>
            <ul>
                {cart.map((product) => {
                    const {name, price, id} = product;
                    return (
                        <li key={id}>
                            {name}: ${price.toFixed(2)}
                        </li>
                    );
                })}
            </ul>
        </section>
    )
}

export default Cart;