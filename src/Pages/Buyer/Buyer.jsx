import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

const Buyer = () => {
    const { user } = useContext(AuthContext);
    console.log(user?.email);
    const { data: myBookings = [], isLoading } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })


    if (isLoading) {
        return <>Loading......</>
    }

    return (
        <div>
            Buyer section: {myBookings?.length}
        </div>
    );
};

export default Buyer;