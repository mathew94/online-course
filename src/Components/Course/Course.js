import React, { useState } from 'react';
import courseData from '../../fakeData/data';
import Cart from '../Cart/Cart';
import './Course.css';
import Product from './../Product/Product';

const Course = () => {
    const [cart, setCart] = useState([]);

    const handleAddCourse = (product) => {
        const newCart = [...cart, product];
        setCart (newCart);
    };

    return (
        <div className="whole-container">
            <div className="product-container">
            {
                courseData.map( pd => <Product handleAddCourse = {handleAddCourse} product={pd} key = {pd.courseId}></Product>)
            }   
            </div>
            <div className="cart-container">
            <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Course;