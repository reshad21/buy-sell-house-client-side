import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Pages/contexts/AuthProvider';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Spinner from '../Pages/Spinner/Spinner';

const Dashbord = () => {
    const { user } = useContext(AuthContext);
    // const email = user?.email;
    console.log(user?.email);

    const { data: userRole, isLoading } = useQuery({
        queryKey: ['userrole', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/user/${user?.email}`);
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashbord-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashbord-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        {
                            userRole?.role === 'Selling' && <>
                                <li><Link to='/dashbord/seller'><button className='btn btn-primary w-full'>ADD PRODUCT</button></Link></li>
                                <li><Link to='/dashbord/seller/myproducts'><button className='btn btn-primary w-full'>MY PRODUCTS</button></Link></li>
                            </>
                        }
                        {
                            userRole?.role === 'Buying' && <>
                                <li><Link to='/dashbord/buyer'><button className='btn btn-primary w-full'>BUYER</button></Link></li>
                            </>
                        }
                        {
                            userRole?.role === 'Admin' && <>
                                <li><Link to='/dashbord/admin'><button className='btn btn-primary w-full'>ADMIN</button></Link></li>
                                <li><Link to='/dashbord/admin/allseller'><button className='btn btn-primary w-full'>ALL SELLER</button></Link></li>
                                <li><Link to='/dashbord/admin/allbuyer'><button className='btn btn-primary w-full'>ALL BUYER</button></Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashbord;