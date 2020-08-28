import React from 'react';
import './Product.css';

const Product = (props) => {
    const {courseName, price} = props.product;
    
    return (
        <div className='product'>
            <h1>{courseName}</h1>
            <h4>Price : ${price}</h4>
            <br/>
            <button onClick = { () => props.handleAddCourse(props.product)} className='enrol-btn btn btn-success'>Enroll Now</button>
        </div>
    );
};

export default Product;