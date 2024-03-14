import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/shoppingSlice'

const Shoppingcart = () => {

    const dispatch = useDispatch()
    const items = [
        {
            "name": 'Apple Iphone',
            "price": 45000
        },
        {
            "name": 'Samsung S12',
            "price": 35000
        },
        {
            "name": 'Mi note 13',
            "price": 29000
        },
        {
            "name": 'Poco c51',
            "price": 7500
        },
        {
            "name": 'Oppo a9',
            "price": 15000
        },
    ]


    return (
        <div className='min-h-[calc(100vh-70px)] w-full  flex items-center justify-center bg-slate-100'>
            <ul className='flex flex-col gap-5'>
                {
                    items.map((item, index) => {
                        return (
                            <li key={index}>
                                {item.name} <button className='bg-green-200 px-2 mx-5 cursor-pointer rounded-sm'
                                    onClick={() => { dispatch(addToCart(item)) }}
                                >Add to Cart</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Shoppingcart
