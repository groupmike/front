import React from "react"
import HelloName from "../components/Tanguy/HelloName"

const Tanguy = () => {
	return <HelloName name="Tanguy" />
}

export default Tanguy

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
