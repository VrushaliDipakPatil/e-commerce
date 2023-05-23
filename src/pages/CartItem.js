import React, { useState } from 'react'
import { useDispatch, useSelector } from '../../node_modules/react-redux/es/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { addToCart, decrementQty, deleteItem, incrementQty, resetCart } from '../redux/ReduxSlice';
import { ToastContainer, toast } from 'react-toastify';

const CartItem = () => {
  const dispatch = useDispatch()
  const cartitems = useSelector((state)=> state.slice.productData)
 
  return (
    <div className='w-2/3 pr-10'>
      <div className='w-full'>
<h2 className='text-2xl'>
  Shopping Cart
</h2>
      </div>
      <div>
        {cartitems.map((item)=>(
          <div
          key={item._id}
          className='flex items-center justify-between gap-6 mt-6'
          >
            <div className='flex items-center gap-2'> 
            <FontAwesomeIcon icon={faTimes} onClick={()=>
              dispatch(deleteItem(item._id))
              && toast.error(`${item.title} is removed`)
              } className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300" />
            <img
            className='w-32 h-32 object-cover'
            src={item.image}
            alt="prodImg"
            />
            </div>
            <h2 className='w-52'>{item.title}</h2>
            <p className='w-10'>${item.price} </p>
            <div className='flex gap-4'>
    <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
        <p className='text-sm'>Quantity</p>
        <div className='flex items-center gap-4 text-sm font-semibold'>
        <button  
        onClick={()=>dispatch(
          decrementQty({
            _id:item._id,
            title:item.title,
            image:item.image,
            price:item.price,
            quantity:1
          })
        )}
        className='border h-5 font-normal text-lg flex items-center
        justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer
        duration-300 active:bg-black'>-</button>
        <span>{item.quantity}</span>
        <button 
  onClick={()=>dispatch(
    incrementQty({
      _id:item._id,
      title:item.title,
      image:item.image,
      price:item.price,
      quantity:1
    })
  )}        className='border h-5 font-normal text-lg flex items-center 
        justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer
        duration-300 active:bg-black'>+</button>
        </div>
    </div>
    <p className='w-14 flex items-center'>${item.quantity * item.price}</p>
</div>
          </div>
        ))}
      </div>
      <button 
      onClick={()=>dispatch(resetCart())}
      className='bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300'>
        Reset Cart
      </button>
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
    </div>
  )
}

export default CartItem