import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h2>this is category</h2>
        </div>
    );
};

export default Category;