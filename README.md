# Flutter Node.js Project

## Description

Ce projet est une application Flutter avec un backend Node.js. L'application permet aux utilisateurs d'envoyer des réclamations via une interface Flutter. Les réclamations sont ensuite stockées dans une base de données MongoDB.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Flutter](https://flutter.dev/docs/get-started/install)
- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)
- [Git](https://git-scm.com/downloads)

## Installation

### Cloner le dépôt

Clonez ce dépôt sur votre machine locale :

```sh
git clone https://github.com/HarounDziri/maybe_its_better_to_complain_back.git
cd maybe_its_better_to_complain_back

Configuration du backend Node.js
Accédez au répertoire backend :

sh

cd backend
Installez les dépendances Node.js :

sh

npm install
Configurez votre base de données MongoDB. Assurez-vous que MongoDB est en cours d'exécution sur votre machine ou sur un serveur accessible. Créez une base de données et obtenez l'URI de connexion.

Créez un fichier .env dans le répertoire backend et ajoutez-y votre URI MongoDB :

env
MONGODB_URI=mongodb://votre_utilisateur:votre_mot_de_passe@votre_hote:27017/votre_base_de_donnees

Démarrez le serveur Node.js :

sh

node index.js
Le serveur devrait fonctionner à l'adresse http://localhost:3000.

Configuration de l'application Flutter
Accédez au répertoire flutter_nodejs_project :

sh

cd ../flutter_nodejs_project
Installez les dépendances Flutter :

sh

flutter pub get
Ouvrez le projet Flutter dans votre éditeur de code préféré (comme VS Code ou Android Studio).

Modifiez l'adresse IP dans le fichier lib/main.dart pour qu'elle corresponde à l'adresse IP de votre serveur Node.js. Remplacez http://192.168.137.1:3000 par http://localhost:3000 ou par l'adresse IP correcte si vous utilisez un autre réseau.

Exécutez l'application Flutter sur un émulateur ou un appareil physique :

sh
flutter run



Utilisation
Ouvrez l'application Flutter.
Entrez une réclamation dans le champ de texte.
Appuyez sur le bouton "Send Reclamation".
La réclamation sera envoyée au serveur Node.js et stockée dans la base de données MongoDB.
Dépannage
Erreurs courantes
Erreur "Cannot POST /" :

Assurez-vous que l'URL dans votre code Flutter est correcte et correspond à l'adresse de votre serveur Node.js.
Erreur de connexion MongoDB :

Vérifiez que l'URI MongoDB dans le fichier .env est correct et que MongoDB est en cours d'exécution.
Problèmes de réseau :

Vérifiez que votre appareil ou émulateur Flutter peut atteindre le serveur Node.js sur le réseau. Si vous utilisez un émulateur, assurez-vous d'utiliser http://10.0.2.2:3000 pour accéder à localhost.
Contribution

Les contributions sont les bienvenues ! Veuillez soumettre une pull request ou ouvrir une issue pour discuter des changements.
