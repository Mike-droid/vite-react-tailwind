import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { Layout } from "../../Components/Layout"
import { OrdersCard } from "../../Components/OrdersCard"

export const MyOrders = () => {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      <h1>My Orders</h1>
      {
        context.Order.map((order, index) =>
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
        )
      }
    </Layout>
  )
}
