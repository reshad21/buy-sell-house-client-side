import React from 'react';
import error from '../../Pages/assets/error-page-design.jpg';
const ErrorPage = () => {
    return (
        <div>
            <div className="flex justify-center align-middle">
                <img src={error} alt="error-img" />
            </div>
        </div>
    );
};

export default ErrorPage;