import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useSelector } from '../../node_modules/react-redux/es/index'
import { ToastContainer, toast } from 'react-toastify';
import CartItem from './CartItem'
import StripeCheckout from 'react-stripe-checkout';
import axios from '../../node_modules/axios/index';

const Cart = () => {
  const cartitems = useSelector((state)=> state.slice.productData)
  const user = useSelector((state)=> state?.slice?.userInfo)
const[totalAmt, setTotalAmt] = useState(0)
const [payNow, setPayNow] = useState(false)

useEffect(()=>{
  let price = 0;
  cartitems.map((item)=>{
    price += item.price * item.quantity;
    return price;
  });
  setTotalAmt(price)
},[cartitems])

const handleCheckout = () =>{
if(user){
  setPayNow(true)
}else{
  toast.error("Please Sign in to CheckOut")
}
}

const payment = async(token)=>{
  await axios.post("http://localhost:800/pay",{
    amount:totalAmt * 100,
    token: token,
  })
}

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
<button 
onClick={handleCheckout}
className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300'>
  Proceed to Checkout
</button>
{
  payNow && (
    <div className='w-full mt-6 flex items-center justify-center'>
      <StripeCheckout
      stripeKey='pk_test_51NB9emSA5O12wjqv8kSHCauoqeQkjuSzHuI1krss4RfmmOuDVpvlcYqeq2wiOM8fg6HBfvovINIt4mAO8EhTTYdF00pOhWsKrZ'
      name="OnlineShopping"
      amount={totalAmt * 100}
      label = "Pay to Shopping"
      description={`Your Payment Amount is $${totalAmt}`}
      token={payment}
      email={user.email}
      />
    </div>
  )
}
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
    </div>
    <Footer/>
    </>
    
  )
}

export default Cart

