import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Allbuyer = () => {
    const { data: allbuyer = [], isLoading, refetch } = useQuery({
        queryKey: ['allbuyer'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/admin/allbuyer?role=Buying');
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

    if (isLoading) {
        return (
            <div className='flex justify-center items-center min-h-screen'>
                <progress className="progress w-56"></progress>
            </div>
        )
    }
    return (
        <div>
            <h1 className='text-3xl font-semibold mb-5'>Total Buyer: {allbuyer.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Title</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allbuyer?.map((user, i) => {
                                return (
                                    <tr key={user?._id}>
                                        <th>{i + 1}</th>
                                        <td>{user?.name}</td>
                                        <td>{user?.email}</td>
                                        <td>{user?.role}</td>
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

export default Allbuyer;