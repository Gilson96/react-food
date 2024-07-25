import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cartSlice'
import {
    Card,
    CardBody,
    CardFooter,
    Heading,
    Button,
    ButtonGroup,
    Image,
    Text,
    Stack,
    Divider
} from '@chakra-ui/react'

const Carde = ({ title, price, text, food, setGetId, getId, image }) => {

    const dispatch = useDispatch()

    return (
        <Card maxW='sm' backgroundColor={'black'}>
            <CardBody display={'flex'} flexDirection={'column'} justifyContent={'center'} alignContent={'center'} textAlign={'center'}>
                <Image
                    src={image}
                    alt='food'
                    borderRadius='md'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md' color={'white'}>{title}</Heading>
                    <Text color={'white'}>
                        {text}
                    </Text>
                    <Text color='yellow.400' fontSize='2xl'>
                        £{price}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <div className='flex items-end'>
                        <button className='flex p-2 bg-yellow-500 rounded' onClick={() => { dispatch(addToCart(food)); setGetId(getId) }}>Add to Car</button>
                        t<span className='text-xs ml-2 text-yellow-500 italic'>(double-click to add)</span>
                    </div>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default Carde

