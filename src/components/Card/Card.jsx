import { Component, Fragment } from "react";
import shoesImg from "../Card/nikeshoes.png"
import "./Card.css";

class Card extends Component{
    state = {
        shoes : [
            {
                id : 1,
                name : 'Nike Joyride Run Flyknit',
                size : [42,43,44]
            },
            {
                id : 2,
                name : 'Nike Air Jordan',
                size : [41,42,44]
            },
            {
                id : 3,
                name : 'Nike Apa saja',
                size : [39,42,43]
            }
        ]
    }

    render(){
        return(
            
            this.state.shoes.map((shoes) => (
            <div className="shoes-card" key={shoes.id}>
                <div className="img-field">
                    <img src={shoesImg} alt="" className="shoes-img"/>
                </div>
                <div className="shoes-description">
                    <h1 className="shoes-name">{shoes.name}</h1>
                    <div className="shoes-size-container">
                            {shoes.size.map((size,id)=>(
                                <a className="shoes-size" key={id}>{size}</a>
                            ))}
                        
                    </div>
                    <button className="shoes-btn">Add To cart</button>
                </div>
            </div>
            ))
        )
    }
}

export default Card;