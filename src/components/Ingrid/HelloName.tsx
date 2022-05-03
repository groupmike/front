import React from "react"

type IngridProps = {
	name: string
}

function HelloName({ name }: IngridProps) {
	return <>Hello {name}</>
}

export default HelloName
