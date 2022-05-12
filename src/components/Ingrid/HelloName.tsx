import React from "react"
import H1 from "../basics/H1"

type IngridProps = {
	name: string
}

const HelloName = ({ name }: IngridProps) => {
	return <H1>Hello {name}</H1>
}

export default HelloName
