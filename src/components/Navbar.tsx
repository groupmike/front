import { Link } from "react-router-dom"

const Navbar = () => {
	return (
		<nav className="
		relative
		w-full
		flex flex-wrap
		items-center
		justify-between
		py-4
		bg-gray-100
		text-gray-500
		hover:text-gray-700
		focus:text-gray-700
		shadow-lg
		navbar navbar-expand-lg navbar-light">
			<ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
				<li className="nav-item p-2">
					<Link to="/">Home</Link>
				</li>
				<li className="nav-item p-2">
					<Link to="/login">Log in</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
