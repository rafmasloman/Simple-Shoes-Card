import { Component, Fragment } from "react";
import shoesImg from "../Card/nikeshoes.png";
import shoesImg2 from "../Card/nike blue.png";
import shoesImg3 from "../Card/nike white.png";
import "./css/Card.css";
import Cart from "../Cart/Cart";

class Card extends Component {
  state = {
    counter: {
      count: 0,
    },
    shoes: [
      {
        id: 1,
        name: "Nike Joyride Run Flyknit",
        price: 100,
        size: [42, 43, 44],
        img: shoesImg,
      },
      {
        id: 2,
        name: "Nike Redzie and Black",
        price: 250,
        size: [41, 42, 44],
        img: shoesImg2,
      },
      {
        id: 3,
        name: "Nike Shoes Ultimate",
        price: 50,
        size: [39, 42, 43],
        img: shoesImg3,
      },
    ],
  };

  counterChange = () => {
    this.setState({
      counter: {
        count: this.state.counter.count + 1,
      },
    });
  };

  getId = () => {
    this.state.shoes.map((shoesId) => console.log(shoesId.id));
    // console.log("ini Id");
  };

  render() {
    return (
      <Fragment>
        <Cart getCounter={this.state.counter} shoesId={this.getId} />
        <section className="shoes-container">
          {this.state.shoes.map((shoes) => (
            <div className="shoes-card" key={shoes.id}>
              <div className="img-field">
                <img src={shoes.img} alt="" className="shoes-img" />
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
                  <button
                    className="shoes-btn active"
                    onClick={this.counterChange}
                  >
                    Add To cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </Fragment>
    );
  }
}

console.log(typeof Card);
export default Card;
