import PropTypes from 'prop-types'

import { createContext } from "react";

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
  }

  return(
    <ShoppingCartContext.Provider>
      {children}
    </ShoppingCartContext.Provider>
  )
}
