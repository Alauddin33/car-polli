import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const AllBuyers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users', 'buyer'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/buyer');
            const data = await res.json();
            return data;
        }
    })



    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th> No:</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>User Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) => <tr key={user._id} >
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>

                                <th>

                                    <button className="btn btn-xs btn-active text-white bg-gradient-to-r from-red-500 to-yellow-500">X</button>

                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;