import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
class Cart extends Component {
  render() {
    return (
      <section className="cart-container">
        {console.log(this.props.getCounter.count)}
        <div className="cart-container">
          <FontAwesomeIcon icon={faCartArrowDown} />
          <h1>{this.props.getCounter.count}</h1>
        </div>
      </section>
    );
  }
}

export default Cart;
