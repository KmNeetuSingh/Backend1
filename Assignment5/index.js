// index.js

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const validateTodoData = (req, res, next) => {
    const { ID, Name, Rating, Description, Genre, Cast } = req.body;

    const errors = [];

    if (typeof ID !== 'number') {
        errors.push('ID should be a number');
    }
    if (typeof Name !== 'string' || Name.trim() === '') {
        errors.push('Name should be a non-empty string');
    }
    if (typeof Rating !== 'number') {
        errors.push('Rating should be a number');
    }
    if (typeof Description !== 'string' || Description.trim() === '') {
        errors.push('Description should be a non-empty string');
    }
    if (typeof Genre !== 'string' || Genre.trim() === '') {
        errors.push('Genre should be a non-empty string');
    }
    if (!Array.isArray(Cast) || !Cast.every(c => typeof c === 'string' && c.trim() !== '')) {
        errors.push('Cast should be an array of non-empty strings');
    }

    if (errors.length > 0) {
        res.status(400).json({ message: 'bad request. some data is incorrect.', errors });
    } else {
        next();
    }
};

app.post('/', validateTodoData, (req, res) => {
    res.status(200).send('data received');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
