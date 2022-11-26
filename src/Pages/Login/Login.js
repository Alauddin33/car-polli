import React, { useContext } from 'react';
import img from '../../assets/login.jpg'
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

import useTitle from '../../hooks/useTitle';
import { toast } from 'react-toastify';

const Login = () => {
    useTitle('login');

    const { login, loginWithGoogle, loading, setLoading } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)

            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })

            .catch(err => {
                toast.error(`${err.message}`)
                setLoading(false)
            });

    }

    const handleGoogleLogin = () => {
        loginWithGoogle()

            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })

            .catch(err => {
                toast.error(`${err.message}`)

            });
    }
    return (

        <div className="hero mt-28 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left mt-0 pt-0">
                    <h1 className="text-5xl font-bold text-center pb-10 ">Login now!</h1>
                    <img width={500} height={500} src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  py-1">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' required className="input input-bordered" />

                        </div>

                        {
                            loading ? <div className='flex justify-center items-center h-full'>
                                <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-red-400"></div>
                            </div>
                                :
                                <div className="form-control my-4">
                                    <input className="btn btn-info" type="submit" value="login" />
                                </div>
                        }

                    </form>

                    <button onClick={handleGoogleLogin} className='border-2 border-indigo-600 rounded-md w-3/4 mx-auto text-center'>
                        <p>Login with Google</p>
                        <p className=' ml-32 my-2 '><FaGoogle></FaGoogle></p>
                    </button>

                    <p className=" text-center text-xs py-5">New to this site? Please, <Link to='/register' className=' text-orange-800 link'> Register now</Link></p>
                </div>
            </div>
        </div>

    );
};

export default Login;