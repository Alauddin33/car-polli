import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })


    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('make admin successfully')
                    refetch();
                }
            })
    }


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
                            <th>Make Admin</th>
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
                                    {user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-xs btn-active text-white bg-gradient-to-r from-sky-500 to-indigo-500">make admin</button>}
                                </th>
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

export default AllUsers;