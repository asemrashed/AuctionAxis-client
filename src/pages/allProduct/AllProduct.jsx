import React from 'react';
import { useLoaderData } from 'react-router';
import LatestProducts from '../../components/products/Products';

const AllProduct = () => {
    const products = useLoaderData()
    return (
        <div>
            <LatestProducts products={products} heading={'All'}/>
        </div>
    );
};

export default AllProduct;