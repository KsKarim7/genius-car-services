import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, name, img, description, price } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt=""></img>
            <h2>{name}</h2>
            <p>Price:{price}</p>
            <p><small>{description}</small></p>
            {/* <Link to='/inventory' className='btn btn-primary'>Book: {name}</Link> */}
            <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-primary' >Book:{name}</button>
        </div>
    );
};

export default Service;