import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Allseller = () => {
    const { data: allserler = [], isLoading, refetch } = useQuery({
        queryKey: ['allseller'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/admin/allseller?role=Selling');
            const data = await res.json();
            return data;
        }
    })

    const handleDelete = (user) => {
        window.confirm(`are you sure?`);
        console.log(user);
        fetch(`http://localhost:5000/user/${user._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                }
            })
    }

    const handleVerified = (user) => {
        console.log(user._id);
        fetch(`http://localhost:5000/admin/allseller/${user?._id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
            })

    }

    if (isLoading) {
        return (
            <div className='flex justify-center items-center min-h-screen'>
                <progress className="progress w-56"></progress>
            </div>
        )
    }
    return (
        <div>
            <h1 className='text-3xl font-semibold mb-5'>Total Seller: {allserler?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Title</th>
                            <th>Verification</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allserler?.map((user, i) => {
                                return (
                                    <tr key={user?._id}>
                                        <th>{i + 1}</th>
                                        <td>{user?.name}</td>
                                        <td>{user?.email}</td>
                                        <td>{user?.role}</td>
                                        <td>
                                            {
                                                user?.type === 'verified'
                                                    ?
                                                    <p className='font-bold text-sky-700'>Verified</p>
                                                    :
                                                    <button onClick={() => handleVerified(user)} className='btn btn-sm btn-info'>Verify</button>
                                            }

                                        </td>
                                        <td><button onClick={() => handleDelete(user)} className='btn btn-sm'>Delete</button></td>
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

export default Allseller;