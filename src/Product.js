import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
// import PropTypes from "prop-types";

function Product({ id, title, image, price, rating }) {

  const [{ basket }, dispatch] = useStateValue();
  console.log('This is the Basket >>>', basket); // pushing into the basket
  const addToBasket = () => {
    // dispatch the item into data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
      },
    });
  };
  // Product.propTypes = {
  //   id: PropTypes.string.isRequired,
  //   title: PropTypes.string.isRequired,
  //   image: PropTypes.string.isRequired,
  //   price: PropTypes.number.isRequired,
  //   rating: PropTypes.number.isRequired,
  // };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="product__rating">
        <div className="star__container">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))
          }
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;


// {Array(rating)
//   .fill()
//   .map((_, i) => (
//     <p>🌟</p>
//   ))}