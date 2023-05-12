import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'
import { SignIn } from '../SignIn'
import { Navbar } from '../../Components/Navbar'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'

import { routes } from '../../routes'

import './App.css'

const AppRoutes = () => {
  // Function to return the corresponding component for a given path
  const getElementForPath = (path) => {
    switch (path) {
      case '/':
        return <Home />;
      case '/my-account':
        return <MyAccount />;
      case '/my-order':
        return <MyOrder />;
      case '/my-orders':
        return <MyOrders />;
      case '/sign-in':
        return <SignIn />;
      default:
        return <NotFound />;
    }
  };

  let webRoutes = useRoutes(
    routes.map((route) => ({
      path: route.path,
      element: getElementForPath(route.path),
    }))
  );

  return webRoutes;
};

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar/>
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
