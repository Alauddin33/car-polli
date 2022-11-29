import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }

    })


    return (
        <div>
            <h2 className=' text-4xl'>My Orders</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name & Image</th>
                            <th>Product Brand Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map(booking => <tr key={booking._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div>{user?.displayName}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className=' font-bold'>
                                    {booking.itemName}
                                </td>
                                <td>{booking.price}</td>
                                <th>
                                    <button className="btn btn-xs btn-active text-white bg-gradient-to-r from-sky-500 to-indigo-500">Pay</button>
                                </th>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyOrders;