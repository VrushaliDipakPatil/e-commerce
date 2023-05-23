import React from 'react'
import { useNavigate } from '../../node_modules/react-router-dom/dist/index';
import { useDispatch } from '../../node_modules/react-redux/es/exports';
import { addToCart } from '../redux/ReduxSlice';

const ProductsCard = ({productdata}) => {

  const navigate = useNavigate();


  const handleDetails=(productdata)=>{
const _id = productdata.title;
const idString = (_id) =>{
  return String(_id).toLowerCase().split(" ").join("");
};
const rootId = idString(_id);

navigate(`/product/${rootId}`,{
  state:{
    item: productdata
  },
})

  }

  return (   
    <div className='group relative'>
      <div onClick={()=>handleDetails(productdata)} className='w-full h-96 cursor-pointer overflow-hidden'>
      <img 
      className='w-full h-full object-cover group-hover:scale-110 duration-500'
      src={productdata.image} alt="productimage" />
      </div>
      <div className='w-full border-[1px] px-2 py-4'>
<div className='flex justify-between items-center'>
<div>
          <h2 className='text-base font-bold'>
            {productdata.title.substring(0, 15)}
          </h2>
        </div>
        <div className='flex gap-2 relative'>
          <div className='flex gap-2 transform '>
          <p className='line-through text-gray-500'>${productdata.oldPrice}</p>
          <p className='font-semibold'>${productdata.price}</p>
          </div>
    
        </div>
</div>
<div>
  <p>{productdata.category}</p>
</div>
<div className='absolute top-4 right-0'>
  {productdata.isNew && <p 
  className='bg-black text-white font-semibold px-6 py-1'>Sale</p>}
</div>
      </div>
    </div>   
  )
}

export default ProductsCard