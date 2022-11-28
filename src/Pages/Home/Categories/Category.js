import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../components/BookingModal/BookingModal';
import CategoryCard from './CategoryCard';

const Category = () => {

    const categoryData = useLoaderData();
    const [categoryDetails, setCategoryDetails] = useState(null);



    return (
        <>

            <div className='grid gap-5 my-10'>

                {
                    categoryData.map(data => <CategoryCard
                        key={data._id}
                        data={data}
                        setCategoryDetails={setCategoryDetails}
                    ></CategoryCard>)
                }
            </div>
            {
                categoryDetails && <BookingModal
                    categoryDetails={categoryDetails}
                    setCategoryDetails={setCategoryDetails}
                ></BookingModal>
            }
        </>
    );
};

export default Category;