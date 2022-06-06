import React from "react"

export const AuthContext = React.createContext<any>({})

export default function AuthProvider({ children }: any) {
	const [userToken, setUserToken] = React.useState()

	React.useEffect(() => {
		if (!userToken) return
		console.info("userToken à été modifié")
	}, [userToken])

	return (
		<AuthContext.Provider
			value={{
				userToken,
				setUserToken,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}
