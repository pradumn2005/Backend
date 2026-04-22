const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/home', (req, res) => {
  res.send(`
    <h1>Home Page</h1>
    <a href="/about">Go to About</a><br><br>
    <a href="/profile">Go to Profile</a><br><br>
    <a href="/contact">Go to Contact</a><br><br>
    <a href="/search?q=express">Search</a>
  `);
});

app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1>');
});

app.get('/profile', (req, res) => {
  res.send('<h1>Profile Page</h1>');
});

app.get('/contact', (req, res) => {
  res.send('<h1>Contact Page</h1>');
});

app.get('/search', (req, res) => {

  res.send(`<h1>Search Page</h1><p>Query: ${req.query.name}</p>`);
});



app.use((req, res) => {
  res.status(404).send('<h1>404 Page Not Found</h1>');
});

app.listen(3000, () => {
  console.log('http://localhost:3000/');
});
