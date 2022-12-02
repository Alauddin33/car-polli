import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';



const Advertise = () => {

    const { data: products = [], refetch } = useQuery({
        queryKey: ['products', 'sold'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products/sold');
            const data = await res.json();
            console.log(data)
            return data;
        }
    })


    return (
        <div>
            <h2 className=' text-3xl'>this is Advertisement</h2>
        </div>
    );
};

export default Advertise;