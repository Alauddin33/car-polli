import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/login.jpg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Register = () => {
    useTitle('Register');
    const { createUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(err => console.error(err));
    }
    return (
        <div className="hero bg-base-200 mt-28">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-center pb-4">Register now!</h1>
                    <img width={500} height={500} src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" required className="input input-bordered" />
                        </div>
                        <div className="form-control my-4">
                            <input className="btn btn-info" type="submit" value="Register" />
                        </div>
                    </form>
                    <p className=" text-center text-xs pb-5">Already have an account? Please, <Link to='/login' className=' text-orange-800 link'> Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;