import React from "react";

class Checkout extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    creditcard: "",
    zipcode: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {total} = this.props;
    const { firstname, lastname, email, creditcard, zipcode } = this.state;
    if (!firstname || !lastname || !email) {
      window.alert("Input is not valid");
    } else if (creditcard.length !== 16) {
      window.alert("Credit card number is not valid");
    } else if (zipcode.length !== 5) {
      window.alert("Zip code is not valid");
    } else {
      window.alert(`Purchase complete
                    Total: $${total.toFixed(2)}`);
    }
  };

  render() {
      console.log(this.state)
    const { firstname, lastname, email, creditcard, zipcode } = this.state;
    return (
      <section className="checkout">
        <h3>Checkout</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="firstname">First Name</label>
          <input
            id="firstname"
            name="firstname"
            onChange={this.handleChange}
            value={firstname}
          />
          <br></br>
          <label htmlFor="lastname">Last Name</label>
          <input
            id="lastname"
            name="lastname"
            onChange={this.handleChange}
            value={lastname}
          />
          <br></br>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            onChange={this.handleChange}
            value={email}
          />
          <br></br>
          <label htmlFor="creditcard">Credit Card</label>
          <input
            id="creditcard"
            name="creditcard"
            onChange={this.handleChange}
            value={creditcard}
          />
          <br></br>
          <label htmlFor="zipcode">Zip Code</label>
          <input
            id="zipcode"
            name="zipcode"
            onChange={this.handleChange}
            value={zipcode}
          />
          <br></br>
          <button>Buy Now</button>
        </form>
      </section>
    );
  }
}

export default Checkout;
