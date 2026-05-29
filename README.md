# Todo Backend API

A simple Todo REST API built using the Node.js HTTP module without any external frameworks. This project demonstrates the fundamentals of backend development, including routing, handling HTTP requests and responses, parsing JSON data, working with query parameters, and implementing basic CRUD operations.

## Features

* Create a new todo
* Get all todos
* Get a todo by ID
* Delete a todo by ID
* JSON-based request and response handling
* Proper HTTP status codes (200, 404)

## Tech Stack

* Node.js
* HTTP Module

## API Endpoints

### Create Todo

**POST** `/create/todo`

Request Body:

```json
{
  "title": "Learn Node.js",
  "description": "Practice HTTP module"
}
```

### Get All Todos

**GET** `/todos`

### Get Todo By ID

**GET** `/todo?id=0`

### Delete Todo By ID

**DELETE** `/todo?id=0`

## Run Locally

1. Clone the repository

```bash
git clone <repository-url>
```

2. Navigate to the project directory

```bash
cd <project-folder>
```

3. Start the server

```bash
node index.js
```

4. Open Postman and test the endpoints

## Learning Outcomes

Through this project, I learned:

* Creating servers using Node.js HTTP module
* Handling HTTP methods (GET, POST, DELETE)
* Working with request and response objects
* Parsing request bodies and JSON data
* Using query parameters
* Managing in-memory data
* Returning appropriate HTTP status codes
* Building a basic REST API without frameworks
