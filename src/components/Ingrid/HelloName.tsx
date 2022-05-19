import React from "react"
import H1 from "../basics/H1"
import Paragraph from '../basics/Paragraph'

type IngridProps = {
	name: string
}

const HelloName = ({ name }: IngridProps) => {
	return (
		<>
			<H1>
				Hello {name}
			</H1>
			<Paragraph>
				Vous aimez organiser des fêtes participatives, dans l'esprit de la fête des voisins.
			</Paragraph>
		</>
	)
}

export default HelloName
