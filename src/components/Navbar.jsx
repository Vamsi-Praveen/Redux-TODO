import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const { cart, totalPrice } = useSelector((state) => state.cart)
    return (
        <div className='h-[70px] bg-red-100 w-full flex px-[5%] items-center justify-end gap-10'>
            <h1>Items Count:<span className='ml-2 text-[18px] font-bold'>{cart.length}</span></h1>
            <h1>Total Price: <span className='ml-2 text-[18px] font-bold'>{totalPrice}</span></h1>
        </div>
    )
}

export default Navbar
