# CDC TurboMetrics

L'application consiste en un dahsboard qui va récupérer diverses metriques et les exposer à l'utilisateur. Si possible, l'app tournera à la place du fond d'écran.

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
- choisir si l'app tourne à la place du fond d'écran ou au premier plan

## Roadmap

### 1ère partie

- [ ] Setup appli electron  
- [ ] Récupération des métriques (utlisation d'un package type os-utils)

### 2ème partie

- [ ] Création des composants (graphiques, jauges...)

### 3ème partie

- [ ] création de thèmes (2 ou 3 en POC)

#### 4ème partie

- [ ] mise en place de la possibilité de mettre en place l'app en "wallpaper"
