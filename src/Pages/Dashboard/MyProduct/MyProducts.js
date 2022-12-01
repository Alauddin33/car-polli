import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);




    const { data: products = [], refetch } = useQuery({
        queryKey: ['users', 'admin'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products/${user?.email}`);
            const data = await res.json();
            return data;
        }
    })



    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this product?');
        if (proceed) {
            fetch(`http://localhost:5000/products/${id}`, {
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


    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
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
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
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
                            <td>Purple</td>
                            <td>Purple</td>
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