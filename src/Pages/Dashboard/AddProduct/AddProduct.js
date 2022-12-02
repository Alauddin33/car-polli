import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';



const AddProduct = () => {

    useTitle('AddProduct');
    const { loading, setLoading, user } = useContext(AuthContext);
    const [userOption, setUserOption] = useState();
    const navigate = useNavigate();


    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const userOptionData = form.userOption.value;
        const userOption = userOptionData.split('.')[0]
        const image = form.image.files[0];

        const brandName = form.brandName.value;
        const originalPrice = form.originalPrice.value;
        const resalePrice = form.resalePrice.value;
        const sellerName = form.sellerName.value;
        const email = form.sellerEmail.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const usingYears = form.usingYears.value;
        const postingTime = form.postingTime.value;


        const formData = new FormData()
        formData.append('image', image)
        const url = "https://api.imgbb.com/1/upload?key=c56e7ffc7d1ed06ac49d1ca43154a9f3"

        setLoading(true);
        fetch(url, {
            method: "POST",
            body: formData,
        })

            .then(res => res.json())
            .then(imageData => {

                const product = {
                    category_id: userOption,
                    picture: imageData.data.display_url,
                    brandName,
                    originalPrice,
                    resalePrice,
                    sellerName,
                    email,
                    phone,
                    location,
                    usingYears,
                    postingTime
                }
                fetch('https://car-polli-server.vercel.app/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(product)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.acknowledged) {
                            toast.success('product upload confirmed')
                            navigate('/dashboard/myproduct')
                            setLoading(false)
                        }

                    })
            })
            .catch(err => console.log(err))


    }



    return (
        <div>
            <h1 className=' text-4xl text-center'>Product Add Form</h1>
            <div className="hero ">
                <div className="hero-content">
                    <div className="card shadow-2xl bg-base-100">
                        <form onSubmit={handleAddProduct} className="card-body">

                            <div>
                                <select value={userOption} onChange={e => setUserOption(e.target.value)}>

                                    <option>Select Category</option>
                                    <option>1. Luxury Car</option>
                                    <option>2. Micro Bus</option>
                                    <option>3. Limousine Car</option>

                                </select>
                                <div className="form-control">
                                    <input type="text" name='userOption' defaultValue={userOption}
                                        readOnly className="input input-bordered" />
                                </div>
                            </div>

                            <div className='grid gap-3 grid-cols-1 md:grid-cols-2'>
                                <div className="form-control">
                                    <input type="text" name='brandName' placeholder="Brand Name"
                                        required className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input type="text" name='originalPrice' placeholder='Original Price' required className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input type="text" name='resalePrice' placeholder='Resale Price' required className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Choose Image</span>
                                    </label>
                                    <input type="file" name='image' accept='image/*'
                                        required className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input type="text" name='phone' placeholder="Phone Number"
                                        required className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input type="text" name='location' placeholder="Location"
                                        required className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Year of use</span>
                                    </label>
                                    <input type="text" name='usingYears' placeholder="-- years"
                                        required className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Posting Time</span>
                                    </label>
                                    <input type="text" name='postingTime' placeholder="yyyy-mm-dd"
                                        required className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input type="email" name='sellerEmail' defaultValue={user?.email} readOnly className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input type="text" name='sellerName' defaultValue={user?.displayName} readOnly className="input input-bordered" />
                                </div>
                            </div>

                            {
                                loading ? <div className='flex justify-center items-center h-full'>
                                    <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-red-400"></div>
                                </div>
                                    :
                                    <div className="form-control w-1/3 mx-auto my-4">
                                        <input className="btn btn-active text-white bg-gradient-to-r from-sky-500 to-indigo-500" type="submit" value="Add Prooduct" />
                                    </div>
                            }
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;