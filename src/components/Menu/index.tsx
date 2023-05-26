import { HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "../../types";

import "./style.scss"

interface MenuProps extends HTMLAttributes<HTMLMenuElement> {
  menuInfo: MenuItem[];
}

const Menu = ({ menuInfo, ...rest}: MenuProps) => {
  return (
    <nav>
      <ul>
        {menuInfo.map( (menuItem, index) => {
          return (
            <li key={index}>
              <Link to={menuItem.link} >
                {menuItem.label}
              </Link>
            </li>
          )
        } )}
      </ul>
    </nav>
  )
}

export default Menu