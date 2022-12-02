import React from 'react';
import pic1 from '../../../assets/icon//choose.png'
import pic2 from '../../../assets/icon/contact.png'
import pic3 from '../../../assets/icon/finance.png'
import pic4 from '../../../assets/icon/get.png'

const Step = () => {
    return (
        <div className='my-20'>
            <h1 className=' text-3xl text-center py-8 text-orange-900'>How to buy your car with us?</h1>
            <div className="flex flex-col w-full lg:flex-row ">
                <div className="grid flex-grow card bg-base-300 rounded-box place-items-center py-2 text-sky-700">
                    <p>Step 1</p>
                    <img src={pic1} alt="" />
                    <p>Choose your car</p>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="grid flex-grow card bg-base-300 rounded-box place-items-center py-2 text-sky-700">
                    <p>Step 2</p>
                    <img src={pic2} alt="" />
                    <p>Contact seller</p>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="grid flex-grow  card bg-base-300 rounded-box place-items-center py-2 text-sky-700">
                    <p>Step 3</p>
                    <img src={pic3} alt="" />
                    <p>Financing & Registration</p>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="grid flex-grow card bg-base-300 rounded-box place-items-center py-2 text-sky-700">
                    <p>Step 4</p>
                    <img src={pic4} alt="" />
                    <p>Get your car</p>
                </div>
            </div>
        </div>
    );
};

export default Step;