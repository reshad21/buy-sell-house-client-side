import { GoogleAuthProvider, updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth, AuthContext } from './../contexts/AuthProvider';

const SignUp = () => {
    const { createUser, googleSignIn } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('')
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleSignUp = (e) => {
        // console.log(data);
        setSignUPError('');

        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const role = form.role.value;

        const userInfo = {
            name,
            email,
            password,
            role
        }
        console.log(userInfo);


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Created Successfully.');

                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {

                        fetch('https://buy-sell-house-server.vercel.app/user', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(userInfo),
                        })
                            .then((response) => response.json())
                            .then((data) => {
                                console.log('Success:', data);
                            })
                            .catch((error) => {
                                console.error('Error:', error);
                            });

                        navigate(from, { replace: true });

                    })
                    .catch((error) => { });

            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignin = () => {
        const role = "buyer"
        googleSignIn(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                saveUser(user?.displayName, user?.email, role);
                // navigate(from, { replace: true });
            }).catch((error) => {
                console.error(error);
            })
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch(`https://buy-sell-house-server.vercel.app/${email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate(from, { replace: true });

            })
    }






    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 border-2'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" name='name' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text" name='email' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" name='password' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control">
                        <label className="label"> <span className="label-text">Select Category</span></label>
                        <select name='role' className="select select-bordered w-full max-w-xs">
                            <option value='Buying'>Buying</option>
                            <option value='Selling'>Selling</option>
                        </select>
                    </div>
                    <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default SignUp;