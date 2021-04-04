import React from 'react'
import {Link} from 'gatsby'


const NavItem = ({to, name}) => {
	return (
		  <Link className="page-link" to={to}>{name}</Link>
	)
}

export default NavItem;
