# TODO API Server with Validation Middleware

This project involves creating a TODO API server using Express in Node.js that includes a custom validation middleware. The middleware ensures all incoming POST requests to the server meet specific data validation criteria before processing. The objective is to understand middleware implementation, data validation, and error handling in server-side applications.

## Overview

This server application is built with Node.js and Express, featuring a custom middleware that validates incoming POST requests to ensure they adhere to the specified schema.

## Project Structure

```
todo-api-server/
├── index.js
├── package.json
└── package-lock.json
```

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd todo-api-server
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Running the Server

Start the server by running the following command:
```bash
node index.js
```

The server will be running on `http://localhost:3000`.

## API Endpoint

### POST /

#### Description

The POST endpoint accepts an object with specific keys and value types. The middleware validates the data before it reaches the route handler.

#### Request Body Schema

```json
{
  "ID": "number",
  "Name": "string",
  "Rating": "number",
  "Description": "string",
  "Genre": "string",
  "Cast": "array of strings"
}
```

#### Success Response

- **Status**: 200 OK
- **Body**: `data received`

#### Failure Response

- **Status**: 400 Bad Request
- **Body**:
  ```json
  {
    "message": "bad request. some data is incorrect.",
    "errors": ["Error details..."]
  }
  ```

## Example Request

### Using curl

```bash
curl -X POST http://localhost:3000/ -H "Content-Type: application/json" -d '{
  "ID": 1,
  "Name": "Task",
  "Rating": 5,
  "Description": "Task Description",
  "Genre": "Task Genre",
  "Cast": ["Actor1", "Actor2"]
}'
```

### Using Postman

1. Open Postman.
2. Create a new POST request.
3. Set the URL to `http://localhost:3000/`.
4. Go to the Headers tab and add a header: `Content-Type: application/json`.
5. Go to the Body tab, select `raw`, and choose `JSON` from the dropdown.
6. Enter the following JSON:
   ```json
   {
     "ID": 1,
     "Name": "Task",
     "Rating": 5,
     "Description": "Task Description",
     "Genre": "Task Genre",
     "Cast": ["Actor1", "Actor2"]
   }
   ```
7. Click Send.

## Observations

- **Middleware Design**: The custom middleware function `validateTodoData` effectively checks the types of the incoming data fields and ensures they match the required schema.
- **Error Handling**: The middleware collects all validation errors and sends a detailed response if any errors are found. This helps in identifying which fields are incorrect.
- **Modular Code**: While the initial setup is simple and included in one file (`index.js`), separating concerns (middleware, routes, etc.) into different files can enhance maintainability for larger projects.
- **Scalability**: The current structure is sufficient for a small project. For a larger project, consider using a more modular approach, adding environment configurations, and integrating a database.
- **Security**: The project does not include security measures such as rate limiting, authentication, or input sanitization, which should be considered for a production environment.

## Conclusion

This project demonstrates a basic but essential implementation of a Node.js server using Express with custom validation middleware. It provides a solid foundation for building more complex and robust server-side applications.

