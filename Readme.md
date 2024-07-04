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

### Assignment 2: Assign2.js File Manipulator

**Instructions**:  
Create a Node.js program that allows for basic file manipulation (reading, deleting, creating, appending, renaming, and listing files) via command-line arguments.

**Topics Covered**:
- Handling terminal input
- Using the File System module for file operations
- Implementing Node.js basics

## Usage

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/daily-nodejs-assignments.git
   ```

2. **Navigate to an Assignment**:
   ```bash
   cd daily-nodejs-assignments/assignment-folder
   ```

3. **Read the Instructions**:
   - Open the README.md file in the assignment folder and follow the instructions.

4. **Complete the Assignment**:
   - Work on the assignment as per the provided guidelines.
# Assignment Title: Node.js File Manipulator

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

# Rename a file
node index.js rename test.txt newname.txt

# List directory contents
node index.js list .
