import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../assets/error-page-design.jpg';
const ErrorPage = () => {
    return (
        <div>
            <div className="flex justify-center align-middle">
                <Link to='/'><img src={error} alt="error-img" /></Link>
            </div>
        </div>
    );
};

export default ErrorPage;