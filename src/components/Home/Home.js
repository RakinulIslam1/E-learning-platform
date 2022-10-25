import React from 'react';
import './Home.css';
import Lottie from 'lottie-react'
import reader from '../../reading-boy.json'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
      <div className="home">
        <div>
          <h1 className="text-4xl text-black font-bold mb-3">
            ❝ Let's achive our goal ❞
          </h1>
          <h2 className="text-2xl text-black font-semibold">
            An online education can serve two goals. For students lucky
            enough to have access to great teachers, blended learning can mean
            even better outcomes at the same or lower cost. And for the millions
            here and abroad who lack access to good, in-person education, online
            learning can open doors that would otherwise remain closed.
          </h2>
          <Link to="/courses">
            <button className="btn btn-wide bg-slate-800 my-5 text-white">
              Visit our courses
            </button>
          </Link>
        </div>
        <div>
          <Lottie
            className="lottie "
            animationData={reader}
            loop={true}
          ></Lottie>
        </div>
      </div>
    );
};

export default Home;