const express = require('express');

const app = express();

// app.use((req, res, next) => {
//   console.log('middleware 1');
//   next();
// });

// app.use((req, res, next) => {
//   console.log('middleware 2');
//   res.send('<h1>Homework 2</h1>');
// });

app.use('/users', (req, res, next) => {
  res.send('<h1>The "users" Page');
});

app.use('/', (req, res, next) => {
  res.send('<h1>The "Home" Page</h1>');
});

app.listen(4000);
