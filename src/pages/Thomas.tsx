import React from "react"
import { AuthContext } from "../components/AuthProvider"
import { useConnect } from "../utils/useGoogleGsiClient"
import H1 from "../components/basics/H1"
import Paragraph from "../components/basics/Paragraph"

const Thomas = () => {
	// On appel le context "AuthContext" pour y stocker le userToken
	const { userToken, setUserToken } = React.useContext(AuthContext)

	// On fait une demande de connexion One Tap à google
	// Todo: Ajouter la gestion de session
	const user = useConnect(process.env.REACT_APP_GOOGLE_CLIENT_ID, true, false)

	// On stock le userToken dans le contexte (pour utilisation ailleur dans le projet)
	React.useEffect(() => {
		if (userToken) return
		setUserToken(user)
	}, [setUserToken, user, userToken])

	return (
		<>
			<H1>GSI Client Google</H1>
			<br />
			<Paragraph>Connexion à l'aide de la nouvelle API de Google</Paragraph>
			<br />
			<Paragraph>userToken: {userToken ?? "non connecté"}</Paragraph>
			<br />
			{userToken ? <Paragraph>Connexion OK (Todo: déconnexion)</Paragraph> : <div id="buttonDiv"></div>}
		</>
	)
}

export default Thomas
