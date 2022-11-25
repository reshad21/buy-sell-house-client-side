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
        return <>
            <button type="button" class="bg-indigo-500 ..." disabled>
                <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
                Processing...
            </button>
        </>
    }

    return (
        <div>
            <h2 className='text-3xl'>All Traffic of This site: {users.length}</h2>
        </div>
    );
};

export default Traffic;