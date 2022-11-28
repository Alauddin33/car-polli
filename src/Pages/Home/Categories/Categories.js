import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const categoryData = [
        {
            category_id: 1,
            name: 'Luxury Car',
        },
        {
            category_id: 2,
            name: 'Micro Bus',
        },
        {
            category_id: 3,
            name: 'Limousine Car',
        },
    ]

    return (

        <>
            <h1 className=' text-4xl text-center mt-24 '>Choose by Type</h1>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 '>
                {
                    categoryData.map(category =>
                        <Link to={`/category/${category.category_id}`} key={category.category_id}>
                            <div className="hero text-indigo-900 bg-gradient-to-r from-red-300 to-green-300">
                                <div className="hero-content text-center">
                                    <div className="max-w-md">
                                        <h1 className="text-3xl font-bold">{category.name}</h1>
                                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
        </>
    );
};

export default Categories;