import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure
} from '@chakra-ui/react'
import { addToCart, removeFromCart,  incrementQuantity } from '../features/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

const CartCheckout = ({ food, isOpen, onClose }) => {

    const cart = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch()
    const cartLength = cart.filter(item => item.id)
    console.log(cartLength)
    return (
        <>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Your Cart</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {cart.filter(item => item.id).map(item =>
                            <div className='flex'>
                                <div className='flex'>
                                    <p>{item.name}</p>
                                    <p>x{item.quantity}</p>
                                </div>
                                <div>
                                    <p onClick={() => {dispatch( incrementQuantity(item.id));}}>+</p>  
                                </div>
                                <div>
                                    <p onClick={() => {dispatch( removeFromCart(item.id));}}>-</p>  
                                </div>
                            </div>
                        )}
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>


        </>
    )
}

export default CartCheckout