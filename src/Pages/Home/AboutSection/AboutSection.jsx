import React from 'react';

const AboutSection = () => {
    return (
        <div className='my-9'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHVzZWQlMjBsYXB0b3B8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="max-w-sm rounded-lg shadow-2xl" alt='about' />
                    <div>
                        <h1 className="text-5xl font-bold">Why buy an used laptop?</h1>
                        <p className="py-6">Save up to 70% of your budget by buying a good quality used laptop in Bangladesh, but you need to check it out and buy it in a good way. There are a few things to keep in mind when buying a second hand laptop.</p>
                        <p>When buying a refurbished or old laptop, you have to look at the body of the laptop in a good way to see if there are any cracks or scratches on the body. Looking at the body of the laptop gives a rough idea of ​​how long it has been in use.</p>
                        <p>One of the main parts of a laptop is its screen. Before buying a 2nd hand laptop, you must check the screen of the laptop in a good way. Flickering, disco coloring, dot pixel, sacking are some of the common problems on laptop screens.</p>
                        <button className="btn btn-primary mt-5">Get Started</button>
                    </div>
                </div>
            </div>
            <h1 className='text-4xl my-6 font-semibold text-center text-primary'>Our Latest Trending Product</h1>
        </div>
    );
};

export default AboutSection;