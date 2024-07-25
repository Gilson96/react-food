import { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
} from '@chakra-ui/react'
import { useCreatePersonMutation, useGetPersonQuery } from '../features/apiSlice'
import Feedback from './Feedback'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart, incrementQuantity, basketTotal, selectBasketTotal } from '../features/cartSlice'

const Checkout = ({ isOpen, onClose, setFeedback, feedback }) => {

    const [createPerson] = useCreatePersonMutation()
    const { data: person = [], isLoading } = useGetPersonQuery()
    const basketTotal = useSelector(selectBasketTotal);

    const handleSubmit = (e) => {
        e.preventDefault();
        // built-in feature that helps
        // retrieving the form values
        const formData = new FormData(e.target)
        const userData = Object.fromEntries(formData.entries()); // {firstName: Gilson}
        const newPerson = { id: Math.floor(Math.random() * 101), ...userData }

        if (createPerson(newPerson)) {
            onClose();
            setFeedback(feedback);
        }
        console.log(newPerson)
    }

    console.log(person)

    return (
        <>
            <form onSubmit={handleSubmit} className='flex flex-col gap-10 py-2 px-4 h-full'>
                <ModalCloseButton />
                <ModalBody>
                    <p className='mb-2 font-bold italic'>Total Amount: <span className='font-normal not-italic'>£{basketTotal}</span></p>
                    <FormControl isRequired>
                        <FormLabel>Full Name</FormLabel>
                        <Input type='text' name='fullName' borderColor={'black'} />
                    </FormControl>
                    <FormControl  isRequired>
                        <FormLabel>Email Address</FormLabel>
                        <Input type='email' name='email' borderColor={'black'} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Street</FormLabel>
                        <Input type='text' name='street' borderColor={'black'} />
                    </FormControl>
                    <FormControl  isRequired>
                        <FormLabel>Post Code</FormLabel>
                        <Input type='text' name='postCode' borderColor={'black'} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>City</FormLabel>
                        <Input type='text' name='city' borderColor={'black'} />
                    </FormControl>
                </ModalBody>

                <div className='flex flex-col'>
                    <hr className='w-[90%] h-[1px] bg-black mb-2 ml-7' />
                    <div className='flex justify-end'>
                        <Button variant='ghost' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <button>
                            <Button colorScheme='orange'>Submit Order</Button>
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Checkout