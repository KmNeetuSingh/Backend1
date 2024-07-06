# **Todo Application - Assignment 3**

## Overview

Create a basic Todo Application with CRUD operations using Node.js and Express. This is my first server project.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository.
   ```sh
   git clone <your-repo-url>
   ```
2. Navigate to the project directory.
   ```sh
   cd <project-directory>
   ```
3. Install dependencies.
   ```sh
   npm install
   ```

### Running the Server

Start the server using Nodemon:
```sh
npm start
```
Server runs at `http://localhost:2000`.

## API Endpoints

### Get All Todos
- **Method:** `GET`
- **URL:** `http://localhost:2000/todos`

### Add a New Todo
- **Method:** `POST`
- **URL:** `http://localhost:2000/todos`
- **Headers:** `Content-Type: application/json`
- **Body:**
  ```json
  {
    "id": 3,
    "title": "New Todo",
    "status": false
  }
  ```

### Update Even ID Todos
- **Method:** `PUT`
- **URL:** `http://localhost:2000/todos/even`

### Delete Completed Todos
- **Method:** `DELETE`
- **URL:** `http://localhost:2000/todos/completed`

## Project Structure

```plaintext
Assignment3
.
├── db.json
├── index.js
├── package.json
└── README.md
```

### `db.json`

Contains todos data:
```json
{
  "todos": [
    {
      "id": 1,
      "title": "Learn Node.js",
      "status": false
    },
    {
      "id": 2,
      "title": "Build a REST API",
      "status": false
    }
  ]
}
