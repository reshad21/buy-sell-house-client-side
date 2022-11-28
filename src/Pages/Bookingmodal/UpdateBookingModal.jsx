import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../contexts/AuthProvider';

const UpdateBookingModal = ({ allProduct }) => {
    // console.log(allProduct);
    const { user } = useContext(AuthContext);
    const handleBookingModal = (e) => {
        e.preventDefault();
        const form = e.target;
        const username = form.username.value;
        const email = form.useremail.value;
        const productname = form.productname.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const phonenumber = form.phonenumber.value;
        const meetinglocation = form.meetinglocation.value;
        const bookingsInfo = { username, email, productname, price, photo, phonenumber, meetinglocation }
        console.log(bookingsInfo);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingsInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Booking Successfully')
                form.reset();
            })
    }
    return (
        <div>
            <input name='username' type="checkbox" id="updated-booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="updated-booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <div className="hero w-full ">
                        <div className="hero-content flex-col lg:flex-row-reverse w-full">
                            <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">

                                <form onSubmit={handleBookingModal} className="card-body">

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">User Name</span>
                                        </label>
                                        <input name='username' type="text" defaultValue={user?.displayName} className="input input-bordered" readOnly />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input name='useremail' type="text" defaultValue={user?.email} className="input input-bordered" readOnly />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Product Name</span>
                                        </label>
                                        <input name='productname' type="text" defaultValue={allProduct?.productname} className="input input-bordered" readOnly />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input name='price' type="text" defaultValue={allProduct?.price} className="input input-bordered" readOnly />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo Url</span>
                                        </label>
                                        <input name='photo' type="text" defaultValue={allProduct?.picture} className="input input-bordered" readOnly />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Phone Number</span>
                                        </label>
                                        <input name='phonenumber' type="text" placeholder='number' className="input input-bordered" required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Meeting Location</span>
                                        </label>
                                        <input name='meetinglocation' type="text" placeholder='location' className="input input-bordered" required />
                                    </div>



                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Book Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UpdateBookingModal;