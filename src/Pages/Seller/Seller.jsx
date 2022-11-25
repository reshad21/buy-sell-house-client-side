import React from 'react';

const Seller = () => {
    const handleProductForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const condition = form.condition.value;
        const phoneNumber = form.phoneNumber.value;
        const location = form.location.value;
        const category = form.category.value;
        const description = form.description.value;
        const year = form.year.value;

        const productInfo = {
            year,
            name,
            price,
            category,
            location,
            condition,
            phoneNumber,
            description,
        }
        console.log(productInfo);

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productInfo),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });


    }
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse w-full">
                    <div className="card-body shadow-2xl bg-base-100">
                        <h1 className='text-center text-3xl font-semibold underline'>Product Information</h1>

                        <form onSubmit={handleProductForm}>
                            <div className="form-control">
                                <label className="label font-bold">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label font-bold">
                                    <span className="label-text">Price</span>
                                </label>
                                <input name='price' type="text" placeholder="price" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label font-bold">
                                    <span className="label-text">Condition</span>
                                </label>
                                <select name='condition' className="select select-bordered w-full">
                                    <option value='excellent'>excellent</option>
                                    <option value='good'>good</option>
                                    <option value='fair'>fair</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label font-bold">
                                    <span className="label-text">Mobile number</span>
                                </label>
                                <input name='phoneNumber' type="text" placeholder="Mobile number" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label font-bold">
                                    <span className="label-text">Location</span>
                                </label>
                                <input name='location' type="text" placeholder="location" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label font-bold">
                                    <span className="label-text">Category</span>
                                </label>
                                <select name='category' className="select select-bordered w-full">
                                    <option value='lenovo'>Lenovo</option>
                                    <option value='dell'>Dell</option>
                                    <option value='asus'>ASUS</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label font-bold">
                                    <span className="label-text">Description</span>
                                </label>
                                <input name='description' type="text" placeholder="description" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label font-bold">
                                    <span className="label-text">Year of purchase</span>
                                </label>
                                <input name='year' type="text" placeholder="Year of purchase" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Seller;