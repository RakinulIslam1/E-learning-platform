import React from 'react';
import './Details.css';

const Details = ({data}) => {
    return (
      <div className='dtls text-black'>
        <h1 className='text-2xl font-bold'>Details of: {data.title}</h1>
        <p className='font-semibold'>{data.description}</p>
      </div>
    );
};

export default Details;
