

// Import the required modules
const fs = require('fs');
const path = require('path');

// Get the command line arguments
const operation = process.argv[2];
const filePath = process.argv[3];
const content = process.argv.slice(4).join(' ');

// Define the function for each operation
function readFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file: ${err.message}`);
        } else {
            console.log(data);
        }
    });
}

function deleteFile(filePath) {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error(`Error deleting file: ${err.message}`);
        } else {
            console.log(`File '${filePath}' deleted`);
        }
    });
}

function createFile(filePath) {
    fs.writeFile(filePath, '', (err) => {
        if (err) {
            console.error(`Error creating file: ${err.message}`);
        } else {
            console.log(`File '${filePath}' created`);
        }
    });
}

function appendFile(filePath, content) {
    fs.appendFile(filePath, content + '\n', (err) => {
        if (err) {
            console.error(`Error appending to file: ${err.message}`);
        } else {
            console.log(`Content appended to the file '${filePath}'`);
        }
    });
}

function renameFile(oldPath, newPath) {
    fs.rename(oldPath, newPath, (err) => {
        if (err) {
            console.error(`Error renaming file: ${err.message}`);
        } else {
            console.log(`File '${oldPath}' renamed to '${newPath}'`);
        }
    });
}

function listFiles(directoryPath) {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error(`Error listing directory: ${err.message}`);
        } else {
            console.log('Files and directories in current directory:');
            files.forEach(file => {
                console.log(file);
            });
        }
    });
}

// Handle the operation based on the command
switch (operation) {
    case 'read':
        readFile(filePath);
        break;
    case 'delete':
        deleteFile(filePath);
        break;
    case 'create':
        createFile(filePath);
        break;
    case 'append':
        appendFile(filePath, content);
        break;
    case 'rename':
        const newPath = process.argv[4];
        renameFile(filePath, newPath);
        break;
    case 'list':
        listFiles(filePath);
        break;
    default:
        console.log(`Invalid operation '${operation}'`);
}
