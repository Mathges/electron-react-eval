# CDC TurboMetrics

L'application consiste en un dahsboard qui va récupérer diverses metriques et les exposer à l'utilisateur. Si possible, l'app tournera à la place du fond d'écran.

## IMPORTANT

Les métriques ne sont pas forcément accessibles en fonction de l'OS etc... Il se peut donc que certaines valeurs ne s'affichent pas. Pour plus d'infos, checker [ici](https://systeminformation.io/).
Les métriques ne fonctionnant pas sur mon environnement seront indiquées dans la liste plus bas, en guise de rappel pour plus tard.

## Métriques

Dans un premier temps, les métriques surveillées seront:
- cpu
- ram
- disk usage
- network I/O
(d'autres seront surement rajoutées plus tard)

Plusieurs manières de display des metrics seront utilisées:
- consommation instantanée...
- consommation overtime...
- ratio consommation actuelle/maximum...

## Utilisateur

Du fait du but de l'app, il n'y aura que peu d'interactions avec l'utilisateur.
Cela dit l'utilisateur pourra:
- changer de theme de couleur (couleurs basiques pour le moment)
- choisir les metriques afficher en arrière plan
- le tout par le biais d'une fenêtre 

## Roadmap

### 1ère partie

- [x] Setup appli electron  
- [x] Récupération des métriques (utlisation d'un package type os-utils):
    POC
    - [x] cpu-current-percentage
    - [x] cpu-temperature (/!\ renvoie null pour cause d'incompatibilité, à vérifier plus tard)
    - [x] cpu-overtime
    - [x] ram-current-percentage
    - [x] ram-overtime

    BONUSES
    - [ ] network-input-overtime
    - [ ] network-output-overtime
    - [ ] disk-input-overtime
    - [ ] disk-output-overtime
    - [ ] disks-usage

### 2ème partie

- [x] Création des composants du POC (graphiques, jauges...)
- [x] Création de la fenêtre d'accueil
- [x] Assemblage du dashboard

### 3ème partie

- [ ] création de thèmes (2 ou 3 en POC)

### 4ème partie

- [x] mise en place de la possibilité de mettre en place l'app en "wallpaper"
- [x] l'utilisateur peut choisir les metrics a display

## Rendu

La vidéo de rendu est disponible [ici](https://youtu.be/mnrE84-wnP0)

## Notes

Au cas ou je reprends le projet:
- en cas de double screen, si la résolution est supérieure a 1920x1080, le dashboard ne prend pas tout l'écran
- si le dashboard est set et que l'utilisateur modifie le form (clique sur un switch) l'appli plante

---

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
