import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types'
import { apiUrl } from "../api";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
  }

  //* Shopping cart - increment quantity
  const [Count, setCount] = useState(0);

  //* Shopping Cart - add products to cart
  const [CartProducts, setCartProducts] = useState([]);

  //* Product detail - open/close
  const [IsProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  //* CheckoutSideMenu - open/close
  const [IsCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  //* Product detail - show product
  const [ProductToShow, setProductToShow] = useState({
    title: "",
    price: "",
    description: "",
    images: [],
  });

  //* Shopping Cart - Order
  const [Order, setOrder] = useState([])

  //* Get products
  const [Items, setItems] = useState(null);
  const [FilteredItems, setFilteredItems] = useState(null);

  //* get products by title
  const [SearchByTitle, setSearchByTitle] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/products`)
        const data = await response.json()
        setItems(data)
      } catch (error) {
        console.error(`Oh no, ocurrió un error: ${error}`);
      }
    }
    fetchData()
  }, [])

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  useEffect(() => {
    if (SearchByTitle) {
      setFilteredItems(filteredItemsByTitle(Items, SearchByTitle))
    }
  }, [Items, SearchByTitle]);

  return(
    <ShoppingCartContext.Provider value={{
      Count,
      setCount,
      openProductDetail,
      closeProductDetail,
      IsProductDetailOpen,
      ProductToShow,
      setProductToShow,
      CartProducts,
      setCartProducts,
      IsCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      Order,
      setOrder,
      Items,
      setItems,
      SearchByTitle,
      setSearchByTitle,
      FilteredItems,
      setFilteredItems
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
