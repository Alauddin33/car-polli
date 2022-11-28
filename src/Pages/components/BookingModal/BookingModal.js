import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const BookingModal = ({ categoryDetails, setCategoryDetails }) => {
    const { user } = useContext(AuthContext);
    const { brandName, resalePrice } = categoryDetails;


    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const itemName = form.itemName.value;
        const userName = form.userName.value;
        const userEmail = form.email.value;
        const price = form.price.value;
        const phoneNumber = form.phoneNumber.value;
        const meetingLocation = form.meetingLocation.value;

        const booking = {
            itemName,
            userName,
            userEmail,
            price,
            phoneNumber,
            meetingLocation
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setCategoryDetails(null);
                    toast.success('booking confirmed')
                }

            })

    }


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-1 w-3/4 mx-auto'>
                        <input className="input input-bordered text-lg font-bold " type="text" name="itemName" defaultValue={brandName} readOnly id="" />
                        <br></br>
                        <input className="input input-bordered " type="text" name="userName" defaultValue={user?.displayName} readOnly id="" />
                        <br></br>
                        <input className="input input-bordered " type="email" name="email" defaultValue={user?.email} readOnly id="" />
                        <br></br>
                        <input className="input input-bordered " type="text" name="price" defaultValue={resalePrice} readOnly id="" />
                        <br></br>
                        <input className="input input-bordered" type="text" placeholder='phone number' name="phoneNumber" id="" required />
                        <br></br>
                        <input className="input input-bordered " type="text" placeholder='meeting location' name="meetingLocation" id="" required />
                        <br></br>
                        <button className="btn btn-active text-white bg-gradient-to-r from-sky-500 to-indigo-500">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;