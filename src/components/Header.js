import React from 'react'
import { CartImg, LogoDark } from '../assets/index'
import { Link } from '../../node_modules/react-router-dom/dist/index'
import { useSelector } from '../../node_modules/react-redux/es/index'

const Header = () => {

const cartitem = useSelector((state)=> state?.slice?.productData)
const user = useSelector((state)=> state?.slice?.userInfo)

  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50'>
<div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
    <Link to="/">
    <div>
        <img className='w-28' src={LogoDark} alt="logoDark" />
    </div>
    </Link>
    <div className='flex items-center gap-8'>
    <ul className='flex items-center gap-8'>
        <li className='text-base text-black font-bold hover:text-orange-900
        hover:underline underline-offset-2 decoration-[1px] cursor-pointer
        duration-300'>Home</li>
        <li className='text-base text-black font-bold hover:text-orange-900
        hover:underline underline-offset-2 decoration-[1px] cursor-pointer
        duration-300'>Pages</li>
        <li className='text-base text-black font-bold hover:text-orange-900
        hover:underline underline-offset-2 decoration-[1px] cursor-pointer
        duration-300'>Shop</li>
        <li className='text-base text-black font-bold hover:text-orange-900
        hover:underline underline-offset-2 decoration-[1px] cursor-pointer
        duration-300'>Element</li>
        <li className='text-base text-black font-bold hover:text-orange-900
        hover:underline underline-offset-2 decoration-[1px] cursor-pointer
        duration-300'>Blog</li>
    </ul>
    <Link to="/cart">
    <div className='relative'>
      <img className='w-6' src={CartImg} alt="cartImg" />
      <span className='absolute w-6 top-2 left-0 text-sm flex items-center
      justify-center font-semibold'>{cartitem?.length}</span>
    </div>
    </Link>
   <Link to="/login">
   <img src={user? user.image : "https://cdn-icons-png.flaticon.com/512/634/634012.png?w=740&t=st=1684900985~exp=1684901585~hmac=95b15207580ef3f5552d28e7528782e888b723c4a53527d25a8979e24b145cda"}
    className='w-8 h-8 rounded-full' alt="userLogo" />
   </Link>
   {user && <p className='text-base font-semibold underline underline-offset-2'
   >{user.name}</p>}
</div>
</div>

    </div>
  )
}

export default Header