import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom" // Gestion des routes

import Drawer from "./components/Drawer" // Le menu de navigation
import Exemple from "./pages/Exemple" // L'exemple de base de react (je l'ai déplacé)

// Pour faire des tests et des Git push !
import Tanguy from "./pages/Tanguy"
import Joel from "./pages/Joel"
import Nicolas from "./pages/Nicolas"
import Ingrid from "./pages/Ingrid"
import Thomas from "./pages/Thomas"

function App() {
	/**
	 * Drawer : Composant perso qui contient le menu
	 * react-router-dom : Gestion des routes
	 * Doc : https://reactrouter.com/docs/en/v6
	 * Router : Interface de react-router-dom pour les routes
	 * Routes : Liste de routes
	 * Route : Définition d'une route
	 */
	return (
		<Router>
			<div>
				<Drawer />
				<hr />
				<Routes>
					<Route path="/" element={<Exemple />} />
					<Route path="/tanguy" element={<Tanguy />} />
					<Route path="/joel" element={<Joel />} />
					<Route path="/nicolas" element={<Nicolas />} />
					<Route path="/ingrid" element={<Ingrid />} />
					<Route path="/thomas" element={<Thomas />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
