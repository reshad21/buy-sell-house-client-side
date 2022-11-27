import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/category');
            const data = await res.json();
            return data;
        }
    })

    // const handleCategory = (id) => {
    //     console.log(id);
    //     fetch(`http://localhost:5000/category/${id}`)
    //         .then(res => res.json())
    //         .then(data => { console.log(data); })
    // }

    if (isLoading) {
        return <p>Loading...</p>
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