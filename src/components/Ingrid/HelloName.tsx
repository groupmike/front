import React from "react"

type IngridProps = {
	name: string
}

const HelloName = ({ name }: IngridProps) => {
	return <p className="text-parfete-rose font-handwriting">Hello {name}</p>
}

export default HelloName
