import { useState } from 'react'
import Card from './Card'

import { useGetFoodsQuery, useGetFoodQuery } from '../features/apiSlice'


const Dashboard = () => {
    const [getId, setGetId] = useState()
    const { data: foods = [], isLoading } = useGetFoodsQuery()
    const { data: food = [] } = useGetFoodQuery(getId)
    
    return (
        <div className='flex h-full w-full justify-evenly flex-wrap'>
           
            {foods.map(item => (
                <Card
                    id={item.id}
                    title={item.name}
                    price={parseInt(item.price)}
                    text={item.description}
                    setGetId={setGetId}
                    getId={item.id}
                    food={food}
                />
            ))}

        </div>
    )
}

export default Dashboard