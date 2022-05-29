# Parfete Front

## Prérequis

Installer Docker sur sa machine.

## Installation du projet

### Récupération sur GIT

Par HTTPS

`git clone https://github.com/parfete/front.git`

Par SSH

`git clone git@github.com:parfete/front.git`

### Utilisation de l'api en local

A la racine du projet il y a un fichier docker-compose.yml. Il suffit de lancer la commande suivante pour lancer l'api sur sa machine :

```bash
docker compose up -d
```

et pour stopper l'api et clean les instances

```bash
docker compose down
```

### Workspace pour VSCode

Le fichier `front.code-workspace` contient les modules VSCode et la configuration à utiliser

Aller sur le fichier `front.code-workspace` puis `Ouvrir un espace de travail`

### Workspace avec Dev Container

    POUR LE MOMENT N'EST PAS FONCTIONNEL

Installer l'extension VSCode `ms-vscode-remote.remote-containers`

Ouvrir une fenêtre distante (logo vert en bas à gauche de VSCode)

### Installation des dépendances

`npm install`

### Démarrer le mode développement (port 3000 par défaut)

`npm start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
