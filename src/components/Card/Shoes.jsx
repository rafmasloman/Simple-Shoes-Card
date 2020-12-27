import { Component, Fragment } from "react";
import Cart from "../Cart/Cart";

class Shoes extends Component {
  state = {
    counter: 0,
  };

  handleChange = () => {
    this.setState(
      {
        counter: this.state.counter + 1,
      },
      () => {
        this.props.counter(this.state.counter);
      }
    );
  };

  render() {
    const { name, price, image, size } = this.props;
    return (
      <Fragment>
        <div className="shoes-card">
          <div className="img-field">
            <img src={image} alt="" className="shoes-img" />
          </div>
          <div className="shoes-description">
            <div className="shoes-hero">
              <h1 className="shoes-name">{name}</h1>
              <span className="shoes-price">${price}</span>
            </div>
            <div className="shoes-size-container">
              <p>Size</p>
              {size.map((size, sizeId) => (
                <a className="shoes-size" key={sizeId + 1} href="#">
                  {size}
                </a>
              ))}
            </div>
            <div className="shoes-footer">
              <button className="shoes-btn active" onClick={this.handleChange}>
                Add To cart
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Shoes;
