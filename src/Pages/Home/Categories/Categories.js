import React from 'react';
import { Link } from 'react-router-dom';
import icon1 from '../../../assets/icon/luxary.png'
import icon2 from '../../../assets/icon/micro.png'
import icon3 from '../../../assets/icon/limousine.png'

const Categories = () => {
    const categoryData = [
        {
            category_id: 1,
            name: 'Luxury Car',
            icon: icon1,
            comment: 'Prestigious'
        },
        {
            category_id: 2,
            name: 'Micro Bus',
            icon: icon2,
            comment: 'Comfortable'
        },
        {
            category_id: 3,
            name: 'Limousine Car',
            icon: icon3,
            comment: 'Prominent'
        },
    ]

    return (

        <>
            <h1 className=' text-4xl text-center mt-24 text-orange-900'>Choose by Type</h1>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 '>
                {
                    categoryData.map(category =>
                        <Link to={`/category/${category.category_id}`} key={category.category_id}>
                            <div className="hero text-indigo-900 bg-gradient-to-r from-red-300 to-green-300">
                                <div className="hero-content text-center">
                                    <div className="max-w-md">
                                        <h1 className="text-3xl font-bold">{category.name}</h1>
                                        <p className="py-6 text-orange-900">{category.comment}</p>
                                        <img src={category.icon} width={150} height={150} alt="" />

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