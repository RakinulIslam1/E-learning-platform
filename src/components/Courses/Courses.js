import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carts from './Carts';
import './Courses.css';

const Courses = () => {
  const [course, setCourse] = useState([])

  useEffect( ()=>{
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) =>setCourse(data));
  },[])
    return (
      <div className="display">
        <div className="text-white">
          <h1 className="text-black text-3xl font-semibold">Click below to see course details</h1>
          <div>
            {course.map((c) => (
              <p className="my-6 navs  bg-slate-800" key={c.id}>
                <Link to={`/sideNav/${c.id}`}>{c.name}</Link>
              </p>
            ))}
          </div>
        </div>

        <div>
          <Carts></Carts>
        </div>
      </div>
    );
};

export default Courses;