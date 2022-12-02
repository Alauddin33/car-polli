import React from 'react';

const CategoryCard = ({ data, setCategoryDetails }) => {
    const { picture, brandName, location, originalPrice, postingTime, resalePrice, sellerName, usingYears } = data;
    console.log(data);

    return (
        <div>
            <div className=" bg-base-200">
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 items-center ">
                    <img src={picture} className="max-w-md md:max-w-xl rounded-lg shadow-2xl" alt='' />
                    <div className='p-5'>
                        <h1 className="text-5xl font-bold text-center text-orange-700 py-7">{brandName}</h1>
                        <div className='py-4 flex justify-between text-lime-700'>
                            <p>OriginalPrice: <span className='border-solid border-2 border-gray-500 ml-2 p-1'>{originalPrice}</span></p>
                            <p>ResalePrice: <span className='border-solid border-2 border-gray-500 p-1 ml-2'>{resalePrice}</span></p>
                        </div>
                        <div className='py-4 flex justify-between text-lime-700'>
                            <p >Year of use:<span className='border-solid border-2 border-gray-500 p-1 ml-2'>{usingYears}</span></p>
                            <p>Posting Time: <span className='border-solid border-2 border-gray-500 p-1 ml-2'>{postingTime}</span></p>
                        </div>
                        <div className='py-4 flex justify-between text-lime-700'>
                            <p>Seller Name: <span className='border-solid border-2 border-gray-500 p-1 ml-2'>{sellerName}</span></p>
                            <p>Location: <span className='border-solid border-2 border-gray-500 p-1 ml-2'>{location}</span> </p>
                        </div>
                        <div className='flex justify-end py-7'>
                            <label onClick={() => setCategoryDetails(data)} htmlFor="booking-modal" className="  btn btn-active text-white bg-gradient-to-r from-sky-500 to-indigo-500">Book Now</label>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;