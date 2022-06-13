import React from 'react'
import "./Style.css";

export default function Gallery(props) {
  return (
    <div>
        <div id="101" className="product">
        <img src={props.img} alt="" />
        <h3 className="title">{props.name}</h3>
        <span>Price: $ ${props.price}</span>
        <button className="add-to-cart" >Add To Cart</button>
    </div>
    </div>
  )
}
