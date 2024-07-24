import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Checkout from './Checkout'


const Menu = ({setOnToggle, onToggle, onOpen}) => {
    
    const cart = useSelector((state) => state.cart.cart)
    const cartLength = cart.filter(item => item.id).length
    

    return (
        <div className='flex justify-between  mx-3'>
            <p className='text-yellow-500 text-2xl font-bold'>React Food</p>
            <p className='text-yellow-500 mt-1' onClick={() => { setOnToggle(!onToggle); onOpen(); }}>Cart({cartLength})</p>
           
        </div>
    )
}

export default Menu