import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Traffic = () => {

    const { data: users = [], isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/user')
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return (
            <div className='flex justify-center items-center'>
                <button type="button" class="bg-indigo-500 ..." disabled>
                    <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
                    Processing...
                </button>
            </div>
        )
    }

    return (
        <div>
            <h2 className='text-3xl mb-5'>All Traffic of This site: {users.length}</h2>
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
                            users?.map((user, i) => {
                                return (
                                    <tr>
                                        <th>{i + 1}</th>
                                        <td>{user?.name}</td>
                                        <td>{user?.email}</td>
                                        <td>{user?.role}</td>
                                        <td><button className='btn btn-sm'>Delete</button></td>
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

export default Traffic;