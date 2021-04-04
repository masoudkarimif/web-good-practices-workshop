import React from "react"
import { Link } from "gatsby"

const NavItem = ({ to, name, active }) => {
  return (
    <Link className={`page-link ${active ? "selected" : ""}`} to={to}>
      {name}
    </Link>
  )
}

export default NavItem
