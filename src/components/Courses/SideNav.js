import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Details from './Details/Details';

const SideNav = () => {
  const datas = useLoaderData()
    return (
      <div className="cart">
        <div>
          <div>
            <h1 className="text-3xl font-bold mt-3 text-black">
              ❝ COURSE DETAILS PAGE ❞
            </h1>
            <Link to="/courses">
              <button className="btn btn-wide bg-slate-800 my-5 text-white">
                Back to courses
              </button>
            </Link>
            {datas.map((data) => (
              <Details key={data._id} data={data}></Details>
            ))}
          </div>
        </div>
      </div>
    );
};

export default SideNav;