import React from "react"
import HelloName from "../components/Nicolas/HelloName"

const Nicolas = () => {
	return <HelloName name="Nicolas" />
}

export default Nicolas

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
