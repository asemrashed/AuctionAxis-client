import React from 'react';
import { useLoaderData } from 'react-router';
import Products from '../../components/products/Products';

const AllProduct = () => {
    const products = useLoaderData()
    return (
        <div>
            <Products products={products} heading={'All'}/>
        </div>
    );
};

export default AllProduct;