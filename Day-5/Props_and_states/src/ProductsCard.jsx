import React from 'react'

function ProductsCard({product, del}) {
    // console.log(product);

  
  return (
    <div className='p-4 border-2 rounded flex flex-col gap-4'>
        <div className='w-50 '>
            <img src={product.image} alt="" />
        </div>
        <div>
            <h2 className='font-semibold'>{product.title.substring(0, 10)}</h2>
            <p className='text-xs'>{product.category}</p>
            <p className='text-green-600'>{product.price}$</p>
        </div>
        <button onClick={()=>{del(product.id)}} className='bg-red-500 p-2 cursor-pointer'>Delete</button>
    </div>
  )
}

export default ProductsCard