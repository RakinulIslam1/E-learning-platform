import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carts from './Carts';
import './Courses.css';

const Courses = () => {
  const [course, setCourse] = useState([]);
  const [details, setDetails] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);
// sec api
  useEffect( () =>{
    fetch("http://localhost:5000/detials")
    .then((res) => res.json())
    .then(data => setDetails(data))
  },[])
  return (
    <div className="display">
      <div className="text-white">
        <h1 className="text-black text-3xl font-semibold txt">
          Click below to see course details
        </h1>

        <div className="stcy">
          {course.map((c) => (
            <p className="my-6 navs  bg-slate-800" key={c.id}>
              <Link to="/sideNav">{c.name}</Link>
            </p>
          ))}
        </div>
      </div>

      <div className="details">
        {details.map((detail) => (
          <Carts key={detail._id} detail={detail}></Carts>
        ))}
      </div>
    </div>
  );
};

export default Courses;