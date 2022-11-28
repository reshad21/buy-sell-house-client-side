import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import UpdateBookingModal from '../Bookingmodal/UpdateBookingModal';

const Products = () => {
    const { id } = useParams();
    const { data: allProducts = [] } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await fetch(`https://buy-sell-house-server.vercel.app/category/${id}`)
            const data = await res.json()
            return data;
        }
    })

    const { data: allserler = [] } = useQuery({
        queryKey: ['allseller'],
        queryFn: async () => {
            const res = await fetch('https://buy-sell-house-server.vercel.app/admin/allseller?role=Selling&type=verified');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            {/* <h2>Products:{allProducts?.length}</h2> */}
            {
                allProducts?.map(allProduct => {
                    return (
                        <div key={allProduct?._id} className="card card-side bg-base-100 shadow-xl mb-9">
                            <figure className='p-3 w-1/3'><img src={allProduct?.picture} alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{allProduct?.productname}</h2>
                                <h3 className='text-xl'>Price: {allProduct?.price}</h3>
                                <p>{allProduct?.description}</p>
                                <p>Email: {allProduct?.email}</p>

                                <span>Seller Type:{allserler?.type}</span>

                                <div className="card-actions justify-end">
                                    <div className="card-actions justify-end">
                                        <label htmlFor="updated-booking-modal" className="btn btn-sm btn-primary text-white">Book Now</label>
                                        <UpdateBookingModal allProduct={allProduct}></UpdateBookingModal>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    );
};

export default Products;