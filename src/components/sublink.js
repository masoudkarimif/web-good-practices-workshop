import React from 'react'
import {Link} from 'gatsby'


const SubLink = ({to, name}){
		return (
			<Link className="site-title site-subroute" to={to}>;{name}</Link>
		)
}



export default SubLink;
