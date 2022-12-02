import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogout = () => {
        logout()
            .then(() => {
                toast.success('Logout successful')
                navigate(from, { replace: true });
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="navbar text-yellow-500 bg-gradient-to-r from-sky-500 to-indigo-500 font-semibold">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>

                        <div className='flex items-center'>
                            <li tabIndex={0}>
                                <Link to='/dashboard' className="justify-between" >
                                    DashBoard
                                </Link>
                            </li>

                            <label tabIndex={0}
                                htmlFor="dashboard-drawer"
                                className="btn btn-ghost lg:hidden">
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </label>
                        </div>


                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-2xl font-serif">Car Polli</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li tabIndex={0}>
                        <Link to='/dashboard'>
                            DashBoard
                        </Link>

                    </li>

                </ul>
            </div>
            {
                user?.email ? <div className="navbar-end">
                    <button onClick={handleLogout} className="btn btn-sm">logout</button>
                </div>
                    :
                    <div className="navbar-end">
                        <Link to='/login' className="btn btn-sm">Login</Link>
                    </div>

            }

        </div>
    );
};

export default Navbar;