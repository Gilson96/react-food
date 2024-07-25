import { useState } from 'react'
import Card from './Card'
import { useGetFoodsQuery, useGetFoodQuery } from '../features/apiSlice'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/cartSlice'
const Dashboard = () => {
   
    const [getId, setGetId] = useState()
    const cart = useSelector((state) => state.cart.cart)
    const { data: foods = [], isLoading } = useGetFoodsQuery()
    const { data: food = [] } = useGetFoodQuery(getId)
    
    
    return (
        <div className='flex h-full w-full justify-evenly flex-wrap gap-5'>
           
            {foods.map(item => (
                <Card
                    id={item.id}
                    title={item.name}
                    price={item.price}
                    text={item.description}
                    setGetId={setGetId}
                    getId={item.id}
                    food={food}
                    image={item.image}
                />
            ))}

        </div>
    )
}

export default Dashboard