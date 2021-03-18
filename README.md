# Groupomania - Créez un réseau social d'entreprise  
Projet 7 de la formation de développeur web d'Openclassrooms

## 📎 Stack

**Backend :**  
* Node.js
* Express
* Mysql
* bcrypt
* jwt
* multer
* file-system

**Frontend :**  
* Vue.js
* Sass
* Axios
* Vue-router
* Vuetify

## 🎯 Objectif

Créer un réseau social d'entreprise interne pour les employés de Groupomania. Le but de cet outil est de facilité les interactions entre collègues.  
Ceux-ci pourront se partager des photos/gif à souhait, les commenter ainsi que découvrir les profiles de leur collègue.

## 🚀 Préparation de la base de donnée

Base de donnée MySql  

* Enregistrer le fichier Groupomania_database.sql qui se trouve dans le dossier /backend

* Démarrer votre client MySql

* Lancer la commande `CREATE DATABASE Groupomania`

Pour importer la base de données, veillez à écrire le chemin complet d'accès complet vers le fichier Groupomania_database.sql ou placé le directement là où vous lancez votre terminal.

Si vous êtes sous Linux ↴
* mysql Groupomania < Groupomania_database.sql

Si vous êtes sous Windows ↴
* mysql -u[utilisateur] -p Groupomania < Groupomania_database.sql

Mise en place des variables d'environnement  

* Créer un fichier .ENV dans le dossier backend et entrez vos informations de connexion MySql, le port de votre souhaité (par défault 3000) ainsi que votre clé secrète de token  
copier coller dans le fichier .ENV ci-dessous le code et remplacer par vos informations  

`
PORT=3000  
USER_ENV='your_user_name_mysql'  
PASSWORD_ENV='your_password_mysql'
RANDOM_TOKEN_SECRET='your_secret_key'
`
## 🤖 Lancement du server backend

* Dans le terminal, à la racine du projet, sa placer dans le dossier backend avec la commande :  
`
cd backend
`
* Installer le serveur node et ses dépendances avec la commande :  
`
npm install
`
* Démarrer le serveur avec la commande :  
`
node server.js
`

## ☀️ Lancement du server frontend

* Dans le terminal, à la racine du projet, sa placer dans le dossier front avec la commande : 
`
cd frontend
`
* Installer Vue client avec la commande :
`
npm install -g @vue/cli
`
* Installer le serveur et ses dépendances avec la commande :  
`
npm install
`
* Démarrer le serveur avec la commande :
`
npm run serve
`

## 🔒 Compte admin

**Mail :** admin@groupomania  
**Mot de passe :** adminadmin