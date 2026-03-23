## Tecnologías utilizadas

- **Entorno & Framework:** Node.js, Express.js
- **Lenguaje:** TypeScript
- **Base de Datos & ORM:** PostgreSQL, Sequelize
- **Herramientas extra:** CORS, Express-Validator, Dotenv

## Requisitos previos

Asegúrate de tener instalado en tu entorno local:
* **Node.js** (v18 o superior recomendado)
* **npm** (Gestor de paquetes de Node)
* Una instancia de **PostgreSQL** corriendo

## Instrucciones de Instalación y Configuración

Sigue estos pasos exactos para levantar el proyecto en tu máquina local:

### 1. Instalar dependencias
Abre tu terminal, navega hasta la carpeta raíz del proyecto (donde se encuentra el archivo `package.json`) y ejecuta el siguiente comando para descargar todos los módulos necesarios:

## bash
npm install


## DB
DB_URL=postgresql://tu_usuario:tu_contraseña@localhost:5432/nombre_de_tu_bd

CREATE TABLE guitarra (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    precio FLOAT NOT NULL,
    img VARCHAR(255) NOT NULL
);


Endpoints Principales (Rutas)
La API cuenta con las siguientes rutas para interactuar con el catálogo desde el frontend:
Método HTTP
## RutaDescripciónGET/api/guitarras
Obtiene el catálogo completo de guitarras.
## GET/api/guitarras/:id
Busca una guitarra específica por su ID.
## POST/api/guitarras
Registra una nueva guitarra en el inventario.
## PUT/api/guitarras/:id
Actualiza la información de una guitarra existente.
## DELETE/api/guitarras/:id
Elimina una guitarra del registro.
