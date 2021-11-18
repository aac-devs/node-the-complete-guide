const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const users = [];

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.render('index', { pageTitle: 'Home', activeCSS: 'home' });
});

app.get('/users', (req, res, next) => {
  res.render('users', { users, pageTitle: 'Users List', activeCSS: 'users' });
});

app.post('/users', (req, res, next) => {
  const newUser = JSON.parse(JSON.stringify(req.body));
  users.push(newUser);
  res.redirect('/users');
});

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found', activeCSS: '' });
});

app.listen(3000);
