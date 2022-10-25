import React from 'react';
import './Home.css';
import Lottie from 'lottie-react'
import reader from '../../reading-boy.json'
const Home = () => {
    return (
      <div className="home">
        <div>
          <h2 className='text-2xl'>
            An online class is a course conducted over the Internet. They are
            generally conducted through a learning management system, in which
            students can view their course syllabus and academic progress, as
            well as communicate with fellow students and their course
            instructor.
          </h2>
        </div>
        <div>
          <Lottie
            className="lottie"
            animationData={reader}
            loop={true}
          ></Lottie>
        </div>
      </div>
    );
};

export default Home;