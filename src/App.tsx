import { Routes, Route } from "react-router-dom" // Gestion des routes

import Navbar from "./components/Navbar" // Le menu de navigation
import { Login } from "./components/login/Login"

function App() {
	return (
		<>
			<Navbar />
			<hr />
			<main>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</main>
		</>
	)
}

export default App
