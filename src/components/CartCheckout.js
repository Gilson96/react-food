import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Divider
} from '@chakra-ui/react'
import { addToCart, removeFromCart, incrementQuantity, basketTotal, selectBasketTotal } from '../features/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/solid'
import ItemsInCart from './ItemsInCart'
import Checkout from './Checkout'

const CartCheckout = ({ food, isOpen, onClose, setFeedback, feedback }) => {
    const [onToggle, setOnToggle] = useState(false)
   
    const cart = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch()
    const cartLength = cart.filter(item => item.id)

    return (
        <>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent backgroundColor={'moccasin'}>
                    <ModalHeader>Your Cart</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                     {!onToggle? <ItemsInCart/> : <Checkout onClose={onClose} feedback={feedback} setFeedback={setFeedback}/>}
                    </ModalBody>
                    <ModalFooter>

                        <Button variant='ghost' hidden={onToggle && true} mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button colorScheme='orange' hidden={onToggle && true} onClick={() => {setOnToggle(true)}}>Go to Checkout</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>


        </>
    )
}

export default CartCheckout