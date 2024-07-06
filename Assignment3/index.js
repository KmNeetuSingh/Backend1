const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

const dbFilePath = './db.json';

function readDb() {
  const data = fs.readFileSync(dbFilePath);
  return JSON.parse(data);
}

function writeDb(data) {
  fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2));
}

app.get('/todos', (req, res) => {
  const db = readDb();
  res.json(db.todos);
});

app.post('/todos', (req, res) => {
  const db = readDb();
  const newTodo = req.body;
  db.todos.push(newTodo);
  writeDb(db);
  res.status(201).json(newTodo);
});

app.put('/todos/even', (req, res) => {
  const db = readDb();
  db.todos.forEach(todo => {
    if (todo.id % 2 === 0 && !todo.status) {
      todo.status = true;
    }
  });
  writeDb(db);
  res.json({ message: 'Updated todos with even IDs' });
});

app.delete('/todos/completed', (req, res) => {
  let db = readDb();
  db.todos = db.todos.filter(todo => !todo.status);
  writeDb(db);
  res.json({ message: 'Deleted completed todos' });
});

const PORT = 2000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
