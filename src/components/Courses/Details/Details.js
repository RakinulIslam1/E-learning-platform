import React from 'react';
import './Details.css';

const Details = ({data}) => {
    return (
      <div>
        <div className="dtls text-white bg-slate-800">
          <h1 className="text-2xl font-bold">Details of: {data.title}</h1>
          <p className="font-semibold">{data.description}</p>
        </div>
      </div>
    );
};

export default Details;
