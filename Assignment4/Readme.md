# Node.js Dynamic File Server

This project implements a dynamic file server using Node.js, capable of serving static files and dynamically generating directory listings.

## Overview

The Node.js Dynamic File Server allows users to:

- View directory contents with appropriate icons for files and folders.
- Navigate into nested directories through URL paths.
- Access and view the content of individual files.
- Handle errors gracefully with a "404 Not Found" response for non-existent paths.

## Features

- **Directory Listing:** Navigate through directories to view files and folders.
- **File Access:** Directly access and view the content of files.
- **Error Handling:** Provides a "404 Not Found" error for invalid paths.

## Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd nodejs-dynamic-file-server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

4. **Access the server:**
   Open a web browser and navigate to `http://localhost:3000/`.

## Usage

- **Navigate Directories:** Click on folder names to navigate deeper into nested directories.
- **View Files:** Click on file names to view their content directly in the browser.
- **Error Handling:** Accessing non-existent paths will display a "404 Not Found" error message.

## Technologies Used

- Node.js
- HTTP module
- Path module
- File System module

## Folder Structure

```
nodejs-dynamic-file-server/
│
├── index.js        # Server setup and request handling logic
├── package.json    # Project dependencies and scripts
└── README.md       # Project overview, setup instructions, and usage guide
