import React from "react"

import "../assets/Exemple/Exemple.css"
import logo from "../assets/Exemple/logo.svg"

const Exemple = () => {
	return (
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
				Edit <code>src/App.tsx</code> and save to reload.
			</p>
			<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
				Learn React
			</a>
		</header>
	)
}

export default Exemple
