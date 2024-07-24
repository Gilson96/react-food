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

const Checkout = ({ isOpen, onClose }) => {
    const [feedback, setFeedback] = useState(false)
    const [createPerson] = useCreatePersonMutation()
    const { data: person = [], isLoading } = useGetPersonQuery()

    const handleSubmit = (e) => {
        e.preventDefault();
        // built-in feature that helps
        // retrieving the form values
        const formData = new FormData(e.target)
        const userData = Object.fromEntries(formData.entries()); // {firstName: Gilson}
        const newPerson = { id: Math.floor(Math.random() * 101), ...userData }

        if (createPerson(newPerson)) {
            onClose();
            setFeedback(true);
        }
        console.log(newPerson)
    }

    console.log(person)

    return (
        <>
        {feedback && <Feedback/>}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent backgroundColor={'moccasin'} >
                    <ModalHeader>Checkout</ModalHeader>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-10 py-2 px-4 h-full'>
                        <ModalCloseButton />
                        <ModalBody>
                            <FormControl>
                                <FormLabel>Full Name</FormLabel>
                                <Input type='text' name='fullName' borderColor={'black'}/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Email Address</FormLabel>
                                <Input type='email' name='email' borderColor={'black'}/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Street</FormLabel>
                                <Input type='text' name='street' borderColor={'black'}/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Post Code</FormLabel>
                                <Input type='text' name='postCode' borderColor={'black'}/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>City</FormLabel>
                                <Input type='text' name='city' borderColor={'black'}/>
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button variant='ghost' mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <button>
                                <Button colorScheme='orange'>Submit Order</Button>
                            </button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Checkout