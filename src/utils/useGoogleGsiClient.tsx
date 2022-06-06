import React from "react"

/**
 * Utilisation du client GSI fourni par Google API
 * @author Thomas Savournin <tosave.vbl@gmail.com>
 * @example const { user, setParams, setInit } = useGoogleGsiClient(client_id, true)
 * @example setParams({ ...params, oauth2: true, oauth2_scope: "https://www.googleapis.com/auth/calendar" })
 * @example setInit(true)
 * @param client_id ID du client Google API (peut également être défini avec setParams)
 * @param button Utilisation de la connexion par Bouton (peut également être défini avec setParams)
 * @param oneTap Utilisation de la connexion rapide "One Tap" (peut également être défini avec setParams)
 * @param oauth2 Utilisation de la connexion avancée Oauth2 (peut également être défini avec setParams)
 * @return user Informations en retour à la connexion Bouton ou One Tap
 * @return jwtToken Token JWT en réponse à l'authentification Oauth2
 * @return gsiScriptLoaded Le script à bien été chargé dans le DOM
 * @return params Paramètres actuels
 * @return setParams Configuration des paramètres avant initialisation
 * @return Init État d'initialisation du script
 * @return setInit Mettre sur true pour initier le script après avoir configuré les paramètres
 */

export default function useGoogleGsiClient(
	client_id: string | null = null,
	button: boolean | null = null,
	oneTap: boolean | null = null,
	oauth2: boolean | null = null
): {
	user: any
	jwtToken: any
	accessToken: any
	gsiScriptLoaded: boolean | undefined
	params: any
	setParams: React.Dispatch<any>
	init: boolean
	setInit: React.Dispatch<React.SetStateAction<boolean>>
} {
	// Paramètres par défaut
	const [params, setParams] = React.useState<any>({
		client_id: client_id ?? "",
		script_id: "google-client-script",
		script_async: true,
		script_parent: "body",
		script_url: "https://accounts.google.com/gsi/client",
		initialize_auto_select: true,
		initialize_cancel_on_tap_outside: false,
		initialize_nonce: Math.random().toString(),
		button: button ?? false,
		button_divId: "buttonDiv",
		button_custom: {},
		oneTap: oneTap ?? false,
		oauth2: oauth2 ?? false,
		oauth2_scope: null,
		oauth2_prompt: "consent", // "", "none", "consent", "select_account"
		access: false,
	})

	const [init, setInit] = React.useState<boolean>(false)

	const [user, setUser] = React.useState<any>()
	const [jwtToken, setJwtToken] = React.useState<any>()
	const [accessToken, setAccessToken] = React.useState<any>()

	const [gsiScriptLoaded, setGsiScriptLoaded] = React.useState<boolean>()

	React.useEffect(() => {
		if (!init) return

		initGoogleClientScript()
	})

	// On ajoute un script dans le DOM et on l'active (onload)
	const initGoogleClientScript = () => {
		if (user?._id || jwtToken || accessToken || gsiScriptLoaded) return

		const script = document.createElement("script")
		script.src = params.script_url
		script.onload = initGsiScript
		script.async = params.script_async
		script.id = params.script_id
		document.querySelector(params.script_parent)?.appendChild(script)
	}

	const initGsiScript = () => {
		if (!window.google || gsiScriptLoaded) return

		// Le script GSI est chargé
		console.info("GSI script loaded")
		setGsiScriptLoaded(true)

		// Si une authentification oauth2 est demandée
		// https://developers.google.com/identity/oauth2/web/guides/migration-to-gis#implicit_flow_examples
		if (params.access) {
			// On initialise la demande d'AccessToken (pour authentification avec scope)
			const client = window.google.accounts.oauth2.initTokenClient({
				client_id: params.client_id,
				scope: params.oauth2_scope,
				callback: (tokenResponse: any) => {
					setAccessToken(tokenResponse.access_token)
					console.info("AccessToken récupéré")
				},
				prompt: params.oauth2_prompt,
			})

			// On affiche la popup de validation Google
			console.info("get access Authentification")
			client.requestAccessToken()
		}

		if (params.oauth2) {
			// On initialise la demande de jeton JWT (pour authentification avec scope)
			const client = window.google.accounts.oauth2.initCodeClient({
				client_id: params.client_id,
				scope: params.oauth2_scope,
				ux_mode: "popup",
				callback: (response: any) => {
					setJwtToken(response.code)
					console.info("Token JWT récupéré")
				},
			})

			// On affiche la popup de validation Google
			console.info("get oauth2 validation")
			client.requestCode()
		}

		// Si une connexion rapide est demandée (button ou oneTap)
		if (params.button || params.oneTap) {
			// On initialise une connexion rapide
			window.google.accounts.id.initialize({
				client_id: params.client_id,
				callback: handleGoogleSignIn,
				auto_select: params.initialize_auto_select,
				cancel_on_tap_outside: params.initialize_cancel_on_tap_outside,
				nonce: params.initialize_nonce,
			})

			// On remplace la DIV par le bouton de connexion
			if (params.button) {
				window.google.accounts.id.renderButton(document.getElementById(params.button_divId), {
					type: "standard",
					theme: "outline",
					size: "large",
					width: "300",
					...params.button_custom,
				})
				console.info("Init connexion with button")
			}

			// On utilise la nouvelle connexion "One Tap"
			if (params.oneTap) {
				window.google.accounts.id.prompt((notification) => {
					if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
						console.info("Problème de connexion One Tap")
					} else {
						console.info("Connexion One Tap réussie")
					}
				})
				console.info("Init One Tap prompt")
			}
		}
	}

	const handleGoogleSignIn = (res: CredentialResponse) => {
		if (!res.clientId || !res.credential) return

		// On récupère les informations d'utilisateur
		setUser(res.credential)
		console.info("User JWT récupéré")
	}

	return {
		user: user,
		jwtToken: jwtToken,
		accessToken: accessToken,
		gsiScriptLoaded: gsiScriptLoaded,
		params: params,
		setParams: setParams,
		init: init,
		setInit: setInit,
	}
}

/**
 * Connexion par API Google GSI
 * https://developers.google.com/identity/gsi/web
 * @author Thomas Savournin <tosave.vbl@gmail.com>
 * @param client_id ID du client Google API, ne s'exécute pas si null
 * @param button Utilisation du bouton de connexion
 * @param oneTap Utilisation de la connexion rapide One Tap
 * @param newParams Autres paramêtres useGoogleGsiClient
 * @return user Informations de connexion
 */
export const useConnect = (
	client_id: string | null | undefined,
	button: boolean = true,
	oneTap: boolean = false,
	newParams = {}
) => {
	const { user, setInit, params, setParams } = useGoogleGsiClient(client_id, button, oneTap)

	React.useEffect(() => {
		setParams({ ...params, ...newParams })
		setInit(true)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return user
}

/**
 * Obtention d'un token d'accès avec les droits nécessaires
 * https://developers.google.com/identity/oauth2/web/guides/use-token-model
 * @author Thomas Savournin <tosave.vbl@gmail.com>
 * @example const { accessToken } = useScopeAccess(GOOGLE_CLIENT_ID, "https://www.googleapis.com/auth/calendar")
 * @param client_id ID du client Google API
 * @param scope Liste des scopes à utiliser pour la validation
 * @returns accessToken token d'identification avec les droits scope configurés
 */
export const useScopeAccess = (
	client_id: string,
	scope: string = "",
	session: boolean = true,
	prompt: string = "consent"
) => {
	const { accessToken, params, setParams, init, setInit } = useGoogleGsiClient(client_id)

	React.useEffect(() => {
		if (!client_id || init || accessToken || sessionStorage.getItem("accessToken")) return
		setParams({ ...params, access: true, oauth2_scope: scope, oauth2_prompt: prompt })
		setInit(true)
	}, [accessToken, client_id, init, params, prompt, scope, setInit, setParams])

	React.useEffect(() => {
		if (!accessToken || !session) return
		sessionStorage.setItem("accessToken", accessToken)
	}, [accessToken, session])

	return { accessToken: sessionStorage.getItem("accessToken") ?? accessToken }
}

// Todo: Déconnexion
