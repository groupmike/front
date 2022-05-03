import React from "react"
import HelloName from "../components/Ingrid/HelloName"

function Ingrid() {
	return <HelloName name="Ingrid" />
}

export default Ingrid

// Exemple avec des props définis
type UnComposantProps = {
	unTexte: string
	unTexteOptionnel?: string
	unNombre: number
	unTableau: []
	unObjet: {}
	unTableauDeNombres: number[]
	nimporteQuoi: any
}
export const UnComposant = ({ unTexte }: UnComposantProps) => <>{unTexte}</>
