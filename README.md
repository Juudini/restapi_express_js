# Express REST API Project using Node.js, Express, MySQL and Swagger Documentation

This is a project that implements a REST API using Node.js, Express, MySQL and Swagger Documentation.

## Description

The project consists of a RESTful application that utilizes Node.js and Express as the server framework, and MySQL as the database. It provides an API for performing CRUD (Create, Read, Update, Delete) operations on a specific entity.

## Technologies Used

-   ![Node.js](https://img.shields.io/badge/Node.js-green?logo=node.js&logoColor=white&style=flat)
-   ![Express](https://img.shields.io/badge/Express-blue?logo=express&logoColor=white&style=flat)
-   ![MySQL](https://img.shields.io/badge/MySQL-blue?logo=mysql&logoColor=white&style=flat)
-   ![Swagger](https://img.shields.io/badge/Swagger-blue?logo=Swagger&logoColor=white&style=flat)

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

4. Run database migrations to create the necessary tables.

5. Start the server.

```
npm run dev
```

The server will be available at `http://localhost:3000`.

## Repository and Endpoint Testing

Now you can easily test the API and explore its endpoints using the Swagger documentation.

You can clone the repository and test the mentioned endpoints in your local environment.

Use tools like cURL, Postman, or other applications to make HTTP requests to the different endpoints and test the functionality of the API.

Have fun exploring the endpoints and working with the project!

Once the server is up and running, you can use any REST client (e.g., cURL, Postman, etc.) to interact with the API.

### - Available Endpoints:

The following endpoints are available in the API:
`BASE PATH: http://localhost:3000/api`

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
