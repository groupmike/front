import React from "react"
import HelloName from "../components/Joel/HelloName"

function Joel() {
	return <HelloName name="Joel" />
}

export default Joel

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
