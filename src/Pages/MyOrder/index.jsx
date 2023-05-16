import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { Layout } from "../../Components/Layout"
import { OrderCard } from "../../Components/OrderCard"

export const MyOrder = () => {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className="flex w-80 justify-center items-center relative mb-6">
        {/* chevron left icon */}
        <Link to={'/my-orders'} className="absolute left-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
          </svg>
        </Link>
        <h1>
          My Order
        </h1>
      </div>
      <div className='flex flex-col w-80'>
        {
          context.Order?.slice(-1)[0].products.map((product) => (
              <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.images[0]}
                price={product.price}
              />
            )
          )
        }
      </div>
    </Layout>
  )
}
