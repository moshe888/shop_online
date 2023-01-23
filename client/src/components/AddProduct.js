import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
    const [product, setProduct] = useState({ name: '', image: '', price: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/products', product)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }

    return (

        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value="{product.name}" onChange={e => setProduct({ ...product, name: e.target.value })}/>
            <label>Image URL:</label>
            <input type="text" name="image" value="{product.image}" onChange={e => setProduct({ ...product, image: e.target.value })}/>
            <label>Price:</label>
            <input type="number" name="price" value="{product.price}" onChange={e => setProduct({ ...product, price: e.target.value })}/>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProduct;
