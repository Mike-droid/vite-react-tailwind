import PropTypes from 'prop-types'

export const OrdersCard = ({ totalPrice, totalProducts  }) => {
  OrdersCard.propTypes = {
    totalPrice: PropTypes.node.isRequired,
    totalProducts: PropTypes.node.isRequired,
  }

  return (
    <section className="flex justify-between items-center rounded-lg border border-black w-full p-4 mb-4">
      <section className='flex justify-between w-full'>
        <p className='flex flex-col'>
          <span className='font-light'>
            01.02.2023
          </span>
          <span className='font-light'>
            {totalProducts} articles
          </span>
        </p>
        <p className='flex items-center gap-2'>
          <span className='font-medium text-2xl'>
            ${totalPrice}
          </span>
          {/** chevron right icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
          </svg>
        </p>
      </section>
    </section>
  )
}
