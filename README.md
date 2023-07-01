# Railway REST API Project using Node.js, Express, MySQL, and Railway

This is a project that implements a REST API using Node.js, Express, MySQL, and Railway.

## Description

The project consists of a RESTful application that utilizes Node.js and Express as the server framework, MySQL as the database, and Railway as the cloud hosting service. It provides an API for performing CRUD (Create, Read, Update, Delete) operations on a specific entity.

## Technologies Used

- ![Node.js](https://img.shields.io/badge/Node.js-green?logo=node.js&logoColor=white&style=flat)
- ![Express](https://img.shields.io/badge/Express-blue?logo=express&logoColor=white&style=flat)
- ![MySQL](https://img.shields.io/badge/MySQL-blue?logo=mysql&logoColor=white&style=flat)
- ![Railway](https://img.shields.io/badge/Railway-lightgrey?logo=railway&logoColor=white&style=flat)

## Project Structure

The project follows a common directory structure used in Node.js applications. Below is a brief description of the project structure:

- `src`: Main directory that contains the application source code.
  - `config`: Configuration files for the database and other environment values.
  - `controllers`: Controllers that handle HTTP requests and perform operations on the database.
  - `routes`: Definition of API routes and their binding to corresponding controllers.
  - `config.js`: This file contains the application configuration variables, such as the database URL and credentials, as well as other runtime-related configurations.
  - `db.js`: This file contains the database connection configuration using MySQL2.
  - `index.js`: Main entry point of the application.
  - `app.js`: This file is the main entry point of the application. It configures and initializes core components like the Express server and the database connection.

## Installation and Configuration

Follow the steps below to set up and run the application in your local environment:

1. Clone this repository to your local machine:
```
git clone https://github.com/Juudini/RESTAPI_EXPRESS_JS.git
```
2. Navigate to the project directory:

```
cd RESTAPI_EXPRESS_JS
```
3. Install project dependencies:

```
npm install
```

4. Create a MySQL database and update the configuration in the `.env` file.

Open the `.env` file and update the values of `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, and `DB_NAME` with your MySQL database details.

5. Run database migrations to create the necessary tables.

6. Start the server.

The server will be available at `http://localhost:3000`.

## Repository and Endpoint Testing

You can clone the repository and test the mentioned endpoints in your local environment. Additionally, you can access the deployed version of the API on Railway through the following link:

[API on Railway](https://restapiexpressjs-production.up.railway.app/)

Use tools like cURL, Postman, or other applications to make HTTP requests to the different endpoints and test the functionality of the API.

Have fun exploring the endpoints and working with the project!

Once the server is up and running, you can use any REST client (e.g., cURL, Postman, etc.) to interact with the API.

### - Available Endpoints:

The following endpoints are available in the API:

### `GET /singers`

This endpoint returns a list of all singers registered in the database.

### `GET /singers/:id`

This endpoint returns the details of a specific singer based on their ID provided in the route.

### `POST /singers`

This endpoint allows creating a new singer. You need to provide the singer's data in the request body in JSON format.

### `PATCH /singers/:id`

This endpoint allows updating the data of a specific singer based on their ID provided in the route. You need to provide the new singer data in the request body in JSON format.

### `DELETE /singers/:id`

This endpoint allows deleting a specific singer based on their ID provided in the route.
