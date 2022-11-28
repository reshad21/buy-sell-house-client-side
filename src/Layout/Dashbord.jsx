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
                    {/* <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {
                            userRole?.role === 'Selling' && <p>hello i am seller</p>
                        }
                        {
                            userRole?.role === 'Buying' && <p>hello i am BUYER</p>
                        }
                        {
                            userRole?.role === 'Admin' && <p>hello i am ADMIN</p>
                        }

                        <li><Link to='/dashbord'>ADMIN</Link></li>
                        <li><Link to='/dashbord/buyer'>BUYER</Link></li>
                        <li><Link to='/dashbord/seller'>SELLER</Link></li>
                        <li><Link to='/dashbord/seller/myproducts'>MY PRODUCTS</Link></li>
                    </ul> */}

                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        {
                            userRole?.role === 'Selling' && <>
                                <li><Link to='/dashbord/seller'>ADD PRODUCT</Link></li>
                                <li><Link to='/dashbord/seller/myproducts'>MY PRODUCTS</Link></li>
                            </>
                        }
                        {
                            userRole?.role === 'Buying' && <>
                                <li><Link to='/dashbord/buyer'>BUYER</Link></li>
                            </>
                        }
                        {
                            userRole?.role === 'Admin' && <>
                                <li><Link to='/dashbord/admin'>ADMIN</Link></li>
                                <li><Link to='/dashbord/admin/allseller'>ALL SELLER</Link></li>
                                <li><Link to='/dashbord/admin/allbuyer'>ALL BUYER</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashbord;