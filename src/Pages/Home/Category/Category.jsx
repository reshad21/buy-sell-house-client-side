import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://buy-sell-house-server.vercel.app/category');
            const data = await res.json();
            return data;
        }
    })


    if (isLoading) {
        return (
            <div className='flex justify-center items-center min-h-screen'>
                <progress className="progress w-56"></progress>
            </div>
        )
    }

    return (
        <div className='px-5 my-10'>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {
                    categories.map(category => {
                        return (
                            <div key={category?._id} className="card shadow-xl">
                                <figure className="px-3 pt-7">
                                    <img src={category?.picture} alt="Shoes" className="w-full" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{category?.name}</h2>
                                    <p>{category?.speech}</p>
                                    <div className="card-actions">
                                        <Link to={`/category/${category?.category}`} className="btn btn-primary">SEE ALL</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Category;