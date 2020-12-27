import { Component } from "react";

class Shoes extends Component {
  counterChange = () => {
    this.setState({
      counter: {
        count: this.props.counter + 1,
      },
    });
  };

  render() {
    const { id, name, price, image, size } = this.props;
    return (
      <div className="shoes-card" key={id}>
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
            {this.props.size.map((size) => (
              <a className="shoes-size" key={id} href="#">
                {size}
              </a>
            ))}
          </div>
          <div className="shoes-footer">
            <button className="shoes-btn active" onClick={this.counterChange}>
              Add To cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Shoes;
