import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Traffic = () => {

    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/user')
            const data = await res.json();
            return data;
        }
    });

    const handleDelete = (userid) => {
        window.confirm(`are you sure?`);
        console.log(userid);
        fetch(`http://localhost:5000/user/${userid}`, {
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
            <div className='flex justify-center items-center'>
                <button type="button" className="bg-indigo-500 ..." disabled>
                    <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
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
                                    <tr key={user?._id}>
                                        <th>{i + 1}</th>
                                        <td>{user?.name}</td>
                                        <td>{user?.email}</td>
                                        <td>{user?.role}</td>
                                        <td><button onClick={() => handleDelete(user?._id)} className='btn btn-sm'>Delete</button></td>
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