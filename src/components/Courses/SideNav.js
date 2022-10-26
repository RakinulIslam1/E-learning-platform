import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Details from './Details/Details';

const SideNav = () => {
  const datas = useLoaderData()
    return (
      <div className="cart">
        <div>
          <div>
            {
              datas.map( data => <Details
              key={data._id}
              data={data}
              ></Details>)
            }
          </div>
          
        </div>
      </div>
    );
};

export default SideNav;