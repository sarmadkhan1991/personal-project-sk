require('dotenv').config()
const massive = require('massive');
const express = require('express');
const session = require('express-session');
const ac = require('./Controller/authCtrl');
const app = express();
app.use(express.json());

const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING).then(db => {
    console.log('connected to db');
    app.set('db', db);
}); 

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14
    }
}));

app.post('/auth/register', ac.register);

app.post('/auth/login', ac.login);

app.get('/auth/logout', ac.logout);




app.listen(SERVER_PORT, () => console.log(`server listening on port ${SERVER_PORT}`));