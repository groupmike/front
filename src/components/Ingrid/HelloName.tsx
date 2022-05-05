import React from "react"

type IngridProps = {
	name: string
}

const HelloName = ({ name }: IngridProps) => {
	return <>Hello {name}</>
}

export default HelloName
