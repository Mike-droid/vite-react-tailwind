import PropTypes from 'prop-types'

import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
  }

  const [Count, setCount] = useState(0);
  const [IsProductDetailOpen, setIsProductDetailOpen] = useState(false);

  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  return(
    <ShoppingCartContext.Provider value={{
      Count,
      setCount,
      openProductDetail,
      closeProductDetail,
      IsProductDetailOpen
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
