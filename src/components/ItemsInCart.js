import React from 'react'
import { removeFromCart, incrementQuantity, selectBasketTotal } from '../features/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/solid'

const ItemsInCart = () => {
    const cart = useSelector((state) => state.cart.cart)
    const basketTotal = useSelector(selectBasketTotal);
    const dispatch = useDispatch()

    return (
        <div>
            {cart.filter(item => item.id).map(item =>
                <>
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <p className='font-bold mr-2'>{item.name}</p>
                            <p className='italic'>x{item.quantity}</p>
                            <p className='ml-2 italic'>£{item.price}</p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <p className='cursor-pointer' onClick={() => { dispatch(incrementQuantity(item.id)); }}><PlusCircleIcon className='h-4 w-4' /></p>
                            <p className='mx-2'>{item.quantity}</p>
                            <p className='cursor-pointer' onClick={() => { dispatch(removeFromCart(item.id)); }}><MinusCircleIcon className='h-4 w-4' /></p>
                        </div>

                    </div>

                </>
            )}
            <div className='flex-col'>
                <div className='flex justify-between mt-2 '>
                    <p>SubTotal: </p>
                    <p>{'£' + basketTotal.toFixed(2)}</p>
                </div>
                <hr className='w-full bg-black h-[1px] my-1' />
            </div></div>
    )
}

export default ItemsInCart