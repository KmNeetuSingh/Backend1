# Express Logger Middleware

This project involves setting up an Express server and integrating Morgan Logger Middleware to log HTTP requests for various routes. The objective is to familiarize with middleware in Express, specifically for logging requests, and to understand the importance of logging in web applications for monitoring and debugging purposes.

## Table of Contents
- [Installation](#installation)
- [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Example Requests](#example-requests)
- [Observations](#observations)
- [Conclusion](#conclusion)

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd express-logger-middleware
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Running the Server

Start the server by running the following command:
```bash
node src/index.js
```

The server will be running on `http://localhost:3000`.

## API Endpoints

### GET /

#### Description
Returns a welcome message.

#### Response
- **Status**: 200 OK
- **Body**: `Welcome to the home page`

### GET /get-users

#### Description
Fetches users.

#### Response
- **Status**: 200 OK
- **Body**: `{"message": "Fetching users..."}`

### POST /add-user

#### Description
Adds a new user.

#### Response
- **Status**: 201 Created
- **Body**: `{"message": "User added successfully"}`

### PUT /user/:id

#### Description
Updates user information based on user ID.

#### Response
- **Status**: 201 Created
- **Body**: `{"message": "User with ID {id} updated successfully"}`

### DELETE /user/:id

#### Description
Deletes user based on user ID.

#### Response
- **Status**: 200 OK
- **Body**: `{"message": "User with ID {id} deleted successfully"}`

## Example Requests

### Using curl

```bash
# GET /
curl -X GET http://localhost:3000/

# GET /get-users
curl -X GET http://localhost:3000/get-users

# POST /add-user
curl -X POST http://localhost:3000/add-user

# PUT /user/:id
curl -X PUT http://localhost:3000/user/1

# DELETE /user/:id
curl -X DELETE http://localhost:3000/user/1
```

### Using Postman

1. **Open Postman**.
2. **Create New Requests** with the above methods and endpoints.
3. **Send Requests** and check the responses.
4. **Check Logs** in `access.log` for entries corresponding to the requests.

## Observations

- **Middleware Usage**: Morgan is used as middleware for logging HTTP requests.
- **Log Storage**: Logs are stored in `src/access.log` file.
- **Route Handling**: Different HTTP methods and routes are handled as per the requirements.
- **Response Handling**: Appropriate status codes and messages are returned for each request.

## Conclusion

This project demonstrates setting up an Express server with integrated logging middleware using Morgan. It highlights the importance of request logging for monitoring and debugging purposes in web applications.

