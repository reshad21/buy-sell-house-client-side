import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Bookingmodal from '../../Bookingmodal/Bookingmodal';

const Advertised = () => {

    const { data: focusProducts = [], isLoading } = useQuery({
        queryKey: ['focusProducts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products/home?role=available');
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

    // const [focusProducts, setfocusProducts] = useState([]);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/products/home?role=available`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setfocusProducts(data);
    //             console.log(data);
    //         })
    // }, [])

    return (
        <div className="">
            <h1 className='text-4xl my-6 font-semibold text-center text-orange-600'>Our Latest Trending Product:{focusProducts.length}</h1>
            <div className='grid gap-9 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-2'>
                {
                    focusProducts?.map(focusProduct => {
                        return (
                            <div key={focusProduct?._id} className="card w-full card-compact bg-base-100 shadow-xl">
                                <figure><img className='w-full' src={focusProduct?.picture} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title flex justify-between">
                                        <span>{focusProduct?.productname}</span>
                                        <span className='text-sm'>Price: {focusProduct?.price}tk</span>
                                    </h2>
                                    <p>{focusProduct?.description}</p>
                                    <div className="card-actions justify-end">
                                        <label htmlFor="booking-modal" className="btn btn-sm btn-primary text-white">Book Now</label>
                                        <Bookingmodal focusProduct={focusProduct}></Bookingmodal>
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