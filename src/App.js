import { useState } from 'react'
import './App.css';
import Menu from './components/Menu'
import Dashboard from './components/Dashboard'
import Checkout from './components/Checkout';
import CartCheckout from './components/CartCheckout'
import { useSelector, useDispatch } from 'react-redux'
import { useDisclosure } from '@chakra-ui/react'
import { useGetFoodQuery } from './features/apiSlice';

function App() {
  const items = useSelector((state) => state.cart.cart)
  const [onToggle, setOnToggle] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  console.log(items)

  return (
    <div className="flex flex-col h-screen w-full gap-12 bg-stone-900 p-3">

      <Menu onToggle={onToggle} setOnToggle={setOnToggle} onOpen={onOpen} />

      {onToggle &&
        <CartCheckout onClose={onClose} isOpen={isOpen}/>
      }

      <Dashboard />
    </div>
  );
}

export default App;
