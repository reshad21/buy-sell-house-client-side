import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    console.log(user?.email);

    const { data: myProducts, isLoading } = useQuery({
        queryKey: ['myProducts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })


    if (isLoading) {
        return (
            <p>loading...</p>
        )
    }
    return (
        <div>
            <h1 className='text-3xl font-semibold'>My Products List:{myProducts?.length}</h1>
        </div>
    );
};

export default MyProducts;