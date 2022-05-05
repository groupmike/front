import React from "react"
import { Link } from "react-router-dom"

const Drawer = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/tanguy">Tests Tanguy</Link>
				</li>
				<li>
					<Link to="/joel">Tests Joel</Link>
				</li>
				<li>
					<Link to="/nicolas">Tests Nicolas</Link>
				</li>
				<li>
					<Link to="/ingrid">Tests Ingrid</Link>
				</li>
				<li>
					<Link to="/thomas">Tests Thomas</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Drawer
