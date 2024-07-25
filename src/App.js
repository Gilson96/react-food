import { useState } from 'react'
import './App.css';
import Menu from './components/Menu'
import Dashboard from './components/Dashboard'
import Checkout from './components/Checkout';
import CartCheckout from './components/CartCheckout'
import { useSelector, useDispatch } from 'react-redux'
import { useDisclosure } from '@chakra-ui/react'
import { useGetFoodQuery } from './features/apiSlice';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
function App() {
  const items = useSelector((state) => state.cart.cart)
  const [onToggle, setOnToggle] = useState(false)
  const [feedback, setFeedback] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()

  console.log(items)

  return (
    <div className="flex flex-col h-full0 w-full gap-12 bg-stone-900 p-3">

      <Menu onToggle={onToggle} setOnToggle={setOnToggle} onOpen={onOpen} />

      {onToggle &&
        <CartCheckout onClose={onClose} isOpen={isOpen} setFeedback={setFeedback} feedback={true} />
      }
      {feedback &&
        <Alert status='success'>
          <AlertIcon />
          Your order was successfully submitted
        </Alert>
      }

      <Dashboard />
    </div>
  );
}

export default App;
