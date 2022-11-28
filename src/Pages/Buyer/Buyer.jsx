import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

const Buyer = () => {
    const { user } = useContext(AuthContext);
    console.log(user?.email);
    const { data: myBookings = [], isLoading, refetch } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://buy-sell-house-server.vercel.app/bookings?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    const handlePayment = (myBooking) => {
        console.log('click');
        fetch(`https://buy-sell-house-server.vercel.app/bookings/${myBooking._id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()

            })
    }


    if (isLoading) {
        return <>Loading......</>
    }

    return (
        <div>
            <h1 className='text-3xl font-semibold'>My orders items: {myBookings?.length}</h1>

            <div className="overflow-x-auto my-5">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myBookings?.map((myBooking, i) => {
                                return (
                                    <tr key={myBooking?._id}>
                                        <th>{i + 1}</th>
                                        {/* <td>{myBooking?.productname}</td> */}
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={myBooking?.photo} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{myBooking?.productname}</div>
                                                    <div className="text-sm opacity-50">{myBooking?.meetinglocation}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{myBooking?.price}</td>
                                        {/* <td>
                                            {
                                                (myBooking?.role === 'available')
                                                    ?
                                                    <button className='btn btn-primary btn-sm'>ADVERTIZE RUN</button>
                                                    :
                                                    <button onClick={() => handleAvailable(myBooking)} className='btn btn-secondary btn-sm'>Available</button>

                                            }

                                        </td>
                                        <td><button onClick={() => handlePersonalProduct(myBooking)} className='btn btn-error btn-sm'>Delete</button></td> */}
                                        <td>
                                            {
                                                myBooking?.role === 'paid'
                                                    ?
                                                    <button className='btn btn-sm btn-success'>PAID</button>
                                                    :
                                                    <button onClick={() => handlePayment(myBooking)} className='btn btn-sm btn-success'>PayMent</button>
                                            }

                                        </td>
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

export default Buyer;