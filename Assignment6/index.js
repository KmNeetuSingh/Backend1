// src/index.js

const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

// Setup the logger
app.use(morgan(':method :url :status :res[content-length] - :response-time ms HTTP/:http-version :date[clf]', { stream: accessLogStream }));

// Routes
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the home page');
});

app.get('/get-users', (req, res) => {
  res.status(200).json({ message: 'Fetching users...' });
});

app.post('/add-user', (req, res) => {
  res.status(201).json({ message: 'User added successfully' });
});

app.put('/user/:id', (req, res) => {
  res.status(201).json({ message: `User with ID ${req.params.id} updated successfully` });
});

app.delete('/user/:id', (req, res) => {
  res.status(200).json({ message: `User with ID ${req.params.id} deleted successfully` });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
