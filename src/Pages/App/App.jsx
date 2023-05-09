import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'
import { SignIn } from '../SignIn'
import './App.css'

function App() {
  return (
    <div className='bg-red-600'>
      <Home></Home>
      <SignIn></SignIn>
      <MyAccount></MyAccount>
      <MyOrder></MyOrder>
      <MyOrders></MyOrders>
      <NotFound></NotFound>
    </div>
  )
}

export default App
