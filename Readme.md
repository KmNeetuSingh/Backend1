# Node.js Daily Assignments

This repository contains daily assignments for the Node.js Backend Development course. Each assignment is organized into separate folders with detailed instructions.

## Repository Structure

- **Assignment Folders**: Each folder contains:
  - **README.md**: Assignment instructions and details.
  - **index.js**: Starter code or templates (if applicable).

## Example Assignments

### Assignment 1: Assign1.js Calculator

**Instructions**:  
Develop a command-line calculator in Node.js supporting basic operations and random number generation using the `crypto` module.

**Topics Covered**:
- Handling terminal input
- Using the `crypto` module for generating random numbers
- Implementing basic mathematical operations
# Assignment 2: Assign.js File Manipulator

## Instructions

Create a Node.js program that allows for basic file manipulation (reading, deleting, creating, appending, renaming, and listing files) via command-line arguments.

### Topics Covered

- Handling terminal input
- File System module
- Node.js basics

## Task Details

- **Reading a file**: `node index.js read <file-path>`
- **Deleting a file**: `node index.js delete <file-path>`
- **Creating a file**: `node index.js create <file-path>`
- **Appending to a file**: `node index.js append <file-path> <content>`
- **Renaming a file**: `node index.js rename <old-file-path> <new-file-path>`
- **Listing directory contents**: `node index.js list <directory-path>`

## Example Usage

```bash
# Read a file
node index.js read test.txt

# Delete a file
node index.js delete test.txt

# Create a file
node index.js create test.txt

# Append to a file
node index.js append test.txt "Hello, world!"

# Todo Application - Assignment 3

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

```Assignment3
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

