import React, { useEffect, useState } from 'react'
import { useLocation } from '../../node_modules/react-router-dom/dist/index'
import Header from './Header'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from '../../node_modules/react-redux/es/index';
import { addToCart } from '../redux/ReduxSlice';
import { ToastContainer, toast } from 'react-toastify';


const Product = () => {

    const dispatch = useDispatch()
    const cartitem = useSelector((state)=> state?.slice?.productData)
let [baseQty, setBaseQty] =useState(1);
const [details, setDetails] = useState({})
    const location = useLocation()
    useEffect(()=>{
        setDetails(location.state.item)
    },[])

 

  return (
    <div>
    <Header/>
    <div className='max-w-screen-xl mx-auto my-10 flex gap-10'>
<div className='w-2/5 relative'>
    <img
    className='w-full h-[550px] object-cover'
    src={details.image}
    alt="productImg"
    />
    <div className='absolute top-4 right-0'>
        {details.isNew&&(
            <p className='bg-black text-white font-semibold px-8 py-1'>
                Sale
            </p>
        )}
    </div>
</div>
<div className='w-3/5 flex flex-col justify-center gap-12'>
<h2 className='text-4xl font-semibold'>{details.title}</h2>
<div className='flex items-center gap-4 mt-3'>
    <p className='line-through font-base text-gray-500'>
        ${details.oldPrice}
    </p>
    <p className='text-2xl font-medium text-gray-900'>
        ${details.price}
    </p>
</div>
<div className='flex items-center gap-2 text-base'>
<div className='flex'>
<FontAwesomeIcon icon={faStar} size="1x" color="gold" />
<FontAwesomeIcon icon={faStar} size="1x" color="gold" />
<FontAwesomeIcon icon={faStar} size="1x" color="gold" />
<FontAwesomeIcon icon={faStar} size="1x" color="gold" />
<FontAwesomeIcon icon={faStar} size="1x" color="gold" />
</div>
<p className='text-xs text-gray-500'>(1 Customer review)</p>
</div>
<p>
    {details.description}
</p>
<div className='flex gap-4'>
    <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
        <p className='text-sm'>Quantity</p>
        <div className='flex items-center gap-4 text-sm font-semibold'>
        <button  
        onClick={()=>setBaseQty(baseQty == 1? (baseQty = 1) : baseQty -1)}
        className='border h-5 font-normal text-lg flex items-center
        justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer
        duration-300 active:bg-black'>-</button>
        <span>{baseQty}</span>
        <button 
        onClick={()=>setBaseQty(baseQty + 1)}
        className='border h-5 font-normal text-lg flex items-center 
        justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer
        duration-300 active:bg-black'>+</button>
        </div>
    </div>
    <button 
    onClick={()=>dispatch(addToCart({
        _id : details._id,
        title : details.title,
        image : details.image,
        price : details.price,
        quantity : baseQty
    })
    ) && toast.success(`${details.title} is added`)
}
    className='bg-black text-white py-3 px-6 active:bg-gray-800'>
        add to cart
    </button>
</div>
<p className='text-base text-gray-500'>Category: <span className='font-medium capitalize'>{details.category}</span></p>
</div>

    </div>
    <ToastContainer
position = "top-left"
autoCloase ={2000}
hideProgressBar = {false}
newestOnTop ={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    <Footer/>
    </div>
  )
}

export default Product