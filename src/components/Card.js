import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { addToCart, increment } from '../features/cartSlice'
import { useGetFoodsQuery } from '../features/apiSlice'
import image from '../assets/pngtree-samosa-halal-food-png-image_13067318.png'
const Card = ({ title, price, text, food, id, setGetId, getId }) => {
    const cart = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch()


   
    return (
        <div className='flex flex-col justify-evenly items-center bg-black h-[18rem] w-[18rem] rounded-md'>
            <div>
                <img src={image} alt='#' />
                <p className='font-bold text-white'>{title}</p>
                <p className='font-bold text-white'>{price}</p>
                <p className='font-bold text-white'>{text}</p>
            </div>
            <div>
                <button className='flex p-2 bg-yellow-500 rounded' onClick={() => { dispatch(addToCart(food)); setGetId(getId) }}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Card