import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from './CategoryCard';

const Category = () => {
    const categoryData = useLoaderData();
    console.log(categoryData);
    return (
        <div className='grid gap-5 my-10'>

            {
                categoryData.map(data => <CategoryCard
                    key={data._id}
                    data={data}
                ></CategoryCard>)
            }
        </div>
    );
};

export default Category;