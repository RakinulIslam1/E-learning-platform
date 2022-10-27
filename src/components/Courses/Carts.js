import React from 'react';
import { Link } from 'react-router-dom';
import './cart.css'

const Carts = ({ detail }) => {
    const {image, title} = detail
  return (
    <div className="cart">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions justify-center m-2">
            <Link to="/sideNav">
              <button className="btn btn-primary">Get premium access</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;