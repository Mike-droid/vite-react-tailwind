import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { Layout } from "../../Components/Layout"
import { OrderCard } from "../../Components/OrderCard"

export const MyOrder = () => {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      MyOrder
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
