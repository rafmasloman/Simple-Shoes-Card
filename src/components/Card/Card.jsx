import { Component, Fragment } from "react";
import shoesImg from "../Card/nikeshoes.png";
import "./css/Card.css";

class Card extends Component {
  state = {
    shoes: [
      {
        id: 1,
        name: "Nike Joyride Run Flyknit",
        price: 100,
        size: [42, 43, 44],
      },
      {
        id: 2,
        name: "Nike Air Jordan",
        price: 250,
        size: [41, 42, 44],
      },
      {
        id: 3,
        name: "Nike Shoes Ultimate",
        price: 50,
        size: [39, 42, 43],
      },
    ],
  };

  render() {
    return this.state.shoes.map((shoes) => (
      <div className="shoes-card" key={shoes.id}>
        <div className="img-field">
          <img src={shoesImg} alt="" className="shoes-img" />
        </div>
        <div className="shoes-description">
          <div className="shoes-hero">
            <h1 className="shoes-name">{shoes.name}</h1>
            <span className="shoes-price">${shoes.price}</span>
          </div>
          <div className="shoes-size-container">
            <p>Size</p>
            {shoes.size.map((size, id) => (
              <a className="shoes-size" key={id} href="#">
                {size}
              </a>
            ))}
          </div>
          <div className="shoes-footer">
            <button className="shoes-btn">Add To cart</button>
          </div>
        </div>
      </div>
    ));
  }
}

export default Card;
