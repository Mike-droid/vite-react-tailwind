import PropTypes from 'prop-types'

import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
  }

  //* Shopping cart - increment quantity
  const [Count, setCount] = useState(0);

  //* Product detail - open/close
  const [IsProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  //* Product detail - show product
  const [ProductToShow, setProductToShow] = useState({
    title: "",
    price: "",
    description: "",
    images: [],
  });

  return(
    <ShoppingCartContext.Provider value={{
      Count,
      setCount,
      openProductDetail,
      closeProductDetail,
      IsProductDetailOpen,
      ProductToShow,
      setProductToShow
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
