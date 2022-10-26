import React from 'react';
import './cart.css'

const Carts = ({ detail }) => {
    const {image, title} = detail
  return (
    <div className="cart">
      {/* <h1>Course carts</h1> */}
      {/* <h1>{detail.title}</h1> */}
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
          <div className="card-actions justify-center m-2">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;