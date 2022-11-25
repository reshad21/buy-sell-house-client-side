import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Dashbord = () => {
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

                        <li><Link to='/dashbord'>ADMIN</Link></li>
                        <li><Link to='/dashbord/buyer'>BUYER</Link></li>
                        <li><Link to='/dashbord/seller'>SELLER</Link></li>
                        <li><Link to='/dashbord/seller/myproducts'>MY PRODUCTS</Link></li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashbord;