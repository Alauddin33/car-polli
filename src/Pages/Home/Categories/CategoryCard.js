import React from 'react';

const CategoryCard = ({ data, setCategoryDetails }) => {
    const { picture, brandName } = data;

    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={picture} className="max-w-md md:max-w-xl rounded-lg shadow-2xl" alt='' />
                    <div className='p-10'>
                        <h1 className="text-5xl font-bold">{brandName}</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>


                        <label onClick={() => setCategoryDetails(data)} htmlFor="booking-modal" className="btn btn-active text-white bg-gradient-to-r from-sky-500 to-indigo-500">Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;