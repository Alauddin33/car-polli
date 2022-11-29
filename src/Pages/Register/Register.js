import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import img from '../../assets/login.jpg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Register = () => {
    useTitle('Register');

    const { createUser, updateUserProfile, loading, setLoading } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.files[0];
        const email = form.email.value;
        const password = form.password.value;

        const formData = new FormData()
        formData.append('image', image)
        const url = "https://api.imgbb.com/1/upload?key=c56e7ffc7d1ed06ac49d1ca43154a9f3"


        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(imageData => {

                createUser(email, password)
                    .then(result => {
                        updateUserProfile(name, imageData.data.display_url)
                            .then(toast.success('user profile created successfully'))
                            .catch(err => {
                                console.log(err)

                            })

                        saveUser(name, email);
                    })
                    .catch(err => {
                        toast.error(`${err.message}`)
                        setLoading(false)
                    })
            })
            .catch(err => console.log(err))

        form.reset();

    }


    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                getUserToken(email);
            })
    }


    const getUserToken = email => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken);
                    navigate(from, { replace: true });
                }
            })
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
                            <input type="text" name='name' placeholder="Your Name"
                                required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Choose Image</span>
                            </label>
                            <input type="file" name='image' accept='image/*'
                                required className="input input-bordered" />
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
                        {
                            loading ? <div className='flex justify-center items-center h-full'>
                                <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-red-400"></div>
                            </div>
                                :
                                <div className="form-control my-4">
                                    <input className="btn btn-active text-white bg-gradient-to-r from-sky-500 to-indigo-500" type="submit" value="register" />
                                </div>
                        }
                    </form>
                    <p className=" text-center text-xs pb-5">Already have an account? Please, <Link to='/login' className=' text-orange-800 link'> Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;