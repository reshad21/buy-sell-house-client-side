import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../contexts/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    // console.log(user?.email);

    const { data: myProducts, isLoading, refetch } = useQuery({
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

    const handleAvailable = (myProduct) => {
        const id = myProduct._id;
        console.log(id);
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('advertise successfully')
                }
            })

    }


    const handlePersonalProduct = (myProduct) => {
        // console.log('personal product deleted successfully', myProduct._id);
        const id = myProduct._id;
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Product Delete From Dashbord!')
                refetch();
            })
    }

    return (
        <div>
            <h1 className='text-3xl font-semibold mb-1'>My Products List: {myProducts?.length}</h1>
            <p>Email Address: <span className='font-semibold text-rose-600'>{user?.email}</span></p>

            <div className="overflow-x-auto my-5">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myProducts?.map((myProduct, i) => {
                                return (
                                    <tr key={myProduct?._id}>
                                        <th>{i + 1}</th>
                                        <td>{myProduct?.productname}</td>
                                        <td>{myProduct?.price}</td>
                                        <td>
                                            {
                                                (myProduct?.role === 'available')
                                                    ?
                                                    <button className='btn btn-primary btn-sm'>ADVERTIZE RUN</button>
                                                    :
                                                    <button onClick={() => handleAvailable(myProduct)} className='btn btn-secondary btn-sm'>Available</button>

                                            }

                                        </td>
                                        <td><button onClick={() => handlePersonalProduct(myProduct)} className='btn btn-error btn-sm'>Delete</button></td>
                                    </tr>
                                )
                            })
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;