import React from "react"
import HelloName from "../components/Thomas/HelloName"

function Thomas() {
	return <HelloName name="Thomas" />
}

export default Thomas

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
