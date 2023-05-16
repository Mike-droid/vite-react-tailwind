import PropTypes from 'prop-types'

export const OrdersCard = ({ totalPrice, totalProducts  }) => {
  OrdersCard.propTypes = {
    totalPrice: PropTypes.node.isRequired,
    totalProducts: PropTypes.node.isRequired,
  }

  return (
    <div className="flex justify-between items-center mb-3 border border-black">
      <p>
        <span>01.02.2023</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
      <p></p>
    </div>
  )
}
