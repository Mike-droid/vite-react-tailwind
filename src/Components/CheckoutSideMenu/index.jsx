import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'
import { calculateTotalPrice } from '../../utils'

import './styles.css'

export const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = context.CartProducts.filter((product) => product.id !== id)
    context.setCartProducts(filteredProducts)
    context.setCount(context.Count - 1)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: '01.02.2023',
      products: context.CartProducts,
      totalProducts: context.CartProducts.length,
      totalPrice: calculateTotalPrice(context.CartProducts),
    };

    context.setOrder([...context.Order, orderToAdd]);
    context.setCartProducts([]);
    context.setCount(0);
  }

  return (
    <aside
      className={`${context.IsCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed top-20 right-0 border border-black rounded-lg bg-white`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My order</h2>
        <button onClick={() => context.closeCheckoutSideMenu()}>
          {/* X close icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <div className='px-6 overflow-y-scroll flex-1'>
        {
          context.CartProducts.map((product) => (
              <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.images[0]}
                price={product.price}
                handleDelete={handleDelete}
              />
            )
          )
        }
      </div>
      <div className='px-6 mb-6'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>
            ${calculateTotalPrice(context.CartProducts)}
          </span>
        </p>
        <Link to='/my-orders/last'>
          <button
            onClick={() => handleCheckout()}
            className='w-full bg-black py-3 text-white rounded-lg'
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  )
}
