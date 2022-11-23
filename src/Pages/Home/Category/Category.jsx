import React from 'react';

const Category = () => {
    return (
        <div className='px-5 my-10'>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="card shadow-xl">
                    <figure className="px-7 pt-7">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">LENOVO</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">SEE ALL</button>
                        </div>
                    </div>
                </div>

                <div className="card shadow-xl">
                    <figure className="px-7 pt-7">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">DELL</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">SEE ALL</button>
                        </div>
                    </div>
                </div>

                <div className="card shadow-xl">
                    <figure className="px-7 pt-7">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">ASUL</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">SEE ALL</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;