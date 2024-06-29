# Notas App

Una aplicación simple de Angular para crear, ver y eliminar notas utilizando Firebase Realtime Database.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) (versión 12 o superior)
- [Angular CLI](https://angular.io/cli) (versión 12 o superior)

## Configura Firebase

Ve a la Consola de Firebase (https://console.firebase.google.com/) y crea una cuenta si aún no tienes una.

Crea un nuevo proyecto.

Ve a la sección "Configuración del proyecto" y selecciona "Agregar una nueva aplicación web".

Registra tu aplicación y copia las claves de configuración de Firebase que se te proporcionen.

Crea un archivo src/environments/environment.ts basado en el archivo de ejemplo src/environments/environment.example.ts:

cp src/environments/environment.example.ts src/environments/environment.ts

Luego, abre el archivo src/environments/environment.ts y reemplaza los valores con tus propias claves de configuración de Firebase:

## Angular

Sitúate en la carpeta que descargaste.

Ejecuta el siguiente comando para instalar las dependencias necesarias:

npm install 

## Ejecución

ng serve -o
