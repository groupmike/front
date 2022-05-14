import React from "react"
import Facebook from './FacebookLoginComponent'

type IngridProps = {
	name: string
}

const HelloName = ({ name }: IngridProps) => {
	return <>
			Hello {name}
			<div><Facebook /></div>
		   </>
}

export default HelloName
