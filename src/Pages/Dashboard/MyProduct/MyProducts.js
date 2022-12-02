import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);


    const { data: products = [], refetch } = useQuery({
        queryKey: ['users', 'admin'],
        queryFn: async () => {
            const res = await fetch(`https://car-polli-server.vercel.app/products/${user?.email}`);
            const data = await res.json();
            return data;
        }
    })



    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this product?');
        if (proceed) {
            fetch(`https://car-polli-server.vercel.app/products/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        refetch();
                        toast.success('deleted successfully')
                    }
                })
        }
    }


    const hadleStatusUpdate = id => {

        fetch(`https://car-polli-server.vercel.app/products/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'sold' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                }
            })

    }


    const handleAdvertise = (id) => {
        fetch(`https://car-polli-server.vercel.app/products/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ Adv: 'Ads going' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                }
            })

    }




    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>

                        <th>Name & image</th>
                        <th>Price</th>
                        <th>Sales Status</th>
                        <th>Advertisement</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        products.map(product => <tr key={product._id}>

                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-decagon w-28 h-28">
                                            <img src={product.picture} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{product.brandName}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {product.resalePrice}
                            </td>

                            <td>
                                {
                                    <button className="btn btn-xs btn-active text-white bg-gradient-to-r from-black to-slate-500" onClick={() =>
                                        hadleStatusUpdate(product._id)}>
                                        {product.status ? product.status : 'available'}
                                    </button>
                                }
                            </td>

                            <th>
                                {
                                    !product.status &&
                                    <button onClick={() => handleAdvertise(product._id)} className="btn btn-xs btn-active text-white bg-gradient-to-r from-blue-500 to-green-500">{product.Adv ? product.Adv : 'advertise'}</button>

                                }
                            </th>


                            <th>
                                <button onClick={() => handleDelete(product._id)} className="btn btn-xs btn-active text-white bg-gradient-to-r from-red-500 to-yellow-500">X</button>
                            </th>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyProducts;