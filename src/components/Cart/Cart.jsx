import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./css/Cart.css";
class Cart extends Component {
  render() {
    return (
      <section className="cart-container">
        <div className="cart-hero">
          {/* {this.props.id()} */}
          <h1>{this.props.counter.count}</h1>
          <a onClick={this.props.shoesId}>
            <FontAwesomeIcon icon={faCartPlus} className="font-awesome-icon" />
          </a>
        </div>
      </section>
    );
  }
}

export default Cart;
