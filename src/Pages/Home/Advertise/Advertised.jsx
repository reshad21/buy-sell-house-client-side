import React, { useEffect, useState } from 'react';

const Advertised = () => {

    // const { data: products } = useQuery({
    //     queryKey: ['advertize'],
    //     queryFn: async () => {
    //         const res = await fetch(`http://localhost:5000/products/home?role=available`);
    //         const data = await res.json();
    //         return data;
    //     }
    // })

    const [focusProducts, setfocusProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/products/home?role=available`)
            .then(res => res.json())
            .then(data => {
                setfocusProducts(data);
                console.log(data);
            })

    }, [])

    return (
        <div className="">
            <h1 className='text-4xl my-6 font-semibold text-center text-orange-600'>Our Latest Trending Product:{focusProducts.length}</h1>
            <div className='grid gap-9 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-2'>
                {
                    focusProducts?.map(focusProduct => {
                        return (
                            <div key={focusProduct?._id} className="card w-full card-compact bg-base-100 shadow-xl">
                                <figure><img className='w-full' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
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

export default Advertised;