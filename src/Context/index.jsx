import PropTypes from 'prop-types'

import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
  }

  const [Count, setCount] = useState(0);

  return(
    <ShoppingCartContext.Provider value={{
      Count,
      setCount
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
