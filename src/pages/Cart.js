import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useSelector } from '../../node_modules/react-redux/es/index'
import CartItem from './CartItem'

const Cart = () => {
  const cartitems = useSelector((state)=> state.slice.productData)
const[totalAmt, setTotalAmt] = useState(0)

useEffect(()=>{
  let price = 0;
  cartitems.map((item)=>{
    price += item.price * item.quantity;
    return price;
  });
  setTotalAmt(price)
},[cartitems])

  return (
    <>
    <Header/>
    <div className='max-w-screen-xl mx-auto py-20 flex'>
      <CartItem/>
      <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
<div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
  <h2 className='text-2xl font-medium'>
    Cart Total
  </h2>
  <p className='flex item-center gap-4 text-base'>
Subtotal{" "}
<span className='font-bold text-lg'>
$ {totalAmt}
</span>
  </p>
  <p className='flex items-start gap-4 text-base'>
Shipping{" "}
<span >
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel lectus ac mi varius eleifend. Nulla facilisi.
</span>
  </p>
</div>
<p className='font-semibold flex justify-between mt-6'>
  Total<span className='text-xl font-bold'>$ {totalAmt}</span>
</p>
<button className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300'>
  Proceed to Checkout
</button>
      </div>
    </div>
    <Footer/>
    </>
    
  )
}

export default Cart

