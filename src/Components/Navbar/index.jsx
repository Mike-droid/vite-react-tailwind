import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { menu1, menu2 } from "../../routes";

export const Navbar = () => {
  const context = useContext(ShoppingCartContext)

  const textDecoration = 'underline underline-offset-4'

  return (
    <nav className="flex items-center justify-between bg-white w-full py-5 px-8 text-sm fixed z-10 top-0">
      <ul className='flex gap-3 items-center'>
        {menu1.map(link => (
          <li
            key={link.text}
            className={link.className}
          >
            <NavLink
              to={link.to}
              className={({isActive})=> isActive ? textDecoration : undefined }
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className='flex gap-3 items-center'>
        {menu2.map(link => (
          <li
            key={link.text}
            className={link.className}
          >
            <NavLink
              to={link.to}
              className={({isActive})=> isActive ? textDecoration : undefined }
            >
              {link.to === '/cart' ? `${link.text} ${context.Count}` : link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}